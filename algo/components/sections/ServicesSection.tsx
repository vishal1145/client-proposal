import Image from "next/image";
import { Button } from '@/components/ui/button';

export function ServicesSection() {
  const stats = [
    {
      number: "25",
      text: "Years Experience",
      icon: (
        <div className="absolute -top-12 -right-2">
          <div className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center">
            <div className="text-orange-500 text-xl">!</div>
          </div>
        </div>
      )
    },
    {
      number: "8K",
      text: "Skilled Professional",
      icon: (
        <div className="absolute -top-12 -right-2">
          <div className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      )
    },
    {
      number: "32",
      text: "Visited Conferences",
      icon: (
        <div className="absolute -top-12 -right-2">
          <div className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      )
    },
    {
      number: "1K",
      text: "Software Worldwide",
      icon: (
        <div className="absolute -top-12 -right-2">
          <div className="w-14 h-14 bg-white shadow-lg rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl font-bold text-[#0B1B2B] mb-4">
            We Have Been Processing<br />
            For Over <span className="text-[#4461F2]">25 Years</span>
          </h2>
        </div>

        {/* Statistics */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="flex justify-between relative">
            {stats.map((stat, index) => (
              <div key={index} className="relative flex items-center gap-4">
                {stat.icon}
                <span className="text-[80px] text-[#0B1B2B] leading-none">{stat.number}</span>
                <div className="text-gray-500 text-sm leading-tight">
                  {stat.text.split(' ').map((word, i) => (
                    <div key={i}>{word}</div>
                  ))}
                </div>
                {index < stats.length - 1 && (
                  <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[1px] h-16 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Graphic Design Card - 50% width */}
          <div className="col-span-6 group">
            <div className="relative h-[300px] rounded-3xl overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000"
                alt="Graphic Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-[#0B1B2B]">Graphic Designing</h3>
              <Button 
                variant="outline"
                className="rounded-full bg-[#4461F2] text-white hover:bg-blue-700 transition-colors px-6 py-2 text-sm w-fit"
              >
                Explore More →
              </Button>
            </div>
          </div>

          {/* Web Development Card - 25% width */}
          <div className="col-span-3 group">
            <div className="relative h-[300px] rounded-3xl overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2000"
                alt="Web Development"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#0B1B2B]">Webdevelopment</h3>
          </div>

          {/* App Development Card - 25% width */}
          <div className="col-span-3 group">
            <div className="relative h-[300px] rounded-3xl overflow-hidden mb-4">
              <Image
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2000"
                alt="App Development"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#0B1B2B]">App Coding</h3>
          </div>
        </div>
      </div>
    </section>
  );
} 