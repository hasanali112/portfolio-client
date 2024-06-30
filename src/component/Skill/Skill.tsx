import { getSkills } from "@/utils/getSkills";
import SkillCard, { TSkills } from "./SkillCard";

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
      className="bg-[#050709] lg:pt-20 pt-28 pb-20 transition-transform duration-1000 ease-in-out"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        <h1 className="text-5xl text-center font-bold text-purple-500 mb-2 tracking-wider">
          My <span className="text-[#d9c7fc]">Skills</span>
        </h1>
        <p className="lg:w-[50%] w-[80%] mx-auto text-center mt-7 text-white">
          I put your ideas and thus your wishes in the form of a unique web
          project that inspire you and your customers
        </p>
        <div className="grid lg:grid-cols-7 grid-cols-2 gap-6 mt-10 px-5 lg:px-0">
          {getAllSkills.data?.map((item: TSkills) => (
            <SkillCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
