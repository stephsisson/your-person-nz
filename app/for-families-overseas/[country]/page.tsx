import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { countryPages } from "@/content/countries";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/pageMetadata";

export function generateStaticParams() {
  return countryPages.map((country) => ({ country: country.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const country = countryPages.find((c) => c.slug === slug);
  if (!country) return {};

  return pageMetadata({
    title: country.metaTitle,
    description: country.metaDescription,
    path: `/for-families-overseas/${country.slug}`,
  });
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const country = countryPages.find((c) => c.slug === slug);
  if (!country) notFound();

  return (
    <>
      <PageIntro eyebrow="For families overseas" title={country.h1} description={<p>{country.intro}</p>} />

      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl space-y-8">
          <div>
            <h2 className="font-display text-2xl text-ink">The distance problem</h2>
            <p className="mt-3 text-ink-soft">{country.timeZoneNote}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">What {site.name} does</h2>
            <p className="mt-3 text-ink-soft">{site.entityDescription}</p>
          </div>
          <div className="pt-4">
            <Button href="/contact">Tell us about your family</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
