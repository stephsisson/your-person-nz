// ============================================================================
// YOUR PERSON NZ — WEBSITE WORDING
// ============================================================================
//
// This file holds almost every piece of text on the website: headings,
// paragraphs, button labels, pricing text, FAQ questions/answers and service
// descriptions. It's the one place to look if you want to change what the
// site says.
//
// You do NOT need to know how to code to edit this file. Every value below
// is either:
//   - plain text between quote marks ("like this"), or
//   - a list of items in square brackets [ ... ], each one usually a small
//     block between curly braces { ... }.
//
// RULES OF THUMB FOR SAFE EDITS:
//   1. Only change the text INSIDE the quote marks. Leave the quote marks,
//      commas, curly braces { } and square brackets [ ] exactly as they are.
//   2. If a piece of text itself contains a straight quote mark (e.g. don't,
//      you're), that's fine — it's already been written so it won't break
//      anything. If you're adding a NEW sentence with a word like "don't",
//      you can write it as don't, do not, or don't (all fine) — just don't
//      type a curly/smart quote (' or ") by accident (e.g. if autocorrect
//      changes it), as that can break the file. Plain straight quotes only.
//   3. Every section below is introduced by a comment (a line starting with
//      //) explaining what it controls and roughly where it appears on the
//      site. Comments are not shown to website visitors.
//   4. After editing, save the file. If you're editing directly on GitHub,
//      see the README section "Editing website wording" for exactly how to
//      commit the change so the live site updates automatically.
//
// WHAT'S NOT IN THIS FILE:
//   - The 10 long-form articles under /guides live in content/guides.ts —
//     kept separate because they're long, and this file would become
//     unwieldy to scroll through otherwise.
//   - Photos live in content/media.ts (that file just points at image
//     files, it doesn't hold any wording).
// ============================================================================

// ----------------------------------------------------------------------------
// BRAND & CONTACT FACTS
// Used across the whole site: page titles, the footer, the header logo text,
// structured data for Google/AI assistants, and llms.txt.
// ----------------------------------------------------------------------------
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

// One-line statement of scope, repeated in a few places (What We Do, legal
// pages) so families and search/AI systems see the same wording every time.
export const boundaryStatement =
  "Your Person NZ coordinates practical support. Specialist work is carried out by appropriate third-party providers, who usually quote and invoice you directly.";

// ----------------------------------------------------------------------------
// NAVIGATION
// The header menu, the header's "Join the pilot" button, and the footer's
// link columns.
// ----------------------------------------------------------------------------
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

// ============================================================================
// HOMEPAGE SECTIONS (in the order they appear on the page, top to bottom)
// ============================================================================

// ----------------------------------------------------------------------------
// HERO — the very top banner of the homepage (first thing visitors see)
// ----------------------------------------------------------------------------
export const heroContent = {
  headlineLine1: "Mum's in Christchurch. You're not.",
  headlineLine2: "We're your person back home.",
  subhead:
    "Practical local help for Kiwis overseas with parents and family in Christchurch and wider Canterbury, New Zealand — from organising trusted trades and checking the house, to sorting the things that are difficult to manage from another country.",
  launchNote: "Currently launching in Christchurch & Canterbury.",
  primaryCtaLabel: "Join the founding family pilot",
  secondaryCtaLabel: "Tell us what you need help with",
  imageAlt: "PLACEHOLDER — warm editorial photograph representing a New Zealand home and family connection across distance",
};

// ----------------------------------------------------------------------------
// RECOGNITION — "Some things are surprisingly hard to organise..." section,
// just below the hero. The short scenario lines in the cards.
// ----------------------------------------------------------------------------
export const recognitionContent = {
  heading: "Some things are surprisingly hard to organise from another country.",
  scenarios: [
    "Dad says the leak is probably nothing.",
    "Mum's internet has stopped working, and troubleshooting it from Melbourne isn't going brilliantly.",
    "The electrician can come Tuesday, but somebody needs to be there.",
    "You've found three roofers on Google. No idea which one you'd trust with your own parents.",
    "There was a storm last night and you'd really quite like someone to check the house.",
  ],
  closingLine: "That's where Your Person NZ comes in.",
};

// ----------------------------------------------------------------------------
// WHAT WE DO — "One trusted local person. Lots of things we can sort."
// The six service cards. Also used on the standalone /what-we-can-help-with
// page, and feeds the Service structured-data blocks for Google/AI.
// ----------------------------------------------------------------------------
export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
};

