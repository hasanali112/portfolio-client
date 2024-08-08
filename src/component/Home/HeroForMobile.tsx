import Image from "next/image";
import about from "@/assets/myhero.png";
import { Button } from "@nextui-org/react";
import {
  ArrowDownToLine,
  FacebookIcon,
  GithubIcon,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import { mainParent, parent } from "../Hero";

const HeroForMobile = () => {
  return (
    <div className=" bg-[#111122] pb-20">
      <Container>
        <motion.div
          initial={mainParent.hidden}
          animate={mainParent.visible}
          variants={mainParent}
          className="text-white flex flex-col-reverse  items-center gap-5 pt-10"
        >
          <div>
            <h1 className="text-3xl font-bold mb-3">Hey, I am Hasan</h1>
            <h1 className="text-4xl font-bold mb-6 tracking-wider">
              <span className="text-[#f8b90c]">Web</span>
              <span className="text-[#f9c73f]"> Devel</span>
              <span className="text-[#efd58d]">oper</span>
            </h1>
            <p className="max-w-[45ch] tracking-wider text-lg">
              I specialize in creating dynamic web applications, with a robust
              foundation in both front-end and back-end development
            </p>
            <div className="mt-5 flex flex-col-reverse gap-3">
              <div>
                <Link
                  href="https://drive.google.com/file/d/1dUvhsEipYWnhFykRwJ1vJaNSi2zrs8tQ/view?usp=sharing"
                  target="_blank"
                >
                  <motion.button
                    initial={parent.up}
                    animate={parent.down}
                    variants={parent}
                    className="rounded-full w-[120px] h-[45px] shadow-md shadow-[#f8b90c] bg-[#f8b90c] text-white text-md font-semibold hover:bg-[#f8b90c] hover:text-white inline-flex items-center px-4"
                  >
                    Resume
                    <span>
                      <ArrowDownToLine />
                    </span>
                  </motion.button>
                </Link>
              </div>
              <div className="flex gap-5">
                <Link
                  href="https://www.facebook.com/mdhasan.alikhan.794"
                  target="_blank"
                >
                  <div className="border border-[#f8b90c] rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-[#f8b90c] hover:text-white">
                    <FacebookIcon />
                  </div>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/md-hasan-ali-khan/"
                  target="_blank"
                >
                  <div className="border border-[#f8b90c] rounded-full w-[50px] h-[50px] inline-flex justify-center items-center hover:bg-[#f8b90c] hover:text-white">
                    <Linkedin />
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-10">
              <div>
                <motion.div
                  initial={parent.up}
                  animate={parent.down}
                  variants={parent}
                  className="bg-[#111122] border border-[#f8b90c] rounded-full w-[95%] h-[80px]"
                >
                  <h1 className="text-center mt-2">30+</h1>
                  <p className="text-center text-[#f8b90c]">
                    Completed Project{" "}
                  </p>
                </motion.div>
              </div>
              <div>
                <Link href="https://github.com/hasanali112" target="_blank">
                  <motion.div
                    initial="up"
                    animate="down"
                    variants={parent}
                    className="bg-[#111122] border border-[#f8b90c] rounded-full w-[95%] h-[80px] mt-6"
                  >
                    <GithubIcon className="w-1/2 mx-auto mt-2" />
                    <p className="text-center text-[#f8b90c]">
                      Visit My GitHub
                    </p>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src={about}
                alt="about"
                width={400}
                height={400}
                className="h-[330px] w-[330px] rounded-full border-2 border-purple-700"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroForMobile;
