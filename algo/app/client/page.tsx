import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Our Clients - Algofolks | Success Stories",
  description: "Discover how we've helped businesses transform and grow with our technology solutions.",
};

export default function ClientsPage() {
    const clients = [
        {
          title: "Digital marketing for B2B companies",
          name: "Carlos Silva",
          role: "CEO & Co-founder, Enova Consulting",
          image: "/images/enovaa.jpg",
          icon: "/images/enova.png",
          style: "from-black/40 via-black/60 to-black/80"
        },
        {
          title: "Educational App, AI Powered Doubt Solving bot",
          name: "Akshay & Nishakrsh Bansal",
          role: "CEO & Co-founder, Doubtbuddy Education Technology Private Limited",
          image: "/images/doubtbuddyy.png",
          icon: "/images/Doubtbuddy.png",
          style: "from-gray-800/70 via-gray-800/80 to-gray-900/90" 
        },
        {
          title: "Ecommerce APP, Food Delivery",
          name: "Rameshbhai Barber",
          role: "Founder, Kinstart Technology Private Limited",
          image: "/images/town.jpg",
          icon: "/images/genie.png",
        },
        {
          title: "Tire Showcase and sale",
          name: "Aline Turner",
          role: "CTO, Quicktires",
          image: "/images/Quicktires.png",
          icon: "/images/RedModern.png",
          style: "from-gray-600/50 via-gray-700/60 to-gray-800/70" 
        },
        {
          title: "Mobile Vehicle Verification ( Mexico Only )",
          name: "Raschid J.F. Rafaelly",
          role: "CTO, VVMovil",
          image: "/images/VVMovill.png",
          icon: "/images/vvmovil.svg",
          style: "from-gray-500/40 via-gray-600/50 to-gray-700/60" 
        },
        {
          title: "Elearning platform for Student",
          name: "Ramesh Bansal",
          role: "CEO & Founder, Bansal classes ltd",
          image: "/images/Bansalclassess.png",
          icon: "/images/Bansalclasses.png",
          style: "from-gray-400/30 via-gray-500/40 to-gray-600/50" 
        }
      ];
    
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-20 overflow-hidden">
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

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
              Clients
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <span>Home</span>
              <span>-</span>
              <span className="text-[#0561FC]">Our Clients</span>
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
      </div>

      {/* Clients Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
    {/* Left Column - Text Content */}
    <div>
      {/* Category Tag */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-50 rounded-full shadow-sm mb-6">
        {/* <span className="w-2 h-2 bg-[#0561FC] rounded-full"></span> */}
        <span className="text-sm font-medium text-gray-600">Our Clients</span>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1B2B] mb-6">
  Featured <span className="text-[#0561FC]">clients</span>
</h2>
      
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          Explore our featured clients to see how our technology and support services have helped them succeed. We&apos;e honored to be part of their success stories and look forward to enabling even more innovation in the future.
        </p>
        
        <p className="text-gray-600 leading-relaxed">
          We take pride in collaborating with forward-thinking organizations across diverse industries. From education technology and e-commerce to digital marketing and vehicle verification, our clients trust us to bring their visions to life with robust, scalable solutions. Each partnership is a unique journey, where we&apos;re dedicated to understanding their challenges, delivering reliable results, and empowering growth.
        </p>
      </div>
    </div>

    {/* Right Column - Illustration */}
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative w-full max-w-md">
        <Image
          src="/images/client.png"
          alt="Strong Client Relationships"
          width={400}
          height={400}
          className="w-full h-auto"
        />
        
        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F6F0E4] rounded-full -z-10"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
  {clients.map((client, index) => (
    <div 
      key={index}
      className="group relative aspect-[4/3] bg-gray-900 rounded-none overflow-hidden cursor-pointer " // Changed from aspect-square to aspect-[4/3]
    >
      {/* Background Image */}
      <Image
        src={client.image}
        alt={client.title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
        style={{ 
          filter: index % 2 === 0 ? 'brightness(0.8)' : 'brightness(0.9)',
          objectPosition: 'center'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${client.style}`}></div>
      
      {/* Content Overlay */}
      <div className="absolute inset-0 p-4 flex flex-col h-full text-white"> {/* Reduced padding from p-6 to p-4 */}
        {/* Top - Icon */}
        <div className="mb-2"> {/* Reduced margin from mb-auto */}
          <Image
            src={client.icon}
            alt={`${client.name} Icon`}
            width={32}  // Reduced size
            height={32} // Reduced size
            className="w-[32px] h-[32px] object-contain"
          />
        </div>

        {/* Middle - Project Title */}
        <div className="mb-auto mt-2"> {/* Adjusted spacing */}
          <h3 className="text-sm font-normal leading-tight"> {/* Reduced text size */}
            {client.title}
          </h3>
        </div>

        {/* Bottom - Name and Role */}
        <div className="space-y-0.5"> {/* Reduced spacing */}
          <p className="font-medium text-white text-sm">{client.name}</p>
          <p className="text-xs text-gray-300">{client.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}