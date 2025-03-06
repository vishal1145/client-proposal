import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/sections/Footer'

// Types
import { CareerIcons } from '@/components/sections/CareerIcons'
import { Button } from '@/components/ui/button';

// Types
interface ServiceCard {
  icon: keyof typeof CareerIcons;
  title: string;
  description: string;
}

interface PolicyCard {
  image: string;
  title: string;
}

interface JoyRideFeature {
  icon: keyof typeof CareerIcons;
  title: string;
  description: string;
}

interface FeatureCard {
  icon: keyof typeof CareerIcons;
  title: string;
  description: string;
}

// Data Constants
const services: ServiceCard[] = [
  {
    icon: "webdev",
    title: "Web development",
    description: "A web developer is a maverick who creates an entire platform from the ground up. You need the right talent, perseverance, and an idea about the latest tools and technologies."
  },
  {
    icon: "qa",
    title: "QA",
    description: "A web developer is a maverick who creates an entire platform from the ground up. You need the right talent, perseverance, and an idea about the latest tools and technologies."
  },
  {
    icon: "uiux",
    title: "UI/UX",
    description: "A web developer is a maverick who creates an entire platform from the ground up. You need the right talent, perseverance, and an idea about the latest tools and technologies."
  }
];

const policyCards: PolicyCard[] = [
  {
    image: "/images/policy.jpg",
    title: "Employee First Policy"
  },
  {
    image: "/images/diversity.jpg",
    title: "Diversity & Inclusion"
  }
];

const featureCards: PolicyCard[] = [
  {
    image: "/images/goals.jpg",
    title: "Future Goals"
  },
  {
    image: "/images/leader.jpg",
    title: "Leadership Training"
  },
  {
    image: "/images/award.jpg",
    title: "Awards & Recognition"
  }
];

const joyRideFeatures: JoyRideFeature[] = [
  {
    icon: "sustainability",
    title: "Sustainability Ambassador",
    description: "Robbing the future will hamper our own growth- at Algofolks, we believe in creating an environmentally viable ambiance. We encourage every member to take the pledge to do their bit towards the environment."
  },
  {
    icon: "teamwork",
    title: "Champion the Camaraderie",
    description: "There is no lonewolf in the team. We believe in respect, equality and honesty, and owning up to one's mistakes. As part of the team, these core values help foster a happy and positive workplace."
  },
  {
    icon: "innovation",
    title: "Be An Ideapreneur",
    description: "Do you think out of the box? You have come to the right place. We encourage you to think tangentially and help nurture every talent."
  },
  {
    icon: "flexibility",
    title: "Be Adventurous",
    description: "Taking the lead in client calls to sitting in meetings with stakeholders- you will have a 360-degree experience in every facet of corporate life very early on in your career."
  }
];

const teamFeatures: FeatureCard[] = [
  {
    icon: "flexibility",
    title: "Flexibility",
    description: "We provide a hybrid work model- with an ambient mix of in-office and work from home options. We believe in obtaining on-point deliverables rather than on-time card punching."
  },
  {
    icon: "teamwork",
    title: "Transparency",
    description: "Secrets are for spies- not for us! We are 100% honest and straightforward in all our interactions to boost credibility and confidence among past and present clients."
  },
  {
    icon: "innovation",
    title: "Celebration",
    description: "Whether it is a tea party or sit-down dinner, celebrating the small and big wins are equally important- we do it all to keep the morale high, and the efforts acknowledged!"
  },
  {
    icon: "sustainability",
    title: "Community outreach",
    description: "At Algofolks, we believe in the concept of community development. Our outreach programs with NGOs and government organizations reflect the Mahatma's belief system."
  },
  {
    icon: "communication",
    title: "Communication",
    description: "There is no gap in communication- if not f2f, then over skype, Google Meet, slack, or emails- all queries are answered and all points debated."
  },
  {
    icon: "learning",
    title: "Learning",
    description: "Technology is ever-evolving, and so is team Algofolks. We keep ourselves constantly updated with the latest trends and innovations about tools and software so that our clients can benefit from our knowledge & expertise!"
  }
];
export default function CareerPage() {
  return (
    <main className="min-h-screen bg-white">
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
                Career
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Link href="/" className="hover:text-[#0561FC]">Home</Link>
              <span>/</span>
              <span className="">Our Career</span>
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

      {/* Main Content */}
      <div className="min-h-screen p-8 md:p-16 mt-24">
        {/* Talent Network Section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 mb-16">
          
          <div className="md:w-1/2">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-50 mb-4">
    <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
      CAREER OPPORTUNITIES
    </span>
  </div>
  <h1 className="text-[35px] font-bold mb-8">
  <span className="text-gray-900">Algofolks</span>{" "}
  <span className="text-[#0561FC]">Talent Network</span>
</h1>
            
            <p className="text-gray-600 text-[14px] mb-8">
              Are you ready to be part of one of the fastest-growing software quality assurance
              companies? We help create opportunities for deserving candidates. You will get global
              exposure, opportunities to learn from both SMEs and Enterprise projects and work on the
              latest technologies.
            </p>

            <Link 
              href="/apply" 
              className="inline-block text-[14px] px-6 py-3 bg-[#0561FC] text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              View open roles
            </Link>
          </div>

          <div className="md:w-1/2">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/images/career.jpg"
                alt="Talent Network"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-6xl mx-auto mb-24">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {services.map((service, index) => (
      <div 
        key={index} 
        className="bg-white p-8 rounded-[20px] shadow-2xl hover:bg-[#0561FC] group transition-all duration-300 cursor-pointer"
      >
        {/* Icon */}
        <div className="mb-6">
        <div className="mb-6">
                  {CareerIcons[service.icon]}
                </div>
        </div>

        {/* Title */}
        <h3 className="text-[20px] font-semibold text-gray-900 mb-3 group-hover:text-white transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-[15px] leading-relaxed group-hover:text-white/90 transition-colors">
          {service.description}
        </p>
      </div>
    ))}
  </div>
