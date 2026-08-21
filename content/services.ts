// Powers the "What we actually do" cards on the homepage and the full
// /what-we-can-help-with page, and feeds a schema.org Service block per item.

export type Service = {
  slug: string;
  title: string;
  summary: string;
  detail: string;
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
    summary:
      "Photos, progress, and a plain explanation of what was done and what's next.",
    detail:
      "You get a clear update in language that makes sense — not a stack of unexplained invoices — so you always know where things stand.",
  },
  {
    slug: "bigger-logistics",
    title: "Help with bigger logistics",
    summary:
      "Including travel support and other situations where having someone local helps a lot.",
    detail:
      "Bigger moments — a hospital discharge, a house move, a parent travelling overseas — tend to need more coordination. We can help with those too.",
  },
];
