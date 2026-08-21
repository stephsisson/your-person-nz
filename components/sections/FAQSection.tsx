import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqItems, faqContent } from "@/content/siteContent";

export function FAQSection() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-paper-dim border-b border-ink/10">
      <Container>
        <SectionHeading eyebrow={faqContent.eyebrow} title={faqContent.heading} />

        <div className="mt-10 max-w-3xl divide-y divide-ink/10">
          {faqItems.map((item) => (
            <Reveal key={item.id}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-medium text-ink">
                  <span>{item.question}</span>
                  <span className="mt-1 shrink-0 text-teal transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-3 text-ink-soft">
                  <p>{item.answer}</p>
                  {item.elaboration ? <p className="mt-2 text-sm">{item.elaboration}</p> : null}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
