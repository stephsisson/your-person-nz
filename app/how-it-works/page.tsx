import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "How Your Person NZ works: tell us about your family, we get to know what matters, and we coordinate trusted local support in Christchurch and Canterbury whenever something needs sorting.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="How it works"
        title="A trusted local person for your family in Christchurch."
        description={
          <p>
            {site.name} is a coordination and concierge service for New Zealanders living overseas
            who have a parent or family member living independently in {site.serviceAreaFull}. We
            arrange and oversee practical, everyday support through trusted local providers — here&apos;s
            exactly how that works.
          </p>
        }
      />

      <HowItWorks />

      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl space-y-8">
          <div>
            <h2 className="font-display text-2xl text-ink">What happens after you get in touch</h2>
            <p className="mt-3 text-ink-soft">
              We start with a conversation — about the house, about your parent&apos;s preferences,
              about what&apos;s already being managed well and where the gaps are. From there, we
              build a simple picture of the household so that when something does come up, we&apos;re
              not starting from scratch.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">When something needs sorting</h2>
            <p className="mt-3 text-ink-soft">
              Either you or your parent gets in touch — by phone, message or email, whichever suits.
              We coordinate the right local support, whether that&apos;s a tradesperson, a house
              check, or simply being present for something that needs a person on the ground.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">Staying in the loop</h2>
            <p className="mt-3 text-ink-soft">
              You get plain-language updates and, where relevant, photos — so you always know what
              was done, what it cost, and what (if anything) needs deciding next.
            </p>
          </div>
          <div className="pt-4">
            <Button href="/contact">Join the founding family pilot</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
