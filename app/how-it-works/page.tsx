import { PageIntro } from "@/components/sections/PageIntro";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { howItWorksPageContent } from "@/content/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: howItWorksPageContent.metaTitle,
  description: howItWorksPageContent.metaDescription,
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        eyebrow={howItWorksPageContent.eyebrow}
        title={howItWorksPageContent.title}
        description={<p>{howItWorksPageContent.description}</p>}
      />

      <HowItWorks />

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl space-y-8">
          {howItWorksPageContent.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-2xl text-ink">{section.heading}</h2>
              <p className="mt-3 text-ink-soft">{section.body}</p>
            </div>
          ))}
          <div className="pt-4">
            <Button href="/contact">{howItWorksPageContent.ctaLabel}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
