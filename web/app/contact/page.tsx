import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { servicesQuickLinks } from "@/lib/site";
import "../contact.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MPM Services Melbourne — call 0451 460 307, email info@mpmservices.com.au, or send a message for steam cleaning, strip and polish and property maintenance.",
  alternates: { canonical: `${site.url}/contact` },
};

const channels = [
  {
    icon: "phone" as const,
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phoneIntl}`,
  },
  {
    icon: "mail" as const,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "mapPin" as const,
    label: "Based in",
    value: site.location,
    href: "/service-areas",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your property"
        subtitle="Whatever you need — a question, a quick idea, or a full quote — we're easy to reach. Choose what works best for you."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="section" aria-labelledby="contact-heading">
        <div className="container contact-layout">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Get in touch"
                title="Send us a message"
                subtitle="Fill in the form and we'll get back to you. It's connected to the live system as part of the final launch."
                id="contact-heading"
              />
              <div className="contact-form-wrap">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <aside className="contact-sidebar" aria-label="Contact details">
            <Reveal delay={100}>
              <ul className="contact-channels" role="list">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      className="contact-channel"
                      {...(channel.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <span className="contact-channel__icon" aria-hidden="true">
                        <Icon name={channel.icon} size={22} />
                      </span>
                      <span>
                        <span className="contact-channel__label">{channel.label}</span>
                        <span className="contact-channel__value">{channel.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <div className="contact-sidebar__block">
                <h2>Social</h2>
                <p>Follow MPM Services for updates and recent activity.</p>
                <div className="contact-sidebar__social">
                  <a
                    href={site.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary btn--sm"
                  >
                    Facebook
                  </a>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary btn--sm"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="contact-sidebar__block">
                <h2>Ready for a quote?</h2>
                <p>
                  For a detailed quote on any of our services, the fastest way is our
                  step-by-step quote form.
                </p>
                <a href="/quote" className="btn btn--primary btn--md">
                  Get a Free Quote
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="contact-services-heading">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Jump straight to a service"
              align="center"
              id="contact-services-heading"
            />
          </Reveal>
          <ul className="contact-services" style={{ marginTop: "var(--space-8)" }} role="list">
            {servicesQuickLinks.map((service, index) => (
              <Reveal as="li" key={service.href} delay={index * 80}>
                <a className="contact-service-link" href={service.href}>
                  {service.label}
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}