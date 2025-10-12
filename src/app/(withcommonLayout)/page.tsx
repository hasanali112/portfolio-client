import About from "@/app/(withcommonLayout)/_component/Home/About/About";
import Blogs from "@/app/(withcommonLayout)/_component/Home/Blog/Blogs";

import Experience from "@/app/(withcommonLayout)/_component/Home/Experience/Experience";
import Hero from "@/component/Hero";
import Project from "@/app/(withcommonLayout)/_component/Home/Project/Project";
import Skill from "@/app/(withcommonLayout)/_component/Home/Skill/Skill";
import Testimonials from "@/app/(withcommonLayout)/_component/Home/Testimonial/Testimonial";
import Contact from "./_component/Home/Contact/Contact";
import Services from "./_component/Home/Services/Services";

const Home = () => {
  return (
    <div className=" bg-black">
      {/* <Hero />
      <Skill />
      <DeveloperSkillsCard />
      <About />
      <Project />
      <Blogs /> */}
      <Hero />
      <Skill />
      <Experience />
      <About />
      <Services />
      <Project />
      <Testimonials />
      <Contact />
      <Blogs />
    </div>
  );
};

export default Home;
