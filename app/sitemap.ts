import type { MetadataRoute } from "next";
import { site, countryPages } from "@/content/siteContent";
import { guides } from "@/content/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/how-it-works",
    "/what-we-can-help-with",
    "/for-families-overseas",
    "/travel-companion",
    "/guides",
    "/about",
    "/contact",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: now,
    })),
    ...countryPages.map((country) => ({
      url: `${site.url}/for-families-overseas/${country.slug}`,
      lastModified: now,
    })),
    ...guides.map((guide) => ({
      url: `${site.url}/guides/${guide.slug}`,
      lastModified: now,
    })),
  ];
}
