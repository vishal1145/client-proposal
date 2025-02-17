"use client";

import Image from "next/image";

export function GetQuoteSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#F6F0E4] py-20 overflow-x-hidden">
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
          <div className="max-w-9xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0B1B2B] ">
              Monitoring And Maintaining Your Firm&apos; Network For Uptime And
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
                <p className="text-gray-600 text-sm leading-relaxed mb-12">
                  Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random
                  Text. It Has Roots In A Piece Of Classical Latin Literature
                  From 45 BC, Making It Over 2000 Years Old. Richard McClintock,
                  A Latin Professor At Hampden-Sydney College In Virginia, There
                  It Is Many Variations Of Passages Of Lorem Ipsum Available,
                  But The Majority Have Suffered Alteration In Some Form, By
                  Injected Humour, Or Randomised Words Which Don&apos;t Look
                  Even Slightly Believable.
                </p>

                {/* Additional Service Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Service Image 2 */}
                  <div>
                    <Image
                      src="/images/service 2.png"
                      alt="Service 2"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg mb-6"
                    />
                  </div>

                  {/* Service Image 3 */}
                  <div>
                    <Image
                      src="/images/service 3.png"
                      alt="Service 3"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg mb-6"
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Here&apos;s what our clients say about our services.
                  We&apos;re proud to have helped businesses achieve their
                  goals.
                </p>
              </div>
            </div>

            <hr></hr>
            {/* Main Content Section */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-3  gap-8">
                    {/* Left Column - Content */}
                    <div className="col-span-2">
                      {/* Top List Items */}
                      <div className="grid grid-cols-3 gap-6 mb-12">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-[#0561FC] text-lg font-bold mt-1">
                              +
                            </span>
                            <p className="text-gray-600 text-[13px] leading-relaxed">
                              Lorem Ipsum Is Not
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Main Content */}
                      <div>
                        <h3 className="text-[28px] font-bold text-[#0B1B2B] mb-6">
                          Proin Non Eros Elementumtibulum Vehicula
                        </h3>
                        <p className="text-gray-600 text-[13px] leading-[1.8] mb-10">
                          Vestibulum In Ipsum Velit. Aliquam Libero Sem Asfds
                          Asf. Rutrum Eu Scelerisque Ut, Vehicula A Erat.
                          Phasellus Ac Sem Sed Erat Pos Se Quam Dignissim.
                          Mauris Feugiat, Nisi Nec Dapibusass A Gas Dictum,
                          Ligula Nulla Gravida Ante, Non Aliquet Odio Elit Ac
                          Orci. Curabitnc. Nunc Eu Rhoncus Justo,
                        </p>

                        {/* Image and List Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                          {/* Left Side - Image */}
                          <div className=" p-6 rounded-xl">
                            <Image
                              src="/images/service 4.png"
                              alt="Service Illustration"
                              width={400}
                              height={300}
                              className="w-full h-auto"
                              priority
                            />
                          </div>

                          {/* Right Side - List */}
                          <div className="mt-6 space-y-2">
                            {[
                              "Vestibulum In Ipsum Velit. Aliquam Libero Sem Asfds Asf.",
                              "Ut, Vehicula A Erat. Phasellus Ac Sem Sed Erat Pos Se",
                              "Feugiat, Nisi Nec Dapibusass A Gas Dictum, Ligula Nulla",
                              "Odio Elit Ac Orci. Curabitnc. Nunc Eu Rhoncus Justo.",
                              "Consequat Viverra Sapien Id Lobortis. Vivamus Auctor",
                            ].map((text, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-[#0561FC] text-lg font-bold ">
                                  +
                                </span>
                                <p className="text-gray-600 text-[13px] leading-[1.8]">
                                  {text}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Requirements Section */}
                        <div>
                          <h4 className="text-[22px] font-bold text-[#0B1B2B] mb-4">
                            Requirements
                          </h4>
                          <p className="text-gray-600 text-[13px] leading-[1.8] mb-6">
                            Vestibulum In Ipsum Velit. Aliquam Libero Sem Asfds
                            Asf. Rutrum Eu Scelerisque Ut, Vehicula A Erat.
                            Phasellus Ac Sem Sed Erat Pos Se Quam Dignissim.
                            Mauris Feugiat, Nisi Nec Dapibusass A Gas Dictum,
                            Ligula Nulla Gravida Ante, Non Aliquet Odio Elit Ac
                            Orci. Curabitnc. Nunc Eu Rhoncus Justo,
                          </p>

                          {/* Capture Attention Section */}
                          <div>
                            <h4 className="text-[22px] font-bold text-[#0B1B2B] mb-4">
                              Capture Attention And Ignite Your Audience
                            </h4>
                            <div className="space-y-3">
                              {[
                                "Elevate Your Business With Our Cutting-Edge Digital Marketing Harvest Game-Changing Ideas For Explosive Growth",
                                "Skyrocket Your ROI With Our Expert Digital Marketing The Marketing Trifecta: Advertise, Analyze, Optimize!",
                                "Generate Leads And Dominate Online With Our All-In-One Solutions The Breeding Ground For Breakthrough Ideas",
                              ].map((text, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="text-[#0561FC] text-lg font-bold mt-0">
                                    +
                                  </span>
                                  <p className="text-gray-600 text-[13px] leading-[1.8]">
                                    {text}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Cards */}
                    <div className="space-y-4">
                      {/* Card 1 */}
                      <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                            <span className="text-base font-medium">01</span>
                          </div>
                          <h4 className="text-base font-medium">
                            A Relatively Multi-Power
                          </h4>
                        </div>
                        <p className="text-[13px] text-white/70 leading-relaxed">
                          Vestibulum In Ipsum Velit. Aliquam Libero Sem Asfds
                          Asf. Rutrum Eu Scelerisque Ut, Vehicula A Erat.
                          Phasellusac Sem Sed Erat Pos Se Quam Dignissim. Mauris
                          Feugiat, Nisi Nec Dapibusass.
                        </p>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-[#0561FC] p-6 rounded-2xl text-white">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                            <span className="text-base font-medium">02</span>
                          </div>
                          <h4 className="text-base font-medium">
                            Comprehensive Solar
                          </h4>
                        </div>
                        <p className="text-[13px] text-white/70 leading-relaxed">
                          Vestibulum In Ipsum Velit. Aliquam Libero Sem Asfds
                          Asf. Rutrum Eu Scelerisque Ut, Vehicula A Erat.
                          Phasellusac Sem Sed Erat Pos Se Quam Dignissim. Mauris
                          Feugiat, Nisi Nec Dapibusass.
                        </p>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-[#0B1B2B] p-6 rounded-2xl text-white">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex items-center justify-center w-8 h-8 bg-white/10 rounded-full">
                            <span className="text-base font-medium">03</span>
                          </div>
                          <h4 className="text-base font-medium">
                            New Establish Power
                          </h4>
                        </div>
                        <p className="text-[13px] text-white/70 leading-relaxed">
                          Vestibulum In Ipsum Velit. Aliquam Libero Sem Asfds
                          Asf. Rutrum Eu Scelerisque Ut, Vehicula A Erat.
                          Phasellusac Sem Sed Erat Pos Se Quam Dignissim. Mauris
                          Feugiat, Nisi Nec Dapibusass.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr />

            {/* Recently Viewed Services Section */}
            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <span className="text-sm text-gray-600 mb-2  border border-gray-300 p-1 rounded-3xl inline-block">
                        Recently Viewed It Services
                      </span>
                      <h2 className="text-[28px] font-bold text-[#0B1B2B]">
                        Exclusive Technology To Provide IT Solutions
                      </h2>
                    </div>
                    <a
                      href="#"
                      className="text-[#0561FC] text-sm font-medium flex items-center gap-2"
                    >
                      VIEW ALL
                      <span className="text-lg">→</span>
                    </a>
                  </div>

                  {/* Service Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Graphics Design Card */}
                    <div className="group cursor-pointer">
                      <div className="rounded-2xl overflow-hidden mb-4">
                        <Image
                          src="/images/service 5.png"
                          alt="Graphics Designs"
                          width={600}
                          height={400}
                          className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0B1B2B]">
                        Graphics Designs
                      </h3>
                    </div>

                    {/* Web Design Card */}
                    <div className="group cursor-pointer">
                      <div className="rounded-2xl overflow-hidden mb-4">
                        <Image
                          src="/images/service 6.png"
                          alt="Web Designs"
                          width={600}
                          height={400}
                          className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-[#0B1B2B]">
                        Web Designs
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
