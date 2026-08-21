import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function PilotPricing() {
  return (
    <section id="pilot" className="py-16 sm:py-24 border-b border-ink/10">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Founding family pilot"
            title="Help us build something genuinely useful."
            description="We're starting small in Christchurch & Canterbury with a limited number of founding families, to learn what overseas families actually need."
          />
        </Reveal>

        <Reveal>
          <div className="mt-8 max-w-2xl rounded-2xl border border-ink/10 bg-sand-light p-8">
            <p className="text-ink-soft">
              Ongoing support is expected to start from around{" "}
              <span className="font-medium text-ink">NZ$199–299/month</span>; one-off support and
              larger projects are priced separately. Third-party trades and services are generally
              paid directly by the family.
            </p>
            <p className="mt-4 text-sm text-ink-soft/70 italic">
              Pricing is indicative during the pilot and may be refined as we learn.
            </p>
            <div className="mt-6">
              <Button href="/contact">Apply for the founding family pilot</Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
