"use client";

import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { useScroll, motion, useTransform } from "framer-motion";

type TProps = {
  _id: string;
  image: string;
  title: string;
  description: string;
  liveLink: string;
  gitRepoLink: string;
  useTechnology: string[];
};

const ProjectTab = ({ projectGet }: { projectGet: TProps[] }) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "0.9 1"],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div>
      <motion.div
        ref={projectRef}
        style={{ scale: scaleValue, transition: "0.8s ease" }}
        className="overflow-x-hidden"
      >
        <h1 className="text-4xl md:text-5xl lg:text-5xl text-center font-bold text-white mb-2 tracking-wider">
          My Recent Work
        </h1>
        <p className="text-center text-[#89c9f4] lg:w-[60%] lg:mx-auto mx-3 mt-6">
          My recent projects involve creating dynamic web applications using
          modern frameworks. These projects showcasing my ability to deliver
          robust and user-friendly solutions.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 xl:gap-4 mt-10 md:mt-20 lg:mt-20 overflow-hidden md:px-[10px] lg:px-[10px]">
        {projectGet?.map((card: TProps, index: number) => (
          <ProjectCard
            key={card._id}
            card={{
              ...card,
              position:
                index === 1 ? "middle" : index % 3 === 0 ? "left" : "right",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectTab;
