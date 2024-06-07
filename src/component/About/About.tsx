import Image from "next/image";
import React from "react";
import about from "@/assets/about.png";
import MegicButton from "../ui/MegicButton";
import Link from "next/link";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#000319] pt-20 lg:pt-28 pb-20 transition-transform duration-700 ease-in-out"
    >
      <div className="grid  grid-cols-12 gap-10 w-full max-w-[1200px] mx-auto lg:px-0 px-5">
        <div className="lg:col-span-6 col-span-12  lg:h-[500px] lg:w-full w-[80%]">
          <div className="">
            <Image
              src={about}
              alt="about"
              width={400}
              height={400}
              className="lg:w-full w-[90%] lg:h-[550px] h-[80%] rounded-2xl  overflow-hidden"
            />
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 lg:h-[550px] lg:w-full w-[80%] pt-5">
          <h1 className="text-2xl text-purple-500">About me</h1>
          <h1 className="lg:text-5xl text-3xl mt-3 text-purple-500 font-semibold">
            Hey, I am <span className="text-[#d9c7fc]">Hasan.</span>{" "}
          </h1>
          <p className="mt-4 lg:text-[20px] lg:w-full w-[95%]">
            I am graduate of University of Rajshahi. My expertise spans across
            the entire stack, ensuring that every component of your web
            application is meticulously crafted and optimized for performance.In
            addition, I have extensive experience with MongoDB, a NoSQL
            database, which I use to design flexible and scalable data models.
          </p>
          <p className="mt-4 lg:text-[20px] pb-4 lg:w-full w-[95%]">
            By integrating modern technologies and frameworks, I create
            applications that are not only functional but also visually
            appealing and user-friendly. I am passionate about staying
            up-to-date with the latest industry trends and continuously
            improving my skill set to deliver cutting-edge solutions.
          </p>
          <Link href="#contact">
            {" "}
            <MegicButton
              title="Contact ME"
              image={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-up-right"
                >
                  <path d="M13 5H19V11" />
                  <path d="M19 5L5 19" />
                </svg>
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
