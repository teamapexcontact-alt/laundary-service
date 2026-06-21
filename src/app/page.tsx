import { HeroSection } from "@/components/sections/hero-section";
import { ServicesPricing } from "@/components/sections/services-pricing";
import { TrustProcess } from "@/components/sections/trust-process";
import { CoverageMap } from "@/components/sections/coverage-map";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { FAQSection } from "@/components/sections/faq-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPricing />
      <TrustProcess />
      <CoverageMap />
      <ReviewsSection />
      <FAQSection />
    </>
  );
}