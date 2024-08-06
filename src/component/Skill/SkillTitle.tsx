"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const SkillTitle = () => {
  const skillRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: skillRef,
    offset: ["0 1", "1.5 1"],
  });

  const xValue = useTransform(scrollYProgress, [0, 1], [500, 0]);

  return (
    <motion.div
      ref={skillRef}
      style={{ x: xValue, transition: "1s ease" }}
      className="overflow-x-hidden"
    >
      <h1 className="text-5xl text-center font-bold text-white mb-2 tracking-wider">
        My Skills
      </h1>
      <p className="lg:w-[50%] w-[80%] text-[#f3b90b] mx-auto text-center mt-7 ">
        I put your ideas and thus your wishes in the form of a unique web
        project that inspire you and your customers
      </p>
    </motion.div>
  );
};

export default SkillTitle;
