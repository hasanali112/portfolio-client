"use client";

import { Button } from "@nextui-org/react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type TProps = {
  _id: string;
  image: string;
  title: string;
  description: string;
  liveLink: string;
  gitRepoLink: string;
  useTechnology: string[];
  position: "left" | "middle" | "right";
};

const ProjectCard = ({ card }: { card: TProps }) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "0.9 1"],
  });

  const yValue = useTransform(scrollYProgress, [0, 1], [1500, 1]);
  const xValueLeft = useTransform(scrollYProgress, [0, 1], [-500, 1]);
  const xValueRight = useTransform(scrollYProgress, [0, 1], [1500, 1]);

  const transformStyle =
    card.position === "middle"
      ? { y: yValue, transition: "y 0.9s ease" }
      : {
          x: card.position === "left" ? xValueLeft : xValueRight,
          transition: "x 0.9s ease",
        };

  return (
    <motion.div
      ref={projectRef}
      style={transformStyle}
      className="bg-[#1c222a] rounded-lg lg:w-full  xl:w-[440px] h-[500px] p-4"
    >
      <div>
        <div>
          <Image
            src={card.image}
            alt="Project Image"
            width={400}
            height={200}
            className="w-full h-[250px] rounded-lg"
          />
        </div>
        <div className="mt-4 flex gap-4 items-center">
          <h1 className="text-[#f3b90b] text-2xl font-semibold">
            {card.title}
          </h1>
          <Link href={card.gitRepoLink} target="_blank">
            <div className="border border-[#f8b90c] rounded-full w-[40px] h-[40px] inline-flex justify-center items-center hover:bg-[#f8b90c] hover:text-white">
              <Github className="text-white" />
            </div>
          </Link>
          <Link href={card.liveLink} target="_blank">
            <Button
              variant="bordered"
              className="rounded-full border-[#f8b90c] text-white"
            >
              Live site
            </Button>
          </Link>
        </div>
        <div className="mt-3">
          <p className="text-white">{card.description.slice(0, 150)}...</p>
          <Link href={`/${card._id}`}>
            <p className="inline-flex gap-3 items-center text-white mt-4 hover:text-[#f3b90b]">
              See project{" "}
              <span className="text-[#f3b90b]">
                <ArrowRight />
              </span>
            </p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
