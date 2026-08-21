import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    title: "Tell us about your family",
    body: "Where they live, what they currently manage themselves, where a little local support would help.",
  },
  {
    number: "02",
    title: "We get to know what matters",
    body: "The house, preferences, existing suppliers, how the family likes things handled.",
  },
  {
    number: "03",
    title: "Something needs sorting",
    body: "You or your parent contacts Your Person NZ.",
  },
  {
    number: "04",
    title: "We help make it happen",
    body: "We coordinate the right local support and keep everyone informed.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-paper-dim border-b border-ink/10">
      <Container>
        <SectionHeading eyebrow="How it works" title="Four simple steps" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Reveal key={step.number}>
              <div className="rounded-2xl bg-white border border-ink/10 p-6 h-full">
                <p className="font-display text-3xl text-teal">{step.number}</p>
                <p className="mt-3 font-medium text-ink">{step.title}</p>
                <p className="mt-2 text-sm text-ink-soft">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 font-display text-xl text-ink">
            You stay the son or daughter. We help with the logistics.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
