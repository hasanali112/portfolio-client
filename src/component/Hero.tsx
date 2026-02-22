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
import HeroForMobile from "@/app/(withcommonLayout)/_component/Home/Home/HeroForMobile";
import CodeForcesIcon from "./ui/CodeForcesIcon";

const Hero = () => {
  const socialLinks = [
    {
      href: "https://leetcode.com/u/Ykcec56m2U/",
      icon: <LeetCodeIcon />,
      label: "LeetCode profile",
    },
    {
      href: "https://www.codechef.com/users/hasanali112",
      icon: <CodeChefIcon />,
      label: "CodeChef profile",
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
                  <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#72c4f2] to-[#e7dbfd] mt-10 flex items-center gap-3">
                    <span>MERN Stack</span>
                    <HeroTitleTypeWriter />
                  </div>
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
                      rel="noopener noreferrer"
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
                    <Link
                      href={social.href}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <div className="border border-[#2b3441] bg-[#1f2937] text-white rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-[#027bc2] hover:text-white transition-colors duration-300">
                        {social.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </HeroMainTittle>

              <HeroHi />

              {/* Image Section */}
              <div className="relative flex justify-center items-center lg:ml-28">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/10 to-transparent backdrop-blur-lg border border-[#8ac9f4]/40 rounded-2xl"></div>
                  <Image
                    src={about}
                    alt="Hasan Ali"
                    width={500}
                    height={500}
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                    className="w-[500px] h-[600px] object-cover block relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="block md:hidden lg:hidden xl:hidden">
        <HeroForMobile />
      </div>
    </div>
  );
};

export default Hero;
