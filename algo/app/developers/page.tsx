import React from "react";
import Image from "next/image";
import Footer from "@/components/sections/Footer";

const page = () => {
  return (
    <div>
      <section className="relative bg-[#F6F0E4] py-20 overflow-x-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 z-10">
          <Image
            src="/images/hand.png"
            alt="Hand with Rocket"
            width={300}
            height={200}
            className="w-auto h-auto"
          />
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-3xl font-bold text-[#0B1B2B]">Developers</h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Developers</span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-1/4 z-10">
          <Image
            src="/images/decorative.png"
            alt="Decorative Element"
            width={100}
            height={100}
            className="w-auto h-auto opacity-30"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#0B1B2B]">
  <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-[52px] font-bold text-white leading-tight mb-6">
        &quot;Unleash Innovation with Algofolks Developer Hub&quot;
        </h2>
        <h3 className="text-[38px] font-semibold text-white mb-6">
          Empowering Businesses with Next-Gen Solutions
        </h3>
        <p className="text-gray-400 mb-8 text-[14px]">
          At Algofolks, we combine technical expertise and industry
          insights to build custom solutions tailored to your business
          needs. From AI-driven innovations to secure cloud architectures,
          our developers are committed to driving your digital
          transformation journey.
        </p>
        <button className="bg-[#0066FF] text-white px-6 py-3 rounded hover:bg-[#345e9b] transition-colors">
          Hire Developers →
        </button>
      </div>

      {/* Right Image */}
      <div className="relative">
        <Image
          src="/images/developers1.png"
          alt="Developer Hub Illustration"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>
    </div>
  </div>
</section>
      <div className="bg-[#f8f9f9]">
      <section className="py-8">
  <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
    {/* Updated header styling */}
    <div className="mb-12">
      <span className="text-[#64748B] uppercase text-sm mb-4 block">
        IT SERVICES & SOFTWARE
      </span>
      <h2 className="text-[52px] font-bold text-[#0B1B2B] leading-tight mb-6">
        Why Algofolks?
      </h2>
      <p className="text-gray-600 text-[16px] max-w-2xl">
        Many companies face challenges with finding vetted specialists.
        Our unique solution for hiring self-managed experts addresses all
        of these concerns.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
        <div className="mb-6">
          <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <Image
              src="/images/tech-icon.svg"
              alt="Technology Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>
        <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
          Cutting-Edge Technologies
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
          Harness the power of AI, cloud computing, and IoT to stay
          ahead in a competitive market.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
        <div className="mb-6">
          <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <Image
              src="/images/expertise-icon.svg"
              alt="Expertise Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>
        <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
          End-to-End Expertise
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
          From ideation to deployment, we offer comprehensive support
          across web development, mobile apps, and enterprise solutions.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
        <div className="mb-6">
          <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <Image
              src="/images/scalable-icon.svg"
              alt="Scalable Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>
        <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
          Scalable Solutions
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
          Develop future-ready applications that grow with your
          business.
        </p>
      </div>
    </div>
  </div>
</section>
        {/*What We Offer */}
        <section className="py-0">
  <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
    <div className="mb-12">
      <span className="text-[#64748B] uppercase text-sm mb-4 block">
        OUR SERVICES
      </span>
      <h2 className="text-[52px] font-bold text-[#0B1B2B] leading-tight mb-6">
        What We Offer
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
        <div className="mb-6">
          <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <Image
              src="/images/tech-icon.svg"
              alt="Technology Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>
        <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
          Custom Software Development
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
          Tailored to meet your business challenges.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
        <div className="mb-6">
          <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <Image
              src="/images/expertise-icon.svg"
              alt="Expertise Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>
        <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
          AI-Powered Solutions
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
          Leverage artificial intelligence to optimize operations and
          decision-making.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
        <div className="mb-6">
          <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <Image
              src="/images/scalable-icon.svg"
              alt="Scalable Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>
        <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
          Cloud & IoT Integrations
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
          Achieve seamless connectivity and real-time insights.
        </p>
      </div>
    </div>
  </div>
</section>
      </div>

      {/* Expert Developers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <h2 className="text-[42px] font-bold text-[#0B1B2B] mb-12 ">
            Expert Developers for Advanced Digital Transformation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Card 1 - AI */}
            <div className="relative group overflow-hidden ">
              <Image
                src="/images/mblog3.webp"
                alt="Artificial Intelligence"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover brightness-75 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
                Artificial
                <br />
                Intelligence
              </h3>
            </div>

            {/* Card 2 - Cloud */}
            <div className="relative group overflow-hidden ">
              <Image
                src="/images/mblog2.webp"
                alt="Cloud"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover brightness-75 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
                Cloud
              </h3>
            </div>

            {/* Card 3 - Cognitive Business */}
            <div className="relative group overflow-hidden ">
              <Image
                src="/images/Mblog1.webp"
                alt="Cognitive Business Operations"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover brightness-75 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
                Cognitive
                <br />
                Business
                <br />
                Operations
              </h3>
            </div>

            {/* Card 4 - Consulting */}
            <div className="relative group overflow-hidden ">
              <Image
                src="/images/mblog4.webp"
                alt="Consulting"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover brightness-75 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
                Consulting
              </h3>
            </div>

            {/* Card 5 - Cybersecurity */}
            <div className="relative group overflow-hidden ">
              <Image
                src="/images/mblog5.webp"
                alt="Cybersecurity"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover brightness-75 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
                Cybersecurity
              </h3>
            </div>

            {/* Card 6 - Data & Analytics */}
            <div className="relative group overflow-hidden ">
              <Image
                src="/images/mblog2.webp"
                alt="Data & Analytics"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover brightness-75 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
                Data & Analytics
              </h3>
            </div>

            {/* Card 7 - Enterprise Solutions */}
            <div className="relative group overflow-hidden ">
              <Image
                src="/images/mblog3.webp"
                alt="Enterprise Solutions"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover brightness-75 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
                Enterprise
                <br />
                Solutions
              </h3>
            </div>

            {/* Card 8 - IoT Digital Engineering */}
            <div className="relative group overflow-hidden ">
              <Image
                src="/images/mblog3.webp"
                alt="IoT Digital Engineering"
                width={400}
                height={300}
                className="w-full h-[250px] object-cover brightness-75 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <h3 className="absolute bottom-6 left-6 text-white text-xl font-semibold">
                IoT Digital
                <br />
                Engineering
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Code Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <h2 className="text-[42px] font-bold text-[#0B1B2B] mb-4">Code</h2>
          <div className="relative mb-12">
            <h3 className="text-2xl font-semibold text-[#0B1B2B]">
              Write better code
            </h3>
            <div className="absolute bottom-0 left-0 w-24 h-1 bg-[#26C6DA]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Python */}
  <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
    <div className="mb-6">
      <div className=" p-4 rounded-lg inline-block ">
        <Image
          src="/images/python.png"
          alt="Python"
          width={50}
          height={50}
          className="w-auto h-auto"
        />
      </div>
    </div>
    <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
      Python
    </h3>
    <p className="text-gray-600 text-[14px] group-hover:text-white/80">
      High-level programming language for web development, AI, and data science.
    </p>
  </div>

  {/* Open Liberty */}
  <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
    <div className="mb-6">
      <div className=" p-4 rounded-lg inline-block ">
        <Image
          src="/images/liberty.png"
          alt="Open Liberty"
          width={50}
          height={50}
          className="w-auto h-auto"
        />
      </div>
    </div>
    <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
      Open Liberty
    </h3>
    <p className="text-gray-600 text-[14px] group-hover:text-white/80">
      Cloud-native Java application server for microservices and enterprise apps.
    </p>
  </div>

  {/* Java */}
  <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
    <div className="mb-6">
      <div className="p-4 rounded-lg inline-block ">
        <Image
          src="/images/java.png"
          alt="Java"
          width={50}
          height={50}
          className="w-auto h-auto"
        />
      </div>
    </div>
    <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
      Java
    </h3>
    <p className="text-gray-600 text-[14px] group-hover:text-white/80">
      Versatile language for building enterprise-level applications and Android development.
    </p>
  </div>

  {/* Node.js */}
  <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
    <div className="mb-6">
      <div className=" p-4 rounded-lg inline-block">
        <Image
          src="/images/nodejs.png"
          alt="Node.js"
          width={50}
          height={50}
          className="w-auto h-auto"
        />
      </div>
    </div>
    <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
      Node.js
    </h3>
    <p className="text-gray-600 text-[14px] group-hover:text-white/80">
      JavaScript runtime for building scalable network applications and APIs.
    </p>
  </div>

  {/* PyTorch */}
  <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
    <div className="mb-6">
      <div className=" p-4 rounded-lg inline-block ">
        <Image
          src="/images/pytorch.png"
          alt="PyTorch"
          width={50}
          height={50}
          className="w-auto h-auto"
        />
      </div>
    </div>
    <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
      PyTorch
    </h3>
    <p className="text-gray-600 text-[14px] group-hover:text-white/80">
      Open-source machine learning library for deep learning and AI research.
    </p>
  </div>

  {/* COBOL */}
  <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
    <div className="mb-6">
      <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
        <div className="text-white group-hover:text-[#0066FF]">
          <span className="text-lg font-semibold">COBOL</span>
        </div>
      </div>
    </div>
    <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
      COBOL
    </h3>
    <p className="text-gray-600 text-[14px] group-hover:text-white/80">
      Enterprise-grade language for business, finance, and administrative systems.
    </p>
  </div>
</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
