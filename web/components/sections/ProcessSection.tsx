import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import "./ProcessSection.css";

type Step = { title: string; body: string };

const defaultSteps: Step[] = [
  {
    title: "Tell us what you need",
    body: "Share the details of your job through the quote form, or call us directly.",
  },
  {
    title: "Discuss the job",
    body: "We talk through the work, confirm what's involved and answer any questions.",
  },
  {
    title: "Service is completed",
    body: "The job is carried out with care, with clear guidance on aftercare.",
  },
  {
    title: "Enjoy the result",
    body: "A cleaner, better-presented property — and a team you can call again.",
  },
];

type ProcessSectionProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  steps?: Step[];
  tone?: "dark" | "light";
  id?: string;
  headingAlign?: "left" | "center";
};

export default function ProcessSection({
  eyebrow = "How it works",
  title = "A straightforward process from first message to finished job",
  subtitle = "No confusion, no surprises. Here's what happens after you get in touch.",
  steps = defaultSteps,
  tone = "dark",
  id = "process-heading",
  headingAlign = "center",
}: ProcessSectionProps) {
  const light = tone === "light";

  return (
    <section
      className={light ? "section" : "section section--dark"}
      aria-labelledby={id}
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            align={headingAlign}
            id={id}
          />
        </Reveal>
        <ol
          className={`process-steps${light ? " process-steps--light" : ""}`}
          style={{ marginTop: "var(--space-12)" }}
        >
          {steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 110}>
              <div className="process-step">
                <span className="process-step__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__body">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}