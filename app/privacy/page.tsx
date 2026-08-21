import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { LegalPlaceholderNotice } from "@/components/sections/LegalPlaceholderNotice";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/pageMetadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${site.name} handles personal information submitted through this website.`,
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16 sm:py-24">
        <Container className="max-w-2xl">
          <LegalPlaceholderNotice />
          <div className="space-y-6 text-ink-soft">
            <p>
              {site.name} collects the information you submit through our enquiry form — your
              name, contact details, and details about the support your family is looking for —
              in order to respond to your enquiry and, if you agree, keep you updated about the
              Christchurch pilot.
            </p>
            <p>
              We do not knowingly collect sensitive health information through this website during
              the pilot phase. We do not sell personal information to third parties.
            </p>
            <p>
              PLACEHOLDER — this policy needs to be completed to meet the New Zealand Privacy Act
              2020, including details on: what data is collected and why, where it is stored
              (currently a third-party form/database provider), how long it is retained, how
              individuals can request access to or deletion of their data, and contact details for
              privacy queries.
            </p>
            <p>
              Contact: <a href={`mailto:${site.email}`} className="text-teal hover:text-teal-dark">{site.email}</a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
