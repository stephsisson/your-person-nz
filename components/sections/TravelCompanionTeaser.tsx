import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { travelCompanionTeaserContent } from "@/content/siteContent";
import { media } from "@/content/media";

export function TravelCompanionTeaser() {
  return (
    <section
      id="travel-companion"
      className="py-16 sm:py-24 bg-ink text-paper border-b border-ink/10"
    >
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl">
                {travelCompanionTeaserContent.heading}
              </h2>
              <p className="mt-5 text-lg text-paper/80">
                {travelCompanionTeaserContent.body}
              </p>
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
            {media.naturalMum.ready ? (
              // Colourful source photo: desaturate and tint toward the site's teal so it sits quietly on the dark band.
              <div className="relative overflow-hidden rounded-3xl border border-paper/15">
                <Image
                  src={media.naturalMum.src}
                  alt={media.naturalMum.alt}
                  width={1000}
                  height={1000}
                  sizes="(min-width: 1024px) 320px, 100vw"
                  style={{ objectPosition: media.naturalMum.position }}
                  className="aspect-[4/5] w-full object-cover saturate-[0.55] sepia-[0.15] brightness-95"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-teal-dark/30 mix-blend-multiply"
                />
              </div>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
