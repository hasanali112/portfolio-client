"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const SkillTitle = () => {
  const skillRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: skillRef,
    offset: ["0 1", "0.5 1"],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={skillRef}
      style={{ scale: scaleValue, transition: "0.8s ease" }}
      className="overflow-x-hidden"
    >
      <h1 className="text-5xl text-center font-bold text-white mb-2 tracking-wider">
        My Skills
      </h1>
      <p className="lg:w-[50%] w-full text-[#f3b90b] mx-auto text-center mt-7 ">
        I put your ideas and thus your wishes in the form of a unique web
        project that inspire you and your customers
      </p>
    </motion.div>
  );
};

export default SkillTitle;
