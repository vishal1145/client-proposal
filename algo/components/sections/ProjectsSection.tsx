import Image from "next/image";
import { Button } from '@/components/ui/button';

export function ProjectsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-20">
          <div>
            <span className="text-sm text-gray-600 mb-2 block">Latest Updates</span>
            <h2 className="text-4xl font-bold text-[#0B1B2B]">
              Explore Latest <span className="text-blue-600">Projects.</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white flex items-center justify-center transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Project Card 1 - Mobile Application */}
          <div className="lg:col-span-7 bg-[#F5E6D8] rounded-3xl overflow-hidden">
            <div className="relative h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070"
                alt="Mobile Application"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <span className="text-blue-600 font-medium block mb-2">App Developments</span>
              <h3 className="text-3xl font-bold text-[#0B1B2B]">
                Mobile Application
              </h3>
            </div>
          </div>

          {/* Project Card 2 - Bottle Designs */}
          <div className="lg:col-span-5 bg-[#FDF8F3] rounded-3xl overflow-hidden flex flex-col lg:self-start">
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1525434280327-e525e03f17ef?q=80&w=2069"
                alt="Bottle Designs"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="mb-6">
                <span className="text-blue-600 font-medium block mb-2">Graphic Design</span>
                <h3 className="text-3xl font-bold text-[#0B1B2B]">
                  Bottle Designs
                </h3>
              </div>
              <Button 
                variant="default"
                className="bg-[#4461F2] hover:bg-blue-700 text-white rounded-full px-6 py-2 flex items-center gap-2 w-fit"
              >
                View Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Project Card 3 - Poster Magazine */}
          <div className="lg:col-span-6 bg-white rounded-3xl overflow-hidden">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?q=80&w=2070"
                alt="Poster Magazine"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-blue-600 font-medium block mb-2">App Developments</span>
              <h3 className="text-2xl font-bold text-[#0B1B2B]">
                Poster Magazine
              </h3>
            </div>
          </div>

          {/* Project Card 4 - Cray Bag Designs */}
          <div className="lg:col-span-6 bg-[#F5F2FF] rounded-3xl overflow-hidden">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1605217613423-0a61bd725c8a?q=80&w=2070"
                alt="Cray Bag Designs"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-blue-600 font-medium block mb-2">Graphic Design</span>
              <h3 className="text-2xl font-bold text-[#0B1B2B]">
                Cray Bag Designs
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 