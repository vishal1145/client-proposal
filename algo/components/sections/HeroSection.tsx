"use client";

import { useState, useEffect } from "react";
import { Button } from '@/components/ui/button';
import Image from "next/image";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showCarousel?: boolean;
  backgroundImage?: string;
  showWifiIcon?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const carouselData = [
  {
    title: "We Are Expert In IT Services",
    subtitle: "Design, App & Developments",
    description: "There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, As Opposed",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070"
  },
  {
    title: "Transform Your Business With",
    subtitle: "Modern Digital Solutions",
    description: "We provide innovative digital solutions to help your business grow and succeed in today's competitive market with cutting-edge technology",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070"
  },
  {
    title: "Building The Future With",
    subtitle: "Advanced Technology",
    description: "Leverage our expertise in the latest technologies to create powerful solutions that drive your business forward",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070"
  },
];

export function HeroSection({
  title,
  subtitle,
  description,
  showCarousel = true,
  backgroundImage,
  showWifiIcon = true,
  buttonText = "Let's Talk",
  buttonLink = "#"
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!showCarousel) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [showCarousel]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const currentContent = showCarousel 
    ? carouselData[currentSlide]
    : { title, subtitle, description, image: backgroundImage };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FDF8F3]">
      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center pt-20">
          {/* WiFi Icon */}
          {showWifiIcon && (
            <div className="mb-8 flex justify-center">
              <Image
                src="https://placehold.co/80x80/4461F2/FFFFFF/png?text=WiFi"
                alt="WiFi Icon"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          )}

          {/* Main Title */}
          <div className="space-y-2">
            <h2 className="text-[2.5rem] font-normal leading-tight tracking-tight">
              <span className="text-[#1B2B3B]">{currentContent.title}</span>
              {showCarousel && <span className="text-[#1B2B3B] font-bold"> Like</span>}
            </h2>
            <h1 className="text-[3.5rem] font-bold text-[#1B2B3B] leading-tight tracking-tight">
              {currentContent.subtitle}
            </h1>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-10 h-10">
              <Image
                src="https://placehold.co/40x40/FF4B26/FFFFFF/png?text=🚀"
                alt="rocket"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 text-lg max-w-2xl text-left">
              {currentContent.description}
            </p>
          </div>

          <Button 
            className="bg-[#4461F2] hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg flex items-center gap-2 mx-auto mt-8"
            onClick={() => window.location.href = buttonLink}
          >
            {buttonText}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Background Images */}
      <div className="absolute inset-0 -z-10">
        {showCarousel ? (
          carouselData.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-50' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))
        ) : (
          <div className="absolute inset-0">
            <Image
              src={backgroundImage || carouselData[0].image}
              alt="Background"
              fill
              className="object-cover opacity-50"
            />
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {showCarousel && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-100 shadow-lg flex items-center justify-center z-20 hover:bg-orange-500 hover:text-white transition-colors group"
          >
            <svg className="w-6 h-6 text-gray-800 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-orange-500 text-white shadow-lg flex items-center justify-center z-20 hover:bg-orange-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-orange-500' 
                    : 'w-2 bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
} 