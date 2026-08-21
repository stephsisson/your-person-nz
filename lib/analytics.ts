"use client";

// Thin wrapper around Plausible's custom events. Safe to call even if the
// Plausible script hasn't loaded (e.g. blocked by an ad blocker, or in local
// dev without NEXT_PUBLIC_PLAUSIBLE_DOMAIN set) — it just no-ops.

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
  }
}

export type AnalyticsEvent =
  | "enquiry_start"
  | "enquiry_submit"
  | "travel_companion_click"
  | "membership_cta_click"
  | "pilot_application"
  | "guide_view";

export function trackEvent(event: AnalyticsEvent, props?: Record<string, string>) {
  if (typeof window === "undefined" || !window.plausible) return;
  window.plausible(event, props ? { props } : undefined);
}
