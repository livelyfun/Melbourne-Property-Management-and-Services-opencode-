import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";
import "./ReviewsTeaser.css";

export default function ReviewsTeaser() {
  return (
    <section className="section" aria-labelledby="reviews-home-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Reviews"
            title="What customers say about MPM Services"
            subtitle="We&apos;d rather show you genuine feedback than make it up. Real customer reviews will be featured here once verified — and you can follow our latest work on social media today."
            align="center"
            id="reviews-home-heading"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="reviews-pending">
            <span className="reviews-pending__icon" aria-hidden="true">
              <Icon name="quote" size={28} />
            </span>
            <h3>Verified reviews arriving soon</h3>
            <p>
              We&apos;re collecting and verifying genuine customer feedback. In the
              meantime, see real-time updates of our work on our social channels.
            </p>
            <div className="reviews-pending__actions">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--md"
              >
                Facebook
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--md"
              >
                Instagram
              </a>
              <Link href="/reviews" className="btn btn--ghost btn--md">
                Reviews page
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}