import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ImageCard from "@/components/gallery/ImageCard";
import { galleryItems } from "@/lib/mock-data/gallery";
import "./ResultsSection.css";

const featured = galleryItems.slice(0, 3);

export default function ResultsSection() {
  return (
    <section className="section section--alt" aria-labelledby="results-home-heading">
      <div className="container">
        <Reveal>
          <div className="section-heading__row">
            <SectionHeading
              eyebrow="Results"
              title="Real results you can see"
              subtitle="We lead with evidence. Browse the gallery for service imagery across our three core services — and updated with real MPM work as it becomes available."
              id="results-home-heading"
            />
            <Link href="/gallery" className="btn btn--secondary btn--md section-heading__action">
              View the gallery
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="results-grid" style={{ marginTop: "var(--space-12)" }}>
            {featured.map((item) => (
              <ImageCard
                key={item.id}
                src={item.src}
                alt={item.alt}
                caption={item.caption}
                aspect="wide"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}