import { getProject } from "@/utils/getProject";
import ProjectTabs from "./ProjectTab";

const Project = async () => {
  let projectGet;
  try {
    projectGet = await getProject();
  } catch (error: any) {
    console.log(error.message);
  }
  return (
    <div id="projects" className="bg-[#0f0715] pt-10 md:pt-10 lg:pt-20 pb-20">
      <div className="w-full max-w-[1400px] px-[20px] mx-auto">
        <div>
          <ProjectTabs projectGet={projectGet?.data} />
        </div>
      </div>
    </div>
  );
};

export default Project;
