import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CtaSection from "@/components/sections/CtaSection";
import { faqs } from "@/lib/mock-data/faqs";
import { services } from "@/lib/mock-data/services";
import { site } from "@/lib/site";
import Icon from "@/components/ui/Icon";
import { faqPageGraph } from "@/lib/seo";
import "../faq.css";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Honest answers to common questions about MPM Services — steam cleaning, strip and polish, property maintenance, quotes and more across Melbourne.",
  alternates: { canonical: `${site.url}/faq` },
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQs"
        title="Common questions, honest answers"
        subtitle="No overpromising, no fine print. Here's how MPM Services actually works, in plain language."
        crumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />

      <section className="section" aria-labelledby="faq-page-heading">
        <div className="container container--narrow">
          <Reveal>
            <SectionHeading
              eyebrow="General"
              title="Questions about MPM Services"
              align="center"
              id="faq-page-heading"
            />
          </Reveal>
          <Reveal delay={100}>
            <div style={{ marginTop: "var(--space-8)" }}>
              <FAQAccordion items={faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="faq-service-heading">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Service-specific FAQs"
              title="Questions by service"
              subtitle="Each service has its own FAQ covering timing, materials and what to expect."
              align="center"
              id="faq-service-heading"
            />
          </Reveal>
          <div className="faq-service-links" style={{ marginTop: "var(--space-8)" }}>
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 90}>
                <a className="faq-service-link" href={service.href}>
                  <span className="faq-service-link__icon" aria-hidden="true">
                    <Icon name="doc" size={20} />
                  </span>
                  <span>
                    <span className="faq-service-link__name">{service.name}</span>
                    <span className="faq-service-link__hint">See service FAQs</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-contact-heading">
        <div className="container container--narrow">
          <Reveal>
            <SectionHeading
              eyebrow="Still curious?"
              title="Ask us directly"
              subtitle="If your question isn't covered here, we're happy to answer it personally."
              align="center"
              id="faq-contact-heading"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="faq-contact" style={{ marginTop: "var(--space-8)" }}>
              <p className="faq-contact__actions">
                <a href={`tel:${site.phoneIntl}`} className="btn btn--primary btn--md">
                  Call {site.phoneShort}
                </a>
                <a href={`mailto:${site.email}`} className="btn btn--secondary btn--md">
                  Email us
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageGraph(faqs)) }}
      />
    </>
  );
}