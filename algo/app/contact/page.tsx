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
            {/* World Map Background */}
            <Image
              src="/images/Layer_1.png"
              alt="World Map"
              width={1200}
              height={600}
              className="w-full h-auto opacity-90"
            />

            {/* Singapore Office */}
            <div className="absolute top-[52%] left-[75%]">
              <div className="relative">
                <div className="w-1 h-1 bg-[#0561FC] rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-2 h-2 bg-[#0561FC] rounded-full relative z-10"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#0561FC] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                  <p>IT Services & Software Solutions</p>
                  <p>45, Singapore</p>
                  <p>Ph: +65 123 456 789</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-[#F8F9FF]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Chat For Sales */}
            <div className="bg-white p-8 rounded-xl text-left hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#F5F6FE] rounded-full flex items-start justify-start mb-4">
                <svg
                  className="w-7 h-7 text-[#0561FC]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 9C17 12.87 13.87 16 10 16C6.13 16 3 12.87 3 9C3 5.13 6.13 2 10 2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 16C21 18.76 18.76 21 16 21C13.24 21 11 18.76 11 16C11 13.24 13.24 11 16 11C18.76 11 21 13.24 21 16Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[#0B1B2B] font-semibold text-lg mb-2">
                Chat For Sales
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Contrary To Popular Belief, Lorem
              </p>
              <button className="text-white text-sm font-medium bg-[#0561FC] px-6 py-2.5 rounded-full hover:bg-[#0561FC]/90 transition-colors">
                Sales@Example.Com →
              </button>
            </div>

            {/* Chat For Support */}
            <div className="bg-white p-8 rounded-xl text-left hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#F5F6FE] rounded-full flex  mb-4">
                <svg
                  className="w-7 h-7 text-[#0561FC]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 14C8.5 15.5 10 16.5 12 16.5C14 16.5 15.5 15.5 16 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9H9.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 9H15.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[#0B1B2B] font-semibold text-lg mb-2">
                Chat For Support
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Contrary To Popular Belief, Lorem
              </p>
              <button className="text-white text-sm font-medium bg-[#0561FC] px-6 py-2.5 rounded-full hover:bg-[#0561FC]/90 transition-colors">
                Get In Touch →
              </button>
            </div>

            {/* Visit Our Site */}
            <div className="bg-[#0561FC] p-8 rounded-xl text-left hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-white/10 rounded-full flex  mb-4">
                <svg
                  className="w-7 h-7 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 12H16.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 7.5V16.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Visit Our Site
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Contrary To Popular Belief, Lorem
              </p>
              <button className="text-[#0561FC] text-sm font-medium bg-white px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors">
                www.itservices.com →
              </button>
            </div>

            {/* Contact Us */}
            <div className="bg-white p-8 rounded-xl text-left hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-[#F5F6FE] rounded-full flex  mb-4">
                <svg
                  className="w-7 h-7 text-[#0561FC]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.31 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
              <h3 className="text-[#0B1B2B] font-semibold text-lg mb-2">
                Contact Us
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Contrary To Popular Belief, Lorem
              </p>
              <button className="text-white text-sm font-medium bg-[#0561FC] px-6 py-2.5 rounded-full hover:bg-[#0561FC]/90 transition-colors">
                +81.000.2323.2 →
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
                <span className="text-[#0561FC]">IT Industry</span>,
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
                      className="w-5 h-5 text-[#0561FC]"
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
                      className="w-5 h-5 text-[#0561FC]"
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
                      className="w-5 h-5 text-[#0561FC]"
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
                      className="w-5 h-5 text-[#0561FC]"
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
            <div className="bg-[#0561FC] rounded-2xl p-8">
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

                <button className="bg-white text-[#0561FC] px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
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
