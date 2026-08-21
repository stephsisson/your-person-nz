import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site, footerNav } from "@/content/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper-dim">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg text-ink">{site.name}</p>
            <p className="mt-2 text-sm text-ink-soft">{site.tagline}</p>
            <p className="mt-4 text-sm text-ink-soft">
              Currently launching in {site.serviceAreaShort}.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Explore</p>
            <ul className="mt-3 space-y-2">
              {footerNav.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-soft hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Legal</p>
            <ul className="mt-3 space-y-2">
              {footerNav.slice(7).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-soft hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Get in touch</p>
            <p className="mt-3 text-sm text-ink-soft">
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <p className="mt-10 text-xs text-ink-soft/80">
          &copy; {new Date().getFullYear()} {site.legalName}. Your Person NZ is not a healthcare
          provider and does not provide medical, personal care, financial or legal advice. For
          emergencies, always contact emergency services on 111.
        </p>
      </Container>
    </footer>
  );
}
