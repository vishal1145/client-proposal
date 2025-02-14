"use client";
import Image from "next/image";

export function ContactSection() {
  return (
    <section className="py-16 bg-[#0B1628] relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Layer_1.png"
          alt="World Map Background"
          fill
          className="object-contain opacity-80"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
          {/* Left Side - Contact Info */}
          <div>
            <p className="text-sm text-gray-500 border border-gray-400 font-medium mb-4 inline-block px-3 py-1 rounded-full">
              Contact Address
            </p>

            <h2 className="text-4xl font-bold text-[#fcfeff] leading-tight mb-6">
              We&apos;re The Future Of{" "}
              <span className="text-[#0561FC]">IT Industry</span>,
              <br />
              Further Contact Us
            </h2>
            <p className="text-white text-sm leading-relaxed mb-12">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy
            </p>

            {/* Contact Details */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 relative">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3  rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#f7f8f9]"
                  >
                    <path
                      d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 22s8-6 8-12a8 8 0 00-16 0c0 6 8 12 8 12z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-medium text-white mb-2">
                    Address
                  </h4>
                  <p className="text-sm text-white leading-relaxed">
                    42 Mammoun Street, Saba
                    <br />
                    Carpet And Antiques Store, UK
                  </p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start gap-4">
                <div className="p-3  rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#f9fafb]"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-medium text-[#f4f5f7] mb-2">
                    Phone Number
                  </h4>
                  <p className="text-sm text-white leading-relaxed">
                    +561 541 578 961
                    <br />
                    +95 183 996 159
                  </p>
                </div>
              </div>

              {/* Email Id */}
              <div className="flex items-start gap-4">
                <div className="p-3  rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#ffffff]"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M22 6l-10 7L2 6"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-medium text-white mb-2">
                    Email Id
                  </h4>
                  <p className="text-sm text-white leading-relaxed">
                    Info@Service.Com
                    <br />
                    Enquiry@Service.Com
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3  rounded-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 6v6l4 2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-medium text-white mb-2">
                    Opening Hours
                  </h4>
                  <p className="text-sm text-white leading-relaxed">
                    Mon - Sat : M/g (09.00am To
                    <br />
                    09.00pm, Sun - Holiday
                  </p>
                </div>
              </div>

              {/* Divider Lines */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300"></div>
              <div className="absolute left-0 right-0 top-[45%] h-px bg-gray-300"></div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-[#0561FC] rounded-3xl p-10 ">
            <h3 className="text-2xl font-bold text-white mb-2">Get Quotes</h3>
            <p className="text-white/80 text-sm mb-8">
              The Point Of Using Lorem Ipsum Is That It Has More-Or-Less Normal
            </p>

            <form className="space-y-6">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent text-white border-b border-white/20 pb-3 focus:outline-none focus:border-white text-sm placeholder:text-white/60"
                />
              </div>

              {/* Email Id */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Id"
                  className="w-full bg-transparent text-white border-b border-white/20 pb-3 focus:outline-none focus:border-white text-sm placeholder:text-white/60"
                />
              </div>

              {/* Your Enquired */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Enquired"
                  className="w-full bg-transparent text-white border-b border-white/20 pb-3 focus:outline-none focus:border-white text-sm placeholder:text-white/60"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent text-white border-b border-white/20 pb-3 focus:outline-none focus:border-white text-sm placeholder:text-white/60 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="flex items-center justify-center gap-2 text-white border border-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">
                Submit Now <span className="ml-1">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
