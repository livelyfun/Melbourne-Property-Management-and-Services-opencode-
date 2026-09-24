import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import QuoteForm from "@/components/forms/QuoteForm";
import { site } from "@/lib/site";
import "../quote.css";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Request a free, no-obligation quote from MPM Services for steam cleaning, strip and polish, or property maintenance across Melbourne.",
  alternates: { canonical: `${site.url}/quote` },
};

const next = [
  {
    title: "We review your request",
    body: "Our team checks the details you've shared about your job.",
  },
  {
    title: "We come back to you",
    body: "We follow up by phone or email to confirm what's involved.",
  },
  {
    title: "You get a clear quote",
    body: "A straightforward, no-obligation quote for the work — then you decide.",
  },
];

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Free Quote"
        title="Request a free quote"
        subtitle="Tell us about your job and we'll come back with a clear, no-obligation quote. Questions first? Call 0451 460 307."
        crumbs={[{ label: "Home", href: "/" }, { label: "Get a Quote" }]}
      />

      <section className="section" aria-labelledby="quote-page-form">
        <div className="container quote-layout">
          <Reveal>
            <div className="quote-form-wrap">
              <QuoteForm />
            </div>
          </Reveal>

          <aside className="quote-sidebar" aria-label="Quote information">
            <div className="quote-sidebar__block">
              <h2>What happens next</h2>
              <ol className="quote-next">
                {next.map((step, index) => (
                  <li key={step.title}>
                    <span className="quote-next__num" aria-hidden="true">
                      {index + 1}
                    </span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="quote-sidebar__block quote-sidebar__block--contact">
              <h2>Prefer to talk?</h2>
              <p>
                Call or email us directly and we&apos;ll help you get sorted faster.
              </p>
              <p>
                <a href={`tel:${site.phoneIntl}`} className="text-link">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="text-link">
                  {site.email}
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}