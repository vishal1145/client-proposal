"use client"
import { useRef } from "react";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProjectsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const topProjects = [
    {
      id: 1,
      title: "Mobile Application",
      category: "App Developments",
      image: "/images/project11.png",
      link: "/projects/mobile-application",
    },
    {
      id: 2,
      title: "Bottle Designs",
      category: "Graphic Design",
      image: "/images/project10.png",
      link: "/projects/bottle-designs",
      hasButton: true,
    },
    // Duplicate cards for infinite loop
    {
      id: 3,
      title: "Poster Magazine",
      category: "App Developments",
      image: "/images/project2.jpeg",
      link: "/projects/poster-magazine",
    },
    {
      id: 4,
      title: " Cray Bag Designs",
      category: "Graphic Design",
      image: "/images/project4.jpeg",
      link: "/projects/shopping-bag",
      hasButton: true,
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;

      if (direction === "left") {
        if (container.scrollLeft === 0) {
          container.scrollLeft = container.scrollWidth / 2;
        }
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs">
              Latest Updates
            </span>
            <h2 className="text-3xl font-sans text-[#0B1B2B] mt-1">
              Explore Latest <span className="text-blue-600">Projects.</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleScroll("left")}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white flex items-center justify-center transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-8 h-8 rounded-full bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Top Row with Carousel */}
        <div ref={scrollContainerRef} className="overflow-hidden">
          <div className="flex gap-36 transition-transform duration-300">
            {topProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="min-w-[calc(50%-72px)]"
              >
                <Link
                  href={project.link}
                  className="block group transition-transform duration-300 hover:-translate-y-2"
                >
                  <div>
                    <div className="rounded-3xl overflow-hidden">
                      <div className="relative h-[500px]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-[#64748B] mb-2">
                        {project.category}
                      </p>
                      <h3 className="text-[22px] font-bold text-[#1B224B]">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-24 mt-8 mb-7">
            {/* Left Side - Poster Magazine */}
            <Link
              href={`/projects/poster-magazine-2`}
              className="block group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="rounded-3xl overflow-hidden">
                <div className="relative h-[400px] bg-gray-100">
                  <Image
                    src="/images/project7.jpeg"
                    alt="Poster Magazine"
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-[#64748B] mb-1">App Developments</p>
                <h3 className="text-[22px] font-bold text-[#1B224B]">
                  Poster Magazine
                </h3>
              </div>
            </Link>

            {/* Right Side - Cray Bag Designs */}
            <Link
              href={`/projects/cray-bag`}
              className="block group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="rounded-3xl overflow-hidden">
                <div className="relative h-[400px] bg-[#FFF1F3]">
                  <Image
                    src="/images/project8.png"
                    alt="Cray Bag Designs"
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-[#64748B] mb-1">Graphic Design</p>
                <h3 className="text-[22px] font-bold text-[#1B224B]">
                  Cray Bag Designs
                </h3>
              </div>
            </Link>
          </div>
</div>
   
    </section>
  );
}
