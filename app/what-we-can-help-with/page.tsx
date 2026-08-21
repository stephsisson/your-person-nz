import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { serviceSchema } from "@/lib/schema";
import { boundaryStatement, site } from "@/content/site";

export const metadata: Metadata = {
  title: "What We Can Help With",
  description:
    "From organising trusted trades and checking the house, to being there when you can't — what Your Person NZ can help with for families in Christchurch and Canterbury.",
  alternates: { canonical: "/what-we-can-help-with" },
};

export default function WhatWeCanHelpWithPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(services.map((service) => serviceSchema(service))),
        }}
      />
      <PageIntro
        eyebrow="What we can help with"
        title="One trusted local person. Lots of things we can sort."
        description={
          <p>
            {site.name} coordinates practical, everyday support for families with a parent in{" "}
            {site.serviceAreaFull} — not medical or personal care, but the local logistics that are
            genuinely hard to manage from overseas.
          </p>
        }
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.slug} title={service.title} className="h-full">
                <p className="text-ink-soft">{service.summary}</p>
                <p className="mt-3 text-sm text-ink-soft/80">{service.detail}</p>
              </Card>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-sm text-ink-soft border-t border-ink/10 pt-6">
            {boundaryStatement}
          </p>

          <div className="mt-8">
            <Button href="/contact">Tell us what you need help with</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
