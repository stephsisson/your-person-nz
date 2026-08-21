// Thin SEO/landing content for the "For families overseas" country pages.
// V1 content is deliberately light — these exist mainly so the routing and
// metadata are in place; expand copy per-country as real enquiry data comes in.

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
    metaTitle: "Help for Ageing Parents in NZ From Australia | Your Person NZ",
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
    metaTitle: "Support for Elderly Parents in NZ From the UK | Your Person NZ",
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
    metaTitle: "Help for Parents in Christchurch From Overseas | Your Person NZ",
    metaDescription:
      "Living overseas — Singapore, the US, Canada or elsewhere — with a parent in Christchurch or Canterbury? Your Person NZ coordinates trusted local support on your behalf.",
    h1: "For Kiwis overseas with family in Christchurch",
    intro:
      "Singapore, the US, Canada, or somewhere else entirely — wherever you've ended up, if your parent is still in Christchurch or wider Canterbury, Your Person NZ can be your local point of contact for the practical, everyday things.",
    timeZoneNote:
      "Whatever the time difference, the core problem is the same: someone needs to be there in person, and it can't always be you.",
  },
];
