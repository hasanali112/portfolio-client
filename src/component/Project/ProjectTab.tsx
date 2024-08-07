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
    offset: ["0 1", "0.5 1"],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div>
      <motion.div
        ref={projectRef}
        style={{ scale: scaleValue, transition: "0.6s ease" }}
        className="overflow-x-hidden"
      >
        <h1 className="text-5xl text-center font-bold text-white mb-2 tracking-wider">
          My Recent Work
        </h1>
        <p className="text-center text-[#f3b90b] lg:w-[60%] lg:mx-auto mx-3 mt-6">
          My recent projects involve creating dynamic web applications using
          modern frameworks. These projects showcasing my ability to deliver
          robust and user-friendly solutions.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20 overflow-x-hidden overflow-y-hidden">
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
