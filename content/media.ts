// Central place to swap in real photography. To replace a placeholder:
//   1. Add the image file to /public/images/ using the filename below.
//   2. Flip that entry's `ready` flag to `true`.
// That's it — no other code needs to change. Leaving `ready: false` keeps the
// styled placeholder block showing instead of a broken image request.

export const media = {
  heroImage: {
    // Panoramic source (1916x821, about 7:3). The hero frame uses the same
    // ratio so the image is shown whole, with no cropping.
    src: "/images/hero2.png",
    alt: "The Bridge of Remembrance in Christchurch lit by golden evening sun, with the Avon River, spring gardens and the Cathedral spire beyond",
    ready: true,
  },
  founderPhoto: {
    // Recommended: 800x1000px (4:5 portrait), .jpg or .webp, under ~300KB.
    // A genuine, professional headshot/portrait of the founder.
    src: "/images/founder.jpg",
    alt: "Stephanie Sisson, founder of Your Person NZ, smiling in a red jacket and cap on a hillside above Lyttelton Harbour",
    ready: true,
  },
  mumCoffee: {
    // Square source (1000x1000). Warm, wood-and-linen tones sit well with the
    // site palette, so only a light tint is applied (see Recognition.tsx).
    src: "/images/mumcoffee.png",
    alt: "A smiling older woman in a cream knitted vest sitting on a sofa, holding a cup of coffee",
    position: "50% 30%",
    ready: true,
  },
  naturalMum: {
    // Square source (1000x1000). Shown at its natural colours (see
    // TravelCompanionTeaser.tsx).
    src: "/images/naturalmum.png",
    alt: "A grey-haired older woman in a patterned kimono resting on a wooden rail beside a calm harbour, looking out into the distance",
    position: "50% 30%",
    ready: true,
  },
} as const;
