import Image from "next/image";
import Container from "./ui/Container";
import about from "@/assets/ab.png";
import {
  ArrowDownToLine,
  FacebookIcon,
  Github,
  Linkedin,
  PhoneForwarded,
} from "lucide-react";
import Link from "next/link";
import HeroForMobile from "./Home/HeroForMobile";
import Experience from "./Home/Experience";
import HeroMainTittle from "./Home/Hero/HeroMainTittle/HeroMainTittle";
import HeroHi from "./Home/Hero/HeroHi/HeroHi";
import HeroImage from "./Home/Hero/HeroImage/HeroImage";
import HeroDecorative from "./Home/Hero/HeroDecorative/HeroDecorative";
import HeroTitleTypeWriter from "./Home/Hero/HeroMainTittle/HeroTitleTypeWriter";
import ReButton from "./Button/ReButton";
import LeetCodeIcon from "./ui/LeetCodeIcon";
import CodeForcesIcon from "./ui/CodeForcesIcon";

const Hero = () => {
  const socialLinks = [
    {
      href: "https://leetcode.com/u/Ykcec56m2U/",
      icon: <LeetCodeIcon />,
    },
    {
      href: "https://codeforces.com/profile/sohagali.ru.ac",
      icon: <CodeForcesIcon />,
    },
    {
      href: "https://github.com/hasanali112",
      icon: <Github />,
    },
    {
      href: "https://www.linkedin.com/in/md-hasan-ali-khan/",
      icon: <Linkedin />,
    },
    {
      href: "https://www.facebook.com/mdhasan.alikhan.794",
      icon: <FacebookIcon />,
    },
  ];

  return (
    <div>
      <div className="bg-[#0f0715] hidden md:block lg:block xl:block pb-16 md:pt-[60px] lg:pt-[20px] xl:pt-[50px] min-h-screen">
        <Container>
          <div className="relative   flex items-center overflow-hidden">
            <div className=" mx-auto px-4 grid  md:grid-cols-2 gap-8 items-center relative z-10">
              {/* Text Content */}
              <HeroMainTittle>
                <div className="space-y-3">
                  <h2 className="text-xl font-medium tracking-wide text-blue-300">
                    Hey, I&apos;m Hasan
                  </h2>
                  <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#72c4f2] to-[#e7dbfd] mt-10 flex items-center gap-3">
                    MERN Stack
                    <HeroTitleTypeWriter />
                  </h1>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in crafting dynamic web applications with a
                  robust foundation in both front-end and back-end development,
                  transforming ideas into elegant digital solutions.
                </p>

                <div className="flex items-center gap-8  pt-6">
                  <div className="flex items-center space-x-4 ">
                    <Link
                      href="https://drive.google.com/file/d/1XoPax6Ms03vpzZTTIH1m8y8-e5Z8gNxi/view?usp=sharing"
                      target="_blank"
                    >
                      <ReButton
                        title="Download CV"
                        icon={<ArrowDownToLine />}
                        className="w-[180px] h-[45px]"
                      />
                    </Link>
                    <Link href="#contact">
                      <ReButton
                        variant="outline"
                        title="Contact Me"
                        icon={<PhoneForwarded className="size-4" />}
                        className="w-[180px] h-[45px]"
                      />
                    </Link>
                  </div>
                </div>
                {/* Social Links */}
                <div className="flex gap-5">
                  {socialLinks.map((social, index) => (
                    <Link href={social.href} key={index} target="_blank">
                      <div className="border border-[#2b3441] bg-[#1f2937] text-white rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-[#027bc2] hover:text-white">
                        {social.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </HeroMainTittle>

              <HeroHi />

              {/* Image Section */}
              <HeroImage>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={about}
                    alt="Hasan Ali"
                    width={500}
                    height={500}
                    className="w-[400px] h-[500px] object-cover"
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
