"use client";

import { useParams } from "next/navigation";
import { GetQuoteSection } from "@/components/sections/GetQuoteSection";
import Footer from "@/components/sections/Footer";

// Define service details type
type ServiceDetail = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

// Define service details object
const serviceDetails: Record<string, ServiceDetail> = {
  "cybersecurity-services": {
    title: "Cybersecurity Services",
    subtitle: "Protecting Your Digital Assets",
    description:
      "Our comprehensive cybersecurity services help protect your organization from evolving cyber threats. We provide end-to-end security solutions tailored to your specific needs.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
  },
  "managed-it-services": {
    title: "Managed IT Services",
    subtitle: "Streamlining Your IT Operations",
    description:
      "Our managed IT services provide comprehensive support for your technology infrastructure, ensuring optimal performance and reliability.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
  },
  "designing-it-services": {
    title: "Designing IT Services",
    subtitle: "Creating Innovative Digital Solutions",
    description:
      "Our expert team delivers cutting-edge IT design services that transform your digital presence. We combine creativity with technical expertise to create solutions that drive business growth.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070",
  },
  "cloud-it-services": {
    title: "Cloud IT Services",
    subtitle: "Empowering Your Business with Cloud Solutions",
    description:
      "Transform your business with our comprehensive cloud IT services. We provide secure, scalable, and efficient cloud solutions that help you stay ahead in the digital age.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
  },
};

export default function ServicePage() {
  const { slug } = useParams();

  const service = serviceDetails[slug as string];

  if (!service) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#0B1B2B] mb-4">
            404 - Service Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <GetQuoteSection />
      <Footer />
    </main>
  );
}
