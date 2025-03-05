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
  "managed-Team": {
    title: "Managed-Team",
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
  "network-and-infrastructure": {
    title: "Network And Infrastructure",
    subtitle: "Building Robust Digital Foundations",
    description:
      "We design and implement reliable network infrastructure solutions that form the backbone of your digital operations.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
  },
  "it-consulting-services": {
    title: "IT Consulting Services",
    subtitle: "Strategic Technology Guidance",
    description:
      "Our expert consultants help you navigate the complex technology landscape and make informed decisions for your business.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070",
  },
  "legal-technology-services": {
    title: "Legal Technology Services",
    subtitle: "Digital Solutions for Legal Sector",
    description:
      "Specialized technology solutions designed for law firms and legal departments to enhance efficiency and compliance.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
  },
  "software-development": {
    title: "Software Development",
    subtitle: "Custom Software Solutions",
    description:
      "We create tailored software solutions that address your unique business challenges and drive innovation.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
  },

  "Technology-Consulting": {
    title: "Technology Consulting",
    subtitle: "Expert Technology Guidance",
    description:
      "Strategic technology consulting to help you make informed decisions and optimize your technology investments.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
  },
  "support-and-maintenance": {
    title: "Support & Maintenance",
    subtitle: "Reliable Technical Support",
    description:
      "Comprehensive support and maintenance services to keep your systems running smoothly and efficiently.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
  },
  "product-development": {
    title: "Product Development",
    subtitle: "Innovative Product Solutions",
    description:
      "End-to-end product development services from concept to launch, helping you bring your ideas to life.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
  },
  "graphic-designing": {
    title: "Graphic Design",
    subtitle: "Innovative Product Solutions",
    description:
      "End-to-end product development services from concept to launch, helping you bring your ideas to life.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
  },
  "web-development": {
    title: "Web development",
    subtitle: "Innovative Product Solutions",
    description:
      "End-to-end product development services from concept to launch, helping you bring your ideas to life.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
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
      <GetQuoteSection title={service.title} />
      <Footer />
    </main>
  );
}
