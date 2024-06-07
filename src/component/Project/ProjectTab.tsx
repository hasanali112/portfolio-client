import ProjectCard from "./ProjectCard";

type TProps = {
  _id: string;
  image: string;
  title: string;
  description: string;
  liveLink: string;
  gitRepoLink: string;
  useTechnology: string[];
};

const ProjectTab = ({ projectGet }: { projectGet: TProps[] }) => {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold text-purple-500 mb-2 tracking-wider">
        My Recent <span className="text-[#d9c7fc]">Work</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-20 px-9">
        {projectGet?.map((card: TProps) => (
          <ProjectCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default ProjectTab;
