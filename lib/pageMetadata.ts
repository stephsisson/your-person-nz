import type { Metadata } from "next";
import { site } from "@/content/site";

// Next.js does NOT regenerate openGraph/twitter from a page's own title/description
// unless you set them explicitly — child pages otherwise inherit the root layout's
// static openGraph object as-is. This helper keeps every page's social/share
// metadata in sync with its own title and description without repeating the same
// six fields on every page.
export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${site.url}${path}`;
  // Using an absolute title (rather than relying on the root layout's title
  // template) avoids the site name getting appended twice on pages whose
  // title already includes it (e.g. the homepage).
  const socialTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;

  return {
    title: { absolute: socialTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      images: [{ url: site.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [site.ogImage],
    },
    ...(noIndex ? { robots: { index: false } } : {}),
  };
}
