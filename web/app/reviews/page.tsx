import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/sections/CtaSection";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";
import "../reviews.css";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Genuine customer reviews for MPM Services Melbourne. We're collecting and verifying real feedback — see our latest updates on Facebook and Instagram.",
  alternates: { canonical: `${site.url}/reviews` },
};

const sources = [
  {
    label: "Facebook",
    body: "Follow MPM Services for regular updates and customer activity.",
    href: site.facebook,
  },
  {
    label: "Instagram",
    body: "See recent work and behind-the-scenes updates on Instagram.",
    href: site.instagram,
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="Genuine customer feedback"
        subtitle="We're committed to honesty. Verified reviews from real MPM Services customers will appear on this page as they are collected and confirmed — nothing fabricated, ever."
        crumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
      />

      <section className="section" aria-labelledby="reviews-page-heading">
        <div className="container container--narrow">
          <Reveal>
            <SectionHeading
              eyebrow="The honest state of things"
              title="Reviews are on the way"
              subtitle="MPM Services treats reviews as proof of trust. Rather than inventing feedback, this page will be filled with real, verifiable customer experiences — starting with the first confirmed reviews."
              align="center"
              id="reviews-page-heading"
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="reviews-empty" role="note">
              <span className="reviews-empty__icon" aria-hidden="true">
                <Icon name="star" size={30} />
              </span>
              <h3>No verified reviews yet</h3>
              <p>
                We don&apos;t fake reviews. Once genuine customer feedback is collected and
                verified, it will be published here with the customer&apos;s permission.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <ul className="reviews-sources" style={{ marginTop: "var(--space-8)" }} role="list">
              {sources.map((source) => (
                <li key={source.label}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reviews-source-card"
                  >
                    <span className="reviews-source-card__icon" aria-hidden="true">
                      <Icon name="link" size={20} />
                    </span>
                    <span>
                      <span className="reviews-source-card__label">{source.label}</span>
                      <span className="reviews-source-card__body">{source.body}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={220}>
            <div className="reviews-invite">
              <h3>Had work done by MPM Services?</h3>
              <p>
                We&apos;d love to hear about your experience. Get in touch and we&apos;ll
                work with you to publish a verified review.
              </p>
              <a className="btn btn--primary btn--md" href={`mailto:${site.email}`}>
                Email {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}