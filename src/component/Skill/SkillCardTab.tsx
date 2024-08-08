/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Progress } from "@nextui-org/react";
import { useScroll, motion, useTransform } from "framer-motion";
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
  const [selected, setSelected] = useState(tabs[0]);
  const [contain, setContain] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ["0 1", "0.5 1"],
  });

  const xValue = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const allSkill = skillData.filter(
    (skill: TSkills) => skill.category === selected
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
    <motion.div
      ref={refContainer}
      style={{ x: xValue, opacity: opacityValue, transition: "0.8s ease" }}
    >
      <div className="text-white flex justify-center items-center gap-3 lg:gap-7">
        {tabs.map((tab, indx) => (
          <div key={indx}>
            <button
              onClick={() => setSelected(tab)}
              className="relative flex items-center justify-center w-[100px] lg:w-[120px] h-[35px] transition-colors"
            >
              <span className="text white z-50">{tab}</span>
              {selected === tab && (
                <motion.span
                  layoutId="pill-tab"
                  transition={{ type: "spring", stiffness: 100, duration: 0.6 }}
                  className="absolute top-0 left-0 border border-[#f8b90d] rounded-full w-full h-full"
                ></motion.span>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-5 xl:gap-5 lg:gap-4  text-white mt-10 px-[10px]">
        {allSkill?.map((skill: TSkills) => (
          <div
            key={skill._id}
            className="bg-[#1c222a] w-[99%] lg:w-full xl:w-[250px] h-[170px] lg:h-[200px] rounded-md pt-4"
          >
            <div className="flex flex-col items-center justify-center lg:gap-5">
              <Image
                src={skill.image}
                alt="Skill"
                width={70}
                height={70}
                className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]"
              />
              <h1>{skill.title}</h1>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 mt-3">
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
    </motion.div>
  );
};

export default SkillCardTab;
