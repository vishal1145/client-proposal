"use client";

import Image from "next/image";
import Link from "next/link";

export function WhyChooseUsSection() {
  return (
    <section className="bg-[#0B1B2B] py-20 mb-5 overflow-x-visible">
      <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
                IT Services & Software
              </p>
              <h2 className="text-3xl font-bold mb-6">Why You Choose Us?</h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Classical Latin Literature From 45 BC, Making It Over 2000 Years
                Old. Richard McClintock, A Latin Professor At Hampden-Sydney
                College In Virginia. There&apos;s Many Variations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center justify-start sm:justify-end">
                  <h3 className="text-lg font-semibold">Customized</h3>
                  <div className="h-[1px] w-8 bg-white ml-auto"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-start sm:justify-end">
                  <h3 className="text-lg font-semibold">High Quality</h3>
                  <div className="h-[1px] w-8 bg-white ml-auto"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-start sm:justify-end">
                  <h3 className="text-lg font-semibold">Experience</h3>
                  <div className="h-[1px] w-8 bg-white ml-auto"></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-start sm:justify-end">
                  <h3 className="text-lg font-semibold">Support</h3>
                  <div className="h-[1px] w-8 bg-white ml-auto"></div>
                </div>
              </div>
            </div>

            <Link href="/whyChooseUs">
              <button className="bg-[#0561FC] text-white px-7 py-3 mt-9 rounded-3xl hover:bg-blue-700 transition-colors text-[12px] font-medium">
                Explore More
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-visible">
              {/* Main Image */}
              <Image
                src="/images/w.jpg"
                alt="Why Choose Us Illustration"
                width={500}
                height={400}
                className="w-full lg:w-[500px] h-[400px] rounded-2xl object-cover"
              />

              {/* Blue Badge */}
              <div className="relative pb-12">
                {/* Ensures space for the absolute element */}
                <div className="absolute bottom-0 right-0 transform translate-x-18 lg:translate-x-8">
                  <div className="bg-[#0561FC] text-white px-8 py-6 rounded-2xl">
                    <div className="flex flex-col items-center">
                      <span className="text-base font-medium">IT Services</span>
                      <span className="text-base font-medium">&</span>
                      <span className="text-base font-medium">Software</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Partner Logos Section */}
        <div className="mt-16 bg-[#0B1B2B]">
          <div className="">
            <div className="flex flex-col sm:flex-row items-center gap-12">
              {/* Title */}
              <div className="text-white whitespace-nowrap">
                <p className="text-lg font-medium">We&apos;re Proud To</p>
                <p className="text-lg font-medium">Collaborate With:</p>
              </div>

              {/* Partner Logos */}
              <div className="flex flex-wrap flex-col sm:flex-row items-center justify-between gap-12 sm:gap-12 flex-1">
                <Image
                  src="/images/about6.png"
                  alt="Global Technology"
                  width={140}
                  height={60}
                  className="w-auto h-12"
                />
                <Image
                  src="/images/about7.png"
                  alt="Concept"
                  width={120}
                  height={40}
                  className="w-auto h-12"
                />
                <div className="bg-gray-200 p-2 rounded-lg">
                  <Image
                    src="/images/about11.png"
                    alt="Connect"
                    width={120}
                    height={40}
                    className="w-auto h-12"
                  />
                </div>

                <Image
                  src="/images/about9.png"
                  alt="Innovation"
                  width={120}
                  height={40}
                  className="w-auto h-12"
                />

                <Image
                  src="/images/about8.png"
                  alt="Global"
                  width={80}
                  height={40}
                  className="w-auto h-12"
                />

                {/* <Image
                  src="/images/about10.png"
                  alt="Hex"
                  width={120}
                  height={40}
                  className="w-auto h-12"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
