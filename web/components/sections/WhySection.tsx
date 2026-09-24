import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import "./WhySection.css";

const points = [
  {
    title: "Local to Melbourne",
    body: "A Melbourne-based team that understands local homes, rentals and business spaces.",
  },
  {
    title: "Clear communication",
    body: "We talk through your job before starting, so you always know what to expect.",
  },
  {
    title: "Attention to detail",
    body: "Careful, thorough work on every property — then honest guidance on aftercare.",
  },
  {
    title: "Practical property care",
    body: "Focused on the three services that keep properties clean, presentable and maintained.",
  },
];

export default function WhySection() {
  return (
    <section className="section why-section" aria-labelledby="why-heading">
      <div className="container why-section__grid">
        <Reveal>
          <div className="why-section__visual">
            <Image
              src="/images/about-work.jpg"
              alt="Maintenance professional carrying out practical work at a property"
              fill
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="why-section__content">
            <SectionHeading
              eyebrow="Why MPM"
              title="The dependable local choice for property services"
              subtitle="MPM Services is built around reliable service, honest communication and practical results — the qualities Melbourne property owners value most."
              id="why-heading"
            />
            <ul className="why-section__points" role="list">
              {points.map((point) => (
                <li key={point.title}>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}