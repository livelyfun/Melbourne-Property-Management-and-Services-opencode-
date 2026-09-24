import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/mock-data/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/reviews`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${site.url}/service-areas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${site.url}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${site.url}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/quote`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.9 },
    { url: `${site.url}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${site.url}${service.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}