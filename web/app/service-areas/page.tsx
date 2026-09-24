import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/sections/CtaSection";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { coverageCopy, serviceAreas, pendingSuburbAreas } from "@/lib/mock-data/service-areas";
import { services } from "@/lib/mock-data/services";
import "../service-areas.css";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "MPM Services covers Melbourne, VIC with professional steam cleaning, strip and polish, and property maintenance. Get a free quote across Melbourne today.",
  alternates: { canonical: `${site.url}/service-areas` },
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service Areas"
        title={coverageCopy.heading}
        subtitle="Property services across Melbourne, VIC. Find out where we work — and how to request a quote for your property."
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
      />

      <section className="section" aria-labelledby="areas-covered-heading">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Where we work"
              title="Serving Melbourne, VIC"
              subtitle={coverageCopy.intro}
              id="areas-covered-heading"
            />
          </Reveal>

          <ul className="areas-grid" style={{ marginTop: "var(--space-10)" }} role="list">
            {serviceAreas.map((area, index) => (
              <Reveal as="li" key={area.name} delay={index * 90}>
                <div className="area-card">
                  <span className="area-card__pin" aria-hidden="true">
                    <Icon name="mapPin" size={24} />
                  </span>
                  <div>
                    <h3 className="area-card__name">{area.name}</h3>
                    <p className="area-card__scope">Melbourne, VIC, Australia</p>
                    <p className="area-card__status">Confirmed coverage</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={140}>
            <p className="areas-note">{coverageCopy.note}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="areas-services-heading">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Available across Melbourne"
              title="Our services in your area"
              subtitle="All three core MPM Services are available for properties across Melbourne."
              align="center"
              id="areas-services-heading"
            />
          </Reveal>
          <ul className="areas-services" style={{ marginTop: "var(--space-8)" }} role="list">
            {services.map((service, index) => (
              <Reveal as="li" key={service.slug} delay={index * 80}>
                <a className="areas-service-link" href={service.href}>
                  <Icon name="check" size={18} />
                  {service.name}
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="areas-pending-heading">
        <div className="container container--narrow">
          <Reveal>
            <SectionHeading
              eyebrow="Keeping it honest"
              title="Areas under review"
              subtitle="A few suburbs are referenced in MPM's public social posts but haven't been confirmed with the client yet. We'll add them here — honestly — once verified."
              id="areas-pending-heading"
            />
          </Reveal>
          <ul className="areas-pending" style={{ marginTop: "var(--space-8)" }} role="list">
            {pendingSuburbAreas.map((area) => (
              <li key={area.name} className="areas-pending__item">
                <span className="areas-pending__name">{area.name}</span>
                <span className="areas-pending__source">{area.source}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}