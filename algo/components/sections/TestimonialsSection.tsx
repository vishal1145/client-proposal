"use client";

import { useRef } from "react";
import Image from "next/image";

export function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&h=500&auto=format&fit=crop",
      text: "'Shared Lorem Ipsum Into The Information Age With Its Desktop Software Aldus PageMaker.'",
      name: "JHON - MANAGER",
      variant: "white"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&h=500&auto=format&fit=crop",
      text: "'Shared Lorem Ipsum Into The Information Age With Its Desktop Software Aldus PageMaker.'",
      name: "JHON - MANAGER",
      variant: "blue"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&h=500&auto=format&fit=crop",
      text: "'Shared Lorem Ipsum Into The Information Age With Its Desktop Software Aldus PageMaker.'",
      name: "JHON - MANAGER",
      variant: "white"
    },
    // Duplicate cards for infinite scroll
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&h=500&auto=format&fit=crop",
      text: "'Shared Lorem Ipsum Into The Information Age With Its Desktop Software Aldus PageMaker.'",
      name: "JHON - MANAGER",
      variant: "white"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&h=500&auto=format&fit=crop",
      text: "'Shared Lorem Ipsum Into The Information Age With Its Desktop Software Aldus PageMaker.'",
      name: "JHON - MANAGER",
      variant: "blue"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&h=500&auto=format&fit=crop",
      text: "'Shared Lorem Ipsum Into The Information Age With Its Desktop Software Aldus PageMaker.'",
      name: "JHON - MANAGER",
      variant: "white"
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      
      if (direction === 'left') {
        if (container.scrollLeft === 0) {
          container.scrollLeft = container.scrollWidth / 2;
        }
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-10 bg-white overflow-x-hidden">
      <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-4"
          >
            <path
              d="M0 20.9091V40H19.0909V20.9091H6.36364C6.36364 13.7455 12.1636 8 19.0909 8V0C8.54545 0 0 8.72727 0 20.9091ZM40 8V0C29.4545 0 20.9091 8.72727 20.9091 20.9091V40H40V20.9091H27.2727C27.2727 13.7455 33.0727 8 40 8Z"
              fill="#FF6B00"
            />
          </svg>

          <p className="text-gray-500 text-sm mb-2">Customer Feedback</p>
          <h2 className="text-3xl font-medium text-[#1B224B]">What Our Clients Say</h2>
          <h3 className="text-3xl font-medium">
            About <span className="text-[#0561FC]">Our Work</span>
          </h3>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-6xl mx-auto relative">
          <div 
            ref={scrollContainerRef}
            className="overflow-hidden"
          >
            <div className="flex   gap-6 sm:gap-12 transition-transform duration-300">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={`${testimonial.id}-${index}`}
                  className="flex-1 min-w-full md:min-w-[calc(33.333%-32px)]"

                >
                  <div className={`${
                    testimonial.variant === 'blue' 
                      ? 'bg-[#0561FC] text-white' 
                      : 'bg-white border border-gray-100'
                  } rounded-2xl p-6`}>
                    <div className="flex items-start gap-3">
                      <Image
                        src={testimonial.image}
                        alt="Client"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className={`text-[13px] ${
                          testimonial.variant === 'blue' 
                            ? 'text-white' 
                            : 'text-gray-600'
                        } leading-relaxed mb-3`}>
                          {testimonial.text}
                        </p>
                        <h4 className={`text-[12px] font-medium ${
                          testimonial.variant === 'blue' 
                            ? 'text-white' 
                            : 'text-[#1B224B]'
                        } uppercase tracking-wide`}>
                          {testimonial.name}
                        </h4>
                      </div>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={testimonial.variant === 'blue' ? 'text-white/30' : 'text-gray-200'}
                      >
                        <path
                          d="M6 9H4.6c.3-2.5 1.7-4.6 3.4-6L9 4c-2 1.8-3 4-3 7v2h7V9H6zm9 0h-1.4c.3-2.5 1.7-4.6 3.4-6L18 4c-2 1.8-3 4-3 7v2h7V9h-7z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-2 mt-10">
            <button 
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full bg-[#FF6B00] flex items-center justify-center text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button 
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#FF6B00] hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}