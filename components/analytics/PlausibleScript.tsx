import Script from "next/script";

// Plausible is opt-in via env var so local dev never sends real traffic data.
// See README for setup — no cookie banner is required because Plausible
// doesn't use cookies or collect personal data.
export function PlausibleScript() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.tagged-events.js"
      strategy="afterInteractive"
    />
  );
}
