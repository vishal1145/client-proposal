import Image from "next/image";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
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
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
              Contact Us
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Contact Us</span>
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
      </div>

      {/* World Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative">
            <Image
              src="/images/Layer_1.png"
              alt="World Map"
              width={1200}
              height={600}
              className="w-full h-auto opacity-20"
            />
            {/* Contact Info Box */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4461F2] text-white px-8 py-6 rounded-lg">
              <p className="text-sm">IT Services & Software Solutions</p>
              <p className="text-sm">245, North London, WC1N 3BH</p>
              <p className="text-sm">Ph: +44 020 7946 0859</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-[#F8F9FF]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Chat For Sales */}
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#F5F6FE] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#4461F2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-[#0B1B2B] font-semibold mb-2">
                Chat For Sales
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Company To Digital Level Lorem
              </p>
              <button className="bg-[#4461F2] text-white text-sm px-6 py-2 rounded-full">
                Chat With Sales
              </button>
            </div>

            {/* Chat For Support */}
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#F5F6FE] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#4461F2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-[#0B1B2B] font-semibold mb-2">
                Chat For Support
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Company To Digital Level Lorem
              </p>
              <button className="bg-[#4461F2] text-white text-sm px-6 py-2 rounded-full">
                Chat With Support
              </button>
            </div>

            {/* Visit Our Site */}
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#F5F6FE] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#4461F2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-[#0B1B2B] font-semibold mb-2">
                Visit Our Site
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Company To Digital Level Lorem
              </p>
              <button className="bg-[#4461F2] text-white text-sm px-6 py-2 rounded-full">
                www.itservices.com
              </button>
            </div>

            {/* Contact Us */}
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-[#F5F6FE] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-[#4461F2]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-[#0B1B2B] font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-500 text-sm mb-4">
                Company To Digital Level Lorem
              </p>
              <button className="bg-[#4461F2] text-white text-sm px-6 py-2 rounded-full">
                +44 020 7946 0859
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-[#E0EFFF]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Contact Address</p>
              <h2 className="text-3xl font-bold text-[#0B1B2B] mb-6">
                We're The Future OF{" "}
                <span className="text-[#4461F2]">IT Industry</span>,
                <br />
                Further Contact Us
              </h2>
              <p className="text-gray-600 mb-8">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Lorem Ipsum Has Been The Industry's Standard Dummy
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F5F6FE] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#4461F2]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1B2B] mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600">
                      42 Mammoun Street, Saba
                      <br />
                      Carpet And Antiques Store, UK
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F5F6FE] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#4461F2]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1B2B] mb-1">
                      Phone Number
                    </h4>
                    <p className="text-gray-600">+561 541 578 961</p>
                    <p className="text-gray-600">+95 183 996 159</p>
                  </div>
                </div>

                {/* Email Id */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F5F6FE] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#4461F2]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1B2B] mb-1">
                      Email Id
                    </h4>
                    <p className="text-gray-600">Info@Service.Com</p>
                    <p className="text-gray-600">Enquiry@Service.Com</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E0EFFF] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[#4461F2]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B1B2B] mb-1">
                      Opening Hours
                    </h4>
                    <p className="text-gray-600">Mon - Sat : M/g (09.00am To</p>
                    <p className="text-gray-600">09.00pm, Sun - Holiday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-[#4461F2] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get Quotes</h3>
              <p className="text-white/80 mb-8">
                The Point Of Using Lorem Ipsum Is That It Has More-Or-Less
                Normal
              </p>

              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white/10 text-white placeholder-white/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <input
                  type="email"
                  placeholder="Email Id"
                  className="w-full bg-white/10 text-white placeholder-white/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <input
                  type="text"
                  placeholder="Your Enquired"
                  className="w-full bg-white/10 text-white placeholder-white/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-white/10 text-white placeholder-white/60 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                ></textarea>

                <button className="bg-white text-[#4461F2] px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                  Submit Now →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
