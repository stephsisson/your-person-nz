import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { LegalPlaceholderNotice } from "@/components/sections/LegalPlaceholderNotice";
import { boundaryStatement, site } from "@/content/site";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: "Supplier Relationships",
  description: `How ${site.name} works with tradespeople and third-party service providers.`,
  path: "/supplier-relationships",
  noIndex: true,
});

export default function SupplierRelationshipsPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Supplier relationships" />
      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl">
          <LegalPlaceholderNotice />
          <div className="space-y-6 text-ink-soft">
            <p>{boundaryStatement}</p>
            <p>
              {site.name} does not currently make any specific claims regarding insurance,
              accreditation, or formal background checks of suppliers. PLACEHOLDER — this page
              should be updated with our actual supplier vetting process, and any real insurance or
              accreditation claims, once confirmed — do not publish claims that cannot be verified.
            </p>
            <p>
              Tradespeople and third-party providers we coordinate work with generally quote and
              invoice the family directly, and are responsible for the quality and safety of their
              own specialist work.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
