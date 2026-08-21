import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { LegalPlaceholderNotice } from "@/components/sections/LegalPlaceholderNotice";
import { site } from "@/content/site";
import { faqItems } from "@/content/faq";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: "Service Boundaries",
  description: `What ${site.name} does and does not do — a clear statement of scope.`,
  path: "/service-boundaries",
  noIndex: true,
});

export default function ServiceBoundariesPage() {
  const boundaryFaqs = faqItems.filter((item) =>
    ["is-this-aged-care", "do-you-provide-personal-care", "what-if-urgent", "do-parents-need-to-agree"].includes(
      item.id
    )
  );

  return (
    <>
      <PageIntro eyebrow="Legal" title="Service boundaries" description={<p>{site.entityDescription}</p>} />
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
              <h2 className="font-display text-xl text-ink">Emergencies</h2>
              <p className="mt-2 text-ink-soft">
                {site.name} is not an emergency response service. For medical, police or fire
                emergencies, always contact New Zealand emergency services directly on 111.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl text-ink">Advice</h2>
              <p className="mt-2 text-ink-soft">
                {site.name} is not a healthcare provider and does not provide financial or legal
                advice.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
