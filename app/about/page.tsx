import { PageIntro } from "@/components/sections/PageIntro";
import { FounderBio } from "@/components/sections/FounderBio";
import { Positioning } from "@/components/sections/Positioning";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Your Person NZ is a local coordination service for New Zealanders overseas with a parent or family member living independently in Christchurch and Canterbury. Here's why it exists.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A trusted local person for Kiwi families overseas."
        description={<p>{site.entityDescription}</p>}
      />

      <FounderBio />
      <Positioning />

      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl text-center">
          <p className="font-display text-2xl text-ink">
            {site.name} operates in {site.serviceAreaFull} — for now.
          </p>
          <p className="mt-3 text-ink-soft">
            We&apos;re starting small on purpose, so we can do this properly before we grow.
          </p>
          <div className="mt-8">
            <Button href="/contact">Get in touch</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
