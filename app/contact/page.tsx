import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Get in Touch",
  description:
    "Tell us about your family and we'll be in touch personally as the Christchurch pilot takes shape. No payment, no commitment.",
  alternates: { canonical: "/contact" },
};

const validInterests = new Set([
  "ongoing-local-support",
  "one-off-help",
  "house-checks",
  "coordinating-trades",
  "travel-companion",
  "not-sure-yet",
]);

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;
  const defaultServiceInterest = validInterests.has(interest || "")
    ? (interest as
        | "ongoing-local-support"
        | "one-off-help"
        | "house-checks"
        | "coordinating-trades"
        | "travel-companion"
        | "not-sure-yet")
    : undefined;

  return (
    <>
      <PageIntro
        eyebrow="Get in touch"
        title="Tell us about your family"
        description={
          <p>
            No payment, no commitment — this helps us understand what overseas families actually
            need as we build the Christchurch pilot.
          </p>
        }
      />

      <section className="py-16 sm:py-24" id="form">
        <Container className="max-w-2xl">
          <EnquiryForm source="contact-page" defaultServiceInterest={defaultServiceInterest} />
        </Container>
      </section>
    </>
  );
}
