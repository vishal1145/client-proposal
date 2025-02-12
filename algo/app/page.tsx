import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PlatformsSection } from "@/components/sections/PlatformsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
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

