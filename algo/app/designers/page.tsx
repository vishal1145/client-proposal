import React from "react";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getMetadata } from "../utils/metadata";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return getMetadata("designers");
};
const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#F6F0E4] py-20 overflow-x-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/hand.png"
            alt="Hand with Rocket"
            width={300}
            height={400}
            className="w-auto h-[230px]"
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
      <section className="overflow-hidden my-12">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col justify-center p-8">
              <div className="mb-4 text-sm text-gray-400">DESIGN SERVICES</div>
              <h2 className="text-xl font-bold text-black leading-tight mb-4">
                Design That Inspires and Engages
              </h2>

              <p className="text-gray-600 mb-6 text-sm">
                At Algofolks, our design team transforms ideas into visually
                stunning, user-friendly experiences. Whether it&apos;s UI/UX design,
                branding, or visual content, our designers are here to bring
                your vision to life and ensure your audience stays engaged.
              </p>
              <Link href="/hire-developers">
    <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-fit px-6 py-2 flex items-center gap-2">
        Hire Developers →
    </button>
</Link>

            </div>
            {/* Right Image */}
            <div className="relative h-[400px]">
              <Image
                src="/images/designer.png"
                alt="Design Team"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Our Designers expertise Section */}
      <section className="py-8 bg-[#f8efdf]">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="text-[#64748B] uppercase text-xs border border-gray-300 inline-block p-2 rounded-3xl mb-4">
              DESIGN EXPERTISE
            </span>
            <h2 className="text-[35px] font-bold text-[#0B1B2B] leading-tight mb-6">
              Our Designers&apos; Expertise
            </h2>
            <p className="text-gray-600 text-[14px] max-w-[710px] mx-auto">
              The development of customer-centric product design is the primary goal of usability testing and UX/UI as a service. Our solutions ensure easy navigation, intuitive experiences, and a smooth user conversion path.
            </p>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { title: "Strategy", desc: "Crafting tailored digital strategies that drive growth.", icon: "/images/strategy.svg" },
              { title: "Visual Identity", desc: "Creating compelling brand visuals for impact.", icon: "/images/visual_identity.svg" },
              { title: "User Interface", desc: "Designing intuitive interfaces for better experiences.", icon: "/images/user_interface.svg" },
              { title: "Scalable Solutions", desc: "Developing systems that adapt to business growth.", icon: "/images/scalable_solutions.svg" },
              { title: "Digital Transformation", desc: "Modernizing legacy systems for efficiency.", icon: "/images/digital_transformation.svg" },
              { title: "Seamless Integration", desc: "Ensuring smooth tech integrations across platforms.", icon: "/images/seamleass_integration.svg" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
                <div className="mb-4">
                  <div className=" p-3 rounded-lg inline-block group-hover:bg-white">
                    <Image src={item.icon} alt={item.title} width={20} height={20} className="w-12 h-12" />
                  </div>
                </div>
                <h3 className="text-[#0B1B2B] text-[16px] font-semibold mb-2 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[14px] group-hover:text-white/80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Design Services Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="text-center">
            <p className="text-[#64748B] uppercase text-xs border border-gray-300 inline-block p-2 rounded-3xl mb-4 ">Services</p>
            <h2 className="text-[30px] font-bold text-[#0B1B2B] mb-12 text-center ">Our Design Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 ">
  {/* UI/UX Design Card */}
  <div className="relative overflow-hidden h-[250px] group">
    <Image
      src="/images/design1.jpeg"
      alt="UI/UX Design"
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-500"
    />
    {/* Overlay that darkens on hover */}
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
    
    {/* Content that slides up on hover */}
    <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-2xl font-semibold mb-3 text-white">UI/UX Design</h3>
      <p className="text-sm text-white/0 group-hover:text-white/100 transition-opacity duration-300">
        Crafting seamless, user-friendly interfaces for web and mobile applications.
      </p>
    </div>
  </div>

  {/* Brand Identity Design Card */}
  <div className="relative overflow-hidden h-[250px] group">
    <Image
      src="/images/design2.jpeg"
      alt="Brand Identity Design"
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
    
    <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-2xl font-semibold mb-3 text-white">Brand Identity Design</h3>
      <p className="text-sm text-white/0 group-hover:text-white/100 transition-opacity duration-300">
        Developing logos, visual guidelines, and branding assets that tell your story.
      </p>
    </div>
  </div>

  {/* Product Design Card */}
  <div className="relative overflow-hidden h-[250px] group">
    <Image
      src="/images/design3.jpeg"
      alt="Product Design"
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
    
    <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-2xl font-semibold mb-3 text-white">Product Design</h3>
      <p className="text-sm text-white/0 group-hover:text-white/100 transition-opacity duration-300">
        Transforming concepts into prototypes and production-ready designs.
      </p>
    </div>
  </div>

  {/* Graphic Design Card */}
  <div className="relative overflow-hidden h-[250px] group">
    <Image
      src="/images/design4.png"
      alt="Graphic Design"
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
    
    <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-2xl font-semibold mb-3 text-white">Graphic Design</h3>
      <p className="text-sm text-white/0 group-hover:text-white/100 transition-opacity duration-300">
        Creating visually engaging graphics for digital and print media.
      </p>
    </div>
  </div>

  {/* Motion Graphics Card */}
  <div className="relative overflow-hidden h-[250px] group">
    <Image
      src="/images/design4.png"
      alt="Motion Graphics"
      fill
      className="object-cover group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
    
    <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-2xl font-semibold mb-3 text-white">Motion Graphics</h3>
      <p className="text-sm text-white/0 group-hover:text-white/100 transition-opacity duration-300">
        Designing animations and videos to bring your ideas to life.
      </p>
    </div>
  </div>

          </div>
        </div>
      </section>

      {/* Why Choose Algofolks Designers Section */}
      <section className="pb-8">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="text-center">
            <span className="text-[#64748B] uppercase text-xs border border-gray-300 inline-block p-2 rounded-3xl mb-4">
              OUR ADVANTAGES
            </span>
            <h2 className="text-[35px] font-bold text-[#0B1B2B] leading-tight mb-6">
              Why Choose Algofolks Designers?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: User-Centered Approach */}
            <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block group-hover:bg-white">
                  <Image src="/images/professional.svg" alt="User Icon" width={24} height={24} className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-[16px] font-semibold mb-2 group-hover:text-white">
                User-Centered Approach
              </h3>
              <p className="text-gray-600 text-[14px] group-hover:text-white/80">
                We prioritize intuitive and impactful designs for your users.
              </p>
            </div>

            {/* Card 2: Creative Excellence */}
            <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className=" p-3 rounded-lg inline-block group-hover:bg-white">
                  <Image src="/images/teammates.svg" alt="Creative Icon" width={24} height={24} className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-[16px] font-semibold mb-2 group-hover:text-white">
                Creative Excellence
              </h3>
              <p className="text-gray-600 text-[14px] group-hover:text-white/80">
                Combining aesthetics with strategy to drive results.
              </p>
            </div>

            {/* Card 3: Versatile Expertise */}
            <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className=" p-3 rounded-lg inline-block group-hover:bg-white">
                  <Image src="/images/self_managed.svg" alt="Expertise Icon" width={24} height={24} className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-[16px] font-semibold mb-2 group-hover:text-white">
                Versatile Expertise
              </h3>
              <p className="text-gray-600 text-[14px] group-hover:text-white/80">
                From mobile app designs to branding, we cater to all needs.
              </p>
            </div>
          </div>

          {/* Card 4: Cutting-Edge Tools */}
          <div className="mt-6 max-w-sm ">
            <div className="bg-white p-4 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block group-hover:bg-white">
                  <Image src="/images/finical_control.svg" alt="Tools Icon" width={24} height={24} className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-[16px] font-semibold mb-2 group-hover:text-white">
                Cutting-Edge Tools
              </h3>
              <p className="text-gray-600 text-[14px] group-hover:text-white/80">
                Leveraging the latest design tech for superior quality.
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
      <section className="py-16 bg-[#0066FF] relative overflow-hidden rounded-3xl shadow-lg  max-w-[1400px] ">

  <div className="absolute inset-0">
    <Image
      src="/images/designbackground.jpg"
      alt="Design Background"
      fill
      className="object-cover opacity-90"
    />
  </div>

  <div className="relative z-10 px-8 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">

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
</div> */}
  {/* Bottom Content */}
  <div className="my-16 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1B2B] mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 text-[14px] mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to build innovative solutions using the latest
              technologies and best coding practices. Our team is ready to help
              you achieve your goals.
            </p>

            <Link href="/contact" >
              <Button
                variant="default"
                className="bg-[#0066FF] hover:bg-blue-700 text-white rounded-full px-8 py-3 flex items-center gap-2 mx-auto"
              >
                Contact Us
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
            </Link>
          </div>
      <Footer />
    </div>
  );
};

export default page;
