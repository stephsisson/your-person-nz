import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { guides } from "@/content/guides";
import { articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/pageMetadata";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};

  return pageMetadata({
    title: guide.title,
    description: guide.metaDescription,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const related = guides.filter((g) => guide.relatedGuideSlugs.includes(g.slug));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(guide)) }}
      />
      <PageIntro eyebrow="Guide" title={guide.h1} description={<p>{guide.dek}</p>} />

      <article className="py-16 sm:py-24">
        <Container className="max-w-2xl">
          <div className="rounded-2xl border border-teal/20 bg-teal-light/60 p-6 mb-10">
            <p className="font-medium text-ink">{guide.answerBox.question}</p>
            <p className="mt-2 text-ink-soft">{guide.answerBox.answer}</p>
          </div>

          <div className="space-y-10">
            {guide.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-2xl text-ink">{section.heading}</h2>
                <div className="mt-3 space-y-3 text-ink-soft">
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-ink/10">
            <Button href="/contact">Tell us about your family</Button>
          </div>

          {related.length > 0 ? (
            <div className="mt-12 pt-8 border-t border-ink/10">
              <p className="text-sm font-medium text-ink mb-4">Related guides</p>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/guides/${r.slug}`} className="text-teal hover:text-teal-dark">
                      {r.h1} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </article>
    </>
  );
}