export const whatWeDoContent = {
  eyebrow: "What we actually do",
  heading: "One trusted local person. Lots of things we can sort.",
};

export const services: Service[] = [
  {
    slug: "sort-things-out",
    title: "Sort things out",
    summary:
      "Trades, repairs, appointments, gardening, cleaning, appliances — the irritating practical jobs that are surprisingly hard from overseas.",
    detail:
      "From a leaking tap to a fence that didn't survive the nor'wester, we take the job off your list, find the right person for it, and see it through to done.",
  },
  {
    slug: "be-there-when-you-cant",
    title: "Be there when you can't",
    summary:
      "We coordinate someone trustworthy to be physically present — for a tradesperson visit, a delivery, or just a scheduled call-in.",
    detail:
      "Some jobs need a person standing in the room. When that person can't be you, it can be us — or someone we've vetted and briefed properly.",
  },
  {
    slug: "check-whats-happening",
    title: "Check what's happening",
    summary:
      "A second pair of eyes on the house, a completed job, or something Mum or Dad is worried about.",
    detail:
      "After a storm, after a job's finished, or just because it's been a while — we can check in and tell you plainly what we found.",
  },
  {
    slug: "find-trusted-local-help",
    title: "Find trusted local help",
    summary:
      "Instead of blindly Googling Christchurch contractors from Sydney or London, you get people we already know and rate.",
    detail:
      "We maintain relationships with local tradespeople and services we trust, so you're not vetting strangers from another time zone.",
  },
  {
    slug: "keep-you-updated",
    title: "Keep you updated",
    summary: "Photos, progress, and a plain explanation of what was done and what's next.",
    detail:
      "You get a clear update in language that makes sense — not a stack of unexplained invoices — so you always know where things stand.",
  },
  {
    slug: "bigger-logistics",
    title: "Help with bigger logistics",
    summary: "Including travel support and other situations where having someone local helps a lot.",
    detail:
      "Bigger moments — a hospital discharge, a house move, a parent travelling overseas — tend to need more coordination. We can help with those too.",
  },
];

// ----------------------------------------------------------------------------
// POSITIONING — "Not home care. Not taking over. Just really useful help."
// Also reused on the /about page.
// ----------------------------------------------------------------------------
export const positioningContent = {
  eyebrow: "What this isn't",
  heading: "Not home care. Not taking over. Just really useful help.",
  description:
    "Mum or Dad may be entirely independent — still driving, travelling, gardening, working, socialising, with zero interest in being 'looked after.' Sometimes they just need another capable person nearby, and sometimes the family overseas needs to know someone in New Zealand can help when they can't.",
  closingLine:
    "Your Person NZ works with the family, not around them. The aim is to make life easier while protecting independence, choice and dignity.",
};

// ----------------------------------------------------------------------------
// FOUNDER / ABOUT — "Why Your Person NZ exists" section. Appears in a
// shortened form on the homepage and in full on the /about page.
// Photo is configured separately in content/media.ts.
// ----------------------------------------------------------------------------
export const founderContent = {
  eyebrow: "About",
  heading: "Why Your Person NZ exists",
  name: "Stephanie Sisson",
  role: "Founder, Your Person NZ",
  // Shown in full on /about. The homepage only shows the first 3 paragraphs
  // (see the `condensed` behaviour in components/sections/FounderBio.tsx),
  // followed by a "read the rest" link — so keep the most important points
  // in the first three paragraphs.
  bioParagraphs: [
    "My first two jobs, at sixteen and seventeen, were at a rest home.",
    "I was young, not remotely qualified for most of what the job actually taught me, and I discovered something I've never really shaken off: I like older people. They were funny, opinionated, stubborn, occasionally infuriating — and very definitely still themselves.",
    "Since then I've spent my career solving complicated operational problems and getting things done — the kind of work where you walk into a mess and find a way through it, fast. Your Person NZ brings those two things together.",
    "I don't think getting older should turn anyone into a \"care recipient.\" Most people just want to keep running their own lives — sometimes with a bit of trusted, practical help on the ground. And for sons and daughters living overseas, what you often need most isn't a service. It's a capable person back home who can sort things out.",
    "That's what Your Person NZ is here to be.",
  ],
  readMoreLabel: "Read the rest of the story →",
};

