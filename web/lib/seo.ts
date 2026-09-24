import { site } from "@/lib/site";
import { services } from "@/lib/mock-data/services";

export function localBusinessGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        alternateName: site.brand,
        url: site.url,
        email: site.email,
        telephone: site.phoneIntl,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/images/website_logo.svg`,
        },
        sameAs: [site.facebook, site.instagram],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.brand,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en-AU",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#localbusiness`,
        name: site.name,
        alternateName: site.brand,
        url: site.url,
        telephone: site.phoneIntl,
        email: site.email,
        image: `${site.url}/images/steam-cleaning-hero.jpg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Melbourne",
          addressRegion: "VIC",
          postalCode: "3000",
          addressCountry: "AU",
        },
        areaServed: { "@type": "City", name: "Melbourne" },
        priceRange: "$$",
        sameAs: [site.facebook, site.instagram],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "MPM Services — core services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              url: `${site.url}${service.href}`,
              description: service.summary,
            },
          })),
        },
      },
    ],
  };
}

export function breadcrumbGraph(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${site.url}${crumb.url}`,
    })),
  };
}

export function faqPageGraph(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}