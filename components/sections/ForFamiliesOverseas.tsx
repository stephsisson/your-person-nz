import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { countryPages, forFamiliesOverseasContent } from "@/content/siteContent";

export function ForFamiliesOverseas() {
  return (
    <section id="for-families-overseas" className="py-16 sm:py-24 border-b border-ink/10">
      <Container>
        <SectionHeading
          eyebrow={forFamiliesOverseasContent.eyebrow}
          title={forFamiliesOverseasContent.heading}
          description={forFamiliesOverseasContent.description}
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {countryPages.map((country) => (
            <Reveal key={country.slug}>
              <a
                href={`/for-families-overseas/${country.slug}`}
                className="block rounded-2xl border border-ink/10 bg-white p-6 h-full hover:border-teal transition-colors"
              >
                <p className="font-display text-xl text-ink">I&apos;m in {country.label}</p>
                <p className="mt-2 text-sm text-ink-soft">{country.intro.slice(0, 90)}…</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
