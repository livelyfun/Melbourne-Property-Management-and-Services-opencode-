import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/mock-data/services";
import ArrowRight from "@/components/ui/ArrowIcon";
import "./ServiceCard.css";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card card">
      <div className="service-card__media">
        <Image
          src={service.cardImage}
          alt={service.cardImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1080px) 50vw, 33vw"
        />
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">
          <Link href={service.href}>{service.name}</Link>
        </h3>
        <p className="service-card__summary">{service.summary}</p>
        <Link href={service.href} className="text-link service-card__link">
          View service
          <ArrowRight />
        </Link>
      </div>
    </article>
  );
}