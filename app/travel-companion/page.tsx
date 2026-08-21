import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { travelCompanionPageContent } from "@/content/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: travelCompanionPageContent.metaTitle,
  description: travelCompanionPageContent.metaDescription,
  path: "/travel-companion",
});

export default function TravelCompanionPage() {
  return (
    <>
      <PageIntro
        eyebrow={travelCompanionPageContent.eyebrow}
        title={travelCompanionPageContent.title}
        description={<p>{travelCompanionPageContent.description}</p>}
      />

      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl space-y-6 text-ink-soft">
          {travelCompanionPageContent.bodyParagraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-paper-dim border-t border-ink/10" id="form">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl text-ink mb-6">{travelCompanionPageContent.formHeading}</h2>
          <EnquiryForm source="travel-companion-page" defaultServiceInterest="travel-companion" />
        </Container>
      </section>
    </>
  );
}