// ----------------------------------------------------------------------------
// HOW IT WORKS — the four numbered steps section.
// ----------------------------------------------------------------------------
export const howItWorksContent = {
  eyebrow: "How it works",
  heading: "Four simple steps",
  steps: [
    {
      number: "01",
      title: "Tell us about your family",
      body: "Where they live, what they currently manage themselves, where a little local support would help.",
    },
    {
      number: "02",
      title: "We get to know what matters",
      body: "The house, preferences, existing suppliers, how the family likes things handled.",
    },
    {
      number: "03",
      title: "Something needs sorting",
      body: "You or your parent contacts Your Person NZ.",
    },
    {
      number: "04",
      title: "We help make it happen",
      body: "We coordinate the right local support and keep everyone informed.",
    },
  ],
  closingLine: "You stay the son or daughter. We help with the logistics.",
};

// ----------------------------------------------------------------------------
// FOR FAMILIES OVERSEAS — the homepage teaser section with the three
// "I'm in..." country cards, plus the content for each country's own page.
// ----------------------------------------------------------------------------
export const forFamiliesOverseasContent = {
  eyebrow: "For families overseas",
  heading: "Built for families with a few thousand kilometres between them.",
  description:
    "Your Person NZ is designed for families managing things across borders, time zones and very long flights — wherever in the world you've ended up.",
};

export type CountryPage = {
  slug: "australia" | "uk" | "elsewhere";
  label: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  timeZoneNote: string;
};

export const countryPages: CountryPage[] = [
  {
    slug: "australia",
    label: "Australia",
    metaTitle: "Help for Ageing Parents in NZ From Australia",
    metaDescription:
      "Living in Sydney, Melbourne, Brisbane or elsewhere in Australia with a parent still in Christchurch? Your Person NZ is a local coordination service for Kiwi families across the Tasman.",
    h1: "For Kiwis in Australia with family in Christchurch",
    intro:
      "A short flight is still a flight. Whether you're in Sydney, Melbourne, Brisbane or further afield, Your Person NZ gives you a trusted local person on the ground in Christchurch and Canterbury for the practical things that are surprisingly hard to organise from across the Tasman.",
    timeZoneNote:
      "New Zealand is usually two to three hours ahead of the Australian east coast, which is workable for calls — but not much help when a tradesperson needs someone physically present at 10am on a Tuesday.",
  },
  {
    slug: "uk",
    label: "the UK",
    metaTitle: "Support for Elderly Parents in NZ From the UK",
    metaDescription:
      "Based in the UK with a parent living independently in Christchurch? Your Person NZ coordinates practical local support in Canterbury so you don't have to manage it from the other side of the world.",
    h1: "For Kiwis in the UK with family in Christchurch",
    intro:
      "Eighteen thousand kilometres and an eleven-to-thirteen-hour time difference make even simple logistics hard. Your Person NZ is a local coordination service in Christchurch and Canterbury, built for exactly this kind of distance.",
    timeZoneNote:
      "With New Zealand roughly half a day ahead of the UK, a problem that comes up during your evening is often already the following morning back home — which is where having someone local on the ground makes the biggest difference.",
  },
  {
    slug: "elsewhere",
    label: "elsewhere overseas",
    metaTitle: "Help for Parents in Christchurch From Overseas",
    metaDescription:
      "Living overseas — Singapore, the US, Canada or elsewhere — with a parent in Christchurch or Canterbury? Your Person NZ coordinates trusted local support on your behalf.",
    h1: "For Kiwis overseas with family in Christchurch",
    intro:
      "Singapore, the US, Canada, or somewhere else entirely — wherever you've ended up, if your parent is still in Christchurch or wider Canterbury, Your Person NZ can be your local point of contact for the practical, everyday things.",
    timeZoneNote:
      "Whatever the time difference, the core problem is the same: someone needs to be there in person, and it can't always be you.",
  },
];

// ----------------------------------------------------------------------------
// TRAVEL COMPANION TEASER — the dark banner section on the homepage.
// ----------------------------------------------------------------------------
export const travelCompanionTeaserContent = {
  heading: "Want Mum or Dad to visit — but don't want them making the journey alone?",
  body: "We're exploring door-to-door travel companion support for independent older travellers visiting family overseas — from their home in New Zealand to yours.",
  ctaLabel: "I'm interested in travel companion support",
};

