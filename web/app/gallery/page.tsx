import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CtaSection from "@/components/sections/CtaSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse service imagery for steam cleaning, strip and polish, and property maintenance across Melbourne. Gallery updated with real MPM Services results as they become available.",
  alternates: { canonical: `${site.url}/gallery` },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A look at our work"
        subtitle="Filter by service to see the kind of work MPM Services carries out. Imagery here is illustrative stock until real photos of completed MPM jobs are available."
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="section" aria-label="Gallery">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>

      <CtaSection />
    </>
  );
}