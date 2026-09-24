import Link from "next/link";
import "./PageHeader.css";

type Crumb = { label: string; href?: string };

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs,
  align = "left",
  tone = "light",
}: PageHeaderProps) {
  return (
    <header className={`page-header page-header--${tone} page-header--${align}`}>
      <div className="container page-header__inner">
        {crumbs && crumbs.length > 0 ? (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              {crumbs.map((crumb, index) => {
                const last = index === crumbs.length - 1;
                return (
                  <li key={crumb.label}>
                    {crumb.href && !last ? (
                      <Link href={crumb.href}>{crumb.label}</Link>
                    ) : (
                      <span aria-current={last ? "page" : undefined}>{crumb.label}</span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="page-header__title">{title}</h1>
        {subtitle ? <p className="page-header__subtitle">{subtitle}</p> : null}
      </div>
    </header>
  );
}