</div>
        {/* Growth Accelerator Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full bg-blue-50 mb-6">
    <span className="text-[13px] text-gray-600 uppercase tracking-wider font-medium">
      OUR MISSION
    </span>
  </div>
  <h2 className="text-3xl max-w-2xl font-bold mb-3 mx-auto">
  <span className="text-gray-900">We are growth accelerator</span>{" "}
  <span className="text-[#0561FC]">partners for startups </span>
  <span className="text-gray-900">and small businesses</span>{" "}
</h2>
          <p className="text-gray-600 text-[14px]">
            At Algofolks we believe that if we don&apos;t deliver 1000% for every project, then it&apos;s not worth doing. 
            This makes us an industry favorite with organizations- big and small.
          </p>
        </div>
                {/* Policy Cards Section */}
                <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policyCards.map((card, index) => (
              <div key={index} className="relative h-[300px] rounded-lg overflow-hidden group">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <div key={index} className="relative h-[300px] rounded-lg overflow-hidden group">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Joy Ride Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-50 mb-6">
    <span className="text-[13px] text-gray-600 uppercase tracking-wider font-medium">
      WORK CULTURE
    </span>
  </div>
  <h2 className="text-[36px] font-[600] mb-4">
  <span className="text-gray-900">Working at</span>{" "}
  <span className="text-[#0561FC]">Algofolks</span>{" "}
  <span className="text-gray-900">is a joy ride</span>
</h2>
            <p className="text-gray-600 opacity-75 text-[14px]">
              Be part of our organization and be involved in the following experiences:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {joyRideFeatures.map((feature, index) => (
    <div 
      key={index} 
      className="bg-white p-8 rounded-[20px] shadow-2xl hover:bg-[#0561FC] group transition-all duration-300 cursor-pointer"
    >
      {/* Icon and Title Section */}
      <div className="mb-6">
   

<div className="mb-6">
                  {CareerIcons[feature.icon]}
                </div>
        <h3 className="text-[17px] font-[500] text-gray-900 group-hover:text-white transition-colors">
          {feature.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[13px] leading-relaxed text-gray-600 group-hover:text-white/90 transition-colors">
        {feature.description}
      </p>
    </div>
  ))}
</div>
        </div>

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto mb-16">
        <div className="text-center rounded-lg p-8 mb-12 bg-white shadow-sm">
  {/* Added Chip */}
  <div className="inline-block px-4 py-1 rounded-full bg-blue-50 mb-6">
    <span className="text-[13px] text-gray-600 uppercase tracking-wider font-medium">
      JOIN OUR TEAM
    </span>
  </div>
  
  <h2 className="text-[#1e293b] text-[32px] font-[600] mb-4">Contact Our Team</h2>
  <Link 
    href="/apply"
    className="inline-block px-6 py-2 bg-[#0561FC] text-white rounded-md text-[14px] hover:bg-blue-600 transition-colors"
  >
    View open roles
  </Link>
</div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {teamFeatures.map((feature, index) => (
    <div 
      key={index} 
      className="bg-white p-8 rounded-[20px] shadow-2xl hover:bg-[#0561FC] group transition-all duration-300 cursor-pointer"
    >
      {/* Icon and Title Section */}
      <div className=" items-start gap-4 mb-3">
       
        <div className="mb-6">
                  {CareerIcons[feature.icon]}
                </div>
        <h3 className="text-[17px] font-[500] text-gray-900 group-hover:text-white transition-colors">
          {feature.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[13px] leading-relaxed text-gray-600  group-hover:text-white/90 transition-colors ">
        {feature.description}
      </p>
    </div>
  ))}
</div>
        </div>
            </div>
            
            <div className="my-16 text-center">
            <h3 className="text-2xl font-semibold text-[#0B1B2B] mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 text-[14px] mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to build innovative solutions using the latest
              technologies and best coding practices. Our team is ready to help
              you achieve your goals.
            </p>

            <Link href="/contact" >
              <Button
                variant="default"
                className="bg-[#0066FF] hover:bg-blue-700 text-white rounded-full px-8 py-3 flex items-center gap-2 mx-auto"
              >
                Contact Us
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </Link>
          </div>
      {/* Footer */}
      <Footer />
    </main>
  )
}