// ----------------------------------------------------------------------------
// PILOT / PRICING — "Help us build something genuinely useful" section.
// ----------------------------------------------------------------------------
export const pilotPricingContent = {
  eyebrow: "Founding family pilot",
  heading: "Help us build something genuinely useful.",
  description:
    "We're starting small in Christchurch & Canterbury with a limited number of founding families, to learn what overseas families actually need.",
  priceText:
    "Ongoing support is expected to start from around NZ$199–299/month; one-off support and larger projects are priced separately. Third-party trades and services are generally paid directly by the family.",
  disclaimer: "Pricing is indicative during the pilot and may be refined as we learn.",
  ctaLabel: "Apply for the founding family pilot",
};

// ----------------------------------------------------------------------------
// FAQ — appears on the homepage, and individual answers are reused on the
// /service-boundaries legal page. Each answer is written as a direct,
// self-contained 1-3 sentence statement (before any elaboration) because
// that's the shape AI assistants and Google's answer boxes tend to lift
// verbatim — see the AI-SEO notes in the original build brief.
// ----------------------------------------------------------------------------
export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  elaboration?: string;
};

export const faqContent = {
  eyebrow: "Questions",
  heading: "Frequently asked questions",
};

export const faqItems: FaqItem[] = [
  {
    id: "is-this-aged-care",
    question: "Is this aged care?",
    answer:
      "No. Your Person NZ provides practical coordination and local support rather than nursing or personal care.",
    elaboration:
      "We arrange and oversee everyday practical things — trades, house checks, errands — through appropriate third-party providers. We're not a healthcare provider and don't deliver clinical or personal care ourselves.",
  },
  {
    id: "does-parent-need-to-be-elderly",
    question: "Does Mum or Dad need to be elderly?",
    answer: "Not at all. If distance is making practical things difficult, we may be able to help.",
    elaboration:
      "Plenty of families we talk to have parents who are entirely independent — still driving, working, travelling — but a few thousand kilometres makes ordinary logistics harder than they should be.",
  },
  {
    id: "do-parents-need-to-agree",
    question: "Do my parents need to agree?",
    answer: "Yes. We work with families, not around them.",
    elaboration:
      "Your Person NZ only gets involved with a parent's knowledge and agreement. Decision-making authority stays with the family — we coordinate, we don't take over.",
  },
  {
    id: "do-you-provide-personal-care",
    question: "Do you provide personal care?",
    answer: "No — practical household and everyday support, not nursing or personal care.",
    elaboration:
      "Think trades coordination, house checks and errands rather than anything clinical or hands-on personal care. If a family needs that kind of support, we'll say so plainly rather than stretch our scope.",
  },
  {
    id: "who-pays-tradespeople",
    question: "Who pays tradespeople?",
    answer:
      "Usually the family or homeowner pays third-party providers directly. Your Person NZ coordinates the work.",
    elaboration:
      "Trades and services generally quote and invoice the family directly, the same as if you'd booked them yourself. We handle the coordination, communication and oversight around that job.",
  },
  {
    id: "what-if-urgent",
    question: "What if something happens urgently?",
    answer:
      "For genuine emergencies — police, fire or medical — always contact emergency services directly on 111. Your Person NZ handles urgent practical jobs, not emergencies.",
    elaboration:
      "There's an important difference between an urgent practical problem (a burst pipe, a lost key) and a genuine emergency. We're built for the former; the latter always goes to the appropriate emergency service first.",
  },
  {
    id: "can-you-check-house-in-person",
    question: "Can you check the house in person?",
    answer: "Currently available within the Christchurch pilot, subject to location and availability.",
    elaboration:
      "We're starting small so we can do this properly. If your parent is in Christchurch or wider Canterbury, get in touch and we'll confirm what's possible for your area.",
  },
  {
    id: "can-you-help-elsewhere-in-nz",
    question: "Can you help elsewhere in New Zealand?",
    answer: "Not yet — Christchurch and Canterbury first. We'd love to have you on the waitlist for when we expand.",
    elaboration:
      "The pilot is deliberately focused on one region so we can learn properly before growing. If your family is elsewhere in New Zealand, tell us on the enquiry form and we'll keep you posted.",
  },
  {
    id: "can-you-accompany-overseas",
    question: "Can you accompany Mum or Dad overseas?",
    answer:
      "Travel companion support is being explored as part of the pilot — we'd love to hear if this is something your family needs.",
    elaboration:
      "We're testing door-to-door travel companion support for independent older travellers visiting family overseas. Register your interest and we'll be in touch as it develops.",
  },
];

