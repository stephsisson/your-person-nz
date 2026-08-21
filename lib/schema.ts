import { site } from "@/content/site";
import { faqItems } from "@/content/faq";
import type { Guide } from "@/content/guides";
import type { Service } from "@/content/services";

// Small JSON-LD builders, kept framework-free so they can be dropped into any
// page via a <script type="application/ld+json"> tag.

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    description: site.entityDescription,
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.serviceAreaFull,
    },
    email: site.email,
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.elaboration ? `${item.answer} ${item.elaboration}` : item.answer,
      },
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    description: service.detail,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      url: site.url,
    },
    areaServed: site.serviceAreaFull,
  };
}

export function articleSchema(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/guides/${guide.slug}`,
  };
}
