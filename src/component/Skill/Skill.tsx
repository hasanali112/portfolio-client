import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <div
      id="skills"
      className="bg-[#0c0f1c] lg:pt-20 pt-28 pb-20 transition-transform duration-1000 ease-in-out"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        <h1 className="text-5xl text-center font-bold text-purple-500 mb-2 tracking-wider">
          My <span className="text-[#d9c7fc]">Skills</span>
        </h1>
        <p className="lg:w-[50%] w-[80%] mx-auto text-center mt-7">
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
