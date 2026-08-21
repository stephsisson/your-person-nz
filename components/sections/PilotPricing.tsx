import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { pilotPricingContent } from "@/content/siteContent";

export function PilotPricing() {
  return (
    <section id="pilot" className="py-16 sm:py-24 border-b border-ink/10">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={pilotPricingContent.eyebrow}
            title={pilotPricingContent.heading}
            description={pilotPricingContent.description}
          />
        </Reveal>

        <Reveal>
          <div className="mt-8 max-w-2xl rounded-2xl border border-ink/10 bg-sand-light p-8">
            <p className="text-ink-soft">{pilotPricingContent.priceText}</p>
            <p className="mt-4 text-sm text-ink-soft/70 italic">{pilotPricingContent.disclaimer}</p>
            <div className="mt-6">
              <Button href="/contact">{pilotPricingContent.ctaLabel}</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
