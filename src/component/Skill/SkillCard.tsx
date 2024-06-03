import { getSkills } from "@/utils/getSkills";
import { HoverEffect } from "../ui/HoverCard";

const SkillCard = async () => {
  const skillGet = await getSkills();
  return (
    <div>
      <HoverEffect items={skillGet.data} />
    </div>
  );
};

export default SkillCard;
