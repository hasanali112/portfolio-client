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
import Container from "@/component/ui/Container";
import ReButton from "@/component/Button/ReButton";
import LeetCodeIcon from "@/component/ui/LeetCodeIcon";
import CodeForcesIcon from "@/component/ui/CodeForcesIcon";

const HeroForMobile = () => {
  const socialLinks = [
    {
      href: "https://leetcode.com/u/Ykcec56m2U/",
      icon: <LeetCodeIcon />,
      label: "LeetCode profile",
    },
    {
      href: "https://codeforces.com/profile/sohagali.ru.ac",
      icon: <CodeForcesIcon />,
      label: "Codeforces profile",
    },
    {
      href: "https://github.com/hasanali112",
      icon: <Github />,
      label: "GitHub profile",
    },
    {
      href: "https://www.linkedin.com/in/md-hasan-ali-khan/",
      icon: <Linkedin />,
      label: "LinkedIn profile",
    },
    {
      href: "https://www.facebook.com/mdhasan.alikhan.794",
      icon: <FacebookIcon />,
      label: "Facebook profile",
    },
  ];

  return (
    <div>
      <div className="bg-[#0f0715] pb-16 pt-20 min-h-screen">
        <Container>
          <div className="relative flex items-center overflow-hidden">
            <div className="w-full max-w-sm mx-auto px-4 flex flex-col gap-6 items-center relative z-10">
              {/* Image Section - First */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent backdrop-blur-lg border border-[#8ac9f4]/40 rounded-lg"></div>
                <Image
                  src={about}
                  alt="Hasan Ali"
                  width={300}
                  height={400}
                  priority
                  fetchPriority="high"
                   sizes="(max-width: 480px) 280px, 300px"
                  className="w-[280px] h-[350px] object-cover block relative z-10"
                />
              </div>

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
                    rel="noopener noreferrer"
                  >
                    <ReButton
                      title="Download CV"
                      icon={<ArrowDownToLine />}
                      className="w-[160px] h-[40px] rounded-full text-sm"
                    />
                  </Link>
                  <Link href="/#contact">
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
                    <Link
                      href={social.href}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
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
    </div>
  );
};

export default HeroForMobile;
