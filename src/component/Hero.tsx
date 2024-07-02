import Image from "next/image";
import Container from "./ui/Container";
import about from "@/assets/about.png";
import { Button } from "@nextui-org/react";
import {
  ArrowDownToLine,
  FacebookIcon,
  GithubIcon,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import HeroForMobile from "./Home/HeroForMobile";

const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#0f0715] via-[#0f0715] to-[#291746] hidden lg:block pb-16">
        <Container>
          <div className="text-white grid grid-cols-12 gap-5 items-center justify-center pt-20">
            <div className="col-span-7">
              <h1 className="text-3xl font-bold mb-3">Hey, I am Hasan</h1>
              <h1 className="text-6xl font-bold mb-6 tracking-wider">
                <span className="text-purple-700">Web</span>
                <span className="text-[#aa82fa]"> Devel</span>
                <span className="text-[#decffd]">oper</span>
              </h1>
              <p className="max-w-[37ch] tracking-wider text-lg">
                I specialize in creating dynamic web applications, with a robust
                foundation in both front-end and back-end development
              </p>
              <div className="mt-10 flex gap-10 items-center">
                <Link
                  href="https://drive.google.com/file/d/1dUvhsEipYWnhFykRwJ1vJaNSi2zrs8tQ/view?usp=sharing"
                  target="_blank"
                >
                  <Button
                    variant="bordered"
                    className="rounded-full w-full h-[60px] border border-purple-700 text-purple-700 hover:bg-purple-500 hover:text-white"
                  >
                    Download Resume
                    <span>
                      <ArrowDownToLine />
                    </span>
                  </Button>
                </Link>
                <div className="flex gap-5">
                  <Link
                    href="https://www.facebook.com/mdhasan.alikhan.794"
                    target="_blank"
                  >
                    <div className="border border-purple-700 rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-purple-500 hover:text-white">
                      <FacebookIcon />
                    </div>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/md-hasan-ali-khan/"
                    target="_blank"
                  >
                    <div className="border border-purple-700 rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-purple-500 hover:text-white">
                      <Linkedin />
                    </div>
                  </Link>

                  <Link href="https://github.com/hasanali112" target="_blank">
                    <div className="border border-purple-700 rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-purple-500 hover:text-white">
                      <GithubIcon />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <div className="">
                <Image
                  src={about}
                  alt="about"
                  width={400}
                  height={400}
                  className="h-[460px] w-[460px] rounded-full border-4 border-purple-700"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="block lg:hidden">
        <HeroForMobile />
      </div>
    </div>
  );
};

export default Hero;
