type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading${
        align === "center" ? " section-heading--center" : ""
      }`}
    >
      {eyebrow ? (
        <p className="eyebrow" aria-hidden="true">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {subtitle ? (
        <p className="section-heading__subtitle">{subtitle}</p>
      ) : null}
    </div>
  );
}