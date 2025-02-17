import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const stats = [
    {
      number: "25",
      text: "Years Experience",
      icon: (
        <div className="absolute -top-8 sm:-top-12 -right-1 ">
          <div className="w-10 h-10 sm:w-14 sm:h-14 relative">
            <Image
              src="/images/Icons.png"
              alt="Years Experience"
              fill
              className="object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      number: "8K",
      text: "Skilled Professional",
      icon: (
        <div className="absolute -top-12 -right-1 ">
          <div className="w-14 h-14 relative">
            <Image
              src="/images/Icons (1).png"
              alt="Graphic Design"
              fill
              className="object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      number: "32",
      text: "Visited Conferences",
      icon: (
        <div className="absolute -top-12 -right-1 ">
          <div className="w-14 h-14 relative">
            <Image
              src="/images/Icons (2).png"
              alt="Graphic Design"
              fill
              className="object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      number: "1K",
      text: "Software Worldwide",
      icon: (
        <div className="absolute -top-12 -right-1 ">
          <div className="w-14 h-14 relative">
            <Image
              src="/images/Icons (3).png"
              alt="Graphic Design"
              fill
              className="object-contain"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-32 bg-white overflow-x-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-full text-xs sm:text-sm mb-4">
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0B1B2B] mb-4">
            We Have Been Processing
            <br className="hidden sm:block" />
            For Over <span className="text-[#0561FC]">25 Years</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mb-12 sm:mb-20">
  <div className="flex flex-col sm:flex-row justify-between gap-14 sm:gap-8 relative">
    {stats.map((stat, index) => (
      <div key={index} className="relative flex flex-col items-center w-full">
        
        {/* Icon centered above */}
        <div className="flex justify-center">{stat.icon}</div>

        {/* Number and text in a row */}
        <div className="flex items-center gap-2 sm:gap-4 mt-2">
          <span className="text-4xl sm:text-[80px] text-[#0B1B2B] leading-none">
            {stat.number}
          </span>
          <div className="text-gray-500 text-xs sm:text-sm leading-tight">
            {stat.text.split(" ").map((word, i) => (
              <div key={i}>{word}</div>
            ))}
          </div>
        </div>

        {/* Divider Line: Horizontal on small screens, Vertical on large screens */}
        {index < stats.length - 1 && (
          <div className="w-full h-[1px] bg-gray-200 sm:w-[1px] sm:h-16 sm:absolute sm:right-[-30px] sm:top-1/2 sm:-translate-y-1/2"></div>
        )}
      </div>
    ))}
  </div>
</div>


        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
          {/* Graphic Design Card */}
          <div className="col-span-1 sm:col-span-6 group">
            <div className="relative h-[200px] sm:h-[300px] rounded-3xl overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000"
                alt="Graphic Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B2B]">
                Graphic Designing
              </h3>
              <Button
                variant="outline"
                className="rounded-full bg-[#0561FC] text-white hover:bg-blue-700 transition-colors px-4 sm:px-6 py-2 text-xs sm:text-sm w-fit"
              >
                Explore More →
              </Button>
            </div>
          </div>

          {/* Web Development Card */}
          <div className="col-span-1 sm:col-span-3 group">
            <div className="relative h-[200px] sm:h-[300px] rounded-3xl overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2000"
                alt="Web Development"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">
              Webdevelopment
            </h3>
          </div>

          {/* App Development Card */}
          <div className="col-span-1 sm:col-span-3 group">
            <div className="relative h-[200px] sm:h-[300px] rounded-3xl overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2000"
                alt="App Development"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1B2B]">
              App Coding
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
