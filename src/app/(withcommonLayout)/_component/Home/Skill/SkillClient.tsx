"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ISkill } from "@/types/skill";

interface SkillClientProps {
  skills: ISkill[];
}

const SkillClient = ({ skills }: SkillClientProps) => {
  const [activeFilter, setActiveFilter] = useState("Frontend");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardScrollPosition, setCardScrollPosition] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const filters = [
    "Frontend",
    "Language",
    "Backend",
    "Database",
    "DevOps",
    "App",
    "Tools",
    "Other",
  ];

  const filteredSkills = skills.filter((skill) => skill.type === activeFilter);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCardScrollPosition(0); // Reset scroll position when filter changes
  };

  const slideNext = () => {
    setScrollPosition(prev => Math.min(prev + 200, (filters.length - 3) * 100));
  };

  const slidePrev = () => {
    setScrollPosition(prev => Math.max(prev - 200, 0));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    const cardWidth = 140 + 16; // card width + gap
    const containerWidth = window.innerWidth - 24; // minus px-3 padding
    const visibleCards = Math.floor(containerWidth / cardWidth);
    const maxScroll = Math.max(0, (filteredSkills.length - visibleCards) * cardWidth);

    if (isLeftSwipe) {
      // Swipe left - show next 2 cards
      setCardScrollPosition(prev => Math.min(prev + (cardWidth * 2), maxScroll));
    }
    if (isRightSwipe) {
      // Swipe right - show previous 2 cards
      setCardScrollPosition(prev => Math.max(prev - (cardWidth * 2), 0));
    }
  };

  return (
    <>
      {/* Desktop Filter Buttons */}
      <div className="hidden md:flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all ${
              activeFilter === filter
                ? "bg-white text-gray-950"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-800/70"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Mobile Carousel Filter */}
      <div className="md:hidden flex items-center gap-4 mb-12">
        <button
          onClick={slidePrev}
          className="p-2 bg-gray-800/50 text-gray-300 rounded-full hover:bg-gray-800/70 transition-all flex-shrink-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="overflow-hidden flex-1">
          <div 
            className="flex gap-3 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full font-medium transition-all whitespace-nowrap flex-shrink-0 text-sm ${
                  activeFilter === filter
                    ? "bg-white text-gray-950"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-800/70"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <button
          onClick={slideNext}
          className="p-2 bg-gray-800/50 text-gray-300 rounded-full hover:bg-gray-800/70 transition-all flex-shrink-0"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Skills Grid - Desktop */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill._id}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg px-6 py-[15px] hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <div className="flex lg:flex-row flex-col items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden flex-shrink-0">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-semibold text-sm">
                {skill.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Carousel - Mobile */}
      <div className="md:hidden overflow-hidden py-4 pb-4">
        <div 
          className="flex gap-4 transition-transform duration-300 ease-in-out px-3"
          style={{ transform: `translateX(-${cardScrollPosition}px)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill._id}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 cursor-pointer group flex-shrink-0 w-[140px]"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-white font-semibold text-xs text-center">
                  {skill.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillClient;
