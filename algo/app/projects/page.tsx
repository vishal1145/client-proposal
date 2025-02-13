import Footer from "@/components/sections/Footer";
import Image from "next/image";

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
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">Our Recent Projects</h1>
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
          <div className="grid grid-cols-2 gap-8">
            {/* Project 1 - Mobile App */}
            <div className="bg-[#FBF2EA] rounded-2xl p-8">
              <p className="text-sm text-[#64748B] mb-2">App Development</p>
              <h3 className="text-xl font-bold text-[#0B1B2B] mb-6">
                Mobile Application
              </h3>
              <Image
                src="/images/project1.png"
                alt="Mobile Application"
                width={400}
                height={500}
                className="w-full rounded-2xl"
              />
            </div>

            {/* Project 2 - Bottle Design */}
            <div className="bg-[#F5F6FE] rounded-2xl p-8">
              <p className="text-sm text-[#64748B] mb-2">Graphic Design</p>
              <h3 className="text-xl font-bold text-[#0B1B2B] mb-6">
                Bottle Designs
              </h3>
              <Image
                src="/images/project2.png"
                alt="Bottle Designs"
                width={400}
                height={500}
                className="w-full rounded-2xl"
              />
              <button className="mt-4 text-[#0561FC] text-sm font-medium hover:underline">
                View Details →
              </button>
            </div>

            {/* Project 3 - Shopping Bag */}
            <div className="bg-[#F0EEFB] rounded-2xl p-8">
              <p className="text-sm text-[#64748B] mb-2">Brand Design</p>
              <h3 className="text-xl font-bold text-[#0B1B2B] mb-6">
                Shopping Bag
              </h3>
              <Image
                src="/images/shopping-bag.jpg"
                alt="Shopping Bag Design"
                width={400}
                height={500}
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
