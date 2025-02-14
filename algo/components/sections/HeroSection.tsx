"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#F6F0E4] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/images/world-map-dots.svg"
          alt="Background Pattern"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 pt-20">
        {/* Main Content */}
        <div className="relative z-20 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/wifi.png"
                alt="WiFi Icon"
                width={40}
                height={40}
                className="w-auto h-auto"
              />
            </div>
            <h1 className="text-5xl font-thin text-[#1B224B] mb-4">
              We Are Expert In IT Services{" "}
              <span className="text-[#0561FC]">Like</span>
            </h1>
            <h2 className="text-4xl font-bold text-[#1B224B] mb-8">
              Design, App & Developments
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              There Are Many Variations Of Passages Of Lorem Ipsum Available,
              But The Majority Have Suffered Alteration In Some Form, By
              Injected Humour, As Opposed
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#0561FC] text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors"
            >
              Let's Talk
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M14 6l6 6-6 6" />
              </svg>
            </Link>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="flex gap-6">
              {/* First Image - Design & Development */}
              <div className="flex-1 rounded-3xl">
                <div className="relative h-[400px]">
                  <Image
                    src="/images/home3.png"
                    alt="Design & Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Second Image - AI Hand */}
              <div className="flex-1 rounded-3xl">
                <div className="relative h-[300px]">
                  <Image
                    src="/images/home4.png"
                    alt="AI Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Third Image - Person */}
              <div className="flex-1 rounded-3xl">
                <div className="relative h-[300px]">
                  <Image
                    src="/images/home5.png"
                    alt="UI/UX Design"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Fourth Image - UI Design */}
              <div className="flex-1 rounded-3xl">
                <div className="relative h-[300px] bg-[#B4E4FF]">
                  <Image
                    src="/images/home6.png"
                    alt="Web Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="#1B224B"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="#1B224B"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-10 top-16">
          <Image
            src="/images/homehand.png"
            alt="Decorative Shape"
            width={350}
            height={300}
            className="w-auto h-auto"
          />
        </div>
        <div className="absolute right-10 top-20">
          <Image
            src="/images/message.png"
            alt="Rocket"
            width={60}
            height={60}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
}
