"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/mock-data/services";
import { site } from "@/lib/site";
import ArrowRight from "@/components/ui/ArrowIcon";
import "./Hero.css";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setLoaded(true));
      return () => cancelAnimationFrame(raf);
    }
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        <Image
          src="/images/steam-cleaning-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={loaded ? "is-loaded" : ""}
        />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <div className={loaded ? "hero__inner is-loaded" : "hero__inner"}>
          <p className="eyebrow eyebrow--on-dark">Melbourne Property Services</p>
          <h1 className="hero__title">
            Steam Cleaning, Strip &amp; Polish, and Property Maintenance in Melbourne
          </h1>
          <p className="hero__subtitle">
            MPM Services helps keep Melbourne properties clean, presentable and well
            maintained with practical property services tailored to homes, rentals and
            commercial spaces.
          </p>
          <div className="hero__actions">
            <Link href="/quote" className="btn btn--primary btn--lg">
              Get a Free Quote
            </Link>
            <a href={`tel:${site.phoneIntl}`} className="btn btn--on-dark btn--lg">
              Call {site.phoneShort}
            </a>
          </div>
          <p className="hero__proof" aria-label="Our core services">
            Steam Cleaning <span aria-hidden="true">·</span> Strip &amp; Polish{" "}
            <span aria-hidden="true">·</span> Property Maintenance
          </p>
        </div>
      </div>

      <div className="container hero__quick">
        <ul className="hero__quick-list" role="list">
          {services.map((s, index) => (
            <li key={s.slug} style={{ animationDelay: `${180 + index * 90}ms` }}>
              <Link href={s.href} className="hero__quick-item">
                <span className="hero__quick-text">
                  <span className="hero__quick-name">{s.name}</span>
                  <span className="hero__quick-cta">View service</span>
                </span>
                <ArrowRight />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}