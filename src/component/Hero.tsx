"use client";

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
import ReButton from "./Button/ReButton";
import LeetCodeIcon from "./ui/LeetCodeIcon";
import CodeChefIcon from "./ui/CodeChefIcon";
import HeroMainTittle from "@/app/(withcommonLayout)/_component/Home/Home/Hero/HeroMainTittle/HeroMainTittle";
import HeroTitleTypeWriter from "@/app/(withcommonLayout)/_component/Home/Home/Hero/HeroMainTittle/HeroTitleTypeWriter";
import HeroHi from "@/app/(withcommonLayout)/_component/Home/Home/Hero/HeroHi/HeroHi";
import HeroImage from "@/app/(withcommonLayout)/_component/Home/Home/Hero/HeroImage/HeroImage";
import HeroForMobile from "@/app/(withcommonLayout)/_component/Home/Home/HeroForMobile";
import { getAllSkills } from "@/services/skillService";
import { ISkill } from "@/types/skill";
import { useEffect, useState } from "react";
import CodeForcesIcon from "./ui/CodeForcesIcon";

const Hero = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);

  useEffect(() => {
    interface SkillResponse {
      data?: ISkill[];
    }

    const fetchSkills = async (): Promise<void> => {
      try {
        const response: SkillResponse = await getAllSkills(1, 50);
        const uniqueSkills: ISkill[] =
          response.data?.filter(
            (skill: ISkill, index: number, self: ISkill[]) =>
              index === self.findIndex((s: ISkill) => s.title === skill.title)
          ) || [];
        setSkills(uniqueSkills);
      } catch (error) {
        console.error("Failed to fetch skills:", error);
      }
    };
    fetchSkills();
  }, []);

  const socialLinks = [
    {
      href: "https://leetcode.com/u/Ykcec56m2U/",
      icon: <LeetCodeIcon />,
    },
    {
      href: "https://www.codechef.com/users/hasanali112",
      icon: <CodeChefIcon />,
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
      <div className="bg-[#0f0715] hidden md:block lg:block xl:block pb-20 md:pb-0 lg:pb-0 md:pt-[60px] lg:pt-[50px] xl:pt-[0px] ">
        <Container>
          <div className="relative flex items-center overflow-hidden">
            <div className="mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10 min-h-screen py-[16px]">
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

                <div className="flex items-center gap-8 pt-6">
                  <div className="flex items-center space-x-4">
                    <Link
                      href="https://drive.google.com/file/d/1XoPax6Ms03vpzZTTIH1m8y8-e5Z8gNxi/view?usp=sharing"
                      target="_blank"
                    >
                      <ReButton
                        title="Download CV"
                        icon={<ArrowDownToLine />}
                        className="w-[180px] h-[45px] rounded-full"
                      />
                    </Link>
                    <Link href="#contact">
                      <ReButton
                        variant="outline"
                        title="Contact Me"
                        icon={<PhoneForwarded className="size-4" />}
                        className="w-[180px] h-[45px] rounded-full"
                      />
                    </Link>
                  </div>
                </div>
                {/* Social Links */}
                <div className="flex gap-5 mb-8">
                  {socialLinks.map((social, index) => (
                    <Link href={social.href} key={index} target="_blank">
                      <div className="border border-[#2b3441] bg-[#1f2937] text-white rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-[#027bc2] hover:text-white transition-colors duration-300">
                        {social.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </HeroMainTittle>

              <HeroHi />

              {/* Image Section */}
              <HeroImage>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Glass morphism background with left to right gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/10 to-transparent backdrop-blur-lg border border-[#8ac9f4]/40 rounded-2xl"></div>
                  <Image
                    src={about}
                    alt="Hasan Ali"
                    width={500}
                    height={500}
                    className="w-[500px] h-[600px] object-cover block relative z-10"
                  />
                  {/* Bottom area with infinite scrolling skills */}
                  <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-white  z-20 overflow-hidden">
                    <div className="flex items-center h-full animate-scroll">
                      {skills.concat(skills).map((skill, index) => (
                        <div
                          key={`${skill.title}-${index}`}
                          className="flex-shrink-0 mx-3"
                        >
                          <Image
                            src={skill.image}
                            alt={skill.title}
                            width={30}
                            height={30}
                            className="w-7 h-7 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </HeroImage>
            </div>
          </div>
          {/* <Experience /> */}
        </Container>
      </div>
      <div className="block md:hidden lg:hidden xl:hidden">
        <HeroForMobile />
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
