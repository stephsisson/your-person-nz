import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { positioningContent } from "@/content/siteContent";

export function Positioning() {
  return (
    <section className="py-16 sm:py-24 bg-teal-light/60 border-b border-ink/10">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={positioningContent.eyebrow}
            title={positioningContent.heading}
            description={positioningContent.description}
          />
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-2xl text-lg font-display text-ink">
            {positioningContent.closingLine}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
