import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <div id="skills" className="bg-[#000319] pt-36 pb-20">
      <div className="w-full max-w-[1200px] mx-auto">
        <h1 className="text-5xl text-center font-bold text-purple-500 mb-2 tracking-wider">
          My <span className="text-[#d9c7fc]">Skills</span>
        </h1>
        <p className="w-[50%] mx-auto text-center mt-7">
          I put your ideas and thus your wishes in the form of a unique web
          project that inspire you and your customers
        </p>
        <div>
          <SkillCard />
        </div>
      </div>
    </div>
  );
};

export default Skill;
