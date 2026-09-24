import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/services/ServiceCard";
import CtaSection from "@/components/sections/CtaSection";
import { services } from "@/lib/mock-data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three core services from MPM Services across Melbourne: professional steam cleaning, strip and polish for hard floors, and practical property maintenance. Get a free quote.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Three core services, one dependable team"
        subtitle="We keep our offering focused so we can deliver each service well. Browse what MPM Services does across Melbourne — or jump straight to a free quote."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <section className="section" aria-label="Our services">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 90}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}