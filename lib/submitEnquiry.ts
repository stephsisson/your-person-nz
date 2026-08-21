import { z } from "zod";

// Single choke point for enquiry submissions. Swapping the storage/notification
// backend later (a CRM, a database, a different form service) means editing
// this file only — nothing in the UI or API route needs to change.

export const enquirySchema = z.object({
  name: z.string().min(1, "Please tell us your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Please share a phone or WhatsApp number"),
  liveLocation: z.string().min(1, "Please tell us where you live"),
  parentSuburb: z.string().min(1, "Please tell us the suburb or town in Canterbury"),
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
  // Honeypot field — real users never fill this in; bots often do.
  companyWebsite: z.string().max(0).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export async function submitEnquiry(input: EnquiryInput) {
  const airtableApiKey = process.env.AIRTABLE_API_KEY;
  const airtableBaseId = process.env.AIRTABLE_BASE_ID;
  const airtableTableName = process.env.AIRTABLE_TABLE_NAME || "Enquiries";

  if (airtableApiKey && airtableBaseId) {
    const res = await fetch(
      `https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(airtableTableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Name: input.name,
            Email: input.email,
            Phone: input.phone,
            "Lives in": input.liveLocation,
            "Parent's suburb / town": input.parentSuburb,
            "Helping who": input.helpingWho,
            "Most want help with": input.mostWantHelpWith,
            "Currently organising": input.currentlyOrganising,
            "Service interest": input.serviceInterest,
            "Would consider paying $199-299/mo": input.wouldConsiderPaying,
            "Anything else": input.anythingElse,
            Source: input.source,
            "Submitted at": new Date().toISOString(),
          },
        }),
      }
    );

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Airtable submission failed: ${res.status} ${body}`);
    }
  } else {
    // No Airtable configured (e.g. local dev without env vars) — log instead
    // of failing silently, so submissions are never just lost.
    console.warn("AIRTABLE_API_KEY / AIRTABLE_BASE_ID not set — enquiry logged to console only.", input);
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;

  if (resendApiKey && notifyEmail) {
    const { Resend } = await import("resend");
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Your Person NZ <notifications@yourperson.nz>",
      to: notifyEmail,
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
    });
  } else {
    console.warn("RESEND_API_KEY / NOTIFY_EMAIL not set — skipping email notification.");
  }
}
