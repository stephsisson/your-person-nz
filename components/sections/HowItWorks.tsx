import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { howItWorksContent } from "@/content/siteContent";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-paper-dim border-b border-ink/10">
      <Container>
        <SectionHeading eyebrow={howItWorksContent.eyebrow} title={howItWorksContent.heading} />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksContent.steps.map((step) => (
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
          <p className="mt-10 font-display text-xl text-ink">{howItWorksContent.closingLine}</p>
        </Reveal>
      </Container>
    </section>
  );
}
