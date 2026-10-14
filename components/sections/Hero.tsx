import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/content/siteContent";
import { media } from "@/content/media";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
      <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink">
            {heroContent.headlineLine1}
            <br />
            <span className="text-teal">{heroContent.headlineLine2}</span>
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-xl">
            {heroContent.subhead}
          </p>
          <p className="mt-4 text-sm font-medium text-teal-dark">
            {heroContent.launchNote}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact">{heroContent.primaryCtaLabel}</Button>
            <Button href="/contact#form" variant="secondary">
              {heroContent.secondaryCtaLabel}
            </Button>
          </div>
        </div>

        {/* See content/media.ts to swap this placeholder for a real photo:
            drop the file at public/images/hero2.png and flip `ready` to true. */}
        {media.heroImage.ready ? (
          <Image
            src={media.heroImage.src}
            alt={media.heroImage.alt}
            width={1916}
            height={821}
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[1916/821] w-full rounded-3xl object-cover border border-ink/10"
          />
        ) : (
          <div
            role="img"
            aria-label={heroContent.imageAlt}
            className="aspect-[1916/821] w-full rounded-3xl bg-gradient-to-br from-sand-light via-paper-dim to-teal-light border border-ink/10 flex items-center justify-center"
          >
            <span className="text-sm text-ink-soft/70 px-8 text-center">
              Photography placeholder — see content/media.ts
            </span>
          </div>
        )}
      </Container>
    </section>
  );
}
