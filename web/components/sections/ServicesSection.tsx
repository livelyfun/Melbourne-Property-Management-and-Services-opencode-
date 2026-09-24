import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/lib/mock-data/services";

export default function ServicesSection() {
  return (
    <section className="section" aria-labelledby="services-home-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title="Three specialist services, focused on getting it right"
            subtitle="Everything we do is organised around three core property services — delivered with clear communication from quote to completion."
            align="center"
            id="services-home-heading"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="services-grid" style={{ marginTop: "var(--space-12)" }}>
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}