import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { LegalPlaceholderNotice } from "@/components/sections/LegalPlaceholderNotice";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `The terms governing use of the ${site.name} website and enquiry process during the pilot.`,
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Terms of Service" />
      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl">
          <LegalPlaceholderNotice />
          <div className="space-y-6 text-ink-soft">
            <p>
              {site.name} is a coordination and concierge service, not a healthcare provider. We do
              not provide nursing, personal care, aged residential care, medical care, financial
              management or legal advice.
            </p>
            <p>
              Families retain decision-making authority at all times. {site.name} coordinates
              practical support on a family&apos;s instruction; we do not make decisions on a
              family&apos;s or individual&apos;s behalf.
            </p>
            <p>
              Third-party contractors, tradespeople and service providers arranged through{" "}
              {site.name} are responsible for their own specialist work, and generally quote and
              invoice the family directly. {site.name} does not warrant or guarantee third-party
              work.
            </p>
            <p>
              For medical, police or fire emergencies, always contact emergency services directly
              on 111. {site.name} is not an emergency response service.
            </p>
            <p>
              PLACEHOLDER — full terms (liability, cancellation, payment terms, dispute resolution,
              service pilot terms) to be drafted and reviewed by a qualified New Zealand lawyer
              before onboarding paying customers.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
