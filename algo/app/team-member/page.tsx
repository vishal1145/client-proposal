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
      image: '/images/teammember2.png',
      hasSocial: true
    },
    {
      id: 2,
      name: 'Dr. Vaishali',
      role: 'Project Lead',
      image: '/images/teammember2.png',
      hasSocial: true
    },
    {
      id: 3,
      name: 'Dr. Smith',
      role: 'Senior Researcher',
      image: '/images/teammember2.png',
      hasSocial: true
    },
    {
      id: 4,
      name: 'Dr. Johnson',
      role: 'Data Scientist',
      image: '/images/teammember2.png',
      hasSocial: true
    },
    {
      id: 5,
      name: 'Dr. Williams',
      role: 'AI Specialist',
      image: '/images/teammember2.png',
      hasSocial: true
    },
    {
      id: 6,
      name: 'Dr. Brown',
      role: 'Research Analyst',
      image: '/images/teammember2.png',
      hasSocial: true
    },
    {
      id: 7,
      name: 'Dr. Davis',
      role: 'ML Engineer',
      image: '/images/teammember2.png',
      hasSocial: true
    },
    {
      id: 8,
      name: 'Dr. Miller',
      role: 'Technical Lead',
      image: '/images/teammember2.png',
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
              <div key={member.id} className="relative">
                <div className="aspect-square w-full relative group cursor-pointer">
                  {/* Regular Image */}
                  <div className={`w-full h-full rounded-full overflow-hidden ${!member.hasSocial ? 'block' : 'group-hover:hidden'}`}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  
                  {/* Social Media Version (Blue Overlay) */}
                  {member.hasSocial && (
                    <div className="hidden group-hover:block w-full h-full rounded-full overflow-hidden transition-all duration-300">
                      <div className="relative w-full h-full bg-gradient-to-b from-[#0561FC]/40 via-[#0561FC]/70 to-[#0561FC]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover rounded-full mix-blend-overlay"
                        />
                        <div className="absolute bottom-8 inset-x-0 flex items-center justify-center gap-4">
                          <a href="#" className="bg-black/90 p-2 rounded-full text-white hover:bg-black transform hover:scale-110 transition-transform duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                            </svg>
                          </a>
                          <a href="#" className="bg-black/90 p-2 rounded-full text-white hover:bg-black transform hover:scale-110 transition-transform duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>
                          <a href="#" className="bg-black/90 p-2 rounded-full text-white hover:bg-black transform hover:scale-110 transition-transform duration-300">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
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
