import Link from "next/link";
import BorderMegicButton from "./ui/BorderMegicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Facebook, Github, LinkedinIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="lg:pb-20 pb-16 pt-16 lg:pt-36 ">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full  lg:h-[80vh] lg:w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 lg:left-80 lg:h-[80vh] lg:w-[50vw]"
          fill="blue"
        />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex  relative mt-10  z-10">
        <div className="lg:w-[60%] w-[100%] mx-auto space-y-1 lg:space-y-3  flex flex-col items-center justify-center">
          <h1 className="tracking-widest text-2xl">Hey, I am Hasan</h1>
          <TextGenerateEffect
            className="text-center  text-[25px] md:text-3xl lg:text-5xl"
            words=" I specialize in creating dynamic  web applications "
          />
          <p className="text-center">
            With a strong foundation in both front-end and back-end development
          </p>
          <div className="lg:w-[60%] w-full mx-auto flex flex-col lg:flex-row items-center gap-3  pt-6">
            <BorderMegicButton title="Resume" />
            <ul className="flex gap-3 ">
              <Link
                href="https://www.linkedin.com/in/md-hasan-ali-khan/"
                target="_blank"
                className="group"
              >
                <li className="border border-purple-700 rounded-full flex items-center justify-center w-[40px] h-[40px] group-hover:bg-purple-500  duration-[3s] ease-in-out">
                  <LinkedinIcon className="w-5 fill-purple-700 text-purple-700 group-hover:text-white group-hover:fill-white" />
                </li>
              </Link>
              <Link
                href="https://github.com/hasanali112"
                target="_blank"
                className="group"
              >
                <li className="border border-purple-700 rounded-full flex items-center justify-center w-[40px] h-[40px] group-hover:bg-purple-500  duration-[3s] ease-in-out">
                  <Github className="w-5 fill-purple-700 text-purple-700 group-hover:text-white group-hover:fill-white" />
                </li>
              </Link>
              <Link
                href="https://www.facebook.com/mdhasan.alikhan.794"
                target="_blank"
                className="group"
              >
                <li className="border border-purple-700 rounded-full flex items-center justify-center w-[40px] h-[40px] group-hover:bg-purple-500  duration-[3s] ease-in-out">
                  <Facebook className="w-5 fill-purple-700 text-purple-700 group-hover:text-white group-hover:fill-white" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{/* <HeroCard /> */}</div>
      </div>
    </div>
  );
};

export default Hero;
