import Image from "next/image";

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
    <div className="bg-[#2a1454] border border-indigo-500 text-zinc-400  p-5 m-2 rounded-lg shadow-md  transition duration-200 h-[500px] w-[400px]">
      <Image
        src={card.image}
        alt="cardImage"
        height={400}
        width={400}
        className="rounded-lg h-[350px]"
      />
      <h3 className="text-lg font-bold mb-2 text-white">{card.title}</h3>
    </div>
  );
};

export default ProjectCard;
