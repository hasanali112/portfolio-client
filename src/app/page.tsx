import About from "@/component/About/About";
import Blogs from "@/component/Blog/Blogs";
import Contact from "@/component/Contact/Contact";
import Hero from "@/component/Hero";
import Project from "@/component/Project/Project";
import Skill from "@/component/Skill/Skill";
import React from "react";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative bg-[#000319]  flex justify-center items-center flex-col overflow-hidden mx-auto  px-5">
        <div className="max-w-7xl lg:w-full">
          <Hero />
        </div>
      </div>
      <About />
      <Skill />
      <Project />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
