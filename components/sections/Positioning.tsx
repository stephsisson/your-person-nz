import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Positioning() {
  return (
    <section className="py-16 sm:py-24 bg-teal-light/60 border-b border-ink/10">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What this isn't"
            title="Not home care. Not taking over. Just really useful help."
            description="Mum or Dad may be entirely independent — still driving, travelling, gardening, working, socialising, with zero interest in being 'looked after.' Sometimes they just need another capable person nearby, and sometimes the family overseas needs to know someone in New Zealand can help when they can't."
          />
        </Reveal>
        <Reveal>
          <p className="mt-6 max-w-2xl text-lg font-display text-ink">
            Your Person NZ works with the family, not around them. The aim is to make life easier
            while protecting independence, choice and dignity.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
