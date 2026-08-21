import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { LegalPlaceholderNotice } from "@/components/sections/LegalPlaceholderNotice";
import { site, privacyPageContent } from "@/content/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: privacyPageContent.metaTitle,
  description: privacyPageContent.metaDescriptionTemplate.replace("{siteName}", site.name),
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow={privacyPageContent.eyebrow} title={privacyPageContent.title} />
      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl">
          <LegalPlaceholderNotice />
          <div className="space-y-6 text-ink-soft">
            {privacyPageContent.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <p>
              {privacyPageContent.contactLabel}{" "}
              <a href={`mailto:${site.email}`} className="text-teal hover:text-teal-dark">
                {site.email}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
