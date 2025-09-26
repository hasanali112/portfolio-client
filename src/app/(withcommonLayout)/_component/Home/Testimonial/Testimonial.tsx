"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { getTestimonialsForHome } from "@/services/testimonialService";

export type TTestimonial = {
  // Client Info
  clientName: string;
  clientTitle: string;
  clientCompany: string;
  clientImage?: string;

  // Testimonial Content
  testimonialText: string;
  rating: number; // 1-5 stars

  // Project/Service Info
  projectName?: string;
  serviceType: string;
  projectDuration?: string;

  // Contact & Social
  clientEmail?: string;
  clientLinkedIn?: string;
  clientWebsite?: string;

  // Display Options
  featured: boolean;
  showOnHomepage: boolean;
  displayOrder: number;

  // Status
  isApproved: boolean;
  isPublic: boolean;

  // Metadata
  dateReceived: Date;
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<TTestimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonialsForHome();
        console.log(data);
        setTestimonials(data);
      } catch (error) {
        console.error("Error loading testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <section className="bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <button className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-gray-400 border border-gray-400/30 rounded-full hover:bg-gray-400/10 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            Client Love Letters
          </button>

          <h1 className="text-4xl md:text-5xl  font-bold text-white mb-6">
            Real Stories from
            <span className="relative inline-block py-2 ml-2">
              <span className="relative z-10 tracking-wider">Real People</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            These aren&#39;t just testimonials—they&#39;re stories from amazing
            people who trusted me with their dreams. Here&#39;s what happened
            when we turned their &quot;what if&quot; into &quot;wow, it actually
            works!&quot;
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-20 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {testimonials.length}+
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Happy Humans
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              {testimonials.length > 0
                ? (
                    testimonials.reduce((acc, t) => acc + t.rating, 0) /
                    testimonials.length
                  ).toFixed(1)
                : "5.0"}
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Average Rating
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              ∞
            </div>
            <div className="text-gray-400 text-sm md:text-base">
              Coffee Consumed
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          {loading ? (
            <div className="bg-gradient-to-br from-gray-500/20 to-transparent border border-gray-300/20 rounded-2xl p-8 md:p-12 relative overflow-hidden cursor-pointer group animate-pulse">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-400/30 rounded-full"></div>
                <div>
                  <div className="h-5 bg-gray-400/30 rounded w-32 mb-2"></div>
                  <div className="h-4 bg-gray-400/20 rounded w-24 mb-2"></div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 bg-gray-400/20 rounded"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="h-4 bg-gray-400/20 rounded w-full"></div>
                <div className="h-4 bg-gray-400/20 rounded w-5/6"></div>
                <div className="h-4 bg-gray-400/20 rounded w-4/6"></div>
              </div>
              <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-400/20 rounded w-24"></div>
                <div className="h-4 bg-gray-400/20 rounded w-16"></div>
              </div>
            </div>
          ) : currentTestimonial ? (
            <>
              <div className="bg-gradient-to-br from-gray-500/20 to-transparent border border-gray-300/20 rounded-lg p-8 md:p-12 relative overflow-hidden hover:shadow-xl hover:border-gray-300/40 transition-all duration-300 cursor-pointer group">
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/20 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="absolute top-8 right-8 text-gray-300/20">
                    <svg
                      className="w-16 h-16"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Profile */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      <Image
                        src={
                          currentTestimonial?.clientImage ||
                          "/placeholder-profile.png"
                        }
                        alt={currentTestimonial?.clientName}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full border-2 border-gray-400"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-400 rounded-full border-2 border-[#0a1a0f] flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {currentTestimonial?.clientName}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">
                        {currentTestimonial?.clientTitle}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    &quot;{currentTestimonial?.testimonialText}&quot;
                  </p>

                  {/* Footer */}
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verified Review
                    </span>
                    <span className="text-gray-400">
                      {currentTestimonial?.dateReceived
                        ? new Date(
                            currentTestimonial.dateReceived
                          ).toLocaleDateString()
                        : ""}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-gray-500/10 hover:bg-gray-500/20 border border-gray-500/30 rounded-full flex items-center justify-center text-gray-400 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-gray-500/10 hover:bg-gray-500/20 border border-gray-500/30 rounded-full flex items-center justify-center text-gray-400 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          ) : null}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-gray-400 w-8"
                  : "bg-gray-400/30 hover:bg-gray-400/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
