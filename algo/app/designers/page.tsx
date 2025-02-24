import React from "react";
import Image from "next/image";
import Footer from "@/components/sections/Footer";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
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
              <h1 className="text-3xl font-bold text-[#0B1B2B]">Designers</h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Designers</span>
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
        <span className="text-[#64748B] uppercase text-sm mb-4 block">
          DESIGN SERVICES
        </span>
        <h2 className="text-[52px] font-bold text-white leading-tight mb-6">
        &quot;Design That Inspires and Engages&quot;
        </h2>
        <h3 className="text-[38px] font-semibold text-white mb-6">
          Where Creativity Meets Functionality
        </h3>
        <p className="text-gray-400 mb-8 text-[16px] max-w-2xl">
          At Algofolks, our design team transforms ideas into visually
          stunning, user-friendly experiences. Whether it&apos;s UI/UX design,
          branding, or visual content, our designers are here to bring
          your vision to life and ensure your audience stays engaged.
        </p>
        <button className="bg-[#0066FF] text-white px-6 py-3 rounded-full hover:bg-[#0052CC] transition-colors">
          Hire Designers →
        </button>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="relative">
          <Image
            src="/images/designers1.png"
            alt="Design Team"
            width={500}
            height={500}
            className="w-full h-auto rounded-2xl"
          />
          
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Our Designers expertise Section */}
      <section className="py-16">
  <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
    <div className="mb-12">
      <span className="text-[#64748B] uppercase text-sm mb-4 block">
        DESIGN EXPERTISE
      </span>
      <h2 className="text-[42px] font-bold text-[#0B1B2B] mb-6">
        Our Designers expertise
      </h2>
      <p className="text-gray-600 max-w-4xl mb-12">
        The development of customer-centric product design is the primary
        goal of usability testing and UX/UI as a service. Such solutions are
        easy-to-navigate, intuitive, and make the user conversion path
        smooth and simple.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Strategy */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
        <div className="mb-6">
          <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <Image
              src="/images/strategy-icon.svg"
              alt="Strategy"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>
        <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
          Strategy
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
          Our team crafts tailored digital product strategies that align
          with your company&apos;s vision, driving sustainable growth and
          ensuring long-term business success.
        </p>
      </div>

      {/* Visual identity */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
        <div className="mb-6">
          <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <Image
              src="/images/visual-icon.svg"
              alt="Visual Identity"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>
        <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
          Visual identity
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
          We bring your brand to life by creating a compelling visual
          identity, from logos to bespoke typography, ensuring your
          business stands out with a cohesive, professional look.
        </p>
      </div>

      {/* Continue the same pattern for other cards */}
      {/* User interface */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
        <div className="mb-6">
          <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <Image
              src="/images/ui-icon.svg"
              alt="User Interface"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>
        <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
          User interface
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
          We transform your brand identity into a practical and intuitive
          digital interface, delivering user-friendly designs that help
          clients navigate and succeed in the digital landscape.
        </p>
      </div>

      {/* Scalable Solutions */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
      <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <Image
              src="/images/ui-icon.svg"
              alt="User Interface"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
      <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
      Scalable Solutions
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
        Our experts design systems that grow with your business. We implement scalable infrastructure that adapts to demand, ensuring smooth operations without compromising performance or security.
        </p>
      </div>

      {/* Digital Transformation */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
      <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <Image
              src="/images/ui-icon.svg"
              alt="User Interface"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
      <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
      Digital Transformation

        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
        We accelerate your business’s digital journey by modernizing legacy systems, improving workflows, and enabling innovative solutions to create more value and efficiency in your operations.        </p>
      </div>

      {/* Seamless Integration */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
      <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <Image
              src="/images/ui-icon.svg"
              alt="User Interface"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
      <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
      Seamless Integration
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
        We ensure seamless integration of various technologies across your platform, enabling smooth communication between systems, reducing downtime, and enhancing overall operational efficiency. </p>
      </div>
    </div>
  </div>
</section>

      {/* Why Choose Algofolks Designers Section */}
      <section className="py-16 bg-[#f8f9f9]">
  <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
    <div className="mb-12">
      <span className="text-[#64748B] uppercase text-sm mb-4 block">
        OUR ADVANTAGES
      </span>
      <h2 className="text-[42px] font-bold text-[#0B1B2B] leading-tight">
        Why Choose Algofolks Designers?
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* User-Centered Approach */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
        <div className="mb-6">
          <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <svg className="w-6 h-6 text-white group-hover:text-[#0066FF]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
        </div>
        <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
          User-Centered Approach
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
          We prioritize your users by designing interfaces and experiences
          that are intuitive and impactful.
        </p>
      </div>

      {/* Creative Excellence */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
        <div className="mb-6">
          <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <svg className="w-6 h-6 text-white group-hover:text-[#0066FF]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6z"/>
            </svg>
          </div>
        </div>
        <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
          Creative Excellence
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
          Combining aesthetics with strategy, our designs not only look
          great but also drive results.
        </p>
      </div>

      {/* Versatile Expertise */}
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group">
        <div className="mb-6">
          <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <svg className="w-6 h-6 text-white group-hover:text-[#0066FF]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
        </div>
        <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
          Versatile Expertise
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
          From mobile app designs to corporate branding, we cater to a
          wide range of creative needs.
        </p>
      </div>
    </div>

    {/* Cutting-Edge Tools */}
    <div className="mt-12">
      <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:bg-[#0066FF] group max-w-sm mx-auto">
        <div className="mb-6">
          <div className="bg-[#0066FF] p-4 rounded-lg inline-block group-hover:bg-white">
            <svg className="w-6 h-6 text-white group-hover:text-[#0066FF]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </div>
        </div>
        <h3 className="text-[#0B1B2B] text-xl font-semibold mb-3 group-hover:text-white">
          Cutting-Edge Tools
        </h3>
        <p className="text-gray-600 text-[14px] group-hover:text-white/80">
          Leveraging the latest design technologies to deliver superior
          quality and precision.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Our Design Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold mb-12">Our Design Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 mb-6">
            {/* UI/UX Design Card */}
            <div className="relative  overflow-hidden h-[300px] group">
              <Image
                src="/images/design1.jpeg"
                alt="UI/UX Design"
                fill
                className="object-cover brightness-50"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-semibold mb-3">UI/UX Design</h3>
                <p className="text-sm">
                  Crafting seamless, user-friendly interfaces for web and mobile
                  applications.
                </p>
              </div>
            </div>

            {/* Brand Identity Design Card */}
            <div className="relative  overflow-hidden h-[300px] group">
              <Image
                src="/images/design2.jpeg"
                alt="Brand Identity Design"
                fill
                className="object-cover brightness-50"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-semibold mb-3">
                  Brand Identity Design
                </h3>
                <p className="text-sm">
                  Developing logos, visual guidelines, and branding assets that
                  tell your story.
                </p>
              </div>
            </div>

            {/* Product Design Card */}
            <div className="relative  overflow-hidden h-[300px] group">
              <Image
                src="/images/design3.jpeg"
                alt="Product Design"
                fill
                className="object-cover brightness-50"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-semibold mb-3">Product Design</h3>
                <p className="text-sm">
                  Transforming concepts into prototypes and production-ready
                  designs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 ">
            {/* Graphic Design Card */}
            <div className="relative  overflow-hidden h-[300px] group">
              <Image
                src="/images/design4.png"
                alt="Graphic Design"
                fill
                className="object-cover brightness-50"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-semibold mb-3">Graphic Design</h3>
                <p className="text-sm">
                  Creating visually engaging graphics for digital and print
                  media.
                </p>
              </div>
            </div>

            {/* Motion Graphics Card */}
            <div className="relative  overflow-hidden h-[300px] group">
              <Image
                src="/images/design4.png"
                alt="Motion Graphics"
                fill
                className="object-cover brightness-50"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-semibold mb-3">Motion Graphics</h3>
                <p className="text-sm">
                  Designing animations and videos to bring your ideas to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
      <section className="py-16 bg-[#0066FF] relative overflow-hidden rounded-3xl shadow-lg  max-w-[1400px] ">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/images/designbackground.jpg"
      alt="Design Background"
      fill
      className="object-cover opacity-90"
    />
  </div>

  {/* Content Container */}
  <div className="relative z-10 px-8 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
    {/* Text Section */}
    <div className="md:w-1/2">
      <p className="text-sm text-white mb-4">How We Work</p>

      <h2 className="text-[42px] font-bold text-white mb-6 leading-tight">
        Create the Extraordinary
        <br />
        with Us
      </h2>
      <p className="text-white/90 text-[14px] mb-6">
        Our team of creative minds is dedicated to helping your brand stand out.
        Whether you&apos;re a startup looking for a fresh identity or an established 
        business needing a design overhaul, we&apos;re here to help.
      </p>

      {/* Process Steps */}
      <ul className="space-y-4 text-white">
        <li>
          <strong>Discovery :</strong> We understand your business goals and target audience.
        </li>
        <li>
          <strong>Design :</strong> We craft prototypes, wireframes, and visually stunning layouts.
        </li>
        <li>
          <strong>Delivery :</strong> Your design is polished and ready to captivate users.
        </li>
      </ul>

      {/* CTA Link */}
      <div className="flex items-center gap-2 text-white group border-t border-white/20 pt-8 mt-6 w-fit">
        <span className="font-medium">Let&apos;s Design Your Future</span>
        <svg
          className="w-6 h-6 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>

   
  </div>
</section>
</div>

      <Footer />
    </div>
  );
};

export default page;
