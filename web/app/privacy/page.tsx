import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import { site } from "@/lib/site";
import "../legal.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MPM Services collects, uses and protects your personal information.",
  alternates: { canonical: `${site.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="A plain-English summary of how MPM Services handles personal information."
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="section">
        <div className="container container--narrow">
          <div className="legal">
            <h2>Overview</h2>
            <p>
              This privacy policy explains how Melbourne Property Management and Services
              ({" "}<strong>{site.brand}</strong>) collects, uses and protects the personal
              information you provide when you use this website or contact us.
            </p>

            <h2>Information we collect</h2>
            <p>We may collect the following information when you interact with us:</p>
            <ul>
              <li>Name and contact details (such as phone number and email address)</li>
              <li>Details you provide about your property and the services you&apos;re enquiring about</li>
              <li>Basic technical data if you contact us through website forms</li>
            </ul>

            <h2>How we use your information</h2>
            <p>We use personal information to:</p>
            <ul>
              <li>Respond to enquiries and provide quotes</li>
              <li>Arrange and carry out services you request</li>
              <li>Communicate about your job</li>
              <li>Improve our website and customer service</li>
            </ul>
            <p>
              We do not sell your personal information to third parties.
            </p>

            <h2>Lead form note</h2>
            <p>
              This website is a frontend-first build. Enquiry forms capture the details you
              enter and are designed to be connected to a backend once live. Until then,
              please contact us directly by <a href={`tel:${site.phoneIntl}`}>phone</a> or{" "}
              <a href={`mailto:${site.email}`}>email</a> for the quickest response.
            </p>

            <h2>Cookies and analytics</h2>
            <p>
              We may use basic analytics to understand how visitors use this site. You can
              adjust your browser settings to reject cookies at any time.
            </p>

            <h2>Data security</h2>
            <p>
              We take reasonable steps to protect personal information from misuse, loss and
              unauthorised access, modification or disclosure.
            </p>

            <h2>Contact us</h2>
            <p>
              Questions about this policy or your personal information? Contact us at{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}