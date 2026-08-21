// Single source of truth for brand facts, nav and repeated copy.
// Edit this file to change taglines, contact details or the primary nav — it flows
// through to metadata, JSON-LD structured data and the header/footer everywhere.

export const site = {
  name: "Your Person NZ",
  legalName: "Your Person NZ",
  tagline: "Your person back home.",
  // PLACEHOLDER — replace with the live production domain once confirmed / DNS is live.
  url: "https://yourperson.nz",
  // PLACEHOLDER — replace with a real monitored inbox before launch.
  email: "hello@yourperson.nz",
  serviceAreaShort: "Christchurch & Canterbury",
  serviceAreaFull: "Christchurch and wider Canterbury, New Zealand",
  // One consistent, plain-language description of the business, reused verbatim
  // across the homepage, About page, FAQ and llms.txt so AI systems and search
  // engines extract the same facts everywhere (see AI-SEO requirements).
  entityDescription:
    "Your Person NZ is a local coordination and concierge service for New Zealanders living overseas who have a parent or family member living independently in Christchurch and Canterbury. We are not an aged-care, nursing, medical or personal-care provider — we coordinate practical, everyday local support (trades, house checks, errands, appointments and similar) through appropriate third-party providers, who generally quote and invoice the family directly.",
  ogImage: "/images/og-default.jpg", // PLACEHOLDER — replace with a real 1200x630 image
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "How it works", href: "/how-it-works" },
  { label: "What we can help with", href: "/what-we-can-help-with" },
  { label: "For families overseas", href: "/for-families-overseas" },
  { label: "Travel companion", href: "/travel-companion" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
];

export const navCta: NavItem = { label: "Join the pilot", href: "/contact" };

export const footerNav: NavItem[] = [
  ...primaryNav,
  { label: "Get in touch", href: "/contact" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
  { label: "Supplier relationships", href: "/supplier-relationships" },
  { label: "Service boundaries", href: "/service-boundaries" },
];

export const boundaryStatement =
  "Your Person NZ coordinates practical support. Specialist work is carried out by appropriate third-party providers, who usually quote and invoice you directly.";
