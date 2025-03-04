import { getSkills } from "@/utils/getSkills";
import SkillCardTab from "./SkillCardTab";
import SkillTitle from "./SkillTitle";

const Skill = async () => {
  let getAllSkills;
  try {
    getAllSkills = await getSkills();
  } catch (error) {
    console.error("Error fetching skills:", error);
    getAllSkills = { data: [] };
  }

  return (
    <div
      id="skills"
      className="bg-[#111122] md:pt-32 lg:pt-20 pt-16 pb-20 transition-transform duration-1000 ease-in-out"
    >
      <div className="w-full max-w-[1400px] px-[15px] mx-auto">
        <SkillTitle />

        <div className="mt-10">
          <SkillCardTab skillData={getAllSkills.data} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
