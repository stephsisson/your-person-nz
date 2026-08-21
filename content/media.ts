// Central place to swap in real photography. To replace a placeholder:
//   1. Add the image file to /public/images/ using the filename below.
//   2. Flip that entry's `ready` flag to `true`.
// That's it — no other code needs to change. Leaving `ready: false` keeps the
// styled placeholder block showing instead of a broken image request.

export const media = {
  heroImage: {
    // Recommended: 1600x2000px (4:5 portrait), .jpg or .webp, under ~400KB.
    // Warm, editorial, real photography — a New Zealand home, a garden, a
    // doorway, hands doing something practical. NOT a posed elderly couple,
    // NOT clinical/medical imagery, NOT a dotted flight-path map.
    src: "/images/hero-home.jpg",
    alt: "A warm, sunlit New Zealand home in Christchurch",
    ready: false,
  },
  founderPhoto: {
    // Recommended: 800x1000px (4:5 portrait), .jpg or .webp, under ~300KB.
    // A genuine, professional headshot/portrait of the founder.
    src: "/images/founder-photo.jpg",
    alt: "PLACEHOLDER — photo of the founder of Your Person NZ",
    ready: false,
  },
} as const;
