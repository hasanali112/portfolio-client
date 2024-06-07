import { getProject } from "@/utils/getProject";
import ProjectTabs from "./ProjectTab";

const Project = async () => {
  const projectGet = await getProject();
  return (
    <div id="projects" className="bg-[#0a0c18] pt-20 lg:pt-20 pb-20">
      <div className="w-full max-w-[1220px] mx-auto">
        <div>
          <ProjectTabs projectGet={projectGet.data} />
        </div>
      </div>
    </div>
  );
};

export default Project;
