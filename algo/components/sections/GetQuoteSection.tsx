"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface GetQuoteSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export function GetQuoteSection({
  title = "Ready to Start Your Project?",
  subtitle = "Get Started Today",
  description = "Let's discuss your requirements and create a solution that perfectly fits your needs.",
  buttonText = "Get Started",
  buttonLink = "/get-quote"
}: GetQuoteSectionProps) {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-r from-[#4461F2] to-[#3451D2] py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Large Circle */}
        <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-white opacity-5"></div>
        <div className="absolute -left-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-white opacity-5"></div>
        
        {/* Floating Elements */}
        <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2">
          <div className="w-20 h-20 rounded-lg bg-white/10 rotate-45 animate-float"></div>
        </div>
        <div className="absolute right-1/4 top-1/3">
          <div className="w-16 h-16 rounded-full bg-white/10 animate-float-delay"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div 
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
            onClick={() => router.push(buttonLink)}
          >
            <span className="inline-block text-orange-400 font-medium text-sm mb-4">
              {subtitle}
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              {description}
            </p>
            <Button 
              className="bg-white text-[#4461F2] hover:bg-gray-50 rounded-full px-8 py-4 text-lg font-medium group transition-all duration-300 transform hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
                router.push(buttonLink);
              }}
            >
              {buttonText}
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 