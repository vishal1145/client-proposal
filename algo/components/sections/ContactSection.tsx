"use client";

export function ContactSection() {
  return (
    <section className="bg-[#0B1B2B] text-white py-40 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("/images/world-map-dots.svg")',
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'luminosity'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40">
          <div className="max-w-2xl">
            <span className="text-sm text-gray-400 mb-6 block uppercase tracking-wider">Contact Address</span>
            <h2 className="text-5xl font-bold mb-10 leading-tight">
              We&apos;re The Future Of{' '}
              <span className="text-blue-500">IT Industry</span>,
              <br />
              Further Contact Us
            </h2>
            <p className="text-gray-400 mb-24 text-lg leading-relaxed">
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20 relative">
              {/* Vertical Divider */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-700/50"></div>

              {/* Address Section */}
              <div>
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full border border-gray-700/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Address</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">42 Mamnoun Street, Saba</p>
                    <p className="text-gray-400 text-lg leading-relaxed">Carpet And Antiques Store, UK</p>
                  </div>
                </div>
              </div>

              {/* Phone Number Section */}
              <div>
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full border border-gray-700/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Phone Number</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">+561 541 578 861</p>
                    <p className="text-gray-400 text-lg leading-relaxed">+95 185 996 159</p>
                  </div>
                </div>
              </div>

              {/* Email Section */}
              <div className="bg-[#132537] p-10 rounded-3xl">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full border border-gray-700/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Email Id</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">Info@Service.Com</p>
                    <p className="text-gray-400 text-lg leading-relaxed">Enquiry@Service.Com</p>
                  </div>
                </div>
              </div>

              {/* Opening Hours Section */}
              <div>
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full border border-gray-700/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Opening Hours</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">Mon -Sat -Mrg 09.00am To</p>
                    <p className="text-gray-400 text-lg leading-relaxed">09.00pm, Sun -Holiday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 p-14 rounded-[2.5rem]">
            <div className="mb-14">
              <h3 className="text-4xl font-bold mb-5">Get Quotes</h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                The Point Of Using Lorem Ipsum Is That It Has More-Or-Less Normal
              </p>
            </div>
            <form className="space-y-8">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-6 bg-blue-700/50 rounded-xl border border-blue-400/30 placeholder-gray-300 focus:outline-none focus:border-blue-300 text-lg"
              />
              <input
                type="email"
                placeholder="Email Id"
                className="w-full p-6 bg-blue-700/50 rounded-xl border border-blue-400/30 placeholder-gray-300 focus:outline-none focus:border-blue-300 text-lg"
              />
              <input
                type="text"
                placeholder="Your Enquires!"
                className="w-full p-6 bg-blue-700/50 rounded-xl border border-blue-400/30 placeholder-gray-300 focus:outline-none focus:border-blue-300 text-lg"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-6 bg-blue-700/50 rounded-xl border border-blue-400/30 placeholder-gray-300 focus:outline-none focus:border-blue-300 text-lg resize-none"
              ></textarea>
              <button className="w-full bg-white text-blue-600 py-6 px-8 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 text-lg">
                Submit Now
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 