import { Button } from '@/components/ui/button';

export function PlatformsSection() {
  const platforms = [
    {
      title: "Graphic Design",
      bgColor: "bg-[#0F1B2C] hover:bg-[#1a2942]"
    },
    {
      title: "App Design",
      bgColor: "bg-[#4461F2] hover:bg-[#3651d4]"
    },
    {
      title: "Web Development",
      bgColor: "bg-[#0F1B2C] hover:bg-[#1a2942]"
    }
  ];

  return (
    <section className="bg-[#0B1B2B] py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B2B] via-[#0B1B2B] to-transparent z-10"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-gray-400 text-sm">What We Are Expert In</span>
              <h2 className="text-5xl font-bold text-white leading-tight">
                Several Platforms
              </h2>
            </div>

            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className={`${platform.bgColor} rounded-2xl p-6 flex items-center justify-between transition-all duration-300 group cursor-pointer`}
                >
                  <span className="text-xl text-white font-medium">
                    {platform.title}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white transform transition-transform group-hover:translate-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              className="bg-[#4461F2] hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg flex items-center gap-2"
            >
              Know More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>

          {/* Right Content - 3D Elements */}
          <div className="relative h-[600px]">
            <div className="absolute inset-0">
              <div className="relative w-full h-full">
                {/* Add floating 3D elements here */}
                <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg transform rotate-45 animate-float"></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded transform -rotate-12 animate-float-delay"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full animate-float-slow"></div>
                <div className="absolute top-1/3 right-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg transform rotate-12 animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 