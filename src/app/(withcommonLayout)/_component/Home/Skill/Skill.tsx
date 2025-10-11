import React from "react";
import { Lightbulb, Sparkles } from "lucide-react";
import Container from "@/component/ui/Container";
import { getAllSkills } from "@/services/skillService";
import { ISkill } from "@/types/skill";
import SkillClient from "./SkillClient";
import ReButton from "@/component/Button/ReButton";

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
        <div className="text-center flex flex-col items-center justify-center mb-16">
          <ReButton
            title="My Technical Skills"
            variant="outline"
            icon={<Lightbulb className="w-5 h-5" />}
            className="h-[45px] rounded-full mb-8"
          />

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
