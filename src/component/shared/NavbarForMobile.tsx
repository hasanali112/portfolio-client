"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Menu } from "lucide-react";

const NavbarForMobile = () => {
  return (
    <div>
      <nav className="bg-gradient-to-r from-[#0f0715] via-[#0f0715] to-[#291746] text-white">
        <div className="max-w-[1220px] px-[20px] mx-auto   lg:px-7">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image src={logo} alt="logo" width={100} height={50} />
            </Link>
            <div>
              <Dropdown backdrop="blur">
                <DropdownTrigger>
                  <Button className="bg-gradient-to-r from-[#331a63] to-[#7846dc] text-white w-[50px] h-[40px] rounded-2xl hover:bg-gradient-to-r hover:from-[#7846dc] hover:to-[#331a63] duration-700 hover:-translate-y-1">
                    <Menu />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu variant="faded" aria-label="Static Actions">
                  <DropdownItem key="home" as={Link} href="#">
                    Home
                  </DropdownItem>
                  <DropdownItem key="about" as={Link} href="#about">
                    About
                  </DropdownItem>
                  <DropdownItem key="skills" as={Link} href="#skills">
                    Skills
                  </DropdownItem>
                  <DropdownItem key="projects" as={Link} href="#projects">
                    Projects
                  </DropdownItem>
                  <DropdownItem key="blogs" as={Link} href="#blog">
                    Blogs
                  </DropdownItem>
                  <DropdownItem key="contact" as={Link} href="#contact">
                    Contact
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarForMobile;
