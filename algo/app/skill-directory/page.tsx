"use client";
import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Page = () => {
  // State to track active section
  const [activeSection, setActiveSection] = useState("environments");

  // Button data
  const sections = [
    { id: "environments", label: "Development Environments" },
    { id: "saas", label: "SaaS Platforms" },
    { id: "services", label: "Services" },
    { id: "frameworks", label: "Frameworks" },
    { id: "api", label: "API & SDK" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((currentSection) => {
        const currentIndex = sections.findIndex(
          (section) => section.id === currentSection
        );
        const nextIndex = (currentIndex + 1) % sections.length;
        return sections[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Optional: Reset timer when manually clicking a section
  const handleSectionClick = (sectionId: React.SetStateAction<string>) => {
    setActiveSection(sectionId);
  };

  return (
    <main className="min-h-screen bg-white">
       <section className="relative bg-[#F6F0E4] py-20 overflow-x-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/hand.png"
            alt="Hand with Rocket"
            width={300}
            height={400}
            className="w-auto h-[230px]"
          />
        </div>

        <div className="absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/message.png"
            alt="Chat Bubble"
            width={80}
            height={80}
            className="w-auto h-auto"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-3xl font-bold text-[#0B1B2B]">Skills</h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Skills</span>
            </div>
          </div>
        </div>

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
      
      {/* Navigation Buttons */}
      <div className="text-center my-12">
  <p className="text-gray-500 text-sm mb-2">Skills</p>
  <h2 className="text-[32px] font-bold mb-8">
    Our Software <span className="text-[#0066FF]">Technology Stack</span>
  </h2>
  
  <div className="flex justify-center gap-4">
    {sections.map((section) => (
      <button
        key={section.id}
        onClick={() => handleSectionClick(section.id)}
        className={`px-6 py-3  text-sm font-medium transition-all duration-300 flex items-center gap-2 rounded-3xl
          ${
            activeSection === section.id
              ? "bg-[#0066FF] text-white"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
          }
        `}
      >
        {section.label}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          className={`${activeSection === section.id ? "stroke-white" : "stroke-gray-400"}`}
        >
          <path 
            d="M6 12L10 8L6 4" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </button>
    ))}
  </div>
</div>

      {/* Content Sections */}
      <section className="py-10">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          {/* Development Environments Section */}
          {activeSection === "environments" && (
            <>
             
             
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Node.js Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/node.png"
                    alt="Node.js"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Node.js
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Today&apos;s fastest growing, open source, backend technology that
                powers all kind of server applications.
              </p>
            </div>

            {/* Docker Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/docker.png"
                    alt="Docker"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Docker
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                The best buddy a DevOps might dream of. &quot;Virtualization-like&quot;
                technology to run your server apps in the same conditions
                everywhere.
              </p>
            </div>

            {/* Unity3D Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/unity3d.jpg"
                    alt="Unity3D"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Unity3D
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Creating consumer level videogames has never been easier. No
                wonder why this is the most popular IDE for developers and
                artists.
              </p>
            </div>

            {/* WordPress Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/wordpress.png"
                    alt="WordPress"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                WordPress
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                The world&apos;s largest Content Management System. It powers almost
                half of the internet (This site is made in WordPress BTW).
              </p>
            </div>

            {/* Visual Studio Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/visual-studio.png"
                    alt="Visual Studio"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Visual Studio (C#)
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                The always evolving Microsoft&apos;s suite enables developers to
                build large scale systems for desktop, mobile and web platforms.
              </p>
            </div>

            {/* Meta Trader Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/metatrader.png"
                    alt="Meta Trader"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Meta Trader
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Oh and by the way, I&apos;m an algorithmic trader, so I use bots to
                buy/sell foreign currencies on Metatrader the world&apos;s most used
                trading platform.
              </p>
            </div>
          </div>
           
            </>
          )}

          {/* SaaS Platforms Section */}
          {activeSection === "saas" && (
            <>
             
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/google-firebase.png"
                    alt="Google Firebase"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Google Firebase
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                A complete and powerful backend suite to deploy and manage
                mobile apps and user data: messages, analytics, hosting and
                Google&apos;s Artificial Intelligence.
              </p>
            </div>

            {/* Google Compute Engine Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/google-compute-engine.png"
                    alt="Google Compute Engine"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Google Compute Engine
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Get all the power of Google&apos;s servers to run your own. Mount any
                server and application on a remote Virtual Machine.
              </p>
            </div>

            {/* Google BigQuery Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/bigquery.png"
                    alt="Google BigQuery"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Google BigQuery
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Google&apos;s data analysis oriented interfaces to keep track of
                infinite datapoints with an optimized performance.
              </p>
            </div>

            {/* Atlassian Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/atlassian.png"
                    alt="Atlassian"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Atlassian
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                I&apos;m a fan of this versatile suite of Dev/CI/DevOps tools.
                Atlassian is a great player in its industry with a set of agile
                and robust options.
              </p>
            </div>
          
              </div>
            </>
          )}

          {/* Services Section */}
          {activeSection === "services" && (
            <>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/github.png"
                    alt="GitHub"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                GitHub
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                The biggest code hosting and sharing social platform. No
                developer gets too far without ever contributing in here.
              </p>
            </div>

            {/* Atlassian Bitbucket Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/bitbucket.png"
                    alt="Bitbucket"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Atlassian Bitbucket
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Another great source control server. I like using this one with
                my clients because of one simple thing: projects are private.
              </p>
            </div>

            {/* Stackblitz Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/stackblitz.png"
                    alt="Stackblitz"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Stackblitz
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Incredible! Create, edit & deploy fullstack apps in just one
                click. Code editing and running online.
              </p>
            </div>

            {/* NPM Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/npm.png"
                    alt="NPM"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                NPM
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                The world&apos;s largest software registry, where open source
                developers around the globe share and borrow packages. I&apos;m
                usually publishing my work here.
              </p>
            </div>

            {/* Back4App Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/back4app.jpg"
                    alt="Back4App"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Back4App
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Deploy a Parse Server in just one click. The best service to
                host your backend and express.js apps.
              </p>
            </div>
              </div>
            </>
          )}











{activeSection === "frameworks" && (
            <>
             
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {/* Angular Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/angular-1.png"
                    alt="Angular"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Angular
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Probably the most popular JS framework to build web
                applications. Angular delivers the productivity and scalable
                infrastructure that supports Google&apos;s largest applications.
              </p>
            </div>

            {/* Ionic Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/ionic.png"
                    alt="Ionic"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Ionic
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Angular-based framework, free and open source. A mobile toolkit
                for developing cross-platform apps for native iOS, Android, and
                the web.
              </p>
            </div>

            {/* Bootstrap Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/bootstrap.png"
                    alt="Bootstrap"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Bootstrap
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                A free and open-source CSS framework directed at responsive,
                mobile-first frontend web development. Powering an immense
                amount of responsive web apps and sites.
              </p>
            </div>

            {/* jQuery Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/jquery_logo.png"
                    alt="jQuery"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                jQuery
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Classic! The predecessor of so many great JS experiences on the
                web.
              </p>
            </div>

            {/* Express Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/expressjs.png"
                    alt="Express"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Express
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                The new web server technology base on Javascript. Simple,
                powerful, scalable and production ready.
              </p>
            </div>

            {/* Vuforia Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/vuforia_logo.png"
                    alt="Vuforia"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Vuforia
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                The very straight-forward framework for developing Augmented
                Reality experiences. It not only provides image recognition
                tools but a set of smart algorithms to create awesome
                experiences.
              </p>
            </div>
              </div>
            </>
          )}



{activeSection === "api" && (
            <>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {/* Google Maps Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/google-maps.png"
                    alt="Google Maps"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Google Maps
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                One my favorites SDKs to use. All the geo information in one
                place for you to do incredible things.
              </p>
            </div>

            {/* Stripe Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/stripe.png"
                    alt="Stripe"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Stripe
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Probably the best payment provider for developers. A great
                platform with a powerful API to manage clients, charges,
                subscriptions and customer data.
              </p>
            </div>

            {/* Socket.io Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/socketio.png"
                    alt="Socket.io"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Socket.io
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Enable any platform or device for real-time, bidirectional
                communication, right out of the box! Makes data transmission
                opens a world of possibilities to play.
              </p>
            </div>

            {/* Twitter Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/twitter.png"
                    alt="Twitter"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Twitter
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Just imagine all the great stuff you can do by accessing
                automatically to one of the world&apos;s biggest real-time, social
                powered, information platform.
              </p>
            </div>

            {/* Dialogflow Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/dialogflow.png"
                    alt="Dialogflow"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Dialogflow
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Google powered chatbot SDK for natural speaking and automatic
                decision making based on spoken and written language.
              </p>
            </div>

            {/* Facebook Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/facebook.png"
                    alt="Facebook"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Facebook
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                You already know... but I gotta say making your apps social is a
                must do nowadays.
              </p>
            </div>

            {/* Parse Server Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/parse.png"
                    alt="Parse Server"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Parse Server
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                This incredible database interface handles all the newest mobile
                app requirements, powering +50K mobile apps. (And I&apos;m an active
                contributor to the repository!)
              </p>
            </div>

            {/* Jasmine Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/jasmine.png"
                    alt="Jasmine"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Jasmine
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Automatic testing is the secret of a solid base with a long
                sight to scalability.
              </p>
            </div>

            {/* Chart.js Card */}
            <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-[#0066FF] group">
              <div className="mb-4">
                <div className="p-3 rounded-lg inline-block">
                  <Image
                    src="/images/chartjs-logo.png"
                    alt="Chart.js"
                    width={40}
                    height={40}
                    className="w-8 h-8"
                  />
                </div>
              </div>
              <h3 className="text-[#0B1B2B] text-lg font-semibold mb-2 group-hover:text-white">
                Chart.js
              </h3>
              <p className="text-gray-600 text-[13px] leading-relaxed group-hover:text-white/80">
                Create beautiful data visualization with an easy interface and
                API.
              </p>
            </div>
              </div>
            </>
          )}
        </div>
      </section>
  {/* Bottom Content */}
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
      <Footer />
    </main>
  );
};

export default Page;