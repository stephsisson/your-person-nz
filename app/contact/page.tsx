import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { contactPageContent } from "@/content/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: contactPageContent.metaTitle,
  description: contactPageContent.metaDescription,
  path: "/contact",
});

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
        eyebrow={contactPageContent.eyebrow}
        title={contactPageContent.title}
        description={<p>{contactPageContent.description}</p>}
      />

      <section className="py-16 sm:py-24" id="form">
        <Container className="max-w-2xl">
          <EnquiryForm source="contact-page" defaultServiceInterest={defaultServiceInterest} />
        </Container>
      </section>
    </>
  );
}
