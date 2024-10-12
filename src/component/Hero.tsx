"use client";

import Image from "next/image";
import Container from "./ui/Container";
import about from "@/assets/myhero.png";

import {
  ArrowDownToLine,
  FacebookIcon,
  GithubIcon,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import HeroForMobile from "./Home/HeroForMobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const parent = {
  up: { y: -16 },
  down: {
    y: [16, 0, 16],
    transition: {
      ease: "linear",
      delay: 0.5,
      duration: 5,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

export const mainParent = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      delay: 1,
      duration: 1,
    },
  },
};

const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleToggle = setInterval(() => {
      setShow((prev) => !prev);
    }, 5000);

    return () => clearInterval(handleToggle);
  }, []);

  return (
    <div>
      <div className="bg-[#111122] hidden md:block lg:block xl:block pb-16 md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={mainParent}
            className="text-white flex justify-between  items-center"
          >
            <div>
              <h1 className="text-3xl font-bold mb-3">Hey, I am Hasan</h1>
              <motion.h1
                key={show ? "Frontend Developer" : "MERN Stack Developer"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatDelay: 10 }}
                className="md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider"
              >
                {show ? (
                  <>
                    <span className="text-[#f8b90c]">Front</span>
                    <span className="text-[#f9c73f]"> End</span>
                    <span className="text-[#efd58d]"> Developer</span>
                  </>
                ) : (
                  <>
                    <span className="text-[#f8b90c]">MERN</span>
                    <span className="text-[#f9c73f]"> Stack</span>
                    <span className="text-[#efd58d]"> Developer</span>
                  </>
                )}
              </motion.h1>
              <p className="max-w-[45ch] tracking-wider text-lg">
                I specialize in creating dynamic web applications, with a robust
                foundation in both front-end and back-end development
              </p>
              <div className="mt-10 flex gap-10 items-center">
                <Link
                  href="https://drive.google.com/file/d/1dUvhsEipYWnhFykRwJ1vJaNSi2zrs8tQ/view?usp=sharing"
                  target="_blank"
                >
                  <motion.button
                    initial="up"
                    animate="down"
                    variants={parent}
                    className="rounded-full md:w-[140px] md:h-[50px] lg:w-[230px] lg:h-[60px] shadow-md shadow-[#f8b90c] bg-[#f8b90c] text-white text-lg lg:font-semibold hover:bg-[#f8b90c] hover:text-white inline-flex items-center px-4"
                  >
                    <span className="md:hidden lg:block mr-1">Download </span>{" "}
                    Resume
                    <span>
                      <ArrowDownToLine />
                    </span>
                  </motion.button>
                </Link>
                <div className="flex gap-5">
                  <Link
                    href="https://www.facebook.com/mdhasan.alikhan.794"
                    target="_blank"
                  >
                    <div className="border border-[#f8b90c] rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-[#f8b90c] hover:text-white">
                      <FacebookIcon />
                    </div>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/md-hasan-ali-khan/"
                    target="_blank"
                  >
                    <div className="border border-[#f8b90c] rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-[#f8b90c] hover:text-white">
                      <Linkedin />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="relative">
                <Image
                  src={about}
                  alt="about"
                  width={400}
                  height={400}
                  className=" lg:h-[430px] lg:w-[430px]  xl:h-[430px] xl:w-[430px] rounded-full border-2 border-purple-700"
                />
                <div className="absolute md:bottom-[5%] lg:bottom-[28%] lg:-left-[30%]">
                  <motion.div
                    initial="up"
                    animate="down"
                    variants={parent}
                    className="bg-[#111122] border border-[#f8b90c] rounded-full md:w-[200px] md:h-[70px] lg:w-[250px] lg:h-[70px]"
                  >
                    <h1 className="text-center mt-2">30+</h1>
                    <p className="text-center text-[#f8b90c]">
                      Completed Project{" "}
                    </p>
                  </motion.div>
                </div>
                <div className="absolute md:-bottom-[20%] md:left-[20%] lg:bottom-[0%] lg:-left-[3%]">
                  <Link href="https://github.com/hasanali112" target="_blank">
                    <motion.div
                      initial="up"
                      animate="down"
                      variants={parent}
                      className="bg-[#111122] border border-[#f8b90c] rounded-full md:w-[200px] md:h-[70px] lg:w-[250px] lg:h-[70px]"
                    >
                      <GithubIcon className="w-1/2 mx-auto mt-2" />
                      <p className="text-center text-[#f8b90c]">
                        Visit My GitHub
                      </p>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
      <div className="block md:hidden lg:hidden xl:hidden">
        <HeroForMobile />
      </div>
    </div>
  );
};

export default Hero;
