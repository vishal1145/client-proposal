'use client';

import React from 'react';
import Image from "next/image";

const TeamMemberSection = () => {
  // Example team member data - you can replace this with your actual data or API call
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Nagarajan',
      role: 'Project Lead',
      image: '/images/team-member-1.png',
      hasSocial: true
    },
    {
      id: 2,
      name: 'Dr. Vaishali',
      role: 'Project Lead',
      image: '/images/team-member-1.png',
      hasSocial: true
    },
    {
      id: 3,
      name: 'Dr. Smith',
      role: 'Senior Researcher',
      image: '/images/team-member-1.png',
      hasSocial: true
    },
    {
      id: 4,
      name: 'Dr. Johnson',
      role: 'Data Scientist',
      image: '/images/team-member-1.png',
      hasSocial: true
    },
    {
      id: 5,
      name: 'Dr. Williams',
      role: 'AI Specialist',
      image: '/images/team-member-1.png',
      hasSocial: true
    },
    {
      id: 6,
      name: 'Dr. Brown',
      role: 'Research Analyst',
      image: '/images/team-member-1.png',
      hasSocial: true
    },
    {
      id: 7,
      name: 'Dr. Davis',
      role: 'ML Engineer',
      image: '/images/team-member-1.png',
      hasSocial: true
    },
    {
      id: 8,
      name: 'Dr. Miller',
      role: 'Technical Lead',
      image: '/images/team-member-1.png',
      hasSocial: true
    }
  ];

  return (
     <>
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
                Team Members
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Our Team Members</span>
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

      {/* Team Members Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#0B1B2B] mb-16">Our Team Members</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="group relative">
                <div className="aspect-square w-full relative">
                  {/* Regular Image */}
                  <div className={`w-full h-full rounded-full overflow-hidden ${!member.hasSocial ? 'block' : 'group-hover:hidden'}`}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Social Media Version (Blue Overlay) */}
                  {member.hasSocial && (
                    <div className="hidden group-hover:block w-full h-full rounded-full overflow-hidden transition-all duration-300">
                      <div className="relative w-full h-full bg-[#4461F2] bg-gradient-to-b from-transparent via-[#4461F2]/80 to-[#4461F2]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover mix-blend-overlay"
                        />
                        <div className="absolute inset-0 flex items-center justify-center gap-4">
                          <a href="#" className="text-black hover:text-gray-800 transform hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                            </svg>
                          </a>
                          <a href="#" className="text-black hover:text-gray-800 transform hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                          </a>
                          <a href="#" className="text-black hover:text-gray-800 transform hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="text-center mt-4">
                  <h3 className="text-lg font-semibold text-[#0B1B2B]">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     </>
  );
};

export default TeamMemberSection;
