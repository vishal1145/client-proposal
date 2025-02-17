import Image from "next/image";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 ">
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
        <div className="container mx-auto px-0">
          <div className="relative">
            {/* World Map Background */}
            <Image
              src="/images/Layer_1.png"
              alt="World Map"
              width={1000}
              height={200}
              className="opacity-90"
            />
             <div className="absolute top-[32%] left-[45%]">
 <div className="relative">
 <div className="w-2 h-2 bg-gray-500 rounded-full relative z-10"></div>
  </div>
  </div>
 <div className="absolute top-[52%] left-[15%]">
 <div className="relative">
 <div className="w-2 h-2 bg-gray-500 rounded-full relative z-10"></div>
  </div>
  </div>
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
            <div className="bg-white p-8 rounded-xl text-left shadow-xl transition-shadow">
              <div className="w-14 h-14  rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/images/sales.png"
                  alt="Chat Sales Icon"
                  width={28}
                  height={28}
                  className="text-[#0561FC]"
                />
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
            <div className="bg-white p-8 rounded-xl text-left shadow-xl transition-shadow">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/images/chat.png"
                  alt="Chat Support Icon"
                  width={28}
                  height={28}
                  className="text-[#0561FC]"
                />
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
            <div className="bg-[#0561FC] p-8 rounded-xl text-left shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/images/site.png"
                  alt="Visit Site Icon"
                  width={28}
                  height={28}
                  className="text-white"
                />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                Visit Our Site
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Contrary To Popular Belief, Lorem
              </p>
              <button className="text-white text-sm font-medium border border-white px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors">
                www.itservices.com →
              </button>
            </div>

            {/* Contact Us */}
            <div className="bg-white p-8 rounded-xl text-left shadow-xl transition-shadow">
              <div className="w-14 h-14  rounded-full flex items-center justify-center mb-4">
                <Image
                  src="/images/contact.png"
                  alt="Contact Us Icon"
                  width={28}
                  height={28}
                  className="text-[#0561FC]"
                />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
            {/* Left Side - Contact Info */}
            <div>
              <p className="text-sm text-gray-500 border border-gray-400 font-medium mb-4 inline-block px-3 py-1 rounded-full">
                Contact Address
              </p>

              <h2 className="text-4xl font-bold text-[#0B1B2B] leading-tight mb-6">
                We&apos;re The Future Of{" "}
                <span className="text-[#0561FC]">IT Industry</span>,
                <br />
                Further Contact Us
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-12">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Lorem Ipsum Has Been The Industry&apos;s Standard
                Dummy
              </p>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 relative">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/pin.png"
                      alt="Location"
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-[#0B1B2B] mb-2">
                      Address
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      42 Mammoun Street, Saba
                      <br />
                      Carpet And Antiques Store, UK
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/transport.png"
                      alt="Phone"
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-[#0B1B2B] mb-2">
                      Phone Number
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      +561 541 578 961
                      <br />
                      +95 183 996 159
                    </p>
                  </div>
                </div>

                {/* Email Id */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/email.png"
                      alt="Email"
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-[#0B1B2B] mb-2">
                      Email Id
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Info@Service.Com
                      <br />
                      Enquiry@Service.Com
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/clock.png"
                      alt="Clock"
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-[#0B1B2B] mb-2">
                      Opening Hours
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Mon - Sat : M/g (09.00am To
                      <br />
                      09.00pm, Sun - Holiday
                    </p>
                  </div>
                </div>

                {/* Divider Lines */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 hidden md:block"></div>
<div className="absolute left-0 right-0 top-[45%] h-px bg-gray-300 hidden md:block"></div>

              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-[#0561FC] rounded-3xl p-10 ">
              <h3 className="text-2xl font-bold text-white mb-2">Get Quotes</h3>
              <p className="text-white/80 text-sm mb-8">
                The Point Of Using Lorem Ipsum Is That It Has More-Or-Less
                Normal
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

      <Footer />
    </main>
  );
}
