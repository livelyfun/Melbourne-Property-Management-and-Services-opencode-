import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="section section--alt">
      <div className="container container--narrow" style={{ textAlign: "center", paddingBlock: "var(--space-16)" }}>
        <p className="eyebrow" style={{ justifyContent: "center" }}>
          Error 404
        </p>
        <h1 style={{ marginTop: "var(--space-4)", fontSize: "var(--text-4xl)" }}>
          Page not found
        </h1>
        <p style={{ marginTop: "var(--space-4)", color: "var(--color-ink-soft)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
          you back on track.
        </p>
        <div
          style={{
            marginTop: "var(--space-8)",
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-4)",
            justifyContent: "center",
          }}
        >
          <Link href="/" className="btn btn--primary btn--lg">
            Back to Home
          </Link>
          <Link href="/quote" className="btn btn--secondary btn--lg">
            Get a Free Quote
          </Link>
        </div>
        <p style={{ marginTop: "var(--space-8)", color: "var(--color-ink-soft)" }}>
          Need help? Call{" "}
          <a href={`tel:${site.phoneIntl}`} className="text-link">
            {site.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${site.email}`} className="text-link">
            {site.email}
          </a>
        </p>
      </div>
    </section>
  );
}