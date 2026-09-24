import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import "./CtaSection.css";

type CtaSectionProps = {
  title?: string;
  subtitle?: string;
  dark?: boolean;
};

export default function CtaSection({
  title = "Ready to improve your property? Request a quote.",
  subtitle = "Tell us about your job and we'll get back to you with a clear, no-obligation quote. Prefer to talk? Give us a call.",
  dark = false,
}: CtaSectionProps) {
  return (
    <section
      className={`cta-band${dark ? " cta-band--dark" : ""}`}
      aria-label="Request a quote"
    >
      <div className="container cta-band__inner">
        <Reveal>
          <div className="cta-band__content">
            <h2 className="cta-band__title">{title}</h2>
            <p className="cta-band__subtitle">{subtitle}</p>
            <div className="cta-band__actions">
              <Link href="/quote" className="btn btn--primary btn--lg">
                Get a Free Quote
              </Link>
              <a href={`tel:${site.phoneIntl}`} className="btn btn--secondary btn--lg">
                Call {site.phoneShort}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}