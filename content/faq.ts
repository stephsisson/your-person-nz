// Answer-first FAQ content: each question is followed immediately by a direct,
// self-contained 1-3 sentence answer, then optional elaboration. This shape is
// deliberate — it's what AI assistants and Google's answer boxes tend to lift
// verbatim, per the AI-SEO requirements. Feeds the FAQ section on the homepage,
// the /faq content reused in /about and /service-boundaries, and FAQPage schema.

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  elaboration?: string;
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
    answer:
      "Not at all. If distance is making practical things difficult, we may be able to help.",
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
    answer:
      "No — practical household and everyday support, not nursing or personal care.",
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
    answer:
      "Currently available within the Christchurch pilot, subject to location and availability.",
    elaboration:
      "We're starting small so we can do this properly. If your parent is in Christchurch or wider Canterbury, get in touch and we'll confirm what's possible for your area.",
  },
  {
    id: "can-you-help-elsewhere-in-nz",
    question: "Can you help elsewhere in New Zealand?",
    answer:
      "Not yet — Christchurch and Canterbury first. We'd love to have you on the waitlist for when we expand.",
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
