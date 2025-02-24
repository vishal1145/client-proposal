"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/images/home3.png",
    alt: "Design & Development",
    height: "320px", // Reduced height
  },
  {
    src: "/images/home4.png",
    alt: "AI Development",
    height: "160px", // Reduced height
  },
  {
    src: "/images/home5.png",
    alt: "UI/UX Design",
    height: "240px", // Reduced height
  },
  {
    src: "/images/home6.png",
    alt: "Web Development",
    height: "320px", // Reduced height
  },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[#F6F0E4] overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/images/world-map-dots.svg"
          alt="Background Pattern"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
        {" "}
        {/* Reduced top padding */}
        {/* Main Content */}
        <div className="relative z-20 max-w-5xl mx-auto">
          {" "}
          {/* Reduced max-width */}
          {/* Text Content */}
          <div className="text-center">
            <div className="flex justify-center mb-3">
              {" "}
              {/* Reduced margin */}
              <Image
                src="/images/wifi.png"
                alt="WiFi Icon"
                width={82}
                height={82}
                className="w-auto h-auto"
              />
            </div>
            <h1 className="text-[42px] font-light text-[#1B224B] mb-2 leading-tight tracking-[-0.02em]">
              We Are Expert In IT Services{" "}
              <span className="text-[#1B224B] font-bold ">Like</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-[38px] font-bold text-[#1B224B] mb-6 leading-tight tracking-[-0.02em]">
              Design, App & Developments
            </h2>

            {/* Description */}
            <p className="text-[15px] text-gray-600 max-w-[650px] mx-auto mb-8 leading-[1.6]">
            Empowering businesses with cutting-edge technology solutions. and Delivering innovative and scalable digital solutions to the businesses
            </p>

            <Link
              href="contact"
              className="inline-flex items-center gap-2 bg-[#0561FC] text-white px-4 py-2 text-sm rounded-full hover:bg-blue-700 transition-colors"
            >
              {" "}
              {/* Reduced padding and text size */}
              Let&apos;s Talk
              <svg
                width="16"
                height="16"
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
          {/* Image Grid - Desktop */}
          <div className="hidden lg:block relative mt-8 ">
            {" "}
            {/* Reduced margin */}
            <div className="flex gap-4 items-end">
              {" "}
              {/* Reduced gap */}
              {images.map((image, index) => (
                <div key={index} className="flex-1 rounded-2xl">
                  {" "}
                  {/* Reduced border radius */}
                  <div className="relative" style={{ height: image.height }}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-2xl shadow-md"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Image Slider - Mobile */}
          <div className="lg:hidden relative mt-6">
            {" "}
            {/* Reduced margin */}
            <div className="overflow-hidden rounded-2xl">
              {" "}
              {/* Reduced border radius */}
              <div className="relative" style={{ height: "240px" }}>
                {" "}
                {/* Reduced height */}
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute -left-3 top-1/2 -translate-y-1/2 bg-[#F68E2C] p-3 rounded-full shadow-md hover:bg-[#f58720]"
            >
              {" "}
              {/* Reduced padding and positioning */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-3 top-1/2 -translate-y-1/2 bg-[#F68E2C] p-3 rounded-full shadow-md hover:bg-[#f58720]"
            >
              {" "}
              {/* Reduced padding and positioning */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute left-0 top-12">
          {" "}
          {/* Adjusted positioning */}
          <Image
            src="/images/homehand.png"
            alt="Decorative Shape"
            width={280}
            height={240}
            className="w-auto h-auto hidden sm:block"
          />
        </div>
        <div className="absolute right-8 top-16">
          {" "}
          {/* Adjusted positioning */}
          <Image
            src="/images/message.png"
            alt="Rocket"
            width={48}
            height={48}
            className="w-auto h-auto hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}
