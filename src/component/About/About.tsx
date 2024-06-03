import Image from "next/image";
import React from "react";
import about from "@/assets/about.png";
import MegicButton from "../ui/MegicButton";

const About = () => {
  return (
    <div id="about" className="bg-[#000319] pt-36 pb-20">
      <div className="grid grid-cols-12 gap-10 w-full max-w-[1200px] mx-auto">
        <div className="col-span-6 h-[500px] w-full ">
          <div className="">
            <Image
              src={about}
              alt="about"
              width={400}
              height={400}
              className="w-full h-[550px] rounded-2xl  overflow-hidden"
            />
          </div>
        </div>
        <div className="col-span-6 h-[550px] w-full pt-10">
          <h1 className="text-2xl">About me</h1>
          <h1 className="text-5xl mt-3">Hey, I am Hasan.</h1>
          <p className="mt-4 text-[20px]">
            I am graduate of University of Rajshahi. My expertise spans across
            the entire stack, ensuring that every component of your web
            application is meticulously crafted and optimized for performance.In
            addition, I have extensive experience with MongoDB, a NoSQL
            database, which I use to design flexible and scalable data models.
          </p>
          <p className="mt-4 text-[20px] pb-4">
            By integrating modern technologies and frameworks, I create
            applications that are not only functional but also visually
            appealing and user-friendly. I am passionate about staying
            up-to-date with the latest industry trends and continuously
            improving my skill set to deliver cutting-edge solutions.
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default About;
