import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: "Travel Companion Support",
  description:
    "Your Person NZ is exploring door-to-door travel companion support for independent older travellers in New Zealand visiting family overseas. Register your interest.",
  path: "/travel-companion",
});

export default function TravelCompanionPage() {
  return (
    <>
      <PageIntro
        eyebrow="Travel companion"
        title="Want Mum or Dad to visit — but don't want them making the journey alone?"
        description={
          <p>
            We&apos;re exploring door-to-door travel companion support for independent older
            travellers visiting family overseas — from their home in {site.serviceAreaShort} to
            yours. It&apos;s early days, and we&apos;d genuinely like to hear if this is something
            your family would use.
          </p>
        }
      />

      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl space-y-6 text-ink-soft">
          <p>
            A long-haul flight isn&apos;t usually a question of whether an older, independent
            traveller <em>can</em> fly alone — airlines don&apos;t restrict travel based on age. It&apos;s
            a question of comfort and confidence over 24-plus hours, unfamiliar airports and tight
            connections.
          </p>
          <p>
            Door-to-door support — from home in New Zealand through to arrival with family overseas
            — removes the parts of a long trip that cause the most stress, so a visit doesn&apos;t
            get put off because the journey itself feels like too much.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-paper-dim border-t border-ink/10" id="form">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl text-ink mb-6">Register your interest</h2>
          <EnquiryForm source="travel-companion-page" defaultServiceInterest="travel-companion" />
        </Container>
      </section>
    </>
  );
}
