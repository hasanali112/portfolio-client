import { Button } from "@nextui-org/react";
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
    <div className="bg-gradient-to-r from-[#2a1650] to-[#6237b7] rounded-md border border-zinc-400 text-zinc-400  p-3 m-2  shadow-md  transition-transform    hover:-translate-y-2 duration-700">
      <div className="flex gap-5">
        <Image
          src={card.image}
          alt="cardImage"
          height={400}
          width={400}
          className="w-[600px] rounded-lg"
        />
        <div className="">
          <div>
            <h1 className="text-2xl font-bold mb-2  ml-3 text-white">
              {card.title}
            </h1>
            <p className="text-zinc-400 mt-3 ml-3 min-w-[31ch]">
              The project aims to develop a comprehensive Disaster Relief
              Donation Platform that connects donors with disaster-stricken
              communities in need.........
            </p>
            <p className="text-white text-xl mt-3 ml-3 ">Features</p>
            <ul className="text-zinc-400 mt-3 ml-3 ">
              <li>1. Use CRUD for donation management</li>
              <li>2. Different role base authentication and dashboard</li>
              <li>3. Enhanced User Experience</li>
              <li></li>
            </ul>
            <div>
              <p className="text-white text-xl mt-3 ml-3 ">Techonolgies:</p>
              <div className="flex gap-3 ml-3">
                {card.useTechnology
                  ?.slice(0, 4)
                  .map((item: string, index: number) => (
                    <div key={index}>
                      <h1 className="font-semibold">{item}</h1>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between ml-3 mt-4">
            <div className="flex gap-3">
              <Button
                variant="bordered"
                className="border border-[#1ABC9C] hover:bg-[#1ABC9C] rounded-full text-white"
              >
                Live site
              </Button>
              <Button
                variant="bordered"
                className="border border-[#1ABC9C] hover:bg-[#1ABC9C] rounded-full text-white"
              >
                Client site github
              </Button>
            </div>
            <Link href={card._id}>
              <Button
                variant="bordered"
                className="border border-[#1ABC9C] hover:bg-[#1ABC9C] rounded-full text-white"
              >
                More detail
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
