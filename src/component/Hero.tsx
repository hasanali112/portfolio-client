import Image from "next/image";
import Container from "./ui/Container";
import about from "@/assets/banner (2).png";
import {
  ArrowDownToLine,
  FacebookIcon,
  Github,
  GithubIcon,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import HeroForMobile from "./Home/HeroForMobile";
import Experience from "./Home/Experience";
// import { Typewriter } from "react-simple-typewriter";
import HeroMainTittle from "./Home/Hero/HeroMainTittle/HeroMainTittle";
import HeroHi from "./Home/Hero/HeroHi/HeroHi";
import HeroImage from "./Home/Hero/HeroImage/HeroImage";
import HeroDecorative from "./Home/Hero/HeroDecorative/HeroDecorative";

const Hero = () => {
  return (
    <div>
      <div className="bg-[#0f0715] hidden md:block lg:block xl:block pb-16 md:pt-[60px] lg:pt-[20px] xl:pt-[50px]">
        <Container>
          <div className="relative   flex items-center overflow-hidden">
            <div className=" mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
              {/* Text Content */}
              <HeroMainTittle>
                <div className="space-y-3">
                  <h2 className="text-xl font-medium tracking-wide text-blue-300">
                    Hey, I&apos;m Hasan Ali
                  </h2>
                  <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#72c4f2] to-[#e7dbfd] mt-10">
                    MERN Stack{" "}
                    {/* <Typewriter
                      words={["Developer"]}
                      loop={true}
                      typeSpeed={50}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    /> */}
                  </h1>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in crafting dynamic web applications with a
                  robust foundation in both front-end and back-end development,
                  transforming ideas into elegant digital solutions.
                </p>

                {/* Social Links */}

                <div className="flex items-center gap-8  pt-6">
                  <div className="flex items-center space-x-4 ">
                    <button className="bg-[#027bc2] hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300 flex items-center space-x-2">
                      <span>Download CV</span>
                      <ArrowDownToLine size={20} />
                    </button>
                  </div>
                  <div className="flex gap-5">
                    <Link
                      href="https://www.facebook.com/mdhasan.alikhan.794"
                      target="_blank"
                    >
                      <div className="border border-[#027bc2] rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-[#027bc2] hover:text-white">
                        <FacebookIcon />
                      </div>
                    </Link>

                    <Link
                      href="https://www.linkedin.com/in/md-hasan-ali-khan/"
                      target="_blank"
                    >
                      <div className="border border-[#027bc2] rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-[#027bc2] hover:text-white">
                        <Linkedin />
                      </div>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/md-hasan-ali-khan/"
                      target="_blank"
                    >
                      <div className="border border-[#027bc2] rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-[#027bc2] hover:text-white">
                        <Github />
                      </div>
                    </Link>
                  </div>
                </div>
              </HeroMainTittle>

              <HeroHi />

              {/* Image Section */}
              <HeroImage>
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={about}
                    alt="Hasan Ali"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
              </HeroImage>
            </div>

            {/* Decorative Elements */}
            <HeroDecorative />
          </div>
          <Experience />
        </Container>
      </div>
      <div className="block md:hidden lg:hidden xl:hidden">
        <HeroForMobile />
      </div>
    </div>
  );
};

export default Hero;
