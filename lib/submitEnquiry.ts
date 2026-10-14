import { z } from "zod";

// Single choke point for enquiry submissions. Enquiries are delivered by email
// via Resend. Swapping the backend later (a CRM, a database, a different form
// service) means editing this file only — nothing in the UI or API route needs
// to change.

export const enquirySchema = z.object({
  name: z.string().min(1, "Please tell us your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Please share a phone or WhatsApp number"),
  liveLocation: z.string().min(1, "Please tell us where you live"),
  parentSuburb: z
    .string()
    .min(1, "Please tell us the suburb or town in Canterbury"),
  helpingWho: z.string().min(1),
  mostWantHelpWith: z.string().min(1),
  currentlyOrganising: z.string().optional().default(""),
  serviceInterest: z.enum([
    "ongoing-local-support",
    "one-off-help",
    "house-checks",
    "coordinating-trades",
    "travel-companion",
    "not-sure-yet",
  ]),
  wouldConsiderPaying: z.enum(["yes", "possibly", "no"]),
  anythingElse: z.string().optional().default(""),
  // Which CTA/section on the site triggered this submission, e.g.
  // "founding-pilot", "travel-companion", "contact-page", "guide:<slug>".
  source: z.string().min(1),
  // Honeypot field — real users never fill this in; bots often do. Deliberately
  // unconstrained here (any string is a *valid* submission) so a filled-in
  // honeypot doesn't fail validation with a 400 — the API route checks this
  // value after a successful parse and silently no-ops instead, which is the
  // whole point of a honeypot (don't tip the bot off).
  companyWebsite: z.string().optional().default(""),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export async function submitEnquiry(input: EnquiryInput) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || "steph@yourperson.nz";

  if (!resendApiKey) {
    // Local dev without env vars — log instead of failing silently.
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "RESEND_API_KEY not set — enquiry logged to console only.",
        input,
      );
      return;
    }
    // In production a missing key must NOT look like success — the enquiry
    // would be lost. Fail so the form shows an error.
    console.error(
      "RESEND_API_KEY not set in production — enquiry was NOT sent.",
    );
    throw new Error("Resend is not configured");
  }

  const { Resend } = await import("resend");
  const resend = new Resend(resendApiKey);

  // The Resend SDK does not throw on API errors — it returns { data, error }.
  let error;
  try {
    ({ error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Your Person NZ <notifications@yourperson.nz>",
      to: notifyEmail,
      replyTo: input.email,
      subject: `New enquiry (${input.source}): ${input.name}`,
      text: [
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        `Phone: ${input.phone}`,
        `Lives in: ${input.liveLocation}`,
        `Parent's suburb/town: ${input.parentSuburb}`,
        `Helping who: ${input.helpingWho}`,
        `Most wants help with: ${input.mostWantHelpWith}`,
        `Currently organising: ${input.currentlyOrganising}`,
        `Service interest: ${input.serviceInterest}`,
        `Would consider paying: ${input.wouldConsiderPaying}`,
        `Anything else: ${input.anythingElse}`,
        `Source: ${input.source}`,
      ].join("\n"),
    }));
  } catch (err) {
    console.error("Resend email threw", err);
    throw err;
  }

  if (error) {
    console.error("Resend email failed", error);
    throw new Error(`Resend email failed: ${error.message}`);
  }
}
