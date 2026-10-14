// Central place to swap in real photography. To replace a placeholder:
//   1. Add the image file to /public/images/ using the filename below.
//   2. Flip that entry's `ready` flag to `true`.
// That's it — no other code needs to change. Leaving `ready: false` keeps the
// styled placeholder block showing instead of a broken image request.

export const media = {
  heroImage: {
    // Square source (1000x1000) shown in a wide frame. `position` keeps the
    // bridge (about 45% down the image) in view when the top and bottom crop.
    src: "/images/heroimage.png",
    alt: "A stone bridge arching over the Avon River in Christchurch, framed by bare autumn trees and their reflections in the water",
    position: "50% 45%",
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
