"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import parse from "html-react-parser";

interface ServiceData {
  title: string;
  description: string;
  detailContent?: string;
}

interface GetQuoteSectionProps {
  title: string;
}

export function GetQuoteSection({ title }: GetQuoteSectionProps) {
  const [serviceData, setServiceData] = useState<ServiceData | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await fetch(`/api/services?slug=${params.slug}`);
        const result = await response.json();
        
        if (result.success) {
          setServiceData(result.data);
        } else {
          console.error("Failed to fetch service data");
        }
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchServiceData();
    }
  }, [params.slug]);

  // Content Loading Skeleton
  const ContentLoader = () => (
    <div className="max-w-7xl mx-auto px-4 py-16 animate-pulse">
      {/* Title Skeleton */}
      <div className="mb-6">
        <div className="h-8 bg-gray-200 rounded-md w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-md w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
      </div>

      {/* Grid Content Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        {/* Image Skeleton */}
        <div className="p-6 rounded-xl bg-gray-200 h-[300px]"></div>

        {/* List Items Skeleton */}
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-gray-200 rounded-full mt-1"></div>
              <div className="flex-1">
                <div className="h-5 bg-gray-200 rounded-md w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded-md w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Content Skeleton */}
      <div className="space-y-4 mb-8">
        <div className="h-6 bg-gray-200 rounded-md w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded-md w-full"></div>
        <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section - Always visible */}
      <section className="relative bg-[#F6F0E4] py-20 overflow-x-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/hand.png"
            alt="Hand with Rocket"
            width={300}
            height={200}
            className="w-auto h-[235px] opacity-90"
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

        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-3xl font-bold text-[#0B1B2B]">{title}</h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Service Detail</span>
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

      {/* Content Section with Loader */}
      {/* Content Section with Loader */}
<div>
  {loading ? (
    <ContentLoader />
  ) : !serviceData?.detailContent ? (
    <div className="min-h-[400px] flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-lg mx-auto px-6 py-12">
        <div className="mb-8 relative">
          <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
            <svg 
              className="w-12 h-12 text-[#0561FC]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-[28px] font-bold text-[#0B1B2B] mb-4">
          Oops! Content Unavailable
        </h2>
        <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
          We&apos;re unable to display this content at the moment. This could be temporary, 
          or the content might have been moved or removed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center px-6 py-3 bg-[#0561FC] text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span className="mr-2">Browse Services</span>
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
          <button 
            onClick={() => window.location.reload()} 
            className="inline-flex items-center justify-center px-6 py-3 border border-[#0561FC] text-[#0561FC] font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            <svg 
              className="w-4 h-4 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  ) : (
    parse(serviceData.detailContent)
  )}
</div>
    </>
  );
}