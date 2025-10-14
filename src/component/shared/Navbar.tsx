"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
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
  const router = useRouter();
  const pathname = usePathname();

  const handleHashClick = (hash: string) => {
    if (hash === "") {
      router.push("/");
      return;
    }

    if (hash.startsWith("#")) {
      if (pathname !== "/") {
        router.push(`/${hash}`);
      } else {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#000000] text-white w-full pt-5 pb-5 shadow-sm z-50">
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
                  <span className="text-[#017cc2] font-extrabold">.</span>
                </h1>
              </div>
            </Link>
            <div>
              <div className="flex justify-around items-center lg:space-x-4">
                {/* Hash Navigation Items */}
                <button
                  onClick={() => handleHashClick("")}
                  className="navbar-design"
                >
                  Home
                </button>
                <button
                  onClick={() => handleHashClick("#about")}
                  className="navbar-design"
                >
                  About
                </button>
                <button
                  onClick={() => handleHashClick("#skills")}
                  className="navbar-design"
                >
                  Skills
                </button>
                <button
                  onClick={() => handleHashClick("#projects")}
                  className="navbar-design"
                >
                  Projects
                </button>
                <button
                  onClick={() => handleHashClick("#blog")}
                  className="navbar-design"
                >
                  Blog
                </button>
                <button
                  onClick={() => handleHashClick("#contact")}
                  className="navbar-design"
                >
                  Contact
                </button>

                {/* Regular Page Navigation Items */}
                <Link
                  href="/shop"
                  className="navbar-design animated-border px-4 py-2 rounded-full"
                >
                  Shop
                </Link>
                <Link href="/schedule">
                  <ReButton
                    variant="outline"
                    title="Schedule"
                    className="rounded-full"
                  />
                </Link>
                <Link href="/hire-me">
                  <ReButton title="Hire me!" className="rounded-full" />
                </Link>
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
