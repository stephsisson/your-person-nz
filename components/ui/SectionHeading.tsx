import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-teal">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl sm:text-4xl font-display leading-tight text-ink">{title}</h2>
      {description ? <p className="mt-4 text-lg text-ink-soft">{description}</p> : null}
    </div>
  );
}
