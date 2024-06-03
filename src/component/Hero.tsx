import HeroCard from "./HeroCard/HeroCard";
import BorderMegicButton from "./ui/BorderMegicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 h-screen">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full  h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex  relative mt-10  z-10">
        <div className="w-[60%] mx-auto space-y-3  flex flex-col items-center justify-center">
          <h1 className="tracking-widest text-2xl">Hey, I am Hasan</h1>
          <TextGenerateEffect
            className="text-center  text-[40px] md:text-3xl lg:text-5xl"
            words=" I specialize in creating dynamic  web applications "
          />
          <p>
            With a strong foundation in both front-end and back-end development
          </p>
          <div className="w-[60%] mx-auto lg:pl-32 pt-6">
            <BorderMegicButton title="Resume" />
          </div>
        </div>
        <div>{/* <HeroCard /> */}</div>
      </div>
    </div>
  );
};

export default Hero;
