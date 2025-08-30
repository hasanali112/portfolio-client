"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/hasan.png";
import { Button } from "@nextui-org/react";
import NavbarForMobile from "./NavbarForMobile";
import { motion } from "framer-motion";
import ReButton from "../Button/ReButton";

const parent = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Navbar = () => {
  return (
    <header className="bg-[#000000]  text-white  w-full pt-5 pb-5 shadow-sm z-50">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={parent}
        className="w-full max-w-[1400px] mx-auto px-[25px] hidden md:hidden lg:block xl:block"
      >
        <div>
          <div className="flex justify-between items-center">
            <Link href="/">
              <div className="flex items-center gap-3">
                <Image
                  src={logo}
                  alt="logo"
                  width={140}
                  height={140}
                  className="w-[50px] h-[50px] rounded-full"
                />
                <h1 className="text-3xl">
                  HasanAli
                  <span className="text-[#017cc2]  font-extrabold">.</span>
                </h1>
              </div>
            </Link>
            <div>
              <div className="flex  justify-around items-center lg:space-x-4">
                <Link href="/" className="navbar-design">
                  Home
                </Link>
                <Link href="#about" className="navbar-design">
                  About
                </Link>
                <Link href="#skills" className="navbar-design">
                  Skills
                </Link>
                <Link href="#projects" className="navbar-design">
                  Projects
                </Link>
                <Link href="#blog" className="navbar-design">
                  Blog
                </Link>
                <Link href="#contact" className="navbar-design">
                  Contact
                </Link>
                <ReButton title="Hire me!" />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
      <div className="block md:block lg:hidden xl:hidden z-50">
        <NavbarForMobile />
      </div>
    </header>
  );
};

export default Navbar;
