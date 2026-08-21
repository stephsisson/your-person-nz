// Guide shells for /guides and /guides/[slug]. Written for humans first —
// no keyword stuffing — but each `answerBox` is deliberately a direct,
// self-contained answer near the top of the page (AI-SEO answer shape), and
// the relevant search phrases from the brief are worked in naturally across
// the body copy rather than crammed into any one spot.

export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type Guide = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  dek: string;
  answerBox: { question: string; answer: string };
  sections: GuideSection[];
  relatedGuideSlugs: string[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-help-ageing-parents-in-new-zealand-when-you-live-overseas",
    title: "How to Help Ageing Parents in New Zealand When You Live Overseas",
    metaDescription:
      "Practical, non-guilt-tripping advice for helping ageing parents in New Zealand when you live overseas — from staying informed to knowing when to bring in local support.",
    h1: "How to help ageing parents in New Zealand when you live overseas",
    dek: "You can't be there every week. Here's what actually helps.",
    answerBox: {
      question: "How can I help my ageing parents in New Zealand from overseas?",
      answer:
        "Focus on three things: regular low-effort contact, a clear picture of the house and its maintenance needs, and a trusted local person or service who can act on the ground when something needs doing. You don't need to manage everything yourself from a distance — you need reliable eyes and hands in New Zealand.",
    },
    sections: [
      {
        heading: "Start with information, not intervention",
        paragraphs: [
          "Most overseas sons and daughters don't need to take over their parents' lives — they need a realistic, current picture of how things are going. A regular call is a start, but it rarely surfaces the things that matter: a leaking gutter, a garden getting away, a supplier who's stopped turning up.",
          "A short, honest conversation about what your parent currently manages themselves, and where they'd welcome a bit of backup, tends to be more useful than guessing from another time zone.",
        ],
      },
      {
        heading: "Separate 'urgent' from 'important'",
        paragraphs: [
          "Emergencies — medical, fire, police — always go to New Zealand emergency services on 111, not to you first. Most of what makes long-distance support hard isn't emergencies at all; it's the accumulation of smaller, non-urgent practical things that are still difficult to organise from Australia, the UK or further afield.",
        ],
      },
      {
        heading: "Build a local support layer",
        paragraphs: [
          "The families who find this easiest usually have one thing in common: a trusted person in New Zealand who can be physically present when needed — meeting a tradesperson, checking the house after a storm, or simply keeping an eye on things.",
          "That's the gap Your Person NZ is built to fill for families with a parent in Christchurch or wider Canterbury. See how it works, or read our guide on managing your parents' home from overseas for more detail.",
        ],
      },
    ],
    relatedGuideSlugs: [
      "how-to-manage-your-parents-home-from-overseas",
      "long-distance-caregiving-for-parents-in-new-zealand",
    ],
  },
  {
    slug: "looking-after-elderly-parents-in-nz-from-australia",
    title: "Looking After Elderly Parents in NZ From Australia",
    metaDescription:
      "A short flight doesn't make it easy. Practical advice for Kiwis in Sydney, Melbourne, Brisbane and beyond looking after elderly parents in NZ from Australia.",
    h1: "Looking after elderly parents in NZ from Australia",
    dek: "Three hours' flying time still doesn't get you there on a Tuesday afternoon.",
    answerBox: {
      question: "How do I look after my elderly parents in New Zealand while living in Australia?",
      answer:
        "Keep the time-zone gap small by scheduling regular calls that work for both sides, get a clear view of what your parent manages alone versus where they need help, and arrange local support in New Zealand for anything that needs someone physically present — you can't always fly over for a tradesperson visit.",
    },
    sections: [
      {
        heading: "The 'short flight' trap",
        paragraphs: [
          "Because Australia to New Zealand feels close, it's easy to assume you can just hop over when something comes up. In practice, flights cost money and take planning, and most practical problems — a quote that needs assessing, a delivery that needs signing for — don't warrant a trip on their own.",
        ],
      },
      {
        heading: "What tends to go wrong from a distance",
        paragraphs: [
          "The common pattern: a parent downplays a problem ('it's probably nothing'), it sits unresolved for weeks, and by the time it's raised properly it's bigger and more stressful than it needed to be. Distance doesn't cause this, but it makes it much harder to catch early.",
        ],
      },
      {
        heading: "A local person changes the equation",
        paragraphs: [
          "Having someone in Christchurch or Canterbury who can check in, meet a tradesperson, or simply look at something and tell you honestly what they see removes most of the guesswork. See our page for families in Australia, or read about how to find trustworthy tradespeople for elderly parents in Christchurch.",
        ],
      },
    ],
    relatedGuideSlugs: [
      "how-to-find-trustworthy-tradespeople-for-elderly-parents-in-christchurch",
      "what-to-do-when-your-ageing-parent-lives-alone-in-christchurch",
    ],
  },
  {
    slug: "how-to-manage-your-parents-home-from-overseas",
    title: "How to Manage Your Parents' Home From Overseas",
    metaDescription:
      "Managing your parents' home from overseas is mostly about maintenance, trust and communication. Here's a practical approach that doesn't require you to do it all yourself.",
    h1: "How to manage your parents' home from overseas",
    dek: "You don't need to become a remote facilities manager. You need a system.",
    answerBox: {
      question: "How can I manage my parents' home from overseas?",
      answer:
        "Keep a simple, shared record of the house's key details (trades already used, recent jobs, anything ongoing), agree with your parent on what they'll flag versus manage themselves, and have a trusted local contact who can inspect, coordinate trades and report back honestly when something comes up.",
    },
    sections: [
      {
        heading: "The house doesn't stop needing maintenance because you moved away",
        paragraphs: [
          "Gutters still block, hot water cylinders still age, storms still happen. None of that changes when the person managing it is in Melbourne instead of Merivale — but your ability to respond quickly does.",
        ],
      },
      {
        heading: "Keep a simple record",
        paragraphs: [
          "A shared note with who's done recent work, roughly when the roof was last checked, and any ongoing issues saves enormous time later — for you, for your parent, and for anyone helping coordinate on the ground.",
        ],
      },
      {
        heading: "Get a local set of eyes and hands",
        paragraphs: [
          "This is the piece that's genuinely hard to do yourself from overseas: being physically present. Your Person NZ coordinates trades, checks the house, and reports back in plain language for families with a parent in Christchurch or Canterbury. Read more about what we can help with.",
        ],
      },
    ],
    relatedGuideSlugs: [
      "how-to-help-ageing-parents-in-new-zealand-when-you-live-overseas",
      "how-to-find-trustworthy-tradespeople-for-elderly-parents-in-christchurch",
    ],
  },
  {
    slug: "helping-ageing-parents-stay-independent-at-home-in-new-zealand",
    title: "Helping Ageing Parents Stay Independent at Home in New Zealand",
    metaDescription:
      "Independence and support aren't opposites. Here's how families help ageing parents stay independent at home in New Zealand without taking over their lives.",
    h1: "Helping ageing parents stay independent at home in New Zealand",
    dek: "The goal isn't to take over. It's to make independence easier to sustain.",
    answerBox: {
      question: "How do you help an ageing parent stay independent at home?",
      answer:
        "Support the specific things that threaten independence — home maintenance, transport gaps, trustworthy trades access — rather than the person's overall autonomy. Small, practical support in the right places tends to extend independent living far longer than a full change in living arrangements.",
    },
    sections: [
      {
        heading: "Independence usually fails at specific points, not all at once",
        paragraphs: [
          "It's rarely one dramatic decline. More often it's a fence that doesn't get fixed, a scam caller that nearly succeeds, a job too big to do alone — small practical gaps that, left unaddressed, eventually force a bigger decision.",
        ],
      },
      {
        heading: "Plug the gaps, not the person",
        paragraphs: [
          "Most parents in this situation are not looking to be 'looked after.' They're looking for the same competence and autonomy they've always had, with a bit of practical backup where it's genuinely useful — someone to vet a tradesperson, keep an eye on the house, or handle a job that's become physically difficult.",
        ],
      },
      {
        heading: "Bring in help that respects the boundary",
        paragraphs: [
          "This is the whole premise behind Your Person NZ: coordination and practical support that works with the family, not around them, and protects a parent's independence, choice and dignity rather than replacing them. Read more on our positioning, or see how it works.",
        ],
      },
    ],
    relatedGuideSlugs: [
      "what-to-do-when-your-ageing-parent-lives-alone-in-christchurch",
      "long-distance-caregiving-for-parents-in-new-zealand",
    ],
  },
  {
    slug: "how-to-find-trustworthy-tradespeople-for-elderly-parents-in-christchurch",
    title: "How to Find Trustworthy Tradespeople for Elderly Parents in Christchurch",
    metaDescription:
      "Finding trustworthy tradespeople for elderly parents in Christchurch is hard enough locally, let alone from overseas. Here's what actually works.",
    h1: "How to find trustworthy tradespeople for elderly parents in Christchurch",
    dek: "Three quotes from Google and no way to tell which one you'd trust with your own parents.",
    answerBox: {
      question: "How do I find a trustworthy tradesperson for my elderly parent in Christchurch?",
      answer:
        "Prioritise tradespeople who are already known and vetted by someone local — a neighbour, a property manager, or a coordination service — over cold search results, and have someone physically present for quotes and the job itself whenever possible, especially from overseas.",
    },
    sections: [
      {
        heading: "Why this is harder than it sounds",
        paragraphs: [
          "Reviews can be gamed, availability changes constantly, and a tradesperson who's excellent for a townhouse renovation might be entirely wrong for an urgent repair at an elderly parent's home. Doing this well from Sydney or London, sight unseen, is genuinely difficult.",
        ],
      },
      {
        heading: "What actually reduces risk",
        paragraphs: [
          "A local relationship beats a five-star rating. Tradespeople who already do good, fairly-priced work for other households in the area — and who know they'll be dealing with a family that's watching closely from overseas — tend to behave differently to a one-off Google find.",
        ],
      },
      {
        heading: "Having someone vet it for you",
        paragraphs: [
          "This is one of the most common reasons families get in touch with us. Your Person NZ maintains relationships with trusted local trades in Christchurch and Canterbury, meets them on-site where needed, and reports back honestly — see what we can help with.",
        ],
      },
    ],
    relatedGuideSlugs: [
      "how-to-manage-your-parents-home-from-overseas",
      "what-to-do-when-your-ageing-parent-lives-alone-in-christchurch",
    ],
  },
  {
    slug: "what-to-do-when-your-ageing-parent-lives-alone-in-christchurch",
    title: "What to Do When Your Ageing Parent Lives Alone in Christchurch",
    metaDescription:
      "If your ageing parent lives alone in Christchurch and you're overseas, here's a clear-headed approach — what to check, what to ask, and when to bring in local support.",
    h1: "What to do when your ageing parent lives alone in Christchurch",
    dek: "Living alone isn't a problem to solve. Some of what comes with it might be.",
    answerBox: {
      question: "What should I do if my ageing parent lives alone in Christchurch and I live overseas?",
      answer:
        "Start with an honest conversation about what they manage confidently versus what's become harder, put a plan in place for house maintenance and urgent practical issues, and identify one trusted local contact — family, friend, or a service like Your Person NZ — who can respond in person when needed.",
    },
    sections: [
      {
        heading: "Living alone and struggling are not the same thing",
        paragraphs: [
          "Plenty of people in their 70s and 80s live alone very successfully. The question worth asking isn't whether they should be alone — it's whether there are specific practical gaps (a house too big to maintain solo, no one to call for trades, no backup if something breaks) that need addressing.",
        ],
      },
      {
        heading: "A simple check-in structure helps",
        paragraphs: [
          "Regular contact, a plan for who checks the house after severe weather, and clarity on who to call for a practical (non-emergency) problem all reduce the chance of small issues turning into crises.",
        ],
      },
      {
        heading: "When to bring in local support",
        paragraphs: [
          "If you're finding yourself trying to coordinate trades, chase quotes or check on the house from another country on a regular basis, that's usually the sign it's time for a local person on the ground. Get in touch to see if we can help.",
        ],
      },
    ],
    relatedGuideSlugs: [
      "helping-ageing-parents-stay-independent-at-home-in-new-zealand",
      "long-distance-caregiving-for-parents-in-new-zealand",
    ],
  },
  {
    slug: "living-overseas-with-ageing-parents-back-in-new-zealand",
    title: "Living Overseas With Ageing Parents Back in New Zealand",
    metaDescription:
      "The guilt, the logistics, the 2am phone calls that turn out to be nothing. A grounded look at living overseas with ageing parents back in New Zealand.",
    h1: "Living overseas with ageing parents back in New Zealand",
    dek: "The emotional side is real. So is the practical side — and the practical side is more fixable.",
    answerBox: {
      question: "What's the hardest part of living overseas with ageing parents in New Zealand?",
      answer:
        "Most people describe it as coordination fatigue — the constant low-level effort of managing things from a distance — more than any single crisis. Addressing the practical logistics directly (rather than just managing the guilt) tends to make the biggest difference to how sustainable it feels.",
    },
    sections: [
      {
        heading: "It's rarely one big thing",
        paragraphs: [
          "Most families we talk to aren't dealing with a single crisis — they're dealing with a slow accumulation of small logistics: a phone that needs setting up, a fence panel down, a quote that needs a second opinion. Individually manageable, collectively exhausting from another country.",
        ],
      },
      {
        heading: "You can be the son or daughter again",
        paragraphs: [
          "A lot of the emotional weight of this situation comes from being cast, involuntarily, as a remote facilities manager — chasing tradespeople and quotes instead of just being family. Taking the logistics off your plate tends to change that dynamic more than any amount of reassurance can.",
        ],
      },
      {
        heading: "What helps in practice",
        paragraphs: [
          "A trusted local person who can act on your behalf for the practical stuff, and keep you properly informed, is usually the single biggest lever. That's the whole idea behind Your Person NZ — read about how it works.",
        ],
      },
    ],
    relatedGuideSlugs: [
      "long-distance-caregiving-for-parents-in-new-zealand",
      "how-to-help-ageing-parents-in-new-zealand-when-you-live-overseas",
    ],
  },
  {
    slug: "long-distance-caregiving-for-parents-in-new-zealand",
    title: "Long-Distance Caregiving for Parents in New Zealand",
    metaDescription:
      "Long-distance caregiving for parents in New Zealand comes with its own playbook. Practical strategies for families coordinating support from overseas.",
    h1: "Long-distance caregiving for parents in New Zealand",
    dek: "Caregiving from a distance is a coordination problem as much as an emotional one.",
    answerBox: {
      question: "What is long-distance caregiving and how does it work for families in New Zealand?",
      answer:
        "Long-distance caregiving means supporting a parent's wellbeing and household needs from another country, usually through a combination of regular communication, a clear division of responsibilities, and a trusted local contact who can act in person when something needs doing.",
    },
    sections: [
      {
        heading: "Build a light structure early",
        paragraphs: [
          "Families who manage this well tend to set up a simple structure before a crisis forces one: how often you'll check in, what your parent will flag versus handle themselves, and who's the local point of contact for practical issues.",
        ],
      },
      {
        heading: "Know the difference between support and control",
        paragraphs: [
          "Long-distance caregiving works best when it protects a parent's independence rather than overriding it. The aim is to make life easier, not to run it from afar — see our guide on helping ageing parents stay independent at home.",
        ],
      },
      {
        heading: "A local coordination service fills the physical gap",
        paragraphs: [
          "No amount of planning replaces having someone who can physically be there. For families with a parent in Christchurch or Canterbury, that's exactly the role Your Person NZ plays — practical, local, and accountable to you.",
        ],
      },
    ],
    relatedGuideSlugs: [
      "helping-ageing-parents-stay-independent-at-home-in-new-zealand",
      "how-to-manage-your-parents-home-from-overseas",
    ],
  },
  {
    slug: "can-my-elderly-parent-fly-from-new-zealand-to-the-uk-alone",
    title: "Can My Elderly Parent Fly From New Zealand to the UK Alone?",
    metaDescription:
      "Wondering if your elderly parent can fly from New Zealand to the UK alone? Here's what to consider, and what travel companion support can add.",
    h1: "Can my elderly parent fly from New Zealand to the UK alone?",
    dek: "Often, yes. The question is usually whether they should have to.",
    answerBox: {
      question: "Can an elderly parent fly from New Zealand to the UK alone?",
      answer:
        "In most cases, yes — airlines don't restrict older adults from flying independently based on age alone, provided they're reasonably mobile and medically fit to travel. The bigger question for many families is comfort and support over a 24+ hour journey, which is where a travel companion can help.",
    },
    sections: [
      {
        heading: "What airlines actually require",
        paragraphs: [
          "There's no upper age limit for independent air travel. Airlines may ask about mobility or medical needs for assistance purposes, but an older adult in reasonably good health is generally free to fly unaccompanied, including on long-haul routes like New Zealand to the UK.",
        ],
      },
      {
        heading: "The real question is comfort, not eligibility",
        paragraphs: [
          "A New Zealand to UK trip typically involves 24-plus hours of travel with at least one connection. For an independent parent who's simply out of practice with long-haul travel, or anxious about a big airport alone, the barrier usually isn't ability — it's confidence and support.",
        ],
      },
      {
        heading: "Where a travel companion fits in",
        paragraphs: [
          "We're exploring door-to-door travel companion support — someone to help with the journey from a New Zealand home to family overseas — as part of the Your Person NZ pilot. Read more about travel companion support or register your interest.",
        ],
      },
    ],
    relatedGuideSlugs: ["travel-companions-for-older-people-flying-from-new-zealand"],
  },
  {
    slug: "travel-companions-for-older-people-flying-from-new-zealand",
    title: "Travel Companions for Older People Flying From New Zealand",
    metaDescription:
      "What a travel companion for an older person flying from New Zealand actually does, and when it's worth considering for a parent visiting family overseas.",
    h1: "Travel companions for older people flying from New Zealand",
    dek: "Someone to make the journey easier, not to take it over.",
    answerBox: {
      question: "What does a travel companion for an elderly traveller do?",
      answer:
        "A travel companion supports an older traveller through the practical and confidence-related parts of a long journey — getting to the airport, navigating check-in and connections, and settling in — so the trip itself isn't the reason they stop visiting family overseas.",
    },
    sections: [
      {
        heading: "Why families look into this",
        paragraphs: [
          "It's rarely about physical inability. More often, a parent who'd love to visit family overseas is put off by the idea of a long-haul trip and connections alone, and the family overseas doesn't want that anxiety to be the thing that stops the visit happening.",
        ],
      },
      {
        heading: "What support can look like",
        paragraphs: [
          "Door-to-door support — from home in New Zealand through to arrival with family overseas — removes the parts of a long trip that cause the most stress: unfamiliar airports, tight connections, and simply not having anyone to ask.",
        ],
      },
      {
        heading: "Where this stands at Your Person NZ",
        paragraphs: [
          "We're exploring travel companion support for independent older travellers as part of our Christchurch pilot. It's early, but if this is something your family would use, we'd genuinely like to hear from you — register your interest here.",
        ],
      },
    ],
    relatedGuideSlugs: ["can-my-elderly-parent-fly-from-new-zealand-to-the-uk-alone"],
  },
];
