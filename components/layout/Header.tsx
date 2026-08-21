"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { primaryNav, navCta, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <Container className="flex h-16 sm:h-20 items-center justify-between">
        <Link href="/" className="font-display text-lg sm:text-xl text-ink" onClick={() => setOpen(false)}>
          {site.name}
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={navCta.href} className="text-sm px-5 py-2.5">
            {navCta.label}
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </Container>

      {open ? (
        <div className="lg:hidden border-t border-ink/10 bg-paper">
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2.5 text-base font-medium text-ink-soft hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button href={navCta.href} className="mt-3 w-full" onClick={() => setOpen(false)}>
              {navCta.label}
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
