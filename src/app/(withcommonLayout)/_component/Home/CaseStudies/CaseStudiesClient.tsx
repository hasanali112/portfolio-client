"use client";
import React from "react";
import { FileText, BarChart3, ArrowRight, TrendingUp } from "lucide-react";
import Image from "next/image";
import Container from "../../../../../component/ui/Container";
import Link from "next/link";
import { ICaseStudy } from "@/services/publicCaseStudyService";
import ReButton from "@/component/Button/ReButton";

interface CaseStudiesClientProps {
  caseStudies: ICaseStudy[];
}

const CaseStudiesClient = ({ caseStudies }: CaseStudiesClientProps) => {
  console.log('CaseStudiesClient received:', caseStudies.length, 'items');
  
  if (caseStudies.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] py-20 lg:px-4">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">No Case Studies Available</h2>
            <p className="text-gray-400">Check back later for case studies.</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] py-20 lg:px-4">
      <Container>
        {/* Header */}
        <div className="text-center flex flex-col items-center justify-center mb-10 md:mb-16">
          <ReButton
            title="Case Studies"
            variant="outline"
            icon={<BarChart3 className="w-5 h-5" />}
            className="h-[45px] rounded-full mb-8"
          />

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Real Results,
            <span className="relative inline-block py-2 ml-2">
              <span className="relative z-10 tracking-wider text-blue-400">Real Impact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-lg transform -skew-x-12"></div>
            </span>
          </h1>

          <p className="text-gray-400 text-lg hidden md:block max-w-3xl mx-auto leading-relaxed">
            Explore how I help businesses transform their digital presence through
            strategic development and data-driven optimization. Each case study
            showcases real challenges, solutions, and measurable outcomes.
          </p>
        </div>

        {/* Case Studies Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((study: ICaseStudy) => (
            <Link
              key={study._id}
              href={`/case-study/${study._id}`}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-[#8ac9f4]/40 rounded-lg overflow-hidden relative hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 flex flex-col h-[450px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none"></div>

              {/* Category Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-xs font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-full">
                  {study.category}
                </span>
              </div>

              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden flex-shrink-0 bg-[#1a2333]">
                {study.thumbnail ? (
                  <Image
                    src={study.thumbnail}
                    alt={study.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600/10 to-transparent">
                    <TrendingUp className="w-16 h-16 text-blue-500/20" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
              </div>

              {/* Case Study Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-400 transition-colors line-clamp-2">
                  {study.title}
                </h3>

                {/* Technologies Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies?.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-full bg-slate-700/50 text-gray-300 border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.technologies && study.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-slate-700/50 text-gray-400 border border-slate-600/50">
                      +{study.technologies.length - 3}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {study.description}
                </p>

                {/* Action Button */}
                <div className="flex gap-3 mt-auto">
                  <span className="flex-1 px-4 py-2 rounded-full bg-slate-700/50 text-white text-sm font-medium hover:bg-slate-700 transition-colors text-center inline-flex items-center justify-center gap-2">
                    Read Case Study
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Case Studies Carousel - Mobile */}
        <div className="md:hidden">
          <div className="relative">
            {/* Prev Button */}
            <button
              onClick={() => {
                const carousel = document.getElementById("casestudies-carousel");
                carousel?.scrollBy({ left: -320, behavior: "smooth" });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-600/50"
            >
              ←
            </button>

            {/* Next Button */}
            <button
              onClick={() => {
                const carousel = document.getElementById("casestudies-carousel");
                carousel?.scrollBy({ left: 320, behavior: "smooth" });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-600/50"
            >
              →
            </button>

            {/* Carousel */}
            <div
              id="casestudies-carousel"
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 mt-8 px-12 snap-x snap-mandatory"
            >
              {caseStudies.map((study: ICaseStudy) => (
                <Link
                  key={study._id}
                  href={`/case-study/${study._id}`}
                  className="flex-shrink-0 w-full max-w-xs mx-auto group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-[#8ac9f4]/40 rounded-lg overflow-hidden relative hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 snap-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-0.5 text-[10px] font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-full">
                      {study.category}
                    </span>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative h-32 overflow-hidden bg-[#1a2333]">
                    {study.thumbnail ? (
                      <Image
                        src={study.thumbnail}
                        alt={study.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600/10 to-transparent">
                        <TrendingUp className="w-12 h-12 text-blue-500/20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                  </div>

                  {/* Case Study Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-400 transition-colors line-clamp-1">
                      {study.title}
                    </h3>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {study.technologies?.slice(0, 2).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] rounded-full bg-slate-700/50 text-gray-300 border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-400 text-xs mb-4 line-clamp-2">
                      {study.description.slice(0, 80)}...
                    </p>

                    {/* Action Button */}
                    <div className="flex gap-2 relative z-10">
                      <span className="flex-1 px-3 py-1.5 rounded-full bg-slate-700/50 text-white text-xs font-medium hover:bg-slate-700 transition-colors text-center inline-flex items-center justify-center gap-1">
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex flex-wrap gap-1 mt-10 justify-center items-center">
          <Link href="/case-study">
            <ReButton
              title="View All Case Studies"
              icon={<FileText className="w-5 h-5" />}
              className="h-[45px] rounded-full"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudiesClient;
