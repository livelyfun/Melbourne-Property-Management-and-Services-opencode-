import Icon from "@/components/ui/Icon";
import "./TrustStrip.css";

const items = [
  {
    icon: "shield",
    title: "Professional service",
    body: "A reliable, local Melbourne property services business.",
  },
  {
    icon: "check",
    title: "Real completed work",
    body: "Evidence-led results presented honestly across the site.",
  },
  {
    icon: "layers",
    title: "Three core services",
    body: "Steam cleaning, strip & polish, and property maintenance.",
  },
  {
    icon: "doc",
    title: "Clear quote process",
    body: "A straightforward conversation before any work starts.",
  },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Why choose MPM Services">
      <div className="container">
        <ul className="trust-strip__grid" role="list">
          {items.map((item) => (
            <li className="trust-strip__item" key={item.title}>
              <span className="trust-strip__icon" aria-hidden="true">
                <Icon name={item.icon} size={22} />
              </span>
              <div>
                <h3 className="trust-strip__title">{item.title}</h3>
                <p className="trust-strip__body">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}