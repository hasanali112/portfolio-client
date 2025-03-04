import About from "@/component/About/About";
import Blogs from "@/component/Blog/Blogs";
import Contact from "@/component/Contact/Contact";
import DeveloperSkillsCard from "@/component/Experience/DeveloperSkillCards";
import Hero from "@/component/Hero";
import Project from "@/component/Project/Project";
import Skill from "@/component/Skill/Skill";

const Home = () => {
  return (
    <div className=" bg-black">
      <Hero />
      <Skill />
      <DeveloperSkillsCard />
      <About />
      <Project />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
