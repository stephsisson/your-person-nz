import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { LegalPlaceholderNotice } from "@/components/sections/LegalPlaceholderNotice";
import { site, termsPageContent } from "@/content/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: termsPageContent.metaTitle,
  description: termsPageContent.metaDescriptionTemplate.replace("{siteName}", site.name),
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow={termsPageContent.eyebrow} title={termsPageContent.title} />
      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl">
          <LegalPlaceholderNotice />
          <div className="space-y-6 text-ink-soft">
            {termsPageContent.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