// ----------------------------------------------------------------------------
// FINAL CTA — the closing teal banner at the very bottom of the homepage.
// ----------------------------------------------------------------------------
export const finalCtaContent = {
  heading: "You can't always be here. But you can have someone who is.",
  ctaLabel: "Tell us about your family",
};

// ----------------------------------------------------------------------------
// ENQUIRY FORM — the "Tell us about your family" form (appears on the
// homepage, /contact and /travel-companion). Field labels, the dropdown
// options, and the success message after someone submits it.
// ----------------------------------------------------------------------------
export const enquiryFormContent = {
  fieldLabels: {
    name: "Your name",
    email: "Email",
    phone: "Phone / WhatsApp number",
    liveLocation: "Where do you live?",
    liveLocationPlaceholder: "e.g. Melbourne, Australia",
    parentSuburb: "Parent / family member's suburb or town in Canterbury",
    parentSuburbPlaceholder: "e.g. Fendalton, Christchurch",
    helpingWho: "Who are you looking for help for?",
    helpingWhoPlaceholder: "e.g. My mum",
    mostWantHelpWith: "What would you most like help with?",
    currentlyOrganising: "What are you currently organising from overseas?",
    serviceInterest: "Which service interests you?",
    serviceInterestPlaceholder: "Select an option",
    wouldConsiderPaying: "If an ongoing service cost approximately NZ$199–299/month, would you consider paying for it?",
    anythingElse: "Anything else we should know?",
  },
  serviceOptions: [
    { value: "ongoing-local-support", label: "Ongoing local support" },
    { value: "one-off-help", label: "One-off help" },
    { value: "house-checks", label: "House checks" },
    { value: "coordinating-trades", label: "Coordinating trades / services" },
    { value: "travel-companion", label: "Travel companion" },
    { value: "not-sure-yet", label: "Not sure yet" },
  ] as const,
  payingOptions: ["yes", "possibly", "no"] as const,
  submitLabel: "Tell me when the pilot opens",
  submittingLabel: "Sending…",
  errorMessage: "Something went wrong sending that through. Please try again, or email us directly.",
  successHeading: "You're on the list.",
  successBody: "Thanks — we'll be in touch personally as the Christchurch pilot takes shape.",
};

// ----------------------------------------------------------------------------
// HOMEPAGE ENQUIRY SECTION — the section heading directly above the embedded
// form at the bottom of the homepage (the form fields themselves are in
// enquiryFormContent above).
// ----------------------------------------------------------------------------
export const homepageFormSectionContent = {
  eyebrow: "Get in touch",
  heading: "Tell us about your family",
  description:
    "No payment, no commitment — this helps us understand what overseas families actually need as we build the Christchurch pilot.",
};

// ============================================================================
// STANDALONE PAGE COPY
// Each of these controls one page reachable from the main navigation.
// `metaTitle` / `metaDescription` control the page's browser tab title and
// its appearance in Google search results and social share previews — worth
// keeping these accurate and under about 155 characters for metaDescription.
// ============================================================================

// ----------------------------------------------------------------------------
// /how-it-works
// ----------------------------------------------------------------------------
export const howItWorksPageContent = {
  metaTitle: "How It Works",
  metaDescription:
    "How Your Person NZ works: tell us about your family, we get to know what matters, and we coordinate trusted local support in Christchurch and Canterbury whenever something needs sorting.",
  eyebrow: "How it works",
  title: "A trusted local person for your family in Christchurch.",
  description:
    "Your Person NZ is a coordination and concierge service for New Zealanders living overseas who have a parent or family member living independently in Christchurch and wider Canterbury, New Zealand. We arrange and oversee practical, everyday support through trusted local providers — here's exactly how that works.",
  sections: [
    {
      heading: "What happens after you get in touch",
      body: "We start with a conversation — about the house, about your parent's preferences, about what's already being managed well and where the gaps are. From there, we build a simple picture of the household so that when something does come up, we're not starting from scratch.",
    },
    {
      heading: "When something needs sorting",
      body: "Either you or your parent gets in touch — by phone, message or email, whichever suits. We coordinate the right local support, whether that's a tradesperson, a house check, or simply being present for something that needs a person on the ground.",
    },
    {
      heading: "Staying in the loop",
      body: "You get plain-language updates and, where relevant, photos — so you always know what was done, what it cost, and what (if anything) needs deciding next.",
    },
  ],
  ctaLabel: "Join the founding family pilot",
};

