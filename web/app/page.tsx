import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesSection from "@/components/sections/ServicesSection";
import ResultsSection from "@/components/sections/ResultsSection";
import WhySection from "@/components/sections/WhySection";
import ProcessSection from "@/components/sections/ProcessSection";
import ReviewsTeaser from "@/components/sections/ReviewsTeaser";
import CoverageSection from "@/components/sections/CoverageSection";
import FaqHomeSection from "@/components/sections/FaqHomeSection";
import CtaSection from "@/components/sections/CtaSection";
import { localBusinessGraph } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <ResultsSection />
      <WhySection />
      <ProcessSection />
      <ReviewsTeaser />
      <CoverageSection />
      <FaqHomeSection />
      <CtaSection dark />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessGraph()) }}
      />
    </>
  );
}