import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Why Choose Us - Algofolks | Our Strengths",
  description: "Discover why Algofolks is your ideal technology partner. Learn about our expertise, approach, and commitment to excellence.",
};

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen bg-white">
    {/* Hero Section */}
    <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
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
          <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
            Why Choose Us
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <span>Home</span>
            <span>-</span>
            <span className="text-[#0561FC]">Why Choose Us</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
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

    {/* Main Content Section with Gradient Background */}
    <div className="relative bg-gradient-to-b from-white to-white">
      <div className="max-w-7xl mx-auto px-4 pt-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-20">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-[#0561FC] rounded-full"></span>
              <span className="text-sm font-medium text-gray-600">Company Overview</span>
            </div>

            {/* Title and Description */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1B2B] mb-6 leading-tight">
              Why Choose Algofolks As Your Technology Partner
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              We combine innovation with expertise to deliver exceptional digital solutions that drive your business forward.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { number: "10+", label: "Years Experience" },
                { number: "100+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-[#0561FC] mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#0561FC] text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get Started
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors font-medium">
                View Our Work
              </button>
            </div>
          </div>


  {/* Right Column - Hero Image */}
  <div className="relative lg:h-[600px] flex items-center justify-center"> {/* Added fixed height */}
    {/* Background Decorative Elements */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-50"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-50 rounded-full filter blur-3xl opacity-50"></div>

    {/* Main Image Container */}
    <div className="relative z-10 w-full max-w-lg mx-auto"> {/* Added max-width and margin */}
      <Image
        src="/images/service 1.png"
        alt="Why Choose Algofolks"
        width={600}
        height={400}
        className="rounded-2xl shadow-lg w-full h-auto object-cover"
        priority
      />
      
      {/* Floating Stats Cards */}
      <div className="absolute -left-8 top-1/4 bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-[#0561FC] text-xl">✓</span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">Expert Team</div>
            <div className="text-xs text-gray-500">Skilled Professionals</div>
          </div>
        </div>
      </div>

      <div className="absolute -right-8 bottom-1/4 bg-white p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-green-600 text-xl">★</span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">Quality First</div>
            <div className="text-xs text-gray-500">ISO Certified</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 pb-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Key Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Expert Team",
                  description: "Skilled professionals with deep industry experience",
                  icon: "/images/sd1.png"
                },
                {
                  title: "Innovation Focus",
                  description: "Cutting-edge solutions using latest technologies",
                  icon: "/images/sd1.png"
                },
                {
                  title: "Quality Assurance",
                  description: "Rigorous testing and quality control processes",
                  icon: "/images/sd1.png"
                },
                {
                  title: "Dedicated Support",
                  description: "24/7 support and maintenance services",
                  icon: "/images/sd1.png"
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="mb-4"
                  />
                  <h3 className="text-lg font-semibold text-[#0B1B2B] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="group overflow-hidden rounded-xl">
                <Image
                  src="/images/service 2.png"
                  alt="Our Work 1"
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="group overflow-hidden rounded-xl">
                <Image
                  src="/images/service 3.png"
                  alt="Our Work 2"
                  width={400}
                  height={300}
                  className="w-full h-[250px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#0B1B2B] mb-6">
                Our Development Process
              </h2>
              <div className="space-y-6">
                {[
                  "Initial Consultation and Requirements Gathering",
                  "Strategic Planning and Solution Design",
                  "Agile Development and Implementation",
                  "Quality Assurance and Testing",
                  "Deployment and Continuous Support"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0561FC] flex items-center justify-center text-white font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <h6 className="font-medium text-[#0B1B2B] mb-2">{step}</h6>
                      <p className="text-sm text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-8">
              {/* Quick Stats */}
              <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white mb-8">
                <h4 className="text-xl font-bold mb-6">Why Choose Us</h4>
                <div className="space-y-4">
                  {[
                    {
                      title: "Professional Team",
                      description: "Expert developers and designers"
                    },
                    {
                      title: "Quality Assurance",
                      description: "Rigorous testing processes"
                    },
                    {
                      title: "Timely Delivery",
                      description: "On-time project completion"
                    },
                    {
                      title: "24/7 Support",
                      description: "Round-the-clock assistance"
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-white/10 rounded-lg">
                      <h5 className="font-medium text-white mb-1">{item.title}</h5>
                      <p className="text-sm text-gray-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-[#F6F0E4] p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-[#0B1B2B] mb-4">
                  Ready to Get Started?
                </h4>
                <p className="text-sm text-gray-600 mb-6">
                  Contact us today to discuss your project requirements.
                </p>
                <button className="w-full px-6 py-3 bg-[#0561FC] text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-sm text-gray-600 mb-2 border border-gray-300 px-3 py-1 rounded-full">
                Our Services
              </span>
              <h2 className="text-3xl font-bold text-[#0B1B2B] mt-4">
                Explore Our Solutions
              </h2>
            </div>
            <Link href="/services" className="text-[#0561FC] hover:underline">
  View All Services →
</Link>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
          {/* Graphic Design Card */}
          <div className="col-span-1 sm:col-span-6 group">
            <Link href="services/graphic-designing">
            <div className="relative h-[200px] sm:h-[300px] rounded-3xl overflow-hidden mb-4">
              <Image
                src="/images/homes1.png"
                alt="Graphic Design"
                fill
                className="object-cover"
              />
            </div>
            </Link>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B2B]">
                Graphic Designing
              </h3>
              
              <Link href="/services">
                <Button
                  variant="outline"
                  className="rounded-full bg-[#0561FC] text-white hover:bg-blue-700 hover:text-white transition-colors px-4 sm:px-6 py-2 text-xs sm:text-sm w-fit"
                >
                  Explore More →
                </Button>
              </Link>
            </div>
          </div>

          {/* Web Development Card */}
          <div className="col-span-1 sm:col-span-3 group">
          <Link href="services/web-development">
            <div className="relative h-[200px] sm:h-[300px] rounded-3xl overflow-hidden mb-4">
              <Image
                src="/images/home2.png"
                alt="Web Development"
                fill
                className="object-cover"
              />
            </div>
            </Link>
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">
              Web development
            </h3>
          </div>

          {/* App Development Card */}
          <div className="col-span-1 sm:col-span-3 group">
          <Link href="services/software-development">
            <div className="relative h-[200px] sm:h-[300px] rounded-3xl overflow-hidden mb-4">
              <Image
                src="/images/homes3.png"
                alt="App Development"
                fill
                className="object-cover"
              />
            </div>
            </Link>
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">
              Software development
            </h3>
          </div>
        </div>
     </div>
     </div>

      <Footer />
    </main>
  );
}