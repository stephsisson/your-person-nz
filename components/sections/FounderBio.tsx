import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { founderContent } from "@/content/siteContent";
import { media } from "@/content/media";

export function FounderBio({ condensed = false }: { condensed?: boolean }) {
  return (
    <section className="py-16 sm:py-24 border-b border-ink/10">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={founderContent.eyebrow} title={founderContent.heading} />
        </Reveal>

        <Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
            {/* See content/media.ts to swap this placeholder for a real photo:
                drop the file at public/images/founder.jpg and flip `ready` to true. */}
            {media.founderPhoto.ready ? (
              <Image
                src={media.founderPhoto.src}
                alt={media.founderPhoto.alt}
                width={800}
                height={1000}
                className="aspect-[4/5] w-full max-w-[280px] rounded-2xl object-cover object-top border border-ink/10"
              />
            ) : (
              <div
                role="img"
                aria-label={media.founderPhoto.alt}
                className="aspect-[4/5] w-full max-w-[280px] rounded-2xl bg-sand-light border border-ink/10 flex items-center justify-center"
              >
                <span className="text-xs text-ink-soft/70 px-6 text-center">
                  Founder photo placeholder
                </span>
              </div>
            )}

            <div className="space-y-4 max-w-2xl">
              <p className="font-medium text-ink">
                {founderContent.name}{" "}
                <span className="text-ink-soft font-normal">— {founderContent.role}</span>
              </p>
              {(condensed ? founderContent.bioParagraphs.slice(0, 3) : founderContent.bioParagraphs).map(
                (paragraph, i) => (
                  <p key={i} className="text-lg text-ink-soft">
                    {paragraph}
                  </p>
                )
              )}
              {condensed ? (
                <Link href="/about" className="inline-block text-teal hover:text-teal-dark text-sm font-medium">
                  {founderContent.readMoreLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
