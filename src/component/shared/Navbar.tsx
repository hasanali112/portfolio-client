"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/hasan.png";
import { Button } from "@nextui-org/react";
import NavbarForMobile from "./NavbarForMobile";
import { motion } from "framer-motion";

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
    <header className="bg-[#0f0715]  text-white  w-full pt-6 pb-6 shadow-sm z-50">
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
                <Link
                  href="/"
                  className="hover:bg-[#017cc2] px-3 py-2 rounded-lg hover:transition-transform duration-500 hover:ease-in-out"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="hover:bg-[#017cc2] px-3 py-2 rounded-lg hover:transition-transform duration-500 hover:ease-in-out"
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="hover:bg-[#017cc2] px-3 py-2 rounded-lg hover:transition-transform duration-500 hover:ease-in-out"
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="hover:bg-[#017cc2] px-3 py-2 rounded-lg hover:transition-transform duration-500 hover:ease-in-out"
                >
                  Projects
                </Link>
                <Link
                  href="#blog"
                  className="hover:bg-[#017cc2] px-3 py-2 rounded-lg hover:transition-transform duration-500 hover:ease-in-out"
                >
                  Blog
                </Link>
                <Link
                  href="#contact"
                  className="hover:bg-[#017cc2] px-3 py-2 rounded-lg hover:transition-transform duration-500 hover:ease-in-out"
                >
                  Contact
                </Link>
                <Button
                  variant="solid"
                  className="bg-[#017cc2] shadow-md  text-white w-[80px] h-[40px] rounded-lg hover:bg-[#f8b90c] duration-700 hover:-translate-y-1"
                >
                  Hire me!
                </Button>
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
