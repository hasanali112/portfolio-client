import Image from "next/image";

import about from "@/assets/banner (2).png";
import {
  ArrowDownToLine,
  FacebookIcon,
  Github,
  GithubIcon,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import HeroMainTittle from "./Hero/HeroMainTittle/HeroMainTittle";
import HeroHi from "./Hero/HeroHi/HeroHi";
import HeroImage from "./Hero/HeroImage/HeroImage";
import HeroDecorative from "./Hero/HeroDecorative/HeroDecorative";
import Experience from "./Experience";
import Container from "@/component/ui/Container";

const HeroForMobile = () => {
  return (
    <div>
      <div className="bg-[#0f0715]  pb-16 pt-20 min-h-screen">
        <Container>
          <div className="relative   flex items-center overflow-hidden">
            <div className=" mx-auto px-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
              {/* Text Content */}
              <HeroMainTittle>
                <div className="space-y-3">
                  <h2 className="text-xl font-medium tracking-wide text-blue-300">
                    Hey, I&apos;m Hasan Ali
                  </h2>
                  <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#72c4f2] to-[#e7dbfd] mt-10">
                    MERN Stack Developer
                  </h1>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in crafting dynamic web applications with a
                  robust foundation in both front-end and back-end development,
                  transforming ideas into elegant digital solutions.
                </p>

                {/* Social Links */}

                <div className="flex flex-col  gap-8  pt-6">
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
                <div className="absolute inset-0 max-w-[400px] md:max-w-[500px] h-[400px] md:h-[500px] bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <Image src={about} alt="Hasan Ali" width={500} height={500} />
                </div>
              </HeroImage>
            </div>

            {/* Decorative Elements */}
            <HeroDecorative />
          </div>
          <Experience />
        </Container>
      </div>
    </div>
  );
};

export default HeroForMobile;
