import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/sections/CtaSection";
import { services } from "@/lib/mock-data/services";
import { site } from "@/lib/site";
import "../about.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "About MPM Services — a Melbourne property services team focused on steam cleaning, strip and polish, and property maintenance, built on honest communication.",
  alternates: { canonical: `${site.url}/about` },
};

const values = [
  {
    title: "Honesty",
    body: "We set realistic expectations before work starts and never overpromise results.",
  },
  {
    title: "Reliability",
    body: "A dependable local team you can count on to turn up and do what was agreed.",
  },
  {
    title: "Attention to detail",
    body: "Thorough, careful work on every property — and honest guidance on aftercare.",
  },
  {
    title: "Clear communication",
    body: "You'll always know what's involved, what to expect and when the job gets done.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A local Melbourne business, focused on doing property services properly"
        subtitle="MPM Services is built on three core services and a simple idea: communicate clearly, do the work well, and treat every property like it matters."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="section" aria-labelledby="about-story-heading">
        <div className="container about-grid">
          <Reveal>
            <div className="about-visual">
              <Image
                src="/images/about-work.jpg"
                alt="MPM Services professional carrying out property maintenance work"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <SectionHeading
                eyebrow="Our story"
                title="Focused on the services that matter most"
                id="about-story-heading"
              />
              <div className="about-prose" style={{ marginTop: "var(--space-6)" }}>
                <p>
                  Melbourne Property Management and Services — MPM Services — is a
                  Melbourne-based property services business. Instead of trying to be
                  everything to everyone, we keep our offering focused on three services
                  we can deliver well: professional steam cleaning, strip and polish for
                  hard floors, and practical property maintenance.
                </p>
                <p>
                  We work with homeowners, landlords, property managers and business
                  operators who value straightforward communication and reliable results.
                  Every job starts with a conversation — so there are no surprises about
                  what&apos;s involved, what it costs, or what the outcome will be.
                </p>
                <p>
                  This website is our promise in action: honest about what we do, clear
                  about how we work, and open about the results we&apos;re building and will
                  share with you.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our services */}
      <section className="section section--alt" aria-labelledby="about-services-heading">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Three services, done properly"
              align="center"
              id="about-services-heading"
            />
          </Reveal>
          <ul className="about-services" style={{ marginTop: "var(--space-10)" }} role="list">
            {services.map((service, index) => (
              <Reveal as="li" key={service.slug} delay={index * 90}>
                <Link href={service.href} className="about-service-card">
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                  <span className="about-service-card__link">Learn more</span>
                </Link>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <p style={{ textAlign: "center", marginTop: "var(--space-8)" }}>
              <Link href="/services" className="btn btn--ghost btn--md">
                View all services
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section" aria-labelledby="about-values-heading">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Our values"
              title="What we stand for"
              align="center"
              id="about-values-heading"
            />
          </Reveal>
          <ul className="about-values" style={{ marginTop: "var(--space-10)" }} role="list">
            {values.map((value, index) => (
              <Reveal as="li" key={value.title} delay={index * 90}>
                <div className="about-value-card">
                  <h3>{value.title}</h3>
                  <p>{value.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection />
    </>
  );
}