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
    <div className="bg-[#0b1e27] border border-zinc-400 text-zinc-400  p-3 m-2  shadow-md  transition-transform  h-[374px] lg:w-[350px] hover:-translate-y-2 duration-700">
      <Image
        src={card.image}
        alt="cardImage"
        height={400}
        width={400}
        className=" h-[250px]"
      />
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold mb-2 mt-7 ml-3 text-white">
            {card.title}
          </h3>
          <p className="ml-3">
            {card.useTechnology?.find(
              (tech) => tech == "React" || tech == "Next Js"
            )}
          </p>
        </div>
        <Link href={card._id}>
          <div className="border border-zinc-400 mt-5 bg-[#031c29] p-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
