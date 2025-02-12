"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jhon - Manager",
    quote: "Shered Lorem Ipsum Into The Information Age With Its Desktop Software Aldus PageMaker.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&h=500&auto=format&fit=crop",
    theme: "white"
  },
  {
    id: 2,
    name: "Jhon - Manager",
    quote: "Shered Lorem Ipsum Into The Information Age With Its Desktop Software Aldus PageMaker.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&h=500&auto=format&fit=crop",
    theme: "blue"
  },
  {
    id: 3,
    name: "Jhon - Manager",
    quote: "Shered Lorem Ipsum Into The Information Age With Its Desktop Software Aldus PageMaker.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&h=500&auto=format&fit=crop",
    theme: "white"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm mb-4">
            Customer Feedbacks
          </span>
          <h2 className="text-4xl font-bold text-[#0B1B2B]">
            What Our Clients Say About{' '}
            <span className="text-blue-600">Our Work</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`${
                testimonial.theme === 'blue' 
                  ? 'bg-[#4461F2]' 
                  : 'bg-white'
              } p-8 rounded-3xl relative`}
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-24 h-24">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Quote */}
              <div className="relative text-center mb-6">
                <div className="absolute -left-1 -top-4">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.634 16.072c1.862-.947 3.108-2.525 3.108-4.338 0-2.969-2.596-5.377-5.797-5.377C3.743 6.357 1 8.765 1 11.734c0 2.082 1.246 3.896 3.108 4.843-1.246 3.391-2.785 6.433-2.785 6.433s4.908-1.514 7.397-3.896c.586 2.525 2.936 4.402 5.721 4.402 3.201 0 5.797-2.408 5.797-5.377s-2.596-5.377-5.797-5.377" fill="${testimonial.theme === 'blue' ? '#FFFFFF' : '#FF731D'}" fillOpacity="${testimonial.theme === 'blue' ? '0.2' : '1'}"/>
                  </svg>
                </div>
                <p className={`text-lg leading-relaxed ${
                  testimonial.theme === 'blue' 
                    ? 'text-white' 
                    : 'text-gray-600'
                } px-4`}>
                  {testimonial.quote}
                </p>
                <div className="absolute -right-1 bottom-0">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.366 16.072c-1.862-.947-3.108-2.525-3.108-4.338 0-2.969 2.596-5.377 5.797-5.377C28.257 6.357 31 8.765 31 11.734c0 2.082-1.246 3.896-3.108 4.843 1.246 3.391 2.785 6.433 2.785 6.433s-4.908-1.514-7.397-3.896c-.586 2.525-2.936 4.402-5.721 4.402-3.201 0-5.797-2.408-5.797-5.377s2.596-5.377 5.797-5.377" fill="${testimonial.theme === 'blue' ? '#FFFFFF' : '#FF731D'}" fillOpacity="${testimonial.theme === 'blue' ? '0.2' : '1'}"/>
                  </svg>
                </div>
              </div>

              {/* Name */}
              <div className="text-center mt-6">
                <h4 className={`text-lg font-semibold ${
                  testimonial.theme === 'blue' 
                    ? 'text-white' 
                    : 'text-[#0B1B2B]'
                }`}>
                  {testimonial.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-4">
          <button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
            <span className="sr-only">Previous</span>
            ←
          </button>
          <button className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
            <span className="sr-only">Next</span>
            →
          </button>
        </div>
      </div>
    </section>
  );
} 