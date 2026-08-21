import { ReactNode } from "react";

export function Card({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-ink/10 bg-white p-6 sm:p-7 shadow-sm ${className}`}
    >
      {title ? <h3 className="mb-2 text-xl font-display text-ink">{title}</h3> : null}
      {children}
    </div>
  );
}
