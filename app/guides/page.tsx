import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { guides } from "@/content/guides";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Practical guides for New Zealanders living overseas with ageing parents or family in Christchurch and Canterbury — long-distance caregiving, home maintenance, trusted trades and travel.",
  alternates: { canonical: "/guides" },
};

export default function GuidesIndexPage() {
  return (
    <>
      <PageIntro
        eyebrow="Guides"
        title="Practical guides for families managing things from overseas."
        description={
          <p>
            Straightforward advice on ageing parents, long-distance caregiving and managing a home
            in New Zealand from another country.
          </p>
        }
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="block rounded-2xl border border-ink/10 bg-white p-6 hover:border-teal transition-colors"
              >
                <p className="font-display text-xl text-ink">{guide.h1}</p>
                <p className="mt-2 text-sm text-ink-soft">{guide.dek}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
