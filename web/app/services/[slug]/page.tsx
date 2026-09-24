import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ProcessSection from "@/components/sections/ProcessSection";
import CtaSection from "@/components/sections/CtaSection";
import ImageCard from "@/components/gallery/ImageCard";
import { services, getServiceBySlug } from "@/lib/mock-data/services";
import { galleryItems } from "@/lib/mock-data/gallery";
import { site } from "@/lib/site";
import Icon from "@/components/ui/Icon";
import { breadcrumbGraph, faqPageGraph } from "@/lib/seo";
import "../service-detail.css";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `${site.url}${service.href}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedImages = galleryItems.filter((item) => item.category === service.slug);

  return (
    <>
      {/* Media header */}
      <header className="service-hero">
        <div className="service-hero__media" aria-hidden="true">
          <Image
            src={service.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="service-hero__overlay" />
        </div>
        <div className="container service-hero__inner">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><span aria-current="page">{service.name}</span></li>
            </ol>
          </nav>
          <p className="eyebrow eyebrow--on-dark">MPM Services</p>
          <h1 className="service-hero__title">{service.name}</h1>
          <p className="service-hero__summary">{service.summary}</p>
          <div className="service-hero__actions">
            <Link href="/quote" className="btn btn--primary btn--lg">
              Get a Free Quote
            </Link>
            <a href={`tel:${site.phoneIntl}`} className="btn btn--on-dark btn--lg">
              Call {site.phoneShort}
            </a>
          </div>
        </div>
      </header>

      {/* Overview */}
      <section className="section" aria-labelledby={`${service.slug}-overview`}>
        <div className="container container--narrow">
          <Reveal>
            <SectionHeading eyebrow="Overview" title="What to expect" id={`${service.slug}-overview`} />
            <div className="prose" style={{ marginTop: "var(--space-8)" }}>
              {service.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section--alt" aria-labelledby={`${service.slug}-benefits`}>
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Why it helps"
              title="The practical benefits"
              align="center"
              id={`${service.slug}-benefits`}
            />
          </Reveal>
          <ul
            className="benefit-grid"
            style={{ marginTop: "var(--space-10)" }}
            role="list"
          >
            {service.benefits.map((benefit, index) => (
              <Reveal as="li" key={benefit.title} delay={index * 90}>
                <div className="benefit-card">
                  <span className="benefit-card__icon" aria-hidden="true">
                    <Icon name="check" size={20} />
                  </span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section" aria-labelledby={`${service.slug}-who`}>
        <div className="container container--narrow">
          <Reveal>
            <SectionHeading
              eyebrow="Who it's for"
              title="Is this service right for you?"
              id={`${service.slug}-who`}
            />
            <ul className="who-list" style={{ marginTop: "var(--space-8)" }} role="list">
              {service.whoFor.map((item) => (
                <li key={item}>
                  <span className="who-list__mark" aria-hidden="true">
                    <Icon name="check" size={16} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <ProcessSection
        title="How it works"
        subtitle="The same clear process applies to every MPM Services job."
        steps={service.process}
        tone="light"
        eyebrow="Process"
        id={`${service.slug}-process`}
      />

      {/* Service gallery images */}
      {relatedImages.length > 0 ? (
        <section className="section" aria-labelledby={`${service.slug}-gallery`}>
          <div className="container">
            <Reveal>
              <SectionHeading
                eyebrow="Gallery"
                title={`${service.name} in context`}
                subtitle="Stock imagery shown for context — real MPM results will replace these as they become available."
                id={`${service.slug}-gallery`}
              />
            </Reveal>
            <div className="service-gallery" style={{ marginTop: "var(--space-10)" }}>
              {relatedImages.map((item, index) => (
                <Reveal key={item.id} delay={index * 80}>
                  <ImageCard
                    src={item.src}
                    alt={item.alt}
                    caption={item.caption}
                    aspect={item.aspect !== "tall" ? "wide" : "tall"}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Service FAQs */}
      <section className="section section--alt" aria-labelledby={`${service.slug}-faqs`}>
        <div className="container container--narrow">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title={`${service.name}: common questions`}
              align="center"
              id={`${service.slug}-faqs`}
            />
          </Reveal>
          <Reveal delay={100}>
            <div style={{ marginTop: "var(--space-10)" }}>
              <FAQAccordion items={service.faqs} />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection dark />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbGraph([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: service.name, url: service.href },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageGraph(service.faqs)) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            serviceType: service.name,
            description: service.summary,
            url: `${site.url}${service.href}`,
            provider: { "@id": `${site.url}/#localbusiness` },
            areaServed: { "@type": "City", name: "Melbourne" },
            offers: { "@type": "Offer", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "AUD" } },
          }),
        }}
      />
    </>
  );
}