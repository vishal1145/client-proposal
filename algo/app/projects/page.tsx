import Footer from "@/components/sections/Footer";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
        {/* Background Decorative Elements */}

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
              Our Recent Projects
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Our Projects</span>
            </div>
          </div>
        </div>

        {/* Additional Decorative Elements */}
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
      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-sm text-[#64748B] mb-3">Latest Updates</p>
            <h2 className="text-2xl font-bold text-[#0B1B2B]">
              Explore Latest Recent{" "}
              <span className="text-[#0561FC]">Projects</span>.
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 gap-24">
            {/* Left Column */}
            <div className="grid gap-8">
              {/* Mobile Application */}
              <Link
                href={`/projects/mobile-application`}
                className="block group transition-transform duration-300 hover:-translate-y-2"
              >
                <div>
                  <div className="rounded-3xl overflow-hidden">
                    <div className="relative h-[500px]">
                      <Image
                        src="/images/project11.png"
                        alt="Mobile Application"
                        fill
                        className="object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-[#64748B] mb-2">
                      App Developments
                    </p>
                    <h3 className="text-[22px] font-bold text-[#1B224B]">
                      Mobile Application
                    </h3>
                  </div>
                </div>
              </Link>

              {/* Poster Magazine */}
              <Link
                href={`/projects/poster-magazine`}
                className="block group transition-transform duration-300 hover:-translate-y-2"
              >
                <div>
                  <div className="bg-[#FFF4EF] rounded-3xl overflow-hidden">
                    <div className="relative h-[360px]">
                      <Image
                        src="/images/project2.jpeg"
                        alt="Poster Magazine"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-[#64748B] mb-1">
                      App Developments
                    </p>
                    <h3 className="text-[22px] font-bold text-[#1B224B]">
                      Poster Magazine
                    </h3>
                  </div>
                </div>
              </Link>
            </div>

            {/* Right Column */}
            <div className="grid gap-8">
              {/* Bottle Designs */}
              <Link
                href={`/projects/bottle-designs`}
                className="block group transition-transform duration-300 hover:-translate-y-2 mt-14"
              >
                <div>
                  <div className="mb-2">
                    <p className="text-sm text-[#64748B] mb-1">
                      Graphic Design
                    </p>
                    <h3 className="text-[22px] font-bold text-[#1B224B]">
                      Bottle Designs
                    </h3>
                  </div>
                  <div className="relative">
                    <div className="relative h-[360px]">
                      <Image
                        src="/images/project10.png"
                        alt="Bottle Designs"
                        fill
                        className="object-cover rounded-3xl transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <button className="bg-[#0561FC] text-white text-sm font-medium px-4 py-2 rounded-full absolute bottom-6 left-6">
                      View Details →
                    </button>
                  </div>
                </div>
              </Link>

              {/* Shopping Bag Designs */}
              <Link
                href={`/projects/shopping-bag`}
                className="block group transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="bg-[#F5F4FF] rounded-3xl overflow-hidden">
                  <div className="relative h-[400px]">
                    <Image
                      src="/images/project4.jpeg"
                      alt="Shopping Bag Designs"
                      fill
                      className="object-contain p-8"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-[#64748B] mb-1">Graphic Design</p>
                  <h3 className="text-[22px] font-bold text-[#1B224B]">
                    Cray Bag Designs
                  </h3>
                </div>
              </Link>
            </div>
          </div>

          {/* Third Row Projects */}
          <div className="grid grid-cols-2 gap-24 mt-8">
            {/* Left Side - Web Application */}
            <Link
              href={`/projects/web-application`}
              className="block group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="rounded-xl overflow-hidden">
                <div className="relative h-[500px] w-full flex items-center justify-center bg-gray-100">
                  <Image
                    src="/images/project6.png"
                    alt="Web Application"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mt-6 text-left">
                <p className="text-sm text-[#64748B] mb-1">App Developments</p>
                <h3 className="text-[22px] font-bold text-[#1B224B]">
                  Web Application
                </h3>
              </div>
            </Link>

            {/* Right Side - Mobile Application */}
            <Link
              href={`/projects/mobile-application-2`}
              className="block group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="rounded-3xl overflow-hidden">
                <div className="relative h-[400px] bg-gray-50">
                  <Image
                    src="/images/project5.png"
                    alt="Mobile Application"
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm text-[#64748B] mb-1">Graphic Design</p>
                <h3 className="text-[22px] font-bold text-[#1B224B]">
                  Cray Bag Designs
                </h3>
              </div>
            </Link>
          </div>

          {/* Fourth Row Projects */}
          <div className="grid grid-cols-2 gap-24 mt-8">
            {/* Left Side - Poster Magazine */}
            <Link
              href={`/projects/poster-magazine-2`}
              className="block group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="rounded-3xl overflow-hidden">
                <div className="relative h-[400px] bg-gray-100">
                  <Image
                    src="/images/project7.jpeg"
                    alt="Poster Magazine"
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-[#64748B] mb-1">App Developments</p>
                <h3 className="text-[22px] font-bold text-[#1B224B]">
                  Poster Magazine
                </h3>
              </div>
            </Link>

            {/* Right Side - Cray Bag Designs */}
            <Link
              href={`/projects/cray-bag`}
              className="block group transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="rounded-3xl overflow-hidden">
                <div className="relative h-[400px] bg-[#FFF1F3]">
                  <Image
                    src="/images/project8.png"
                    alt="Cray Bag Designs"
                    fill
                    className="object-contain p-6"
                  />
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-[#64748B] mb-1">Graphic Design</p>
                <h3 className="text-[22px] font-bold text-[#1B224B]">
                  Cray Bag Designs
                </h3>
              </div>
            </Link>
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="w-3 h-3 rounded-full bg-[#0561FC]" />
            <button className="w-2 h-2 rounded-full bg-gray-300" />
            <button className="w-2 h-2 rounded-full bg-gray-300" />
            <button className="w-2 h-2 rounded-full bg-gray-300" />
            <button className="w-2 h-2 rounded-full bg-gray-300" />
            <button className="w-2 h-2 rounded-full bg-gray-300" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
