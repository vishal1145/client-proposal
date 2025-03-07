"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Education {
  degree: string;
  institution: string;
  duration: string;
}

interface Experience {
  company: string;
  duration: string;
  role: string;
  responsibilities: string[];
  technologies?: string[];
}

interface Developer {
  name: string;
  role: string;
  location: string;
  image: string;
  description: string[];
  mainExpertise: string[];
  otherSkills: string[];
  experience: Experience[];
  education: Education;
}

type DevelopersDataType = {
  [key: string]: Developer;
};

const developersData : DevelopersDataType = {
  "Vivek Bisth": {
    name: "Vivek Bisth",
    role: "Full Stack Developer",
    location: "Noida",
    image: "/images/vivek_bisth.jpeg",
    description: [
      "Professional Full Stack developer with over five years of experience in MERN stack development.",
      "Vivek has extensive experience in building scalable web applications using React and Node.js.",
      "Expert in developing RESTful APIs and working with various databases.",
      "Has profound experience in modern JavaScript frameworks and cloud technologies.",
      "Strong team player with excellent problem-solving skills and attention to detail.",
    ],
    mainExpertise: ["React.js", "Node.js", "TypeScript"],
    otherSkills: ["MongoDB", "AWS", "Docker"],
    experience: [
      {
        company: "Tech Solutions Inc",
        duration: "2 years",
        role: "Senior Full Stack Developer",
        responsibilities: [
          "Led development of enterprise-level React applications",
          "Implemented microservices architecture using Node.js",
          "Developed and maintained RESTful APIs",
          "Optimized application performance and database queries",
          "Mentored junior developers and conducted code reviews",
        ],
        technologies: ["React", "node", "typescript"],
      },
      {
        company: "Digital Innovations",
        duration: "3 years",
        role: "Full Stack Developer",
        responsibilities: [
          "Built scalable web applications using MERN stack",
          "Implemented real-time features using WebSocket",
          "Developed responsive UI components using React and Material-UI",
          "Integrated third-party APIs and services",
          "Participated in agile development processes",
        ],
        technologies: ["React", "node", "typescript"],
      },
    ],
    education: {
      degree: "B.Tech in Computer Science",
      institution: "Delhi Technical University",
      duration: "2015 - 2019",
    },
  },

  "Shivika Shingh": {
    name: "Shivika Singh",
    role: "Backend Developer",
    location: "Bangalore",
    image: "/images/shivika_singh.jpeg",
    description: [
      "Professional Python and Django developer with over four years of experience in backend development.",
      "Shivika has extensive experience in building robust and scalable backend systems.",
      "Expert in database design, optimization, and API development.",
      "Has profound experience in Python frameworks and cloud services.",
      "Excellent problem-solver with strong analytical skills.",
    ],
    mainExpertise: ["Python", "Django", "PostgreSQL"],
    otherSkills: ["Redis", "Docker", "AWS"],
    experience: [
      {
        company: "DataTech Solutions",
        duration: "2 years",
        role: "Senior Backend Developer",
        responsibilities: [
          "Designed and implemented scalable backend systems",
          "Developed RESTful APIs using Django REST framework",
          "Optimized database queries and improved performance",
          "Implemented caching solutions using Redis",
          "Led backend architecture discussions and decisions",
        ],
        technologies: ["Python", "django", "PostgreSQL"],
      },
      {
        company: "Cloud Systems Ltd",
        duration: "2 years",
        role: "Python Developer",
        responsibilities: [
          "Developed microservices using Python and FastAPI",
          "Implemented authentication and authorization systems",
          "Created automated testing suites",
          "Managed database migrations and schema updates",
          "Integrated AWS services for scalable solutions",
        ],
        technologies: ["Python", "django", "PostgreSQL"],
      },
    ],
    education: {
      degree: "M.Tech in Computer Science",
      institution: "IIT Bangalore",
      duration: "2016 - 2018",
    },
  },

  "Abhishek Garg": {
    name: "Abhishek Garg",
    role: "Frontend Developer",
    location: "Mumbai",
    image: "/images/abhishek_garg.jpeg",
    description: [
      "Professional Frontend developer with over three years of experience in Vue.js development.",
      "Abhishek has extensive experience in creating responsive and interactive user interfaces.",
      "Expert in modern JavaScript frameworks and state management.",
      "Has profound experience in frontend optimization and performance tuning.",
      "Strong focus on creating accessible and user-friendly applications.",
    ],
    mainExpertise: ["Vue.js", "JavaScript", "Tailwind CSS"],
    otherSkills: ["Nuxt.js", "SASS", "Webpack"],
    experience: [
      {
        company: "Creative Web Solutions",
        duration: "2 years",
        role: "Senior Frontend Developer",
        responsibilities: [
          "Developed responsive web applications using Vue.js",
          "Implemented complex UI components and animations",
          "Optimized frontend performance and loading times",
          "Created reusable component libraries",
          "Integrated REST APIs and managed state with Vuex",
        ],
        technologies: ["Vue", "JavaScript", "Tailwind"],
      },
      {
        company: "Digital Creatives",
        duration: "1 year",
        role: "UI Developer",
        responsibilities: [
          "Built interactive user interfaces using modern JavaScript",
          "Implemented responsive designs using Tailwind CSS",
          "Created custom animations and transitions",
          "Optimized web vitals and performance metrics",
          "Collaborated with UX designers for optimal user experience",
        ],
        technologies: ["Vue", "tailwind", "JavaScript"],
      },
    ],
    education: {
      degree: "B.E. in Information Technology",
      institution: "Mumbai University",
      duration: "2014 - 2018",
    },
  },
};
export default function DeveloperProfile() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";
  const developer = developersData[name];
  const technologyImages: { [key: string]: string } = {
    react: "/images/react.png",
    node: "/images/node.png",
   
    python: "/images/python.png",
    django: "/images/django.jpeg",
    postgresql: "/images/postgresql.png",
    vue: "/images/vue.png",
    javascript: "/images/javascript.png",
    typescript: "/images/typescript.jpeg",
    aws: "/images/aws.png",
    docker: "/images/docker.jpeg",
    tailwind: "/images/tailwind(1).png",
    // Add more technology images as needed
  };
  if (!developer) {
    return <div>Developer not found</div>;
  }

  const getTechnologyImagePath = (tech: string): string => {
    const technologyImages: { [key: string]: string } = {
      'React.js': '/images/react.png',
      'Node.js': '/images/node.png',
      'TypeScript': '/images/typescript.jpeg',
      'MongoDB': '/images/mongodb.png',
      'AWS': '/images/aws.png',
      'Docker': '/images/docker.png',
      'Python': '/images/python.png',
      'Django': '/images/django.jpeg',
      'PostgreSQL': '/images/postgresql.png',
      'Vue.js': '/images/vue.png',
      'JavaScript': '/images/javascript.png',
      'Tailwind CSS': '/images/tailwind(1).png',
      'Nuxt.js': '/images/Nuxt.png',
      'SASS': '/images/sass.png',
      'Webpack': '/images/webpack.png',
      'Redis': '/images/redis.jpeg',
    };
  
    // Convert the tech name to match the object keys
    const normalizedTech = tech.toLowerCase();
    
    // Try to find the image path
    for (const [key, value] of Object.entries(technologyImages)) {
      if (key.toLowerCase() === normalizedTech) {
        return value;
      }
    }
  
    // Return default image if not found
    return '/images/default-tech.png';
  };

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

        {/* Right Side Icon */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/message.png"
            alt="Message Icon"
            width={80}
            height={80}
            className="w-auto h-auto"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
              Developer Profile
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#0561FC]">
                Home
              </Link>
              <span>-</span>
              <Link href="/hire-developers" className="hover:text-[#0561FC]">
                Developers
              </Link>
              <span>-</span>
              <span className="text-[#0561FC]">{developer.name}</span>
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

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Content */}
         

          <div className="relative">
            <div className="sticky top-12">
              <Image
                src={developer.image}
                alt={developer.name}
                width={500}
                height={600}
                className="rounded-lg shadow-lg w-full h-[600px] object-cover"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-[#0B1B2B]">
                  {developer.name}
                </h3>
                <p className="text-gray-600">{developer.location}</p>
                <Link href="/payment" className="block mt-4">
                  <Button className="bg-[#0561FC] text-white px-8 py-3 rounded-full hover:bg-[#0561FC] transition-colors w-full">
                    BOOK {developer.name.toUpperCase()}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* Right Column - Image */}
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 mb-6">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
                DEVELOPER PROFILE
              </span>
            </div>
            <div className="mb-5">
              <h3 className="text-2xl font-bold text-[#0B1B2B] mb-2">
                {developer.name}
              </h3>
              <h5 className="text-lg text-[#0561FC] font-medium">
                {developer.role}
              </h5>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Description */}
              <div className="space-y-4">
                {developer.description.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 gap-8  rounded-xl mt-8">
    <div>
        <h3 className="text-xl font-semibold text-[#0B1B2B] mb-4">
            Skills & Expertise
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {[
                ...developer.mainExpertise,
                ...developer.otherSkills
            ].map((skill, index) => (
                <div
                    key={index}
                    className="flex flex-col    transition-all"
                >
                    <div className="relative w-12 h-12 mb-2">
                        <Image
                            src={getTechnologyImagePath(skill)}
                            alt={skill}
                            fill
                            className="object-contain "
                        />
                    </div>
                    <span className="text-xs text-gray-600 ">{skill}</span>
                </div>
            ))}
        </div>
    </div>
</div>



            </div>

            {/* Experience Section */}
            <div className="mt-16">
              <div className="text-left">
                <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 mb-6">
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
                    EXPERIENCE
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#0B1B2B] mb-2">
                  Selected experience
                </h2>
              </div>
              <h3 className="text-lg text-gray-600 mb-8">Employment</h3>
              <div className="space-y-8 max-w-3xl">
                {developer.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-[#0561FC]"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0561FC]" />
                    <div className="text-[#0561FC] text-sm font-medium mb-1">
                      {exp.role}
                    </div>
                    <div className="text-gray-700 text-sm mb-4">
                      {exp.company} - {exp.duration}
                    </div>
                    <div className="text-gray-700 text-sm mb-2">
                      Roles and responsibilities:
                    </div>
                    <ul className="list-none space-y-2 text-gray-600 text-sm">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span className="text-gray-700">{resp}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.technologies && (
                      <div className="mt-4">
                        <div className="text-gray-700 text-sm mb-2">
                          Technologies:
                        </div>
                        <div className="flex items-center gap-4">
                          {exp.technologies.map((tech, idx) => (
                            <Image
                              key={idx}
                              src={technologyImages[tech.toLowerCase()] || '/images/default-tech.png'}
                              alt={tech}
                              width={20}
                              height={20}
                              className="h-5"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Education Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-[#0B1B2B] mb-8">
                    Education
                  </h2>
                  <div className="relative pl-8 border-l-2 border-[#0561FC]">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#0561FC]" />
                    <div className="text-[#0561FC] text-sm font-medium mb-1">
                      {developer.education.degree}
                    </div>
                    <div className="text-gray-700 text-sm">
                      {developer.education.institution} -{" "}
                      {developer.education.duration}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}