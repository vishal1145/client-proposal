"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import { useState, useEffect } from "react";
import axios from "axios";

interface Service {
  slug: string;
  featured: boolean;
  icon: string;
  title: string;
  description: string;
  detailContent?: string;   // Add this if needed
}


const CardSkeleton = () => (
  <div className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm animate-pulse">
    <div className="w-12 h-12 bg-gray-200 rounded-lg mb-6"></div>
    <div className="space-y-3">
      <div className="h-6 bg-gray-200 rounded w-3/4"></div>
      <div className="h-6 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-full mt-3"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
    <div className="mt-9">
      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
    </div>
  </div>
);

export default function Page() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("/api/services");

        // Filter to only include services where `detailcontent` exists and is not empty
        const filteredServices = response.data.data.filter(
          (service: Service) => service.detailContent && service.detailContent.trim() !== ""
        );
        setServices(filteredServices);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
}, []);


  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            <Image
              src="/images/hand.png"
              alt="Hand with Rocket"
              width={300}
              height={200}
              className="w-auto h-[235px]"
            />
          </div>
        </div>

        <div className="absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/message.png"
            alt="Chat Bubble"
            width={80}
            height={80}
            className="w-auto h-auto"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">Services</h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Our-Services</span>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
        <div className="absolute top-0 left-1/4 z-10">
          <Image
            src="/images/decorative.png"
            alt="Decorative Element"
            width={100}
            height={100}
            className="w-auto h-auto opacity-30"
          />
        </div>
        <div className="absolute bottom-0 right-1/4 z-10">
          <Image
            src="/images/decorative.png"
            alt="Decorative Element"
            width={80}
            height={80}
            className="w-auto h-auto opacity-30"
          />
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          {/* Featured Services Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-6 md:mb-6 lg:mb-20">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="inline-block text-xs text-gray-600 border border-gray-300 p-2 rounded-2xl">
                Best Lead Compliments
              </span>
              <h2 className="text-3xl font-medium text-[#0B1B2B] -mb-1">
                Exclusive Technology To Provide{" "}
                <span className="text-[#0561FC]">IT Solutions</span>
              </h2>
              <p className="text-gray-600 text-xs leading-relaxed max-w-xl">
                Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random
                Text. It Has Roots In A Piece Latin Literature From 45 BC,
                Making It Over 2000 Years Old. Richard Mc Clintock Latin
              </p>
              <Button className="bg-[#0561FC] hover:bg-blue-700 text-white rounded-full px-5 py-1 flex items-center gap-2 mt-4">
                More Services
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>

            {/* Right Content - Featured Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {loading ? (
                <>
                  <CardSkeleton />
                  <CardSkeleton />
                </>
              ) : (
                services
                  .filter((service) => service.featured)
                  .map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm hover:bg-[#0561FC] group transition-all duration-300"
                    >
                      <div
                        className="mb-4"
                        dangerouslySetInnerHTML={{ __html: service.icon }}
                      ></div>

                      <h3 className="text-lg font-bold text-[#0B1B2B] mb-3 leading-snug group-hover:text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-white">
                        {service.description}
                      </p>
                      <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center group-hover:bg-orange-600 transition-colors mt-9">
                        <svg
                          className="w-4 h-4"
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
                      </div>
                    </Link>
                  ))
              )}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              <>
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </>
            ) : (
              services
                .filter((service) => !service.featured)
                .map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200 shadow-sm hover:bg-[#0561FC] group transition-all duration-300"
                  >
                    <div
                      className="mb-6 group-hover:text-white"
                      dangerouslySetInnerHTML={{ __html: service.icon }}
                    ></div>

                    <div className="">
                      <h3 className="text-lg font-bold text-[#0B1B2B] mb-3 leading-snug group-hover:text-white">
                        {service.title.split(" ").slice(0, -1).join(" ")}
                        <br />
                        {service.title.split(" ").slice(-1)}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-white">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-8">
                      <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center group-hover:bg-orange-600 transition-colors mt-9">
                        <svg
                          className="w-4 h-4"
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
                      </div>
                    </div>
                  </Link>
                ))
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}