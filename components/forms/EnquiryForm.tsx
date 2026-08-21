"use client";

import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import { enquiryFormContent } from "@/content/siteContent";

const { fieldLabels, serviceOptions, payingOptions } = enquiryFormContent;

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
      setErrorMessage(enquiryFormContent.errorMessage);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal-light p-8 text-center">
        <p className="font-display text-2xl text-ink">{enquiryFormContent.successHeading}</p>
        <p className="mt-3 text-ink-soft">{enquiryFormContent.successBody}</p>
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
        <Field label={fieldLabels.name} name="name" required autoComplete="name" />
        <Field label={fieldLabels.email} name="email" type="email" required autoComplete="email" />
      </div>

      <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
        <Field label={fieldLabels.phone} name="phone" required autoComplete="tel" />
        <Field
          label={fieldLabels.liveLocation}
          name="liveLocation"
          required
          placeholder={fieldLabels.liveLocationPlaceholder}
        />
      </div>

      <Field
        label={fieldLabels.parentSuburb}
        name="parentSuburb"
        required
        placeholder={fieldLabels.parentSuburbPlaceholder}
      />

      <Field
        label={fieldLabels.helpingWho}
        name="helpingWho"
        required
        placeholder={fieldLabels.helpingWhoPlaceholder}
      />

      <TextArea label={fieldLabels.mostWantHelpWith} name="mostWantHelpWith" required />

      <TextArea label={fieldLabels.currentlyOrganising} name="currentlyOrganising" required={false} />

      <div>
        <label className="block text-sm font-medium text-ink mb-2">{fieldLabels.serviceInterest}</label>
        <select
          name="serviceInterest"
          required
          defaultValue={defaultServiceInterest || ""}
          className="w-full rounded-lg border border-ink/20 bg-white px-4 py-3 text-ink focus-visible:outline-teal"
        >
          <option value="" disabled>
            {fieldLabels.serviceInterestPlaceholder}
          </option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-ink mb-2">{fieldLabels.wouldConsiderPaying}</legend>
        <div className="flex gap-6">
          {payingOptions.map((value) => (
            <label key={value} className="flex items-center gap-2 text-sm text-ink-soft">
              <input type="radio" name="wouldConsiderPaying" value={value} required />
              <span className="capitalize">{value}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <TextArea label={fieldLabels.anythingElse} name="anythingElse" required={false} />

      {errorMessage ? <p className="text-sm text-red-700">{errorMessage}</p> : null}

      <Button type="submit" className="w-full sm:w-auto">
        {status === "submitting" ? enquiryFormContent.submittingLabel : enquiryFormContent.submitLabel}
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
