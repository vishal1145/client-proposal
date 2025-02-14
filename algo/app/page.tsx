import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PlatformsSection } from "@/components/sections/PlatformsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";
// import TeamMemberSection from "./team-member/page";
// import PricingSection from "@/components/sections/PricingSection";
// import GallerySection from "@/components/sections/GallerySection";
// import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <FaqSection/>
      <GallerySection/>
      <PricingSection/>
      <TeamMemberSection/> */}
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <PlatformsSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

