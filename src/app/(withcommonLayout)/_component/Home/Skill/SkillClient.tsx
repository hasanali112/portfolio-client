"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ISkill } from "@/types/skill";

interface SkillClientProps {
  skills: ISkill[];
}

const SkillClient = ({ skills }: SkillClientProps) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Language",
    "Frontend",
    "Backend",
    "Database",
    "DevOps",
    "App",
    "Tools",
    "Other",
  ];

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => skill.type === activeFilter);

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
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

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
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
    </>
  );
};

export default SkillClient;
