import { Button } from "@nextui-org/react";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TProps = {
  _id: string;
  image: string;
  title: string;
  description: string;
  liveLink: string;
  gitRepoLink: string;
  useTechnology: string[];
};

const ProjectCard = ({ card }: { card: TProps }) => {
  return (
    <div className="bg-[#1c222a] rounded-lg  w-[440px] h-[500px] p-4">
      <div>
        <div>
          <Image
            src={card.image}
            alt="Project Image"
            width={400}
            height={200}
            className="w-full h-[250px] rounded-lg"
          />
        </div>
        <div className="mt-4 flex gap-4 items-center">
          <h1 className="text-[#f3b90b] text-2xl font-semibold">
            {card.title}
          </h1>
          <Link href={card.gitRepoLink} target="_blank">
            <div className="border border-[#f8b90c] rounded-full w-[40px] h-[40px] inline-flex justify-center items-center hover:bg-[#f8b90c] hover:text-white">
              <Github className="text-white" />
            </div>
          </Link>
          <Link href={card.liveLink} target="_blank">
            <Button
              variant="bordered"
              className="rounded-full border-[#f8b90c] text-white"
            >
              Live site
            </Button>
          </Link>
        </div>
        <div className="mt-3">
          <p className="text-white">{card.description.slice(0, 150)}...</p>
          <Link href={`/${card._id}`}>
            <p className="inline-flex gap-3 items-center text-white mt-4 hover:text-[#f3b90b]">
              See project{" "}
              <span className="text-[#f3b90b]">
                <ArrowRight />
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
