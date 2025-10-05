"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/hasan.png";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";

const parent = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const navParent = {
  opened: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.8,
      type: "ease",
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      duration: 0.8,
      type: "ease",
    },
  },
};

const NavbarForMobile = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (
      menuRef.current &&
      event.target instanceof Node &&
      !menuRef.current.contains(event.target)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={parent}
      className="w-full max-w-[1400px] mx-auto px-[25px]"
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
          <motion.div className="relative" ref={menuRef}>
            <button onClick={() => setOpen((pv) => !pv)}>
              <Menu className="text-white" />
            </button>
            <motion.div
              initial="closed"
              animate={open ? "opened" : "closed"}
              variants={navParent}
              style={{ originY: "top" }}
              className="bg-gradient-to-br from-[#0f0715] via-[#1c222a] to-[#027bc2]/20 backdrop-blur-lg border border-white/10 w-[300px] h-[300px] md:w-[600px] md:h-[150px] absolute top-[110%] right-[10%] rounded-lg z-50 shadow-2xl"
            >
              <ul className="space-y-[17px] md:flex md:space-y-0 md:justify-center pt-[10px] md:pt-7">
                <li onClick={() => setOpen(false)}>
                  <Link
                    href="/"
                    className="hover:bg-gradient-to-r hover:from-[#72c4f2] hover:to-[#027bc2] px-3 py-2 rounded-full hover:transition-all duration-500 hover:ease-in-out text-white hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link
                    href="#skills"
                    className="hover:bg-gradient-to-r hover:from-[#72c4f2] hover:to-[#027bc2] px-3 py-2 rounded-full hover:transition-all duration-500 hover:ease-in-out text-white hover:text-white"
                  >
                    Skills
                  </Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link
                    href="#about"
                    className="hover:bg-gradient-to-r hover:from-[#72c4f2] hover:to-[#027bc2] px-3 py-2 rounded-full hover:transition-all duration-500 hover:ease-in-out text-white hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link
                    href="#projects"
                    className="hover:bg-gradient-to-r hover:from-[#72c4f2] hover:to-[#027bc2] px-3 py-2 rounded-full hover:transition-all duration-500 hover:ease-in-out text-white hover:text-white"
                  >
                    Projects
                  </Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link
                    href="#blog"
                    className="hover:bg-gradient-to-r hover:from-[#72c4f2] hover:to-[#027bc2] px-3 py-2 rounded-full hover:transition-all duration-500 hover:ease-in-out text-white hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link
                    href="#contact"
                    className="hover:bg-gradient-to-r hover:from-[#72c4f2] hover:to-[#027bc2] px-3 py-2 rounded-full hover:transition-all duration-500 hover:ease-in-out text-white hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li onClick={() => setOpen(false)}>
                  <Link
                    href="/hire-me"
                    className="hover:bg-gradient-to-r hover:from-[#72c4f2] hover:to-[#027bc2] px-3 py-2 rounded-full hover:transition-all duration-500 hover:ease-in-out text-white hover:text-white"
                  >
                    Hire Me
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default NavbarForMobile;
