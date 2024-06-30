import Image from "next/image";
import React from "react";
import about from "@/assets/about6.jpg";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#0f0715] pt-20 lg:pt-28 pb-20 transition-transform duration-700 ease-in-out"
    >
      <div className="grid  grid-cols-12 gap-10 w-full max-w-[1200px] mx-auto lg:px-0 px-5">
        <div className="lg:col-span-5 col-span-12  lg:h-[550px] lg:w-full w-[80%] ">
          <div className="relative group inline-block overflow-hidden w-full">
            <Image
              src={about}
              alt="about"
              width={400}
              height={400}
              className="lg:w-[85%] w-[90%] lg:h-[490px] h-[80%] rounded-xl mx-auto  border-2 border-purple-600 group-hover:scale-100 transition-transform duration-500"
            />
            <div className="lg:w-full w-[90%] lg:h-[490px] h-[80%] rounded-xl mx-auto  bg-black absolute top-0 left-0 opacity-30  group-hover:scale-100 transition-transform duration-500 "></div>
          </div>
        </div>
        <div className="lg:col-span-7 col-span-12 lg:h-[550px] lg:w-full w-[80%] ">
          <h1 className="text-2xl text-purple-500">About me</h1>
          <h1 className="lg:text-5xl text-3xl mt-3 text-purple-500 font-semibold">
            Hey, I am <span className="text-[#d9c7fc]">Hasan.</span>{" "}
          </h1>
          <p className="mt-4 lg:text-[20px] lg:w-full w-[95%] text-zinc-500">
            I am graduate of University of Rajshahi. My expertise spans across
            the entire stack, ensuring that every component of your web
            application is meticulously crafted and optimized for performance.In
            addition, I have extensive experience with MongoDB, a NoSQL
            database, which I use to design flexible and scalable data models.
          </p>
          <p className="mt-4 lg:text-[20px] pb-4 lg:w-full w-[95%] text-zinc-500">
            By integrating modern technologies and frameworks, I create
            applications that are not only functional but also visually
            appealing and user-friendly. I am passionate about staying
            up-to-date with the latest industry trends and continuously
            improving my skill set to deliver cutting-edge solutions.
          </p>
          <Link href="#contact">
            <Button
              variant="bordered"
              className="rounded-full lg:w-[35%] w-[90%] h-[60px] border border-purple-700 text-purple-700 hover:bg-purple-500 hover:text-white"
            >
              Contact Me
              <span>
                <ArrowRight />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
