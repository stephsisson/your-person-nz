import Link from "next/link";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { countryPages, forFamiliesOverseasPageContent } from "@/content/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: forFamiliesOverseasPageContent.metaTitle,
  description: forFamiliesOverseasPageContent.metaDescription,
  path: "/for-families-overseas",
});

export default function ForFamiliesOverseasPage() {
  return (
    <>
      <PageIntro
        eyebrow={forFamiliesOverseasPageContent.eyebrow}
        title={forFamiliesOverseasPageContent.title}
        description={<p>{forFamiliesOverseasPageContent.description}</p>}
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
