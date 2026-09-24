"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav, site } from "@/lib/site";
import "./Navbar.css";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="14" y2="17" />
        </>
      )}
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setOpen(false);
      setServicesOpen(false);
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const services = mainNav.find((item) => item.href === "/services");

  return (
    <>
      <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label={`${site.brand} home`}>
          <Image
            src="/images/website_logo.svg"
            alt={`${site.name} logo`}
            width={150}
            height={45}
            priority
          />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul className="desktop-nav__list">
            {mainNav.map((item) => (
              <li
                key={item.href}
                className={item.children ? "has-children" : ""}
              >
                <Link
                  href={item.href}
                  className={
                    pathname === item.href ||
                    (item.href === "/services" && pathname.startsWith("/services"))
                      ? "desktop-nav__link is-active"
                      : "desktop-nav__link"
                  }
                  aria-haspopup={item.children ? "true" : undefined}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="desktop-nav__dropdown" role="menu">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} role="menuitem">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a href={`tel:${site.phoneIntl}`} className="phone-link">
            {site.phoneDisplay}
          </a>
          <Link href="/quote" className="btn btn--primary btn--md">
            Get a Free Quote
          </Link>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <MenuIcon open={open} />
        </button>
      </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          <ul className="mobile-menu__list">
            {mainNav.map((item) => (
              <li key={item.href}>
                {item.children && services ? (
                  <>
                    <button
                      type="button"
                      className="mobile-menu__toggle"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      {item.label}
                      <span className="mobile-menu__caret" aria-hidden="true">
                        {servicesOpen ? "\u2212" : "+"}
                      </span>
                    </button>
                    {servicesOpen && services?.children ? (
                      <ul className="mobile-menu__sub">
                        {services.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className="mobile-menu__sub-link">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={
                      pathname === item.href ? "mobile-menu__link is-active" : "mobile-menu__link"
                    }
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu__actions">
          <a href={`tel:${site.phoneIntl}`} className="btn btn--secondary btn--lg">
            Call {site.phoneShort}
          </a>
          <Link href="/quote" className="btn btn--primary btn--lg">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}