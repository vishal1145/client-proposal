import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - IT Solutions",
  description:
    "Learn about our company and our 25 years of experience in providing exclusive technology and IT solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
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
      <section className="py-5 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="relative">
              <div className="rounded-lg p-8">
                <div className="relative">
                  {/* Main Illustration */}
                  <Image
                    src="/images/main.png"
                    alt="IT Solutions Illustration"
                    width={500}
                    height={400}
                    className="w-full h-auto relative z-10"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs text-[#4461F2] font-medium uppercase tracking-wide mb-1">
                  About Our IT Company
                </h4>
                <h2 className="text-[32px] font-bold text-[#0B1B2B] leading-[1.2] mb-3">
                  Exclusive Technology To{" "}
                  <div className="flex items-center gap-1">
                    Provide <span className="text-[#4461F2]">IT Solutions</span>
                  </div>
                </h2>
                <p className="text-[15px] text-gray-500 leading-[1.8]">
                  Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random
                  Text. It Has Roots In A Piece Latin Literature From 45 BC,
                  Making It Over 2000 Years Old. Richard Mc Clinock Latin
                  Literature From 45.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-[#4461F2] flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0B1B2B] mb-2">
                      Artificial Intelligence And Machine Learning
                    </h3>
                    <p className="text-[15px] text-gray-500 leading-[1.8]">
                      Contrary To Popular Belief, Lorem Ipsum Is Not Simply
                      Random Text. It Has Roots In A Piece Latin Literature From
                      45 BC, Making It Over 2000 Years Old.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-[#4461F2] flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0B1B2B] mb-2">
                      Techno Services Through IT Solutions
                    </h3>
                    <p className="text-[15px] text-gray-500 leading-[1.8]">
                      Contrary To Popular Belief, Lorem Ipsum Is Not Simply
                      Random Text. It Has Roots In A Piece Latin Literature From
                      45 BC, Making It Over 2000 Years Old.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <button className="bg-[#4461F2] text-white px-7 py-3 rounded-3xl hover:bg-blue-700 transition-colors text-[12px] font-medium">
                  Get In Touch
                </button>
                <button className="flex items-center gap-2 text-[13px] text-gray-600">
                  <div className="w-6 h-6 rounded-full bg-[#F5F6FE] flex items-center justify-center">
                    <svg
                      className="w-2.5 h-2.5 text-[#4461F2]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                  <span className="font-medium">Play Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-2 pb-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[26px] font-bold text-[#0B1B2B] text-center mb-12">
            The Number Reflect Our Reputation
          </h2>

          <div className="flex justify-center items-center gap-16 px-4">
            {/* Years of Experience */}
            <div className="flex items-center">
              <div className="flex flex-col items-center w-32">
                <div className="flex items-center gap-1">
                  <span className="text-[40px] font-bold text-[#0B1B2B] leading-none">
                    25
                  </span>
                  <div className="flex flex-col">
                    <p className="text-[13px] text-gray-500">Years Of</p>
                    <p className="text-[13px] text-gray-500">Experience</p>
                  </div>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200 ml-16"></div>
            </div>

            {/* Skilled Professional */}
            <div className="flex items-center">
              <div className="flex flex-col items-center w-32">
                <div className="flex items-center gap-1">
                  <span className="text-[40px] font-bold text-[#0B1B2B] leading-none">
                    8K
                  </span>
                  <div className="">
                    <p className="text-[13px] text-gray-500">Skilled</p>
                    <p className="text-[13px] text-gray-500">Professional</p>
                  </div>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200 ml-16"></div>
            </div>

            {/* Visited Conference */}
            <div className="flex items-center">
              <div className="flex flex-col items-center w-32">
                <div className="flex items-center gap-1">
                  <span className="text-[40px] font-bold text-[#FF9B24] leading-none">
                    32
                  </span>
                  <div className="">
                    <p className="text-[13px] text-gray-500">Visited</p>
                    <p className="text-[13px] text-gray-500">Conference</p>
                  </div>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200 ml-16"></div>
            </div>

            {/* Software Available */}
            <div className="flex items-center">
              <div className="flex flex-col items-center w-32">
                <div className="flex items-center gap-1">
                  <span className="text-[40px] font-bold text-[#0B1B2B] leading-none">
                    1K
                  </span>
                  <div className="">
                    <p className="text-[13px] text-gray-500">Software</p>
                    <p className="text-[13px] text-gray-500">Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#0B1B2B] py-20 mb-5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                  IT Services & Software
                </p>
                <h2 className="text-3xl font-bold mb-4">Why You Choose Us?</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Classical Latin Literature From 45 BC, Making It Over 2000
                  Years Old. Richard McClintock, A Latin Professor At
                  Hampden-Sydney College In Virginia.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Customized</h3>
                  <div className="flex items-center">
                    <div className="h-[1px] w-8 bg-blue-500 mr-2"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">High Quality</h3>
                  <div className="flex items-center">
                    <div className="h-[1px] w-8 bg-blue-500 mr-2"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Experience</h3>
                  <div className="flex items-center">
                    <div className="h-[1px] w-8 bg-blue-500 mr-2"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Support</h3>
                  <div className="flex items-center">
                    <div className="h-[1px] w-8 bg-blue-500 mr-2"></div>
                  </div>
                </div>
              </div>

              <button className="bg-[#4461F2] text-white px-7 py-3 rounded-3xl hover:bg-blue-700 transition-colors text-[12px] font-medium">
                Explore More
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/images/whyChooseUs.png"
                  alt="Why Choose Us Illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
                {/* Blue Badge */}
                <div className="absolute bottom-4 right-4 bg-[#4461F2] text-white px-6 py-4 rounded-lg">
                  <p className="text-sm font-medium">IT Services</p>
                  <p className="text-sm font-medium">&</p>
                  <p className="text-sm font-medium">Software</p>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="mt-16">
            <p className="text-gray-400 text-sm mb-8">
              We're Proud To Collaborate With:
            </p>
            <div className="flex flex-wrap justify-between items-center gap-8">
              {/* <Image
                src="/images/company.png"
                alt="Partner 1"
                width={120}
                height={40}
                className="grayscale hover:grayscale-0 transition-all"
              /> */}
              {/* <Image
                src="https://img.freepik.com/free-vector/abstract-logo-template_1156-733.jpg"
                alt="Partner 2"
                width={120}
                height={40}
                className="grayscale hover:grayscale-0 transition-all"
              />
              <Image
                src="https://img.freepik.com/free-vector/abstract-logo-template_1156-734.jpg"
                alt="Partner 3"
                width={120}
                height={40}
                className="grayscale hover:grayscale-0 transition-all"
              />
              <Image
                src="https://img.freepik.com/free-vector/abstract-logo-template_1156-735.jpg"
                alt="Partner 4"
                width={120}
                height={40}
                className="grayscale hover:grayscale-0 transition-all"
              />
              <Image
                src="https://img.freepik.com/free-vector/abstract-logo-template_1156-736.jpg"
                alt="Partner 5"
                width={120}
                height={40}
                className="grayscale hover:grayscale-0 transition-all"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
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
              <p className="text-[15px] text-gray-500 mb-12 leading-relaxed">
                There Are Many Variations Of Passages Of Lorem Ipsum Available,
                But The Majority Have Suffered Alteration In
              </p>

              {/* Google Rating */}
              <div className="inline-flex items-center gap-3 bg-white shadow-md rounded-xl px-6 py-4">
                <Image
                  src="/images/google.png"
                  alt="Google Logo"
                  width={22}
                  height={22}
                  className="w-[22px] h-[22px]"
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
                    Client's Reviews
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
                    There Are Many Variations Of Passages Of Lorem Ipsum
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
                    There Are Many Variations Of Passages Of Lorem Ipsum
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
                    There Are Many Variations Of Passages Of Lorem Ipsum
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">
              Team Members
            </p>
            <h2 className="text-3xl font-bold text-white">Our Team Members</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <button className="bg-[#4461F2] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
