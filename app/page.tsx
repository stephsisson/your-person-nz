import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Recognition } from "@/components/sections/Recognition";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Positioning } from "@/components/sections/Positioning";
import { FounderBio } from "@/components/sections/FounderBio";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ForFamiliesOverseas } from "@/components/sections/ForFamiliesOverseas";
import { TravelCompanionTeaser } from "@/components/sections/TravelCompanionTeaser";
import { PilotPricing } from "@/components/sections/PilotPricing";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { faqPageSchema } from "@/lib/schema";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${site.name} — Your person back home`,
  description: site.entityDescription,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema()) }}
      />
      <Hero />
      <Recognition />
      <WhatWeDo />
      <Positioning />
      <FounderBio condensed />
      <HowItWorks />
      <ForFamiliesOverseas />
      <TravelCompanionTeaser />
      <PilotPricing />
      <FAQSection />

      <section id="form" className="py-16 sm:py-24 border-b border-ink/10">
        <Container className="max-w-2xl">
          <SectionHeading
            eyebrow="Get in touch"
            title="Tell us about your family"
            description="No payment, no commitment — this helps us understand what overseas families actually need as we build the Christchurch pilot."
          />
          <div className="mt-10">
            <EnquiryForm source="homepage-founding-pilot" />
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
