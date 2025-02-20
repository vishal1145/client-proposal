'use client';

import React from 'react';
import Image from "next/image";
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

const PricingSection = () => {
  // Example team member data - you can replace this with your actual data or API call
 

  return (
     <>
      {/* Hero Section */}
      <section className="relative bg-[#F6F0E4] py-20 overflow-x-hidden">
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
                Pricing Plans
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Our Pricing Plans</span>
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

      {/* Pricing Cards Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          {/* Pricing Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-normal  tracking-normal">Service Plan</p>
            <h2 className=" text-[40px] font-medium leading-[55px] tracking-normal text-center">
              Our Software <span className="text-blue-600">Pricing Plans</span>
            </h2>
            <div className="flex justify-center mt-4 gap-4">
              <button className="bg-blue-600 text-white px-5 py-1 rounded-full flex items-center text-xs">
                Yearly Plan <span className="ml-2">↗</span>
              </button>
              <button className="text-gray-600 px-5 py-1 border border-gray-400 rounded-full flex items-center text-xs">
                Monthly Plan <span className="ml-2">↗</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Service Plan */}
            <div className="relative border border-[rgba(5,97,252,0.2)] rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white">
  <h3 className="font-[Public Sans] font-medium text-[20px] leading-[24px] tracking-[0%]">
    Basic Service Plan
  </h3>
  <div className="font-[Public Sans] font-medium text-[40px] leading-[48px] tracking-[0%] mt-3 mb-3">
    $ 99.00
  </div>
  <p className="text-xs opacity-90 mb-3">
    Got Car Troubles? We&apos;ve Got Solutions! The Art of Automotive Care Empowering Your Vehicle
  </p>
  <hr className="border-t border-[rgba(10,34,60,0.3)] mb-3"/>

  <div className="mb-6">
    <h4 className="font-semibold mb-3 text-sm">What Is Included</h4>
    <ul className="space-y-2 text-xs">
      <li className="flex items-center">
        <span className="mr-2">✓</span> 1 Year Replacement Warranty
      </li>
      <li className="flex items-center">
        <span className="mr-2">✓</span> Commercial License
      </li>
      <li className="flex items-center">
        <span className="mr-2">✓</span> Monthly Updates
      </li>
      <li className="flex items-center">
        <span className="mr-2">✓</span> Best Ransomware Updates
      </li>
      <li className="flex items-center">
        <span className="mr-2">✓</span> Spark Plug Checking
        <span className="text-xs text-gray-500 ml-2">+5 More View All</span>
      </li>
    </ul>
  </div>

  <p className="text-xs text-gray-500 mb-4">*5000kms Or 3 Month Recommended</p>
  <Link href="contact">
  <button className="w-[160px] bg-[rgba(5,97,252,1)] text-white absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 px-5 py-2 rounded-full flex items-center justify-center text-xs">
    Pricing Plan <span className="ml-1">↗</span>
  </button>
  </Link>
</div>


            {/* Basic Standard Plan */}
            <div className="relative bg-blue-600 text-white border border-blue-600 rounded-2xl p-6 hover:shadow-lg transition-shadow">
  <h3 className="font-[Public Sans] font-medium text-[20px] leading-[24px] tracking-[0%]">
    Basic Standard Plan
  </h3>
  <div className="font-[Public Sans] font-medium text-[40px] leading-[48px] tracking-[0%] mt-3 mb-3">
    $199.00
  </div>
  <p className="text-xs opacity-90 mb-3">
    Got Car Troubles? We&apos;ve Got Solutions! The Art of Automotive Care Empowering Your Vehicle
  </p>
  <hr className="border-t border-[rgba(255,255,255,0.3)] mb-3"/>
  
  <div className="mb-6">
    <h4 className="font-semibold mb-3 text-sm">What Is Included</h4>
    <ul className="space-y-2 text-xs">
      <li className="flex items-center">
        <span className="mr-2">✓</span> 1 Year Replacement Warranty
      </li>
      <li className="flex items-center">
        <span className="mr-2">✓</span> Commercial License
      </li>
      <li className="flex items-center">
        <span className="mr-2">✓</span> Monthly Updates
      </li>
      <li className="flex items-center">
        <span className="mr-2">✓</span> Best Ransomware Updates
      </li>
      <li className="flex items-center">
        <span className="mr-2">✓</span> Spark Plug Checking
        <span className="text-xs opacity-75 ml-2">+5 More View All</span>
      </li>
    </ul>
  </div>

  <p className="text-xs opacity-75 mb-4">*5000kms Or 3 Month Recommended</p>
  <Link href="contact">
  <button className="w-[160px] bg-white text-black absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 px-5 py-2 rounded-full flex items-center justify-center text-xs">
    Pricing Plan <span className="ml-1">↗</span>
  </button>
  </Link>
</div>

            {/* Basic Comprehensive Plan */}
            <div className="relative border border-[rgba(5,97,252,0.2)] rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white">
  <h3 className="font-[Public Sans] font-medium text-[20px] leading-[24px] tracking-[0%]">
    Basic Comprehensive Plan
  </h3>
  <div className="font-[Public Sans] font-medium text-[40px] leading-[48px] tracking-[0%] mt-3 mb-3">
    $299.00
  </div>
  <p className="text-xs text-gray-600 mb-3">
    Got Car Troubles? We&apos;ve Got Solutions! The Art of Automotive Care Empowering Your Vehicle
  </p>
  <hr className="border-t border-[rgba(10,34,60,0.3)] mb-3"/>
  
  <div className="mb-6">
    <h4 className="font-semibold mb-3 text-sm">What Is Included</h4>
    <ul className="space-y-2 text-xs">
      <li className="flex items-center">
        <span className="mr-2">✓</span> 1 Year Replacement Warranty
      </li>
      <li className="flex items-center">
        <span className="mr-2">✓</span> Commercial License
      </li>
      <li className="flex items-center">
        <span className="mr-2">✓</span> Monthly Updates
      </li>
      <li className="flex items-center">
        <span className="mr-2">✓</span> Best Ransomware Updates
      </li>
      <li className="flex items-center">
        <span className="mr-2">✓</span> Spark Plug Checking
        <span className="text-xs text-gray-500 ml-2">+5 More View All</span>
      </li>
    </ul>
  </div>

  <p className="text-xs text-gray-500 mb-4">*5000kms Or 3 Month Recommended</p>
  <Link href="contact">
  <button className="w-[160px] bg-[rgba(5,97,252,1)] text-white absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 px-5 py-2 rounded-full flex items-center justify-center text-xs">
    Pricing Plan <span className="ml-1">↗</span>
  </button>
  </Link>
</div>
</div>
</div>
      </section>

<Footer/>
     </>
  );
};

export default PricingSection;
