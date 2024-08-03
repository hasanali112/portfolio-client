import { getSkills } from "@/utils/getSkills";
import SkillCardTab from "./SkillCardTab";

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
      className="bg-[#111122] lg:pt-20 pt-28 pb-20 transition-transform duration-1000 ease-in-out"
    >
      <div className="w-full max-w-[1400px] px-[20px] mx-auto">
        <h1 className="text-5xl text-center font-bold text-white mb-2 tracking-wider">
          My Skills
        </h1>
        <p className="lg:w-[50%] w-[80%] text-[#f3b90b] mx-auto text-center mt-7 ">
          I put your ideas and thus your wishes in the form of a unique web
          project that inspire you and your customers
        </p>

        <div className="mt-10">
          <SkillCardTab skillData={getAllSkills.data} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
