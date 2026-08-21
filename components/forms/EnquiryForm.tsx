"use client";

import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const serviceOptions = [
  { value: "ongoing-local-support", label: "Ongoing local support" },
  { value: "one-off-help", label: "One-off help" },
  { value: "house-checks", label: "House checks" },
  { value: "coordinating-trades", label: "Coordinating trades / services" },
  { value: "travel-companion", label: "Travel companion" },
  { value: "not-sure-yet", label: "Not sure yet" },
] as const;

export function EnquiryForm({
  source,
  defaultServiceInterest,
  compact = false,
}: {
  /** Which CTA/section triggered this form — tagged on the submission for reporting. */
  source: string;
  defaultServiceInterest?: (typeof serviceOptions)[number]["value"];
  compact?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const hasTrackedStart = useRef(false);

  function handleFirstInteraction() {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      trackEvent("enquiry_start", { source });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      liveLocation: String(formData.get("liveLocation") || ""),
      parentSuburb: String(formData.get("parentSuburb") || ""),
      helpingWho: String(formData.get("helpingWho") || ""),
      mostWantHelpWith: String(formData.get("mostWantHelpWith") || ""),
      currentlyOrganising: String(formData.get("currentlyOrganising") || ""),
      serviceInterest: String(formData.get("serviceInterest") || ""),
      wouldConsiderPaying: String(formData.get("wouldConsiderPaying") || ""),
      anythingElse: String(formData.get("anythingElse") || ""),
      source,
      companyWebsite: String(formData.get("companyWebsite") || ""),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      trackEvent("enquiry_submit", { source });
      if (payload.serviceInterest === "travel-companion") {
        trackEvent("travel_companion_click", { source });
      }
      trackEvent("pilot_application", { source });
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong sending that through. Please try again, or email us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal-light p-8 text-center">
        <p className="font-display text-2xl text-ink">You&apos;re on the list.</p>
        <p className="mt-3 text-ink-soft">
          Thanks — we&apos;ll be in touch personally as the Christchurch pilot takes shape.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFirstInteraction} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real users, visible to most bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Leave this field empty</label>
        <input id="companyWebsite" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
      </div>

      <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field label="Phone / WhatsApp number" name="phone" required autoComplete="tel" />
        <Field label="Where do you live?" name="liveLocation" required placeholder="e.g. Melbourne, Australia" />
      </div>

      <Field
        label="Parent / family member's suburb or town in Canterbury"
        name="parentSuburb"
        required
        placeholder="e.g. Fendalton, Christchurch"
      />

      <Field label="Who are you looking for help for?" name="helpingWho" required placeholder="e.g. My mum" />

      <TextArea label="What would you most like help with?" name="mostWantHelpWith" required />

      <TextArea
        label="What are you currently organising from overseas?"
        name="currentlyOrganising"
        required={false}
      />

      <div>
        <label className="block text-sm font-medium text-ink mb-2">Which service interests you?</label>
        <select
          name="serviceInterest"
          required
          defaultValue={defaultServiceInterest || ""}
          className="w-full rounded-lg border border-ink/20 bg-white px-4 py-3 text-ink focus-visible:outline-teal"
        >
          <option value="" disabled>
            Select an option
          </option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-ink mb-2">
          If an ongoing service cost approximately NZ$199–299/month, would you consider paying for it?
        </legend>
        <div className="flex gap-6">
          {["yes", "possibly", "no"].map((value) => (
            <label key={value} className="flex items-center gap-2 text-sm text-ink-soft">
              <input type="radio" name="wouldConsiderPaying" value={value} required />
              <span className="capitalize">{value}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <TextArea label="Anything else we should know?" name="anythingElse" required={false} />

      {errorMessage ? <p className="text-sm text-red-700">{errorMessage}</p> : null}

      <Button type="submit" className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Tell me when the pilot opens"}
      </Button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-lg border border-ink/20 bg-white px-4 py-3 text-ink placeholder:text-ink-soft/50 focus-visible:outline-teal"
      />
    </div>
  );
}

function TextArea({
  label,
  name,
  required = true,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink mb-2">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={3}
        className="w-full rounded-lg border border-ink/20 bg-white px-4 py-3 text-ink placeholder:text-ink-soft/50 focus-visible:outline-teal"
      />
    </div>
  );
}
