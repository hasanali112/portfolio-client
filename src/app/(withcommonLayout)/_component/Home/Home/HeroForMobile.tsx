"use client";

import Image from "next/image";
import about from "@/assets/banner (2).png";
import {
  ArrowDownToLine,
  FacebookIcon,
  Github,
  Linkedin,
  PhoneForwarded,
} from "lucide-react";
import Link from "next/link";
import HeroMainTittle from "./Hero/HeroMainTittle/HeroMainTittle";
import HeroImage from "./Hero/HeroImage/HeroImage";
import HeroDecorative from "./Hero/HeroDecorative/HeroDecorative";
import Experience from "./Experience";
import Container from "@/component/ui/Container";
import ReButton from "@/component/Button/ReButton";
import LeetCodeIcon from "@/component/ui/LeetCodeIcon";
import CodeForcesIcon from "@/component/ui/CodeForcesIcon";
import { getAllSkills } from "@/services/skillService";
import { ISkill } from "@/types/skill";
import { useEffect, useState } from "react";

const HeroForMobile = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getAllSkills(1, 50);
        setSkills(response.data || []);
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
      <div className="bg-[#0f0715] pb-16 pt-20 min-h-screen">
        <Container>
          <div className="relative flex items-center overflow-hidden">
            <div className="w-full max-w-sm mx-auto px-4 flex flex-col gap-6 items-center relative z-10">
              {/* Image Section - First */}
              <HeroImage>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  {/* Glass morphism background with left to right gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent backdrop-blur-lg border border-[#8ac9f4]/40 rounded-lg"></div>
                  <Image
                    src={about}
                    alt="Hasan Ali"
                    width={300}
                    height={400}
                    className="w-[280px] h-[350px] object-cover block relative z-10"
                  />
                  {/* Bottom area with infinite scrolling skills */}
                  <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-black/30 backdrop-blur-sm z-20 overflow-hidden">
                    <div className="flex items-center h-full animate-scroll">
                      {skills.concat(skills).map((skill, index) => (
                        <div
                          key={`${skill._id}-${index}`}
                          className="flex-shrink-0 mx-2"
                        >
                          <Image
                            src={skill.image}
                            alt={skill.title}
                            width={25}
                            height={25}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </HeroImage>

              {/* Text Content - Second */}
              <HeroMainTittle>
                <div className="space-y-1 text-center">
                  <h2 className="text-xl font-medium tracking-wide text-blue-300">
                    Hey, I&apos;m Hasan Ali
                  </h2>
                  <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#72c4f2] to-[#e7dbfd] mt-1">
                    MERN Stack Developer
                  </h1>
                </div>

                <p className="text-base text-gray-300 leading-relaxed text-justify">
                  I specialize in crafting dynamic web applications with a
                  robust foundation in both front-end and back-end development,
                  transforming ideas into elegant digital solutions.
                </p>

                <div className="flex flex-row items-center gap-1 pt-6 justify-center">
                  <Link
                    href="https://drive.google.com/file/d/1XoPax6Ms03vpzZTTIH1m8y8-e5Z8gNxi/view?usp=sharing"
                    target="_blank"
                  >
                    <ReButton
                      title="Download CV"
                      icon={<ArrowDownToLine />}
                      className="w-[160px] h-[40px] rounded-full text-sm"
                    />
                  </Link>
                  <Link href="#contact">
                    <ReButton
                      variant="outline"
                      title="Contact Me"
                      icon={<PhoneForwarded className="size-3" />}
                      className="w-[160px] h-[40px] rounded-full text-sm"
                    />
                  </Link>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mb-6 justify-center flex-wrap">
                  {socialLinks.map((social, index) => (
                    <Link href={social.href} key={index} target="_blank">
                      <div className="border border-[#2b3441] bg-[#1f2937] text-white rounded-full w-[45px] h-[45px] inline-flex justify-center items-center hover:bg-[#027bc2] hover:text-white transition-colors duration-300">
                        {social.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </HeroMainTittle>
            </div>
          </div>
        </Container>
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
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroForMobile;
