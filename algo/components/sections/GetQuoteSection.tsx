"use client";

import Image from "next/image";

export function GetQuoteSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#F6F0E4] py-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 z-10">
          <Image
            src="/images/hand.png"
            alt="Hand with Rocket"
            width={300}
            height={200}
            className="w-auto h-auto opacity-90"
          />
        </div>

        <div className="absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/message.png"
            alt="Chat Bubble"
            width={80}
            height={80}
            className="w-auto h-auto opacity-80"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-3xl font-bold text-[#0B1B2B]">
                Designing IT Services
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Service Detail</span>
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
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1B2B] mb-8">
              Monitoring And Maintaining Your Firm's Network For Uptime And
              Security.
            </h2>

            {/* Service Card */}
            <div className="">
              {/* Card Header */}
              <div className="p-8 flex items-start gap-4"></div>

              {/* Main Image */}
              <div className="w-full">
                <Image
                  src="/images/service 1.png"
                  alt="Service Main"
                  width={1200}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-[#0B1B2B] mb-4">
                  Commercial IT Requirements
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random
                  Text. It Has Roots In A Piece Of Classical Latin Literature
                  From 45 BC, Making It Over 2000 Years Old. Richard McClintock,
                  A Latin Professor At Hampden-Sydney College In Virginia, There
                  It Is Many Variations Of Passages Of Lorem Ipsum Available,
                  But The Majority Have Suffered Alteration In Some Form, By
                  Injected Humour, Or Randomised Words Which Don't Look Even
                  Slightly Believable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
