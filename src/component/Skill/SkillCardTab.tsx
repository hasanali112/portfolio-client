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

const tabs = ["Front End", "Back End", "Database", "DevsOps", "Tools"];

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
      <div className="text-white grid grid-cols-3 md:flex  md:justify-center items-center gap-3 lg:gap-7 ">
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
                  className="absolute top-0 left-0 border border-[#8ac9f4] rounded-full w-full h-full"
                ></motion.span>
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5 xl:gap-5 lg:gap-4  text-white mt-10 px-[10px]">
        {allSkill?.map((skill: TSkills) => (
          <div
            key={skill._id}
            className="bg-[#1f2937] w-[99%] lg:w-full xl:w-[250px] h-[70px] lg:h-[70px] rounded-md pt-4"
          >
            <div className="flex flex-row items-center justify-center gap-2 lg:gap-5">
              <Image
                src={skill.image}
                alt="Skill"
                width={100}
                height={100}
                className="w-[30px] h-[30px] md:w-[30px] md:h-[30px] lg:w-[50px] lg:h-[35px] object-contain"
              />
              <h1 className="md:text-lg">{skill.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCardTab;
