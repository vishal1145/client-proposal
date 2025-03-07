"use client";

import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Quote request sent successfully!",
        });
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          description: "",
        });
      } else {
        throw new Error(data.message || "Failed to send quote request");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            alt="Quote Icon"
            width={80}
            height={80}
            className="w-auto h-auto"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
              Get a Quote
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-[#0561FC]">
                Home
              </Link>
              <span>-</span>
              <span>Quote</span>
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

      {/* Description Section */}
      <div className="container mx-auto px-4 max-w-3xl text-center mb-10 py-16">
        <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 mb-6">
          <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
            REQUEST A QUOTE
          </span>
        </div>

        <h2 className="text-xl md:text-3xl font-bold mb-6">
          <span className="text-gray-900">Get Started with Your</span>{" "}
          <span className="text-[#0561FC]">Project Today</span>
        </h2>

        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Tell us about your project and we&apos;ll provide you with a customized quote. Our team is ready to bring your vision to life.
        </p>
      </div>

      {/* Form Section */}
      <div className="py-16 mb-10 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Information */}
            <div className="p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Why Work With Us
              </h2>

              <p className="text-white mb-8">
                Partner with us for innovative solutions tailored to your needs. Let&apos;s create something extraordinary together.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0561FC] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">✓</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">Expert Team</h5>
                    <p className="text-sm text-white">
                      Our experienced professionals deliver exceptional results.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0561FC] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">Quick Turnaround</h5>
                    <p className="text-sm text-white">
                      We deliver projects on time without compromising quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0561FC] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-1">Dedicated Support</h5>
                    <p className="text-sm text-white">
                      Our team is always available to help during and after the project.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Need Help? Contact Us
                </h3>
                <div className="space-y-3">
                  <p className="text-sm text-white">
                    Email: <a href="mailto:hi@example.com" className="text-[#0561FC] ml-2">hi@example.com</a>
                  </p>
                  <p className="text-sm text-white">
                    Phone: <a href="tel:+1234567890" className="text-[#0561FC] ml-2">+1 (234) 567-890</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className="bg-[#0561FC] p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-6">
                Request a Quote
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="mb-2">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full bg-transparent text-white border-b border-white/20 pb-6 focus:outline-none focus:border-white text-sm placeholder:text-white"
                    required
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full bg-transparent text-white border-b border-white/20 pb-6 focus:outline-none focus:border-white text-sm placeholder:text-white"
                    required
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full bg-transparent text-white border-b border-white/20 pb-6 focus:outline-none focus:border-white text-sm placeholder:text-white"
                    required
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full bg-transparent text-white border-b border-white/20 pb-6 focus:outline-none focus:border-white text-sm placeholder:text-white"
                    required
                  />
                </div>

                <div className="mb-2">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-white border-b border-white/20 pb-6 focus:outline-none focus:border-white text-sm"
                    required
                  >
                    <option value="" className="bg-[#0561FC]">Select Project Type</option>
                    <option value="web" className="bg-[#0561FC]">Web Development</option>
                    <option value="mobile" className="bg-[#0561FC]">Mobile App</option>
                    <option value="design" className="bg-[#0561FC]">UI/UX Design</option>
                    <option value="other" className="bg-[#0561FC]">Other</option>
                  </select>
                </div>

                <div className="mb-2">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-white border-b border-white/20 pb-6 focus:outline-none focus:border-white text-sm"
                    required
                  >
                    <option value="" className="bg-[#0561FC]">Select Budget Range</option>
                    <option value="5k" className="bg-[#0561FC]">$1,000 - $5,000</option>
                    <option value="10k" className="bg-[#0561FC]">$5,000 - $10,000</option>
                    <option value="25k" className="bg-[#0561FC]">$10,000 - $25,000</option>
                    <option value="50k+" className="bg-[#0561FC]">$25,000+</option>
                  </select>
                </div>

                <div className="mb-2">
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full bg-transparent text-white border-b border-white/20 pb-6 focus:outline-none focus:border-white text-sm"
                    required
                  >
                    <option value="" className="bg-[#0561FC]">Expected Timeline</option>
                    <option value="1month" className="bg-[#0561FC]">Less than 1 month</option>
                    <option value="3months" className="bg-[#0561FC]">1-3 months</option>
                    <option value="6months" className="bg-[#0561FC]">3-6 months</option>
                    <option value="6months+" className="bg-[#0561FC]">6+ months</option>
                  </select>
                </div>

                <div className="mb-2">
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Project Description"
                    rows={4}
                    className="w-full bg-transparent text-white border-b border-white/20 pb-6 focus:outline-none focus:border-white text-sm placeholder:text-white resize-none"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" className="mt-1" required />
                  <label htmlFor="terms" className="text-sm text-white">
                    I agree to the processing of my data as per the privacy policy.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 text-white border border-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 hover:text-blue-600 transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Quote Request
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="my-16 text-center">
        <h3 className="text-2xl font-semibold text-[#0B1B2B] mb-4">
          Ready to Start Your Project?
        </h3>
        <p className="text-gray-600 text-[14px] mb-8 max-w-2xl mx-auto">
          Let&apos;s collaborate to build innovative solutions using the latest technologies and best coding practices.
        </p>

        <Link href="/contact">
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

      <Footer />
    </main>
  );
}