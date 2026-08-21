import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-ink/10 bg-paper-dim py-14 sm:py-20">
      <Container>
        {eyebrow ? (
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-teal">{eyebrow}</p>
        ) : null}
        <h1 className="font-display text-4xl sm:text-5xl leading-tight text-ink max-w-3xl">
          {title}
        </h1>
        {description ? (
          <div className="mt-5 text-lg text-ink-soft max-w-2xl">{description}</div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
