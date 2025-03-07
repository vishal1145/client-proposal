"use client";

import Image from "next/image";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PricingSection from "@/components/sections/PricingSection";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}
interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export default function HireDeveloperPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<{
    type: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (status?.type === "success") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus({ type: "loading", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Failed to send message",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
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

        {/* Right Side Payment Icon */}
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
              Hire Developers
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#0561FC]">
                Home
              </Link>
              <span>-</span>
              <span className="">Hire Developers</span>
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

      {/* Section Header */}
      {/* <div className="container mx-auto px-4 max-w-3xl text-center mb-10 py-16">
        <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 mb-6">
          <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
            HIRE DEVELOPERS
          </span>
        </div>
        
        <h2 className="text-xl md:text-3xl font-bold mb-6">
          <span className="text-gray-900">Find Your Perfect</span>{" "}
          <span className="text-[#0561FC]">Tech Match</span>
        </h2>
        
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Connect with expert developers who perfectly match your project needs. Our personal matcher service ensures you find the right talent for your team.
        </p>
      </div> */}

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Header with Chip */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 mb-6">
            <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium">
              HIRING PROCESS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-gray-900">Three Steps to Your Perfect</span>{" "}
            <span className="text-[#0561FC]">Laravel Developer</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl border border-[rgba(5,97,252,0.2)] hover:bg-[#0561FC] hover:text-white transition-all duration-300 group">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 mb-4 group-hover:bg-white/20">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium group-hover:text-white">
                Step 1
              </span>
            </div>

            <h3 className="text-xl font-bold mb-4">
              <span className="text-gray-900 group-hover:text-white">
                Define
              </span>{" "}
              <span className="text-[#0561FC] group-hover:text-white">
                Your Needs
              </span>
            </h3>

            <p className="text-sm text-gray-600 group-hover:text-white/90">
              Identify the specific skills and experience required for your
              project to ensure a perfect match.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl border border-[rgba(5,97,252,0.2)] hover:bg-[#0561FC] hover:text-white transition-all duration-300 group">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 mb-4 group-hover:bg-white/20">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium group-hover:text-white">
                Step 2
              </span>
            </div>

            <h3 className="text-xl font-bold mb-4">
              <span className="text-gray-900 group-hover:text-white">
                Connect
              </span>{" "}
              <span className="text-[#0561FC] group-hover:text-white">
                with Experts
              </span>
            </h3>

            <p className="text-sm text-gray-600 group-hover:text-white/90">
              Access a curated pool of top-tier Laravel developers ready to
              bring your vision to life.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl border border-[rgba(5,97,252,0.2)] hover:bg-[#0561FC] hover:text-white transition-all duration-300 group">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-900/20 mb-4 group-hover:bg-white/20">
              <span className="text-[10px] text-gray-600 uppercase tracking-wider font-medium group-hover:text-white">
                Step 3
              </span>
            </div>

            <h3 className="text-xl font-bold mb-4">
              <span className="text-gray-900 group-hover:text-white">
                Build
              </span>{" "}
              <span className="text-[#0561FC] group-hover:text-white">
                Your Solution
              </span>
            </h3>

            <p className="text-sm text-gray-600 group-hover:text-white/90">
              Collaborate with your chosen developer to deliver high-quality,
              scalable solutions efficiently.
            </p>
          </div>
        </div>
      </div>

      <PricingSection />
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Team Members */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-4">
                <div className="relative">
                  <Link href={`/developer/vivek-bisth`}>
                    <Image
                      src="/images/vivek_bisth.jpeg"
                      alt="Vivek Bisth"
                      width={200}
                      height={350}
                      className="rounded-lg w-full h-[350px] object-cover cursor-pointer transition-transform hover:scale-105"
                    />
                  </Link>
                  <h3 className="text-lg font-semibold mt-2">Vivek Bisth</h3>
                  <p className="text-sm text-gray-600">
                    Client Manager Benelux
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Image
                      src="/images/dfe4334.svg"
                      alt="Netherlands"
                      width={20}
                      height={15}
                    />
                    <Image
                      src="/images/b90b147.svg"
                      alt="Belgium"
                      width={20}
                      height={15}
                    />
                    <Image
                      src="/images/17cddaa.svg"
                      alt="Luxembourg"
                      width={20}
                      height={15}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Link href={`/developer/shivika-singh`}>
                    <Image
                      src="/images/shivika_singh.jpeg"
                      alt="Shivika Shingh"
                      width={200}
                      height={350}
                      className="rounded-lg w-full h-[350px] object-cover cursor-pointer transition-transform hover:scale-105"
                    />
                  </Link>
                  <h3 className="text-lg font-semibold mt-2">Shivika Shingh</h3>
                  <p className="text-sm text-gray-600">
                    Client Manager Nordics
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Image
                      src="/images/dfe4334.svg"
                      alt="Denmark"
                      width={20}
                      height={15}
                    />
                    <Image
                      src="/images/b90b147.svg"
                      alt="Norway"
                      width={20}
                      height={15}
                    />
                    <Image
                      src="/images/17cddaa.svg"
                      alt="Sweden"
                      width={20}
                      height={15}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Link href={`/developer/abhishek-garg`}>
                    <Image
                      src="/images/abhishek_garg.jpeg"
                      alt="Abhishek Garg"
                      width={200}
                      height={350}
                      className="rounded-lg w-full h-[350px] object-cover cursor-pointer transition-transform hover:scale-105"
                    />
                  </Link>
                  <h3 className="text-lg font-semibold mt-2">Abhishek Garg</h3>
                  <p className="text-sm text-gray-600">
                    Client Manager DACH & FR
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Image
                      src="/images/dfe4334.svg"
                      alt="UK"
                      width={20}
                      height={15}
                    />
                    <Image
                      src="/images/b90b147.svg"
                      alt="Netherlands"
                      width={20}
                      height={15}
                    />
                    <Image
                      src="/images/17cddaa.svg"
                      alt="Germany"
                      width={20}
                      height={15}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <div className="container mx-auto px-4 max-w-3xl text-left mb-10 py-16">
                {/* Chip/Badge */}
                <div className="inline-block px-4 py-1 rounded-full bg-blue-900/10 mb-6">
                  <span className="text-[10px] text-[#0561FC] uppercase tracking-wider font-medium">
                    PERSONAL MATCHER
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  <span className="text-gray-900">
                    Discover a world of talent with your
                  </span>{" "}
                  <span className="text-[#0561FC]">personal matcher</span>
                </h2>

                <p className="text-base text-gray-600 ">
                  Get paired with your own personal matcher from our dedicated
                  team. Why? They listen carefully to you, handpicking tech
                  experts with perfectly tailored skillsets for your needs.
                </p>
                <Link href="/contact">
                  <Button className="bg-[#0561FC] hover:bg-blue-700 text-white px-8 py-3 rounded-full mt-7">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-[#E0EFFF]">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-20 lg:gap-40">
            {/* Left Side - Contact Info */}
            <div>
              <p className="text-sm text-gray-500 border border-gray-400 font-medium mb-4 inline-block px-3 py-1 rounded-full">
                Contact Address
              </p>

              <h2 className="text-4xl font-bold text-[#0B1B2B] leading-tight mb-6">
                We&apos;re The Future Of{" "}
                <span className="text-[#0561FC]">IT Industry</span>,
                <br />
                Further Contact Us
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-12">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Lorem Ipsum Has Been The Industry&apos;s Standard
                Dummy
              </p>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 relative">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/pin.png"
                      alt="Location"
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-[#0B1B2B] mb-2">
                      Address
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=C-104+Sector+65+Noida"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" hover:text-gray-600 transition-all"
                      >
                        C-104 Sector 65 Noida
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/transport.png"
                      alt="Phone"
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-[#0B1B2B] mb-2">
                      Phone Number
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      <a
                        href="tel:+918743045170"
                        className=" hover:text-gray-600 transition-all"
                      >
                        +91 8743045170
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email Id */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/email.png"
                      alt="Email"
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-[#0B1B2B] mb-2">
                      Email Id
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      <a
                        href="mailto:hi@algofolks.com"
                        className=" hover:text-gray-600 transition-all"
                      >
                        hi@algofolks.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/clock.png"
                      alt="Clock"
                      width={20}
                      height={20}
                      className="opacity-60"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-[#0B1B2B] mb-2">
                      Opening Hours
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Mon - Sat
                      <br />9 AM to 6 PM
                    </p>
                  </div>
                </div>

                {/* Divider Lines */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 hidden sm:block"></div>
                <div className="absolute left-0 right-0 top-[45%] h-px bg-gray-300 hidden sm:block"></div>
              </div>
            </div>

            <div className="bg-[#0561FC] rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-white mb-2">Get Quotes</h3>
              <p className="text-white/80 text-sm mb-8">
                The Point Of Using Lorem Ipsum Is That It Has More-Or-Less
                Normal
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white border-b border-white/20 pb-3 focus:outline-none focus:border-white text-sm placeholder:text-white/60"
                    style={{ WebkitTextFillColor: "white" }}
                  />
                  {errors.fullName && (
                    <p className="text-red-300 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white border-b border-white/20 pb-3 focus:outline-none focus:border-white text-sm placeholder:text-white/60 [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_1000px_#0561FC_inset]"
                    style={{
                      WebkitTextFillColor: "white",
                      WebkitBoxShadow: "0 0 0 30px #0561FC inset",
                    }}
                  />
                  {errors.email && (
                    <p className="text-red-300 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent text-white border-b border-white/20 pb-3 focus:outline-none focus:border-white text-sm placeholder:text-white/60 resize-none"
                    style={{ WebkitTextFillColor: "white" }}
                  />
                  {errors.message && (
                    <p className="text-red-300 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status?.type === "loading"}
                  className="flex items-center justify-center gap-2 text-white border border-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/90 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status?.type === "loading" ? (
                    <div className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Submit Now <span className="ml-1">→</span>
                    </>
                  )}
                </button>

                {status && status.type !== "loading" && (
                  <p
                    className={`text-sm text-center ${
                      status.type === "success"
                        ? "text-green-300"
                        : "text-red-300"
                    }`}
                  >
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
