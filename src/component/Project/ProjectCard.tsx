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
    offset: ["0 1", "0.5 1"],
  });

  const yValue = useTransform(scrollYProgress, [0, 1], [1500, 1]);
  const xValueLeft = useTransform(scrollYProgress, [0, 1], [-1500, 1]);
  const xValueRight = useTransform(scrollYProgress, [0, 1], [1500, 1]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={projectRef}
      style={
        card.position === "middle"
          ? { y: yValue, opacity: opacityValue, transition: "0.8s ease" }
          : {
              x: card.position === "left" ? xValueLeft : xValueRight,
              opacity: opacityValue,
              transition: "0.8s ease",
            }
      }
      className="bg-[#1f2937] rounded-lg lg:w-full  xl:w-[98%] md:h-[570px] lg:h-[500px] p-4"
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
        <div className="mt-4 flex flex-col md:flex-col lg:flex-row gap-4 lg:items-center">
          <h1 className="text-[#89c9f4] text-2xl font-semibold">
            {card.title}
          </h1>
          <div className="flex gap-4">
            <Link href={card.gitRepoLink} target="_blank">
              <div className="border border-[#89c9f4] rounded-full w-[40px] h-[40px] inline-flex justify-center items-center hover:bg-[#f8b90c] hover:text-white">
                <Github className="text-white" />
              </div>
            </Link>
            <Link href={card.liveLink} target="_blank">
              <Button
                variant="bordered"
                className="rounded-full border-[#89c9f4] text-white"
              >
                Live site
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-white">{card.description.slice(0, 150)}...</p>
          <Link href={`/${card._id}`}>
            <p className="inline-flex gap-3 items-center text-white mt-4 hover:text-[#89c9f4]">
              See project{" "}
              <span className="text-[#89c9f4]">
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
