"use client";

import Image from "next/image";
import Container from "./ui/Container";
import about from "@/assets/banner (2).png";

import {
  ArrowDownToLine,
  FacebookIcon,
  Github,
  GithubIcon,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import HeroForMobile from "./Home/HeroForMobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import hiLogo from "@/assets/HI.png";
import Experience from "./Home/Experience";

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
      <div className="bg-[#0f0715] hidden md:block lg:block xl:block pb-16 md:pt-[60px] lg:pt-[20px] xl:pt-[50px]">
        <Container>
          <div className="relative   flex items-center overflow-hidden">
            <div className=" mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-white relative z-[999]"
              >
                <div className="space-y-3">
                  <h2 className="text-xl font-medium tracking-wide text-blue-300">
                    Hey, I&apos;m Hasan Ali
                  </h2>
                  <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#72c4f2] to-[#e7dbfd] mt-10">
                    MERN Stack Developer
                  </h1>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in crafting dynamic web applications with a
                  robust foundation in both front-end and back-end development,
                  transforming ideas into elegant digital solutions.
                </p>

                {/* Social Links */}

                <div className="flex items-center gap-8  pt-6">
                  <div className="flex items-center space-x-4 ">
                    <button className="bg-[#027bc2] hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300 flex items-center space-x-2">
                      <span>Download CV</span>
                      <ArrowDownToLine size={20} />
                    </button>
                  </div>
                  <div className="flex gap-5">
                    <Link
                      href="https://www.facebook.com/mdhasan.alikhan.794"
                      target="_blank"
                    >
                      <div className="border border-[#027bc2] rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-[#027bc2] hover:text-white">
                        <FacebookIcon />
                      </div>
                    </Link>

                    <Link
                      href="https://www.linkedin.com/in/md-hasan-ali-khan/"
                      target="_blank"
                    >
                      <div className="border border-[#027bc2] rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-[#027bc2] hover:text-white">
                        <Linkedin />
                      </div>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/md-hasan-ali-khan/"
                      target="_blank"
                    >
                      <div className="border border-[#027bc2] rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-[#027bc2] hover:text-white">
                        <Github />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.1 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
                className="absolute top-[20%] left-[40%]  rounded-full "
              >
                <Image
                  src={hiLogo}
                  alt="Hasan Ali"
                  width={500}
                  height={500}
                  className="w-[380px] h-[380px] object-cover opacity-10 "
                />
              </motion.div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center items-center"
              >
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={about}
                    alt="Hasan Ali"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 right-0 w-1/2 h-full  blur-3xl"
            />
          </div>
          <Experience />
        </Container>
      </div>
      <div className="block md:hidden lg:hidden xl:hidden">
        <HeroForMobile />
      </div>
    </div>
  );
};

export default Hero;
