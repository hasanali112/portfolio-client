import React from "react";
import { Sparkles } from "lucide-react";
import Container from "@/component/ui/Container";
import { getAllSkills } from "@/services/skillService";
import { ISkill } from "@/types/skill";
import SkillClient from "./SkillClient";

const Skill = async () => {
  let skillsData;
  try {
    skillsData = await getAllSkills(1, 100);
  } catch (error: any) {
    console.log(error.message);
  }

  const skills: ISkill[] = skillsData?.data || [];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] py-20 px-4 md:min-h-screen"
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <button className="inline-flex items-center gap-2 px-4 md:px-6 py-3 mb-8 text-gray-400 border border-gray-400/30 rounded-full hover:bg-gray-400/10 transition-colors">
            <span className="text-xs">&lt;/&gt;</span>
            <span className="text-xs md:text-sm">My Technical Skills</span>
          </button>

          <h1 className="text-xl md:text-5xl font-bold text-white mb-6">
            Technologies That Power
            <span className="relative inline-block py-2 ml-2">
              <span className="relative z-10 tracking-wider">Innovation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
            </span>
          </h1>

          <p className="text-gray-400 text-lg hidden md:block max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive toolkit I use to build modern, scalable
            applications. From frontend frameworks to backend technologies,
            these are the skills that transform complex ideas into seamless
            digital experiences.
          </p>
        </div>

        <SkillClient skills={skills} />
      </Container>
    </section>
  );
};

export default Skill;
