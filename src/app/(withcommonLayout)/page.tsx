import { Suspense } from "react";
import Hero from "@/component/Hero";
import {
  TopSections,
  MiddleSections,
  BottomSections,
} from "./_component/Home/Home/HomeSectionsClient";
import About from "./_component/Home/About/About";
import Services from "./_component/Home/Services/Services";
import Contact from "./_component/Home/Contact/Contact";
import CaseStudies from "./_component/Home/CaseStudies/CaseStudies";
import Skill from "./_component/Home/Skill/Skill";
import Project from "./_component/Home/Project/Project";
import Blogs from "./_component/Home/Blog/Blogs";

const HomeSectionSkeleton = () => (
  <div className="w-full py-20 bg-[#111122] flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

const Home = () => {
  return (
    <div className=" bg-black">
      <Hero />
      <Suspense fallback={<HomeSectionSkeleton />}>
        <Skill />
      </Suspense>
      <TopSections />
      <Suspense fallback={<HomeSectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<HomeSectionSkeleton />}>
        <Services />
      </Suspense>
      <Suspense fallback={<HomeSectionSkeleton />}>
        <Project />
      </Suspense>
      <MiddleSections />
      <Suspense fallback={<HomeSectionSkeleton />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<HomeSectionSkeleton />}>
        <CaseStudies />
      </Suspense>
      <Suspense fallback={<HomeSectionSkeleton />}>
        <Blogs />
      </Suspense>
      <BottomSections />
    </div>
  );
};

export default Home;
