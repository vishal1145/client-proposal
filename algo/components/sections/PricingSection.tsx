'use client';

import React from 'react';

import Link from 'next/link';

const PricingSection = () => {
 
 

  return (
     <>
   
     
      {/* Pricing Cards Section */}
      <section className="pt-3 pb-28">
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

     </>
  );
};

export default PricingSection;
