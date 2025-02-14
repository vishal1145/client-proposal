"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { HeroSection } from "@/components/sections/HeroSection";
import { GetQuoteSection } from "@/components/sections/GetQuoteSection";
import Footer from "@/components/sections/Footer";

const services = [
  {
    title: "Cybersecurity Services",
    description: "Contrary To Popular Belief, Lorem Ipsuis",
    slug: "cybersecurity-services",
    icon: (
      <svg
        className="w-12 h-12 text-[#4461F2]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Managed IT Services",
    description: "Contrary To Popular Belief, Lorem Ipsuis",
    slug: "managed-it-services",
    icon: (
      <svg
        className="w-12 h-12 text-[#4461F2]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
        />
      </svg>
    ),
  },
  {
    title: "Network And Infrastructure",
    description: "Contrary To Popular Belief, Lorem Ipsuis",
    slug: "network-and-infrastructure",
    icon: (
      <svg
        className="w-12 h-12 text-[#4461F2]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "IT Consulting Services",
    description: "Contrary To Popular Belief, Lorem Ipsuis",
    slug: "it-consulting-services",
    icon: (
      <svg
        className="w-12 h-12 text-[#4461F2]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    title: "Legal Technology Services",
    description: "Contrary To Popular Belief, Lorem Ipsuis",
    slug: "legal-technology-services",
    icon: (
      <svg
        className="w-12 h-12 text-[#4461F2]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
        />
      </svg>
    ),
  },
  {
    title: "Software Development",
    description: "Contrary To Popular Belief, Lorem Ipsuis",
    slug: "software-development",
    icon: (
      <svg
        className="w-12 h-12 text-[#4461F2]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
        {/* Background Decorative Elements */}

        {/* Left Side Illustration */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 z-10">
          <div className="relative">
            <img
              src="/images/hand.png"
              alt="Hand with Rocket"
              width={300}
              height={200}
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* Right Side Chat Icon */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <img
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
          <img
            src="/images/decorative.png"
            alt="Decorative Element"
            width={100}
            height={100}
            className="w-auto h-auto opacity-30"
          />
        </div>
        <div className="absolute bottom-0 right-1/4 z-10">
          <img
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
        <div className="container mx-auto px-4">
          {/* Featured Services Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="inline-block text-sm text-gray-600">
                Best Lead Compliments
              </span>
              <h2 className="text-4xl font-bold text-[#0B1B2B] leading-tight">
                Exclusive Technology To Provide{" "}
                <span className="text-[#0561FC]">IT Solutions</span>
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random
                Text. It Has Roots In A Piece Latin Literature From 45 BC,
                Making It Over 2000 Years Old. Richard Mc Clintock Latin
              </p>
              <Button className="bg-[#0561FC] hover:bg-blue-700 text-white rounded-full px-6 py-2 flex items-center gap-2 mt-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Designing IT Services Card */}
              <Link
                href="/services/designing-it-services"
                className="bg-[#0561FC] rounded-3xl p-8 text-white group hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 min-h-[4rem] leading-tight">
                  Designing IT
                  <br />
                  Services
                </h3>
                <p className="text-gray-100 mb-6 truncate">
                  Contrary To Popular Belief, Lorem Ipsuis
                </p>
                <div className="w-10 h-10 rounded-full bg-white text-[#0561FC] flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <svg
                    className="w-5 h-5"
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

              {/* Cloud IT Services Card */}
              <Link
                href="/services/cloud-it-services"
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-[#0561FC]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0B1B2B] mb-4 min-h-[4rem] leading-tight">
                  Cloud IT
                  <br />
                  Services
                </h3>
                <p className="text-gray-600 mb-6 truncate">
                  Contrary To Popular Belief, Lorem Ipsuis
                </p>
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <svg
                    className="w-5 h-5"
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
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.slug}`}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
              >
                {/* Icon */}
                <div className="mb-6">{service.icon}</div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#0B1B2B] min-h-[4rem] leading-tight">
                    {service.title.split(" ").slice(0, -1).join(" ")}
                    <br />
                    {service.title.split(" ").slice(-1)}
                  </h3>
                  <p className="text-gray-600 text-sm truncate">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="mt-8">
                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                    <svg
                      className="w-5 h-5"
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
            ))}
          </div>
        </div>
      </section>

      {/* Get Quote Section */}
      {/* <GetQuoteSection /> */}

      {/* Footer */}
      <Footer />
    </main>
  );
}
