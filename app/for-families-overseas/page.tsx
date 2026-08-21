import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { countryPages } from "@/content/countries";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "For Families Overseas",
  description:
    "Your Person NZ is built for Kiwi families managing things across borders and time zones, with a parent in Christchurch or Canterbury and family living in Australia, the UK, or elsewhere overseas.",
  alternates: { canonical: "/for-families-overseas" },
};

export default function ForFamiliesOverseasPage() {
  return (
    <>
      <PageIntro
        eyebrow="For families overseas"
        title="Built for families with a few thousand kilometres between them."
        description={
          <p>
            Wherever you&apos;ve ended up, if your parent or family member is still living
            independently in {site.serviceAreaFull}, {site.name} can be your local point of contact
            for the practical things.
          </p>
        }
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            {countryPages.map((country) => (
              <Link
                key={country.slug}
                href={`/for-families-overseas/${country.slug}`}
                className="block rounded-2xl border border-ink/10 bg-white p-6 hover:border-teal transition-colors"
              >
                <p className="font-display text-xl text-ink">I&apos;m in {country.label}</p>
                <p className="mt-3 text-sm text-ink-soft">{country.intro}</p>
                <span className="mt-4 inline-block text-teal text-sm font-medium">Read more →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
