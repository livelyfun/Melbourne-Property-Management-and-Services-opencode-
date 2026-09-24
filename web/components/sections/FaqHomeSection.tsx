import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { faqs } from "@/lib/mock-data/faqs";

export default function FaqHomeSection() {
  return (
    <section className="section" aria-labelledby="faq-home-heading">
      <div className="container container--narrow">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions, answered honestly"
            subtitle="No promises we can't keep. These answers reflect how MPM Services actually works."
            align="center"
            id="faq-home-heading"
          />
        </Reveal>
        <Reveal delay={120}>
          <div style={{ marginTop: "var(--space-10)" }}>
            <FAQAccordion items={faqs.slice(0, 5)} />
            <div style={{ textAlign: "center", marginTop: "var(--space-8)" }}>
              <Link href="/faq" className="btn btn--ghost btn--md">
                View all FAQs
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}