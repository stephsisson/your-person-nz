import Link from "next/link";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { guides } from "@/content/guides";
import { guidesIndexPageContent } from "@/content/siteContent";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: guidesIndexPageContent.metaTitle,
  description: guidesIndexPageContent.metaDescription,
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <>
      <PageIntro
        eyebrow={guidesIndexPageContent.eyebrow}
        title={guidesIndexPageContent.title}
        description={<p>{guidesIndexPageContent.description}</p>}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="block rounded-2xl border border-ink/10 bg-white p-6 hover:border-teal transition-colors"
              >
                <p className="font-display text-xl text-ink">{guide.h1}</p>
                <p className="mt-2 text-sm text-ink-soft">{guide.dek}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
