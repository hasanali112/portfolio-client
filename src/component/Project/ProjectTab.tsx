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
      <h1 className="text-5xl text-center font-bold text-white mb-2 tracking-wider">
        My Recent Work
      </h1>
      <p className="text-center text-[#f3b90b] lg:w-[60%] lg:mx-auto mx-3 mt-6">
        My recent projects involve creating dynamic web applications using
        modern frameworks. These projects showcasing my ability to deliver
        robust and user-friendly solutions.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20">
        {projectGet?.map((card: TProps) => (
          <ProjectCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default ProjectTab;
