import { PageIntro } from "@/components/sections/PageIntro";
import { FounderBio } from "@/components/sections/FounderBio";
import { Positioning } from "@/components/sections/Positioning";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site, aboutPageContent } from "@/content/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: aboutPageContent.metaTitle,
  description: aboutPageContent.metaDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow={aboutPageContent.eyebrow}
        title={aboutPageContent.title}
        description={<p>{site.entityDescription}</p>}
      />

      <FounderBio />
      <Positioning />

      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl text-center">
          <p className="font-display text-2xl text-ink">{aboutPageContent.closingHeading}</p>
          <p className="mt-3 text-ink-soft">{aboutPageContent.closingBody}</p>
          <div className="mt-8">
            <Button href="/contact">{aboutPageContent.ctaLabel}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
