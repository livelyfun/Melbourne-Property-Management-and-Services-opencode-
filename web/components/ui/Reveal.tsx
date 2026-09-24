"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type Ref,
} from "react";
import "./Reveal.css";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
  className?: string;
};

/**
 * Lightweight scroll-reveal. Degrades to visible when
 * IntersectionObserver is unavailable or reduced motion is set.
 */
export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
}: RevealProps) {
  const [visible, setVisible] = useState(false);
  const innerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cls = `reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`;
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  if (as === "li") {
    return (
      <li ref={innerRef as Ref<HTMLLIElement>} className={cls} style={style}>
        {children}
      </li>
    );
  }

  if (as === "section") {
    return (
      <section ref={innerRef as Ref<HTMLElement>} className={cls} style={style}>
        {children}
      </section>
    );
  }

  if (as === "article") {
    return (
      <article ref={innerRef as Ref<HTMLElement>} className={cls} style={style}>
        {children}
      </article>
    );
  }

  return (
    <div ref={innerRef as Ref<HTMLDivElement>} className={cls} style={style}>
      {children}
    </div>
  );
}