import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { recognitionContent } from "@/content/siteContent";
import { media } from "@/content/media";

export function Recognition() {
  return (
    <section className="py-16 sm:py-24 bg-paper-dim border-b border-ink/10">
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-2xl">
            {recognitionContent.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
          {media.mumCoffee.ready ? (
            <Reveal>
              {/* Warm source photo: only a light desaturation and sand tint to sit with the paper palette. */}
              <div className="relative overflow-hidden rounded-3xl border border-ink/10">
                <Image
                  src={media.mumCoffee.src}
                  alt={media.mumCoffee.alt}
                  width={1000}
                  height={1000}
                  sizes="(min-width: 1024px) 320px, 100vw"
                  style={{ objectPosition: media.mumCoffee.position }}
                  className="aspect-[4/5] w-full object-cover saturate-[0.8] sepia-[0.1]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-sand/20 mix-blend-multiply"
                />
              </div>
            </Reveal>
          ) : null}
          <div className="grid gap-4 sm:grid-cols-2">
            {recognitionContent.scenarios.map((line) => (
              <Reveal key={line}>
                <p className="rounded-2xl bg-white border border-ink/10 px-6 py-5 text-ink-soft text-lg">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <p className="mt-10 font-display text-2xl text-teal-dark">
            {recognitionContent.closingLine}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
