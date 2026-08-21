import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services, whatWeDoContent, boundaryStatement } from "@/content/siteContent";

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-16 sm:py-24 border-b border-ink/10">
      <Container>
        <SectionHeading eyebrow={whatWeDoContent.eyebrow} title={whatWeDoContent.heading} />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.slug}>
              <Card title={service.title} className="h-full">
                <p className="text-ink-soft">{service.summary}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm text-ink-soft border-t border-ink/10 pt-6">
          {boundaryStatement}
        </p>
      </Container>
    </section>
  );
}
