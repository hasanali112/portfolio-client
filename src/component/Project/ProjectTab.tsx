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
      <p className="text-center text-white w-[60%] mx-auto mt-6">
        My recent projects involve creating dynamic web applications using
        modern frameworks. These projects showcasing my ability to deliver
        robust and user-friendly solutions.
      </p>
      <div className=" mt-20">
        {projectGet?.map((card: TProps) => (
          <ProjectCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default ProjectTab;
