"use client";
import { useEffect,useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import parse from "html-react-parser";

interface ServiceData {
  title: string;
  description: string;
  detailContent?: string;
  // ... add other fields as needed
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

  if (loading) {
    return <div>Loading...</div>; // Add proper loading state UI
  }

  if (!serviceData) {
    return <div>Service not found</div>; // Add proper error state UI
  }
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#F6F0E4] py-20 overflow-x-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/hand.png"
            alt="Hand with Rocket"
            width={300}
            height={200}
            className="w-auto h-[237px] opacity-90"
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
              <h1 className="text-3xl font-bold text-[#0B1B2B]">{title}</h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Service Detail</span>
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

      <div className="prose">
        {serviceData?.detailContent ? (
          parse(serviceData.detailContent)
        ) : (
          <p>Loading content...</p>
        )}
      </div>
    </>
  );
}