// ----------------------------------------------------------------------------
// /what-we-can-help-with
// ----------------------------------------------------------------------------
export const whatWeCanHelpWithPageContent = {
  metaTitle: "What We Can Help With",
  metaDescription:
    "From organising trusted trades and checking the house, to being there when you can't — what Your Person NZ can help with for families in Christchurch and Canterbury.",
  eyebrow: "What we can help with",
  title: "One trusted local person. Lots of things we can sort.",
  description:
    "Your Person NZ coordinates practical, everyday support for families with a parent in Christchurch and wider Canterbury, New Zealand — not medical or personal care, but the local logistics that are genuinely hard to manage from overseas.",
  ctaLabel: "Tell us what you need help with",
};

// ----------------------------------------------------------------------------
// /for-families-overseas (the index page — country-specific pages use
// countryPages above)
// ----------------------------------------------------------------------------
export const forFamiliesOverseasPageContent = {
  metaTitle: "For Families Overseas",
  metaDescription:
    "Your Person NZ is built for Kiwi families managing things across borders and time zones, with a parent in Christchurch or Canterbury and family living in Australia, the UK, or elsewhere overseas.",
  eyebrow: "For families overseas",
  title: "Built for families with a few thousand kilometres between them.",
  description:
    "Wherever you've ended up, if your parent or family member is still living independently in Christchurch and wider Canterbury, New Zealand, Your Person NZ can be your local point of contact for the practical things.",
};

// Shared labels used on every individual country page (/for-families-overseas/australia etc).
export const countryPageContent = {
  distanceHeading: "The distance problem",
  whatWeDoHeading: "What Your Person NZ does",
  ctaLabel: "Tell us about your family",
};

// ----------------------------------------------------------------------------
// /travel-companion
// ----------------------------------------------------------------------------
export const travelCompanionPageContent = {
  metaTitle: "Travel Companion Support",
  metaDescription:
    "Your Person NZ is exploring door-to-door travel companion support for independent older travellers in New Zealand visiting family overseas. Register your interest.",
  eyebrow: "Travel companion",
  title: "Want Mum or Dad to visit — but don't want them making the journey alone?",
  description:
    "We're exploring door-to-door travel companion support for independent older travellers visiting family overseas — from their home in Christchurch & Canterbury to yours. It's early days, and we'd genuinely like to hear if this is something your family would use.",
  bodyParagraphs: [
    "A long-haul flight isn't usually a question of whether an older, independent traveller can fly alone — airlines don't restrict travel based on age. It's a question of comfort and confidence over 24-plus hours, unfamiliar airports and tight connections.",
    "Door-to-door support — from home in New Zealand through to arrival with family overseas — removes the parts of a long trip that cause the most stress, so a visit doesn't get put off because the journey itself feels like too much.",
  ],
  formHeading: "Register your interest",
};

// ----------------------------------------------------------------------------
// /about
// ----------------------------------------------------------------------------
export const aboutPageContent = {
  metaTitle: "About",
  metaDescription:
    "Your Person NZ is a local coordination service for New Zealanders overseas with a parent or family member living independently in Christchurch and Canterbury. Here's why it exists.",
  eyebrow: "About",
  title: "A trusted local person for Kiwi families overseas.",
  closingHeading: "Your Person NZ operates in Christchurch and wider Canterbury, New Zealand — for now.",
  closingBody: "We're starting small on purpose, so we can do this properly before we grow.",
  ctaLabel: "Get in touch",
};

// ----------------------------------------------------------------------------
// /contact
// ----------------------------------------------------------------------------
export const contactPageContent = {
  metaTitle: "Get in Touch",
  metaDescription:
    "Tell us about your family and we'll be in touch personally as the Christchurch pilot takes shape. No payment, no commitment.",
  eyebrow: "Get in touch",
  title: "Tell us about your family",
  description:
    "No payment, no commitment — this helps us understand what overseas families actually need as we build the Christchurch pilot.",
};

// ----------------------------------------------------------------------------
// /guides (index page only — the 10 articles themselves are in
// content/guides.ts)
// ----------------------------------------------------------------------------
export const guidesIndexPageContent = {
  metaTitle: "Guides",
  metaDescription:
    "Practical guides for New Zealanders living overseas with ageing parents or family in Christchurch and Canterbury — long-distance caregiving, home maintenance, trusted trades and travel.",
  eyebrow: "Guides",
  title: "Practical guides for families managing things from overseas.",
  description:
    "Straightforward advice on ageing parents, long-distance caregiving and managing a home in New Zealand from another country.",
};

// ============================================================================
// LEGAL PAGES
// These four pages are placeholders flagged for lawyer review — see the
// LegalPlaceholderNotice banner shown at the top of each. Still fine to edit
// wording here, but treat any substantive legal claim with caution.
// ============================================================================

export const privacyPageContent = {
  metaTitle: "Privacy Policy",
  metaDescriptionTemplate: "How {siteName} handles personal information submitted through this website.",
  eyebrow: "Legal",
  title: "Privacy Policy",
  paragraphs: [
    "Your Person NZ collects the information you submit through our enquiry form — your name, contact details, and details about the support your family is looking for — in order to respond to your enquiry and, if you agree, keep you updated about the Christchurch pilot.",
    "We do not knowingly collect sensitive health information through this website during the pilot phase. We do not sell personal information to third parties.",
    "PLACEHOLDER — this policy needs to be completed to meet the New Zealand Privacy Act 2020, including details on: what data is collected and why, where it is stored (currently a third-party form/database provider), how long it is retained, how individuals can request access to or deletion of their data, and contact details for privacy queries.",
  ],
  contactLabel: "Contact:",
};

export const termsPageContent = {
  metaTitle: "Terms of Service",
  metaDescriptionTemplate: "The terms governing use of the {siteName} website and enquiry process during the pilot.",
  eyebrow: "Legal",
  title: "Terms of Service",
  paragraphs: [
    "Your Person NZ is a coordination and concierge service, not a healthcare provider. We do not provide nursing, personal care, aged residential care, medical care, financial management or legal advice.",
    "Families retain decision-making authority at all times. Your Person NZ coordinates practical support on a family's instruction; we do not make decisions on a family's or individual's behalf.",
    "Third-party contractors, tradespeople and service providers arranged through Your Person NZ are responsible for their own specialist work, and generally quote and invoice the family directly. Your Person NZ does not warrant or guarantee third-party work.",
    "For medical, police or fire emergencies, always contact emergency services directly on 111. Your Person NZ is not an emergency response service.",
    "PLACEHOLDER — full terms (liability, cancellation, payment terms, dispute resolution, service pilot terms) to be drafted and reviewed by a qualified New Zealand lawyer before onboarding paying customers.",
  ],
};

export const supplierRelationshipsPageContent = {
  metaTitle: "Supplier Relationships",
  metaDescriptionTemplate: "How {siteName} works with tradespeople and third-party service providers.",
  eyebrow: "Legal",
  title: "Supplier relationships",
  paragraphs: [
    // The first paragraph shown on this page is boundaryStatement (defined above)
    // — kept as a single shared fact rather than duplicated here.
    "Your Person NZ does not currently make any specific claims regarding insurance, accreditation, or formal background checks of suppliers. PLACEHOLDER — this page should be updated with our actual supplier vetting process, and any real insurance or accreditation claims, once confirmed — do not publish claims that cannot be verified.",
    "Tradespeople and third-party providers we coordinate work with generally quote and invoice the family directly, and are responsible for the quality and safety of their own specialist work.",
  ],
};

export const serviceBoundariesPageContent = {
  metaTitle: "Service Boundaries",
  metaDescriptionTemplate: "What {siteName} does and does not do — a clear statement of scope.",
  eyebrow: "Legal",
  title: "Service boundaries",
  // Which FAQ items (by id, from faqItems above) are repeated on this page.
  faqIdsShown: [
    "is-this-aged-care",
    "do-you-provide-personal-care",
    "what-if-urgent",
    "do-parents-need-to-agree",
  ],
  emergenciesHeading: "Emergencies",
  emergenciesBody:
    "Your Person NZ is not an emergency response service. For medical, police or fire emergencies, always contact New Zealand emergency services directly on 111.",
  adviceHeading: "Advice",
  adviceBody: "Your Person NZ is not a healthcare provider and does not provide financial or legal advice.",
};
