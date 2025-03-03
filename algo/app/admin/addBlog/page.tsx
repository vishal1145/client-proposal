"use client";
import { useState } from "react";
import Image from "next/image";
import Footer from "@/components/sections/Footer";
import { useRouter } from "next/navigation";
import axios from "axios";

interface BlogFormData {
  title: string;
  category: string;
  content: string;
  link: string;
  fullContent: string[];
  quote: {
    text: string;
  };
  beforeAdditionalImage: string[];
  afterAdditionalImage: string[];
  testimonial: {
    text: string;
  };
  imageUrl: string;
  displayOnHome: boolean;    // Add this
  displayOnFooter: boolean;  
}

export default function AddBlogPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  
  const [blogData, setBlogData] = useState<BlogFormData>({
    title: "",
    category: "",
    content: "",
    link: "",
    fullContent: [""],
    quote: {
      text: "",
    },
    beforeAdditionalImage: [""],
    afterAdditionalImage: [""],
    testimonial: {
      text: "",
    },
    imageUrl: "",
    displayOnHome: false,    // Add this
    displayOnFooter: false, 
  });

  const [images, setImages] = useState({
    thumbnailImage: null as File | null,  // Add this for Image URL
    mainImage: null as File | null,
    firstAdditional: null as File | null,
    secondAdditional: null as File | null,
  });
  
  const [previews, setPreviews] = useState({
    thumbnailImage: "",  // Add this for Image URL preview
    mainImage: "",
    firstAdditional: "",
    secondAdditional: "",
  });

  const handleImageChange = (type: keyof typeof images) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImages(prev => ({ ...prev, [type]: file }));
      setPreviews(prev => ({ ...prev, [type]: URL.createObjectURL(file) }));
    }
  };

  const handleArrayFieldChange = (
    field: 'fullContent' | 'beforeAdditionalImage' | 'afterAdditionalImage',
    index: number,
    value: string
  ) => {
    setBlogData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  const addArrayField = (field: 'fullContent' | 'beforeAdditionalImage' | 'afterAdditionalImage') => {
    setBlogData(prev => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayField = (
    field: 'fullContent' | 'beforeAdditionalImage' | 'afterAdditionalImage',
    index: number
  ) => {
    setBlogData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      
      // Basic fields
      formData.append("title", blogData.title);
      formData.append("category", blogData.category);
      formData.append("content", blogData.content);
      formData.append("link", blogData.link);
      
      // Handle thumbnail image (Image URL)
      if (images.thumbnailImage) {
        formData.append("thumbnailImage", images.thumbnailImage);
      }
      
      // Handle main image
      if (images.mainImage) {
        formData.append("mainImage", images.mainImage);
      }
      
      // Arrays and objects
      formData.append("fullContent", JSON.stringify(blogData.fullContent));
      formData.append("quote", JSON.stringify(blogData.quote));
      formData.append("beforeAdditionalImage", JSON.stringify(blogData.beforeAdditionalImage));
      formData.append("afterAdditionalImage", JSON.stringify(blogData.afterAdditionalImage));
      formData.append("testimonial", JSON.stringify(blogData.testimonial));
      
      // Additional images
      if (images.firstAdditional) {
        formData.append("additionalImages", images.firstAdditional);
      }
      if (images.secondAdditional) {
        formData.append("additionalImages", images.secondAdditional);
      }
  
      // Date
      formData.append("date", new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }));
      formData.append("displayOnHome", blogData.displayOnHome.toString());
    formData.append("displayOnFooter", blogData.displayOnFooter.toString());
      const response = await axios.post("/api/addBlogData", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.data.success) {
        alert("Blog created successfully!");
        router.push("/admin/BlogData");
      } else {
        throw new Error(response.data.message || "Failed to create blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      if (axios.isAxiosError(error)) {
        alert("Error creating blog post: " + (error.response?.data?.message || error.message));
      } else {
        alert("Error creating blog post: " + (error instanceof Error ? error.message : "Unknown error"));
      }
    }
  };

// Part 3: JSX/UI Implementation

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#F6F0E4] py-12 overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <Image
            src="/images/hand.png"
            alt="Hand with Rocket"
            width={200}
            height={150}
            className="w-auto h-[180px]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-[#0B1B2B] mb-2">
              Add New Blog Post
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <span>Admin</span>
              <span>•</span>
              <span>Create Blog</span>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Navigation */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-3 max-w-2xl mx-auto">
            {[
              { step: 1, title: "Basic Info" },
              { step: 2, title: "Content & Images" },
              { step: 3, title: "Final Details" }
            ].map(({ step, title }) => (
              <button
                key={step}
                onClick={() => setCurrentStep(step)}
                className={`flex-1 py-2 px-1 rounded-3xl text-xs font-medium transition-all
                  ${currentStep === step
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
              >
                <span className="block mb-0.5">Step {step}</span>
                <span className="text-[10px] opacity-80">{title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Form Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto max-w-[1600px] px-8 md:px-12 lg:px-20">
          <div className="bg-white rounded-xl shadow p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Basic Information
                  </h2>

                  {/* Title */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={blogData.title}
                      onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
                      className="w-full p-2 text-sm border rounded-md focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Category <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={blogData.category}
                      onChange={(e) => setBlogData({ ...blogData, category: e.target.value })}
                      className="w-full p-2 text-sm border rounded-md focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Content Summary */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Content Summary <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={blogData.content}
                      onChange={(e) => setBlogData({ ...blogData, content: e.target.value })}
                      className="w-full p-2 text-sm border rounded-md focus:ring-1 focus:ring-blue-500"
                      rows={3}
                      required
                    />
                  </div>

                  {/* Link */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Link <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={blogData.link}
                      onChange={(e) => setBlogData({ ...blogData, link: e.target.value })}
                      className="w-full p-2 text-sm border rounded-md focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                
                {/* Image URL */}
<div>
  <label className="block text-xs font-medium text-gray-700 mb-1">
    Thumbnail Image <span className="text-red-500">*</span>
  </label>
  <div className="border border-dashed border-gray-300 rounded-md p-4">
    <input
      type="file"
      onChange={(e) => {
        const file = e.target.files?.[0];
        if (file) {
          setImages(prev => ({ ...prev, thumbnailImage: file }));
          setPreviews(prev => ({ ...prev, thumbnailImage: URL.createObjectURL(file) }));
        }
      }}
      accept="image/*"
      className="hidden"
      id="thumbnailImage"
      required
    />
    <label
      htmlFor="thumbnailImage"
      className="cursor-pointer block"
    >
      {previews.thumbnailImage ? (
        <div className="relative group">
          <Image
            src={previews.thumbnailImage}
            alt="Thumbnail image preview"
            width={150}
            height={150}
            className="rounded-md mx-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
            <span className="text-white text-xs">Click to change</span>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <svg 
            className="mx-auto h-8 w-8 text-gray-400" 
            stroke="currentColor" 
            fill="none" 
            viewBox="0 0 48 48"
          >
            <path 
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
          <p className="mt-1 text-xs text-gray-500">Click to upload thumbnail</p>
          <p className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</p>
        </div>
      )}
    </label>
  </div>
</div>
                  {/* Main Image Upload */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Main Image <span className="text-red-500">*</span>
                    </label>
                    <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
                      <input
                        type="file"
                        onChange={handleImageChange('mainImage')}
                        className="hidden"
                        accept="image/*"
                        required
                        id="mainImage"
                      />
                      <label
                        htmlFor="mainImage"
                        className="cursor-pointer block"
                      >
                        {previews.mainImage ? (
                          <Image
                            src={previews.mainImage}
                            alt="Main image preview"
                            width={150}
                            height={150}
                            className="rounded-md mx-auto"
                          />
                        ) : (
                          <div className="text-gray-500 text-sm">
                            <svg className="mx-auto h-8 w-8 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="mt-1 text-xs">Click to upload image</p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              )}
              {/* Step 2: Content & Images */}
{currentStep === 2 && (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
      Content & Images
    </h2>

    {/* Quote */}
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        Quote Text
      </label>
      <textarea
        value={blogData.quote.text}
        onChange={(e) => setBlogData({
          ...blogData,
          quote: { text: e.target.value }
        })}
        className="w-full p-2 text-sm border rounded-md focus:ring-1 focus:ring-blue-500"
        rows={2}
      />
    </div>

    {/* Full Content */}
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        Full Content
      </label>
      {blogData.fullContent.map((content, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <textarea
            value={content}
            onChange={(e) => handleArrayFieldChange('fullContent', index, e.target.value)}
            className="w-full p-2 text-sm border rounded-md focus:ring-1 focus:ring-blue-500"
            rows={2}
          />
          <button
            type="button"
            onClick={() => removeArrayField('fullContent', index)}
            className="px-2 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => addArrayField('fullContent')}
        className="mt-1 px-3 py-1 text-xs bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        + Add Paragraph
      </button>
    </div>

    {/* Before Additional Image Text */}
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        Before Additional Image Text
      </label>
      {blogData.beforeAdditionalImage.map((text, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <textarea
            value={text}
            onChange={(e) => handleArrayFieldChange('beforeAdditionalImage', index, e.target.value)}
            className="w-full p-2 text-sm border rounded-md focus:ring-1 focus:ring-blue-500"
            rows={2}
          />
          <button
            type="button"
            onClick={() => removeArrayField('beforeAdditionalImage', index)}
            className="px-2 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => addArrayField('beforeAdditionalImage')}
        className="mt-1 px-3 py-1 text-xs bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        + Add Text
      </button>
    </div>

    {/* First Additional Image */}
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        First Additional Image
      </label>
      <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
        <input
          type="file"
          onChange={handleImageChange('firstAdditional')}
          className="hidden"
          accept="image/*"
          id="firstAdditional"
        />
        <label
          htmlFor="firstAdditional"
          className="cursor-pointer block"
        >
          {previews.firstAdditional ? (
            <Image
              src={previews.firstAdditional}
              alt="First additional image preview"
              width={150}
              height={150}
              className="rounded-md mx-auto"
            />
          ) : (
            <div className="text-gray-500 text-sm">
              <svg className="mx-auto h-8 w-8 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="mt-1 text-xs">Click to upload image</p>
            </div>
          )}
        </label>
      </div>
    </div>
  </div>
)}

{/* Step 3: Final Details */}
{currentStep === 3 && (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
      Final Details
    </h2>

    {/* Second Additional Image */}
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        Second Additional Image
      </label>
      <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
        <input
          type="file"
          onChange={handleImageChange('secondAdditional')}
          className="hidden"
          accept="image/*"
          id="secondAdditional"
        />
        <label
          htmlFor="secondAdditional"
          className="cursor-pointer block"
        >
          {previews.secondAdditional ? (
            <Image
              src={previews.secondAdditional}
              alt="Second additional image preview"
              width={150}
              height={150}
              className="rounded-md mx-auto"
            />
          ) : (
            <div className="text-gray-500 text-sm">
              <svg className="mx-auto h-8 w-8 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="mt-1 text-xs">Click to upload image</p>
            </div>
          )}
        </label>
      </div>
    </div>

    {/* After Additional Image Text */}
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        After Additional Image Text
      </label>
      {blogData.afterAdditionalImage.map((text, index) => (
        <div key={index} className="flex gap-2 mb-2">
          <textarea
            value={text}
            onChange={(e) => handleArrayFieldChange('afterAdditionalImage', index, e.target.value)}
            className="w-full p-2 text-sm border rounded-md focus:ring-1 focus:ring-blue-500"
            rows={2}
          />
          <button
            type="button"
            onClick={() => removeArrayField('afterAdditionalImage', index)}
            className="px-2 py-1 text-xs bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => addArrayField('afterAdditionalImage')}
        className="mt-1 px-3 py-1 text-xs bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        + Add Text
      </button>
    </div>

    {/* Testimonial */}
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">
        Testimonial
      </label>
      <textarea
        value={blogData.testimonial.text}
        onChange={(e) => setBlogData({
          ...blogData,
          testimonial: { text: e.target.value }
        })}
        className="w-full p-2 text-sm border rounded-md focus:ring-1 focus:ring-blue-500"
        rows={2}
      />
    </div>
    
    <div className="flex-1">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Display on Home
        </label>
        <select
          value={blogData.displayOnHome.toString()}
          onChange={(e) => setBlogData({
            ...blogData,
            displayOnHome: e.target.value === "true"
          })}
          className="w-full p-2 text-sm border rounded-md focus:ring-1 focus:ring-blue-500"
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </div>

      {/* Display on Footer */}
      <div className="flex-1">
        <label className="block text-xs font-medium text-gray-700 mb-1">
          Display on Footer
        </label>
        <select
          value={blogData.displayOnFooter.toString()}
          onChange={(e) => setBlogData({
            ...blogData,
            displayOnFooter: e.target.value === "true"
          })}
          className="w-full p-2 text-sm border rounded-md focus:ring-1 focus:ring-blue-500"
        >
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </div>

    {/* Submit Button */}
   
  </div>
)}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-3xl hover:bg-gray-200"
                  >
                    Previous
                  </button>
                )}
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="px-4 py-2 text-sm bg-blue-600 text-white rounded-3xl hover:bg-blue-700 ml-auto"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm bg-green-600 text-white rounded-3xl hover:bg-green-700 ml-auto"
                  >
                    Create Blog Post
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}