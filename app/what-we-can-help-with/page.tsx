import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services, boundaryStatement, whatWeCanHelpWithPageContent } from "@/content/siteContent";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: whatWeCanHelpWithPageContent.metaTitle,
  description: whatWeCanHelpWithPageContent.metaDescription,
  path: "/what-we-can-help-with",
});

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
        eyebrow={whatWeCanHelpWithPageContent.eyebrow}
        title={whatWeCanHelpWithPageContent.title}
        description={<p>{whatWeCanHelpWithPageContent.description}</p>}
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
            <Button href="/contact">{whatWeCanHelpWithPageContent.ctaLabel}</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
