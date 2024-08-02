import About from "@/component/About/About";
import Blogs from "@/component/Blog/Blogs";
import Contact from "@/component/Contact/Contact";
import Hero from "@/component/Hero";
import Project from "@/component/Project/Project";
import Skill from "@/component/Skill/Skill";
import React from "react";

const Home = () => {
  return (
    <div className=" bg-black">
      <Hero />
      <Skill />
      <Project />
      <Blogs />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
