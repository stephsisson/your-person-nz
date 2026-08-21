import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-paper">
      <Container className="grid gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink">
            Mum&apos;s in Christchurch. You&apos;re not.
            <br />
            <span className="text-teal">We&apos;re your person back home.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-soft max-w-xl">
            Practical local help for Kiwis overseas with parents and family in{" "}
            {site.serviceAreaFull} — from organising trusted trades and checking the house, to
            sorting the things that are difficult to manage from another country.
          </p>
          <p className="mt-4 text-sm font-medium text-teal-dark">
            Currently launching in {site.serviceAreaShort}.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact">Join the founding family pilot</Button>
            <Button href="/contact#form" variant="secondary">
              Tell us what you need help with
            </Button>
          </div>
        </div>

        {/* PLACEHOLDER — replace with real, licensed photography per the brief's
            visual direction (warm, editorial, NOT elderly-couple-on-a-beach stock,
            no clinical imagery). Subtle NZ-to-overseas distance motif is welcome
            if it's executed elegantly rather than as a cheesy flight-path map. */}
        <div
          role="img"
          aria-label="PLACEHOLDER — warm editorial photograph representing a New Zealand home and family connection across distance"
          className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-sand-light via-paper-dim to-teal-light border border-ink/10 flex items-center justify-center"
        >
          <span className="text-sm text-ink-soft/70 px-8 text-center">
            Photography placeholder — see photography brief in README
          </span>
        </div>
      </Container>
    </section>
  );
}
