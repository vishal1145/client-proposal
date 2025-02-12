"use client";

import { Button } from "@/components/ui/button";

export default function GetQuotePage() {
  return (
    <section className="bg-[#0B1B2B] min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - Form */}
          <div className="bg-white rounded-3xl p-10 space-y-8">
            <div>
              <h1 className="text-3xl font-semibold text-[#0B1B2B]">Get a Quote</h1>
              <p className="text-gray-600 mt-2">Fill in your project details and we&apos;ll get back to you with a quote.</p>
            </div>

            <form className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium text-[#0B1B2B]">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium text-[#0B1B2B]">Project Details</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select Project Type</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="design">UI/UX Design</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select Budget Range</option>
                      <option value="5k">$1,000 - $5,000</option>
                      <option value="10k">$5,000 - $10,000</option>
                      <option value="25k">$10,000 - $25,000</option>
                      <option value="50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                <h2 className="text-xl font-medium text-[#0B1B2B]">Timeline</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expected Timeline</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Timeline</option>
                    <option value="1month">Less than 1 month</option>
                    <option value="3months">1-3 months</option>
                    <option value="6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                  </select>
                </div>
              </div>

              <Button 
                className="w-full bg-[#4461F2] hover:bg-blue-700 text-white rounded-xl px-8 py-4 text-lg font-medium"
              >
                Get Quote
              </Button>
            </form>
          </div>

          {/* Right Content - Information */}
          <div className="space-y-8">
            <div className="bg-[#FFE4E0] rounded-3xl p-10 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold text-[#0B1B2B] mb-4">Why Choose Our Services?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4461F2] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0B1B2B]">Expert Team</h3>
                      <p className="text-gray-600 text-sm">Our team of experts brings years of experience in delivering successful projects.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4461F2] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0B1B2B]">Competitive Pricing</h3>
                      <p className="text-gray-600 text-sm">Get the best value for your investment with our competitive pricing models.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4461F2] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0B1B2B]">Quick Turnaround</h3>
                      <p className="text-gray-600 text-sm">We deliver projects on time without compromising on quality.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10">
                <svg className="w-full h-full text-[#4461F2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0112 18.469c-1.006 0-1.97-.43-2.66-1.183l-.548-.547z" />
                </svg>
              </div>
            </div>

            <div className="bg-[#4461F2] rounded-3xl p-10 text-white">
              <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 000-0000</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>support@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 