import { HeroSection } from "@/components/sections/hero-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PickupFlow } from "@/components/sections/pickup-flow";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { BranchLocations } from "@/components/sections/branch-locations";
import { InstagramGallery } from "@/components/sections/instagram-gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { PickupFormSection } from "@/components/sections/pickup-form-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <PickupFlow />
      <WhyChooseUs />
      <BranchLocations />
      <InstagramGallery />
      <Testimonials />
      <PickupFormSection />
      <FAQSection />
      <CTASection />
    </>
  );
}