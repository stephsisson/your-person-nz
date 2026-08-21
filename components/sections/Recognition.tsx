import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { recognitionContent } from "@/content/siteContent";

export function Recognition() {
  return (
    <section className="py-16 sm:py-24 bg-paper-dim border-b border-ink/10">
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-2xl">
            {recognitionContent.heading}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {recognitionContent.scenarios.map((line) => (
            <Reveal key={line}>
              <p className="rounded-2xl bg-white border border-ink/10 px-6 py-5 text-ink-soft text-lg">
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 font-display text-2xl text-teal-dark">{recognitionContent.closingLine}</p>
        </Reveal>
      </Container>
    </section>
  );
}
