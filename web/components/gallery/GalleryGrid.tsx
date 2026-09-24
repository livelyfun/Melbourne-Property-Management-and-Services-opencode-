"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { galleryItems, getGalleryCategories } from "@/lib/mock-data/gallery";
import "./GalleryGrid.css";

const categories = getGalleryCategories();

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof categories)[number]["value"]>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? galleryItems : galleryItems.filter((i) => i.category === active)),
    [active]
  );

  const shown = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const openLightbox = useCallback(
    (index: number) => {
      lastFocused.current = document.activeElement as HTMLElement | null;
      setLightboxIndex(index);
    },
    []
  );

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    lastFocused.current?.focus();
  }, []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setLightboxIndex((current) => {
        if (current === null) return current;
        return (current + dir + filtered.length) % filtered.length;
      });
    },
    [filtered.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, step]);

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Filter gallery by service">
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            className={`gallery-filter${active === category.value ? " is-active" : ""}`}
            aria-pressed={active === category.value}
            onClick={() => setActive(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <ul
        className="gallery-grid"
        style={{ marginTop: "var(--space-8)" }}
        role="list"
        aria-live="polite"
      >
        {filtered.map((item, index) => (
          <li key={item.id}>
            <button
              type="button"
              className="gallery-card"
              onClick={() => openLightbox(index)}
              aria-label={`View larger: ${item.caption}`}
            >
              <span className="gallery-card__media">
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
              </span>
              <span className="gallery-card__caption">{item.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {shown && lightboxIndex !== null ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          ref={dialogRef}
          tabIndex={-1}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            aria-label="Close image viewer"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--prev"
            aria-label="Previous image"
            onClick={() => step(-1)}
          >
            &#8249;
          </button>

          <figure className="gallery-lightbox__figure" key={shown.id}>
            <Image
              src={shown.src}
              alt={shown.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
            <figcaption>
              {shown.caption}
              <small>
                {lightboxIndex + 1} of {filtered.length}
              </small>
            </figcaption>
          </figure>

          <button
            type="button"
            className="gallery-lightbox__nav gallery-lightbox__nav--next"
            aria-label="Next image"
            onClick={() => step(1)}
          >
            &#8250;
          </button>
        </div>
      ) : null}
    </>
  );
}