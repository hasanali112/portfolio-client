"use client";

import Image from "next/image";
import React, { useRef } from "react";
import about from "@/assets/myhero.png";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { BookOpen } from "lucide-react";
import { useScroll, motion, useTransform } from "framer-motion";

const About = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["0 1", "0.5 1"],
  });

  const scaleValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const xSecondValue = useTransform(scrollYProgress, [0, 1], [1000, 0]);
  const opacityValue = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const imageScaleValue = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <div
      id="about"
      ref={divRef}
      className="bg-[#111122] pt-20 lg:pt-20 pb-20 transition-transform duration-700 ease-in-out overflow-x-hidden"
    >
      <motion.h1
        style={{ scale: scaleValue, transition: "0.5s ease" }}
        className="text-5xl font-bold text-center text-white"
      >
        About Me
      </motion.h1>
      <div className="w-full max-w-[1400px] px-[20px] mx-auto">
        <motion.div
          style={{
            x: xSecondValue,
            opacity: opacityValue,
            transition: "0.8s ease",
          }}
          className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 mt-16 px-[10px]"
        >
          <div className="flex flex-col items-center gap-2">
            <motion.div
              style={{
                scale: imageScaleValue,
                transition: "0.8s ease 0.5s",
              }}
            >
              <Image
                src={about}
                alt="about"
                width={300}
                height={400}
                className="h-[230px] w-[230px] rounded-full"
              />
            </motion.div>
            <h1 className="text-white mt-3 text-2xl">MD Hasan Ali Khan</h1>
            <p className="text-white">Web Developer (MERN)</p>
            <div className="bg-[#1c222a] rounded-lg  w-[640px] h-[190px] mt-3">
              <h1 className="text-3xl text-[#f3b90b] mt-4 ml-5">Education</h1>
              <BookOpen className="w-9 h-9 text-[#f3b90b] mt-3 ml-5" />
              <p className="text-white mt-3 ml-5">2019 - 2024</p>
              <p className="text-white mt-3 ml-5">
                B. Sc. In Botany, Rajshahi University
              </p>
            </div>
          </div>
          <div>
            <p className="text-white">
              I’m a MERN Stack developer who is passionate about creating
              error-free, user-friendly and creative web solutions. I am deeply
              passionate about continuous learning and openly sharing my
              knowledge with others. I thrive on solving real-world problems and
              always approach my work with a strategic, goal-oriented mindset,
              keeping the end objective in clear focus. My ultimate goal is to
              excel as a full-stack web developer, seamlessly managing both
              back-end and front-end development to deliver outstanding user
              experiences.
            </p>
            <p className="text-white mt-7">
              Over the past years, I have honed my expertise across various web
              development technologies, including React.js for crafting dynamic
              and high-performing user interfaces, and Next.js for enhancing
              performance and SEO through server-side rendering. My proficiency
              with Redux and RTK Query enables me to manage intricate state in
              large-scale applications, ensuring a seamless user experience.
              With TypeScript, I write reliable, type-safe code that enhances
              maintainability and reduces errors. I develop robust back-end
              services and APIs using Express, ensuring scalable server-side
              logic. Using those techonology, I created 30+ project. I take
              great pride in delivering quality work and maintaining excellent
              communication.
            </p>
            <Link href="#contact">
              <Button
                variant="bordered"
                className="rounded-full w-[230px] h-[60px] shadow-md border border-[#f8b90c] text-white text-lg font-semibold  inline-flex items-center px-4 mt-5"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
