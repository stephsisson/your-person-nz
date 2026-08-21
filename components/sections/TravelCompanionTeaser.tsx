import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { travelCompanionTeaserContent } from "@/content/siteContent";

export function TravelCompanionTeaser() {
  return (
    <section id="travel-companion" className="py-16 sm:py-24 bg-ink text-paper border-b border-ink/10">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl">{travelCompanionTeaserContent.heading}</h2>
            <p className="mt-5 text-lg text-paper/80">{travelCompanionTeaserContent.body}</p>
            <div className="mt-8">
              <Button
                href="/contact?interest=travel-companion"
                variant="secondary"
                className="border-paper/40 text-paper hover:bg-paper/10 hover:border-paper"
              >
                {travelCompanionTeaserContent.ctaLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
