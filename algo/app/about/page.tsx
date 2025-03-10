import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import Link from "next/link";
import { getMetadata } from "../utils/metadata";

export const generateMetadata = (): Metadata => {
  return getMetadata("about");
};
const stats = [
  {
    number: "25",
    text: "Years Experience",
    icon: (
      <div className="absolute -top-8 md:-top-12 -right-1 overflow-visible">
        <div className="w-12 h-12 md:w-14 md:h-14 relative">
          <Image
            src="/images/Icons.png"
            alt="Graphic Design"
            fill
            className="object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    number: "8K",
    text: "Skilled Professional",
    icon: (
      <div className="absolute -top-12 -right-1 overflow-visible">
        <div className="w-12 h-12 relative">
          <Image
            src="/images/Icons (1).png"
            alt="Graphic Design"
            fill
            className="object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    number: "32",
    text: "Visited Conferences",
    icon: (
      <div className="absolute -top-12 -right-1 overflow-visible">
        <div className="w-12 h-12 relative">
          <Image
            src="/images/Icons (2).png"
            alt="Graphic Design"
            fill
            className="object-contain"
          />
        </div>
      </div>
    ),
  },
  {
    number: "1K",
    text: "Software Worldwide",
    icon: (
      <div className="absolute -top-12 -right-1 overflow-visible">
        <div className="w-12 h-12 relative">
          <Image
            src="/images/Icons (3).png"
            alt="Graphic Design"
            fill
            className="object-contain"
          />
        </div>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Background */}
      <div className="relative bg-[#F6F0E4] py-20 ">
        {/* Background Decorative Elements */}

        {/* Left Side Illustration */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 z-10">
          <div className="relative">
            <Image
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
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">About Us</h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>About Us</span>
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

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Images */}
            <div className="relative w-full max-w-md mx-auto sm:max-w-none">
              <div className="relative">
                <div className="relative z-20 rounded-2xl">
                  <Image
                    src="/images/aiabout6.jpeg"
                    alt="Person working on laptop"
                    width={380}
                    height={280}
                    className="w-full  h-auto rounded-2xl object-cover"
                  />
                </div>

                {/* Pink UI Image
                <div className="absolute -bottom-16 -left-16 z-10">
                  <Image
                    src="/images/about1.jpeg"
                    alt="UI Design"
                    width={280}
                    height={200}
                    className="w-[280px] h-[200px] rounded-2xl object-cover shadow-lg"
                  />
                </div> */}

                {/* Experience Badge */}
                {/* <div className="absolute -right-10 top-0 z-30">
                  <Image
                    src="/images/25 years Experience.png"
                    alt="25 Years Experience"
                    width={100}
                    height={100}
                    className="w-[100px] h-[100px]"
                  />
                </div> */}

                {/* Decorative Elements */}
                {/* <Image
                  src="/images/aboutdot.png"
                  alt="Decorative Dots"
                  width={70}
                  height={70}
                  className="absolute -top-8 -left-8 z-0 w-[70px] h-[70px] opacity-80"
                />
                <Image
                  src="/images/aboutring.png"
                  alt="Decorative Ring"
                  width={80}
                  height={80}
                  className="absolute -bottom-8 left-20 z-0 w-[80px] h-[80px] opacity-80"
                /> */}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-10">
              {/* Header */}
              <div className="space-y-5">
                <h4 className="text-sm text-gray-700  bg-[#fcfaf4] rounded-2xl inline-block p-2 tracking-wide">
                  About Our IT Company
                </h4>
                <h2 className="text-[42px] font-medium text-[#0B1B2B] leading-[1]">
                  Exclusive Technology To{" "}
                  <div className="inline">
                    Provide <span className="text-[#0561FC]">IT Solutions</span>
                  </div>
                </h2>
                <p className="text-[#64748B] text-[15px] leading-[1.8]">
                  Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random
                  Text. It Has Roots In A Piece Latin Literature From 45 BC,
                  Making It Over 2000 Years Old. Richard Mc Clinock&apos;s Latin
                  Literature From 45.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 mt-2 relative w-4 h-4">
                    {/* Black border circle */}
                    <div className="absolute w-5 h-5 border-[1.5px] border-gray-600 rounded-full"></div>
                    {/* Blue overlapping circle */}
                    <div className="absolute w-5 h-5 bg-[#0561FC] rounded-full bottom-[-10px] right-[-9px]"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[26px] font-medium text-[#0B1B2B]">
                      Artificial Intelligence And Machine Learning
                    </h3>
                    <p className="text-[#64748B] text-[15px] leading-[1.8]">
                      Contrary To Popular Belief, Lorem Ipsum Is Not Simply
                      Random Text. It Has Roots In A Piece Latin Literature From
                      45 BC, Making It Over 2000 Years Old.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 mt-2 relative w-4 h-4">
                    {/* Black border circle */}
                    <div className="absolute w-5 h-5 border-[1.5px] border-gray-600 rounded-full"></div>
                    {/* Blue overlapping circle */}
                    <div className="absolute w-5 h-5 bg-[#0561FC] rounded-full bottom-[-10px] right-[-9px]"></div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[26px] font-medium text-[#0B1B2B]">
                      Techno Services Through IT Solutions
                    </h3>
                    <p className="text-[#64748B] text-[15px] leading-[1.8]">
                      Contrary To Popular Belief, Lorem Ipsum Is Not Simply
                      Random Text. It Has Roots In A Piece Latin Literature From
                      45 BC, Making It Over 2000 Years Old.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-8 pt-2">
                <Link href="/contact">
                  <button className="bg-[#0561FC] text-white px-7 py-2 rounded-full text-[15px] font-medium hover:bg-blue-700 transition-colors">
                    Get In Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-2 pb-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[30px] font-medium text-[#0B1B2B] text-center mb-12">
            The Number Reflect Our Reputation
          </h2>

          <div className="max-w-5xl mx-auto mb-12 sm:mb-20">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
              {stats.map((stat, index) => (
                <div key={index} className="w-full">
                  <div className="relative flex items-end justify-center">
                    {/* Number (Left Side) */}
                    <span className="text-4xl sm:text-[80px] text-[#0B1B2B] font-light leading-none">
                      {stat.number}
                    </span>

                    {/* Right Side: Icon + Text */}
                    <div className="flex flex-col items-center ml-4 relative">
                      {/* Icon Above Text */}
                      <div className="absolute -top-8 left-14">{stat.icon}</div>

                      {/* Text (Right Bottom of Number) */}
                      <div className="text-gray-500 text-xs sm:text-sm">
                        {stat.text}
                      </div>
                    </div>

                    {/* Vertical Divider (Only visible on larger screens) */}
                    {index < stats.length - 1 && (
                      <div className="hidden lg:block w-[1px] h-16 bg-gray-200 absolute right-[-25px] sm:right-[-30px] top-1/2 -translate-y-1/2"></div>
                    )}
                  </div>

                  {/* Horizontal Divider (Only visible on mobile) */}
                  {index < stats.length - 1 && (
                    <div className="lg:hidden w-full h-[1px] bg-gray-200 my-7"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Left Content */}
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                Customer Updates
              </p>
              <h2 className="text-[32px] font-bold text-[#0B1B2B] mb-4">
                What Our Clients Say About{" "}
                <span className="text-[#4461F2]">Our Work</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                There&apos;s Many Variations Of Passages Of Lorem Ipsum
                Available, But The Majority Have Suffered Alteration In
              </p>

              {/* Google Rating */}
              <div className="inline-flex items-center gap-3 bg-white shadow-md rounded-xl px-6 py-4">
                <Image
                  src="/images/google1.png"
                  alt="Google Logo"
                  width={42}
                  height={42}
                  className="w-[63px] h-[63px] rounded-full"
                />
                <div className="flex items-center gap-2">
                  <span className="text-[22px] font-bold text-[#0B1B2B]">
                    4.0
                  </span>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[13px] text-gray-500 ml-1">
                    Client&apos;s Reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content - Testimonials */}
            <div className="space-y-4">
              {/* Testimonial 1 */}
              <div className="bg-[#F5F6FE] rounded-2xl p-6 flex gap-4">
                <div className="flex-1">
                  <p className="text-[13px] text-gray-600 leading-relaxed mb-3">
                    There&apos;s Many Variations Of Passages Of Lorem Ipsum
                    Available, But The Majority Have Suffered Alteration In
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="text-[#4461F2] mr-1">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <h4 className="text-[#0B1B2B] font-semibold text-[13px]">
                      Dr. Sungithaya
                    </h4>
                    <p className="text-[13px] text-gray-500">Customer</p>
                  </div>
                </div>
                <div className="w-[88px] h-[88px] flex-shrink-0">
                  <Image
                    src="/images/man.jpg"
                    alt="Dr. Sungithaya"
                    width={88}
                    height={88}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-[#F5F6FE] rounded-2xl p-6 flex gap-4">
                <div className="flex-1">
                  <p className="text-[13px] text-gray-600 leading-relaxed mb-3">
                    There&apos;s Many Variations Of Passages Of Lorem Ipsum
                    Available, But The Majority Have Suffered Alteration In
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="text-[#4461F2] mr-1">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <h4 className="text-[#0B1B2B] font-semibold text-[13px]">
                      Dr. William James
                    </h4>
                    <p className="text-[13px] text-gray-500">Customer</p>
                  </div>
                </div>
                <div className="w-[88px] h-[88px] flex-shrink-0">
                  <Image
                    src="/images/man.jpg"
                    alt="Dr. William James"
                    width={88}
                    height={88}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-[#F5F6FE] rounded-2xl p-6 flex gap-4">
                <div className="flex-1">
                  <p className="text-[13px] text-gray-600 leading-relaxed mb-3">
                    There&apos;s Many Variations Of Passages Of Lorem Ipsum
                    Available, But The Majority Have Suffered Alteration In
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="text-[#4461F2] mr-1">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <h4 className="text-[#0B1B2B] font-semibold text-[13px]">
                      Dr. Arunkings
                    </h4>
                    <p className="text-[13px] text-gray-500">Customer</p>
                  </div>
                </div>
                <div className="w-[88px] h-[88px] flex-shrink-0">
                  <Image
                    src="/images/man.jpg"
                    alt="Dr. Arunkings"
                    width={88}
                    height={88}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-[#0B1B2B] py-20 mb-6">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
              Team Members
            </p>
            <h2 className="text-3xl font-bold text-white">Our Team Members</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-[200px] h-[200px] mx-auto mb-6">
                <Image
                  src="/images/man.jpg"
                  alt="Dr. Nagarajan"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">
                Dr. Nagarajan
              </h3>
              <p className="text-gray-400 text-sm">Project Leads</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-[200px] h-[200px] mx-auto mb-6">
                <Image
                  src="/images/man.jpg"
                  alt="Dr. Vaishali"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">
                Dr. Vaishali
              </h3>
              <p className="text-gray-400 text-sm">Project Leads</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-[200px] h-[200px] mx-auto mb-6">
                <Image
                  src="/images/man.jpg"
                  alt="Dr. Nagarajan"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">
                Dr. Nagarajan
              </h3>
              <p className="text-gray-400 text-sm">Project Leads</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-[200px] h-[200px] mx-auto mb-6">
                <Image
                  src="/images/man.jpg"
                  alt="Dr. Nagarani"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">
                Dr. Nagarani
              </h3>
              <p className="text-gray-400 text-sm">Project Leads</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-[#0B1B2B]">
              Explore Our Recent{" "}
              <span className="text-[#4461F2]">Projects</span>
            </h2>
          </div>

          {/* Projects Stack */}
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Project 1 */}
            <div className="bg-[#F5F6FE] rounded-2xl overflow-hidden">
              <Image
                src="/images/mobile.png"
                alt="Mobile Application"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
              {/* <div className="p-6">
                <div className="bg-white rounded-lg inline-block px-4 py-2">
                  <p className="text-sm text-gray-600">App Developments</p>
                </div>
                <h3 className="text-xl font-bold text-[#0B1B2B] mt-3">
                  Mobile Application
                </h3>
              </div> */}
            </div>

            {/* Project 2 */}
            <div className="bg-[#FFF8F0] rounded-2xl overflow-hidden">
              <Image
                src="/images/web.png"
                alt="Mobile Application"
                width={1200}
                height={400}
                className="w-full h-auto"
              />
              {/* <div className="p-6">
                <div className="bg-white rounded-lg inline-block px-4 py-2">
                  <p className="text-sm text-gray-600">App Developments</p>
                </div>
                <h3 className="text-xl font-bold text-[#0B1B2B] mt-3">
                  Mobile Application
                </h3>
              </div> */}
            </div>

            {/* View More Button */}
            <div className="text-center mt-8">
              <Link href="/projects">
                <button className="bg-[#4461F2] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                  View More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
