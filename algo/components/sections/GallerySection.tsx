'use client'
import React, { useState } from 'react';
import Image from 'next/image';
interface GalleryItem {
  id: number;
  imageUrl: string;
  alt: string;
}

const galleryItems: GalleryItem[] = Array.from({ length: 80 }, (_, index) => ({
  id: index + 1,
  imageUrl: '/images/gallery1.png',
  alt: 'Abstract mountain landscape'
}));

const GallerySection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#F6F0E4] py-20 overflow-hidden">
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
              Gallery
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span>Home</span>
              <span>-</span>
              <span>Our Gallery</span>
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

    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="w-[198px] text-black h-[30px] px-4 py-1 border border-1 rounded-[60px]">Designing IT Services</span>
          <p className=" font-['Public_Sans'] mt-1 font-semibold text-[40px] leading-[56px] tracking-[0%]">Our Gallery Section</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item) => (
              <div
                key={item.id}
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
        </div>

        <div className="flex justify-center items-center mt-8 gap-2">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage === page
                  ? 'bg-[#1a237e] text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            >
              →
            </button>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default GallerySection;
