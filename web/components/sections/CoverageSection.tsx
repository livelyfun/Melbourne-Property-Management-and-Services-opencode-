import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { coverageCopy, serviceAreas } from "@/lib/mock-data/service-areas";
import "./CoverageSection.css";

export default function CoverageSection() {
  return (
    <section className="section section--alt" aria-labelledby="coverage-heading">
      <div className="container coverage-grid">
        <Reveal>
          <div className="coverage__content">
            <SectionHeading
              eyebrow="Service Areas"
              title={coverageCopy.heading}
              subtitle={coverageCopy.intro}
              id="coverage-heading"
            />
            <p className="coverage__note">{coverageCopy.note}</p>
            <Link href="/service-areas" className="btn btn--secondary btn--md">
              Explore service areas
            </Link>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ul className="coverage__list" role="list">
            {serviceAreas.map((area) => (
              <li className="coverage__item" key={area.name}>
                <span className="coverage__pin" aria-hidden="true">
                  <Icon name="mapPin" size={20} />
                </span>
                <div>
                  <h3 className="coverage__name">{area.name}</h3>
                  <p className="coverage__scope">Melbourne, VIC, Australia</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}