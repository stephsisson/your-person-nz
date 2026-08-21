import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site, finalCtaContent } from "@/content/siteContent";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 bg-teal text-white">
      <Container className="text-center">
        <h2 className="font-display text-3xl sm:text-4xl max-w-2xl mx-auto">
          {finalCtaContent.heading}
        </h2>
        <p className="mt-4 text-lg text-white/90">
          {site.name}. {site.tagline}
        </p>
        <div className="mt-8">
          <Button
            href="/contact"
            variant="secondary"
            className="border-white text-white hover:bg-white/10 hover:border-white"
          >
            {finalCtaContent.ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
