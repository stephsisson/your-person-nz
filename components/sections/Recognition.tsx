import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const scenarios = [
  "Dad says the leak is probably nothing.",
  "Mum's internet has stopped working, and troubleshooting it from Melbourne isn't going brilliantly.",
  "The electrician can come Tuesday, but somebody needs to be there.",
  "You've found three roofers on Google. No idea which one you'd trust with your own parents.",
  "There was a storm last night and you'd really quite like someone to check the house.",
];

export function Recognition() {
  return (
    <section className="py-16 sm:py-24 bg-paper-dim border-b border-ink/10">
      <Container>
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl text-ink max-w-2xl">
            Some things are surprisingly hard to organise from another country.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {scenarios.map((line) => (
            <Reveal key={line}>
              <p className="rounded-2xl bg-white border border-ink/10 px-6 py-5 text-ink-soft text-lg">
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 font-display text-2xl text-teal-dark">
            That&apos;s where Your Person NZ comes in.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
