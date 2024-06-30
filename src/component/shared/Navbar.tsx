import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button } from "@nextui-org/react";
import NavbarForMobile from "./NavbarForMobile";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-gradient-to-r from-[#0f0715] via-[#0f0715] to-[#291746] text-white hidden lg:block">
        <div className="max-w-[1220px] px-[20px] mx-auto   lg:px-7">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image src={logo} alt="logo" width={100} height={50} />
            </Link>
            <div>
              <div className="flex  justify-around items-center lg:space-x-4">
                <Link
                  href="#"
                  className="hover:bg-purple-700 px-2 py-1 rounded-2xl hover:transition-transform duration-500 hover:ease-in-out"
                >
                  Home
                </Link>
                <Link
                  href="#about"
                  className="hover:bg-purple-700 px-2 py-1 rounded-2xl hover:transition-transform duration-500 hover:ease-in-out"
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="hover:bg-purple-700 px-2 py-1 rounded-2xl hover:transition-transform duration-500 hover:ease-in-out"
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="hover:bg-purple-700 px-2 py-1 rounded-2xl hover:transition-transform duration-500 hover:ease-in-out"
                >
                  Projects
                </Link>
                <Link
                  href="#blog"
                  className="hover:bg-purple-700 px-2 py-1 rounded-2xl hover:transition-transform duration-500 hover:ease-in-out"
                >
                  Blog
                </Link>
                <Link
                  href="#contact"
                  className="hover:bg-purple-700 px-2 py-1 rounded-2xl hover:transition-transform duration-500 hover:ease-in-out"
                >
                  Contact
                </Link>
                <Button
                  variant="solid"
                  className="bg-gradient-to-r from-[#331a63] to-[#7846dc] text-white w-[150px] h-[55px] rounded-full hover:bg-gradient-to-r hover:from-[#7846dc] hover:to-[#331a63] duration-700 hover:-translate-y-1"
                >
                  Hire me!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="block lg:hidden">
        <NavbarForMobile />
      </div>
    </header>
  );
};

export default Navbar;
