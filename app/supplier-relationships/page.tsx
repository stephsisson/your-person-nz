import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { LegalPlaceholderNotice } from "@/components/sections/LegalPlaceholderNotice";
import { boundaryStatement, site, supplierRelationshipsPageContent } from "@/content/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: supplierRelationshipsPageContent.metaTitle,
  description: supplierRelationshipsPageContent.metaDescriptionTemplate.replace("{siteName}", site.name),
  path: "/supplier-relationships",
  noIndex: true,
});

export default function SupplierRelationshipsPage() {
  return (
    <>
      <PageIntro eyebrow={supplierRelationshipsPageContent.eyebrow} title={supplierRelationshipsPageContent.title} />
      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl">
          <LegalPlaceholderNotice />
          <div className="space-y-6 text-ink-soft">
            <p>{boundaryStatement}</p>
            {supplierRelationshipsPageContent.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
