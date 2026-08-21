import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Per the AI-SEO requirements, we deliberately allow the major AI/answer-engine
// crawlers (in addition to standard search engines) so Your Person NZ can be
// discovered and accurately cited by AI assistants. Revisit this list if any
// crawler becomes a source of abuse or unwanted scraping.
const allowedAiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...allowedAiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
