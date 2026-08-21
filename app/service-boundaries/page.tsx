import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { LegalPlaceholderNotice } from "@/components/sections/LegalPlaceholderNotice";
import { site, faqItems, serviceBoundariesPageContent } from "@/content/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: serviceBoundariesPageContent.metaTitle,
  description: serviceBoundariesPageContent.metaDescriptionTemplate.replace("{siteName}", site.name),
  path: "/service-boundaries",
  noIndex: true,
});

export default function ServiceBoundariesPage() {
  const boundaryFaqs = faqItems.filter((item) =>
    serviceBoundariesPageContent.faqIdsShown.includes(item.id)
  );

  return (
    <>
      <PageIntro
        eyebrow={serviceBoundariesPageContent.eyebrow}
        title={serviceBoundariesPageContent.title}
        description={<p>{site.entityDescription}</p>}
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl">
          <LegalPlaceholderNotice />
          <div className="space-y-6">
            {boundaryFaqs.map((item) => (
              <div key={item.id}>
                <h2 className="font-display text-xl text-ink">{item.question}</h2>
                <p className="mt-2 text-ink-soft">{item.answer}</p>
                {item.elaboration ? <p className="mt-1 text-sm text-ink-soft/80">{item.elaboration}</p> : null}
              </div>
            ))}
            <div>
              <h2 className="font-display text-xl text-ink">{serviceBoundariesPageContent.emergenciesHeading}</h2>
              <p className="mt-2 text-ink-soft">{serviceBoundariesPageContent.emergenciesBody}</p>
            </div>
            <div>
              <h2 className="font-display text-xl text-ink">{serviceBoundariesPageContent.adviceHeading}</h2>
              <p className="mt-2 text-ink-soft">{serviceBoundariesPageContent.adviceBody}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
