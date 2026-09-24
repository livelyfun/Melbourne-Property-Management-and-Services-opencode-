import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { site } from "@/lib/site";
import "../legal.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply when requesting and using MPM Services across Melbourne.",
  alternates: { canonical: `${site.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Simple terms for requesting quotes and engaging MPM Services."
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
      />

      <section className="section">
        <div className="container container--narrow">
          <div className="legal">
            <h2>These terms</h2>
            <p>
              These terms set out the basis on which Melbourne Property Management and
              Services (<strong>{site.brand}</strong>) provides property services across
              Melbourne, VIC, and on which you may use this website.
            </p>

            <h2>Quote and service engagement</h2>
            <p>When you request a quote you are making an enquiry only — no obligation applies. Engagement happens when:</p>
            <ul>
              <li>A quote is provided and you accept it, or</li>
              <li>You and MPM Services otherwise agree on scope, price and timing for work.</li>
            </ul>
            <p>
              Quotes are based on the information provided at the time. If the job
              situation differs materially when we arrive, we&apos;ll talk with you before
              proceeding.
            </p>

            <h2>Our commitment</h2>
            <ul>
              <li>Clear communication before, during and after each job</li>
              <li>Realistic expectations about outcomes and timing</li>
              <li>Careful, tidy work on your property</li>
            </ul>

            <h2>Products and materials</h2>
            <p>
              We will discuss relevant products and materials as part of your quote. Any
              specific product recommendations are made in the context of your job.
            </p>

            <h2>Access and preparation</h2>
            <p>
              For on-site work, you agree to provide reasonable access to the property and
              to follow any preparation guidance we provide so the job can be carried out
              safely.
            </p>

            <h2>Website use</h2>
            <p>
              Content on this website is provided for general information. Imagery shown is
              illustrative stock until real photos of completed MPM Services work are
              published. We do not misrepresent results.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}