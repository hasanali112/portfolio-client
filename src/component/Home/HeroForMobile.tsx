import Image from "next/image";
import about from "@/assets/about.png";
import { Button } from "@nextui-org/react";
import {
  ArrowDownToLine,
  FacebookIcon,
  GithubIcon,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Container from "../ui/Container";

const HeroForMobile = () => {
  return (
    <div className=" bg-gradient-to-r from-[#0f0715] via-[#0f0715] to-[#291746] pb-20">
      <Container>
        <div className="text-white flex flex-col gap-10 items-center justify-center pt-20">
          <div>
            <div className="">
              <Image
                src={about}
                alt="about"
                width={400}
                height={400}
                className="h-[300px] w-[300px] rounded-full border-4 border-purple-700"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-3">Hey, I am Hasan</h1>
            <h1 className="text-4xl font-bold mb-6 text-center tracking-wider">
              <span className="text-purple-700">Web</span>
              <span className="text-[#aa82fa]"> Devel</span>
              <span className="text-[#decffd]">oper</span>
            </h1>
            <p className="text-center tracking-wider text-lg">
              I specialize in creating dynamic web applications, with a robust
              foundation in both front-end and back-end development
            </p>
            <div className="mt-10 flex flex-col gap-10 items-center">
              <Button
                variant="bordered"
                className="rounded-full w-full h-[60px] border border-purple-700 text-purple-700 hover:bg-purple-500 hover:text-white"
              >
                Download Resume{" "}
                <span>
                  <ArrowDownToLine />
                </span>
              </Button>
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
        </div>
      </Container>
    </div>
  );
};

export default HeroForMobile;
