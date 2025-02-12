"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export function WhyChooseUsSection() {
  const features = [
    { title: "Customized" },
    { title: "High Quality" },
    { title: "Experience" },
    { title: "Support" },
  ];

  return (
    <section className="bg-[#0B1B2B] py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Header */}
            <div className="space-y-2">
              <span className="text-xs text-gray-400">
                IT Services & Software
              </span>
              <h2 className="text-[2rem] font-normal text-white">
                Why You Choose Us?
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              Classical Latin Literature From 45 BC, Making It Over 2000 Years Old. Richard McClintock, A
              Latin Professor At Hampden Sydney College In Virginia.
            </p>

            {/* Features Grid */}
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-[1.5rem] text-white font-normal whitespace-nowrap">
                    {feature.title}
                  </span>
                  <div className="flex-1">
                    <div className="w-full h-[1px] bg-gray-700/50"></div>
                  </div>
                  <div className="w-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="#4F5B67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="#4F5B67" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="bg-[#4461F2] hover:bg-blue-700 text-white rounded-full px-5 py-2 text-sm flex items-center gap-2 mt-8"
            >
              Explore More
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>

          {/* Right Content */}
          <div className="relative pb-8 pr-8">
            {/* Main Image */}
            <div className="relative w-full rounded-3xl overflow-hidden bg-[#FFE4E0]">
              <Image
                src="/images/creative/creative-design.jpg"
                alt="Creative Design"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-3xl"
                priority
              />
              
              {/* Hands and UI Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Left Hand with Pencil */}
                  <div className="absolute left-8 top-1/3">
                    <Image
                      src="/images/elements/hand-pencil.png"
                      alt="Hand with Pencil"
                      width={200}
                      height={200}
                      className="w-32 h-32 object-contain"
                    />
                  </div>

                  {/* UI Elements */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-[#8B3DFF] p-4 rounded-xl">
                      <div className="w-16 h-16 bg-white rounded-lg"></div>
                    </div>
                  </div>

                  {/* Right Hand Pointing */}
                  <div className="absolute right-8 top-1/3">
                    <Image
                      src="/images/elements/hand-pointing.png"
                      alt="Hand Pointing"
                      width={200}
                      height={200}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Overlapping Card - Now outside the overflow:hidden container */}
            <div className="absolute bottom-0 right-0 bg-[#4461F2] text-white px-8 py-6 rounded-2xl shadow-lg">
              <div className="text-center space-y-1">
                <h3 className="text-2xl font-semibold whitespace-nowrap">IT Service</h3>
                <p className="text-base font-normal whitespace-nowrap">&amp;</p>
                <h3 className="text-2xl font-semibold whitespace-nowrap">Software</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 