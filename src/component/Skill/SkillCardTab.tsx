/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Progress } from "@nextui-org/react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export type TSkills = {
  _id: string;
  image: string;
  title: string;
  skillProficiency: number;
  category: string;
};

const tabs = ["Front End", "Back End", "Tools"];

const SkillCardTab = ({ skillData }: { skillData: TSkills[] }) => {
  const [selected, setSeleted] = useState(tabs[0]);
  const [contain, setContain] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);

  const allSkill = skillData.filter(
    (skill: TSkills) => skill.category == selected
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setContain(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (refContainer.current) {
      observer.observe(refContainer.current);
    }

    return () => {
      if (refContainer.current) {
        observer.unobserve(refContainer.current);
      }
    };
  }, []);

  return (
    <div ref={refContainer}>
      <div className="text-white flex  justify-center items-center gap-10">
        {tabs.map((tab, indx) => (
          <div key={indx}>
            <button onClick={() => setSeleted(tab)}>{tab}</button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-5 text-white mt-10">
        {allSkill?.map((skill: TSkills) => (
          <div
            key={skill._id}
            className="bg-[#1c222a] w-[250px] h-[200px] rounded-md pt-4"
          >
            <div className="flex flex-col items-center justify-center gap-5">
              <Image src={skill.image} alt="Skill" width={70} height={70} />
              <h1>{skill.title}</h1>
            </div>
            <div className="flex items-center justify-center gap-3 mt-3">
              <Progress
                color="warning"
                aria-label={contain ? "Loaded" : "Loading..."}
                value={contain ? skill.skillProficiency : 0}
                className="w-[70%]"
              />
              <h1>{skill.skillProficiency}%</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCardTab;
