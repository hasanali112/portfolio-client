import React from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import Container from "../../../../../component/ui/Container";
import Link from "next/link";
import { getLatestsProjects } from "@/services/projectService";
import { IProject } from "@/types/project";

const Project = async () => {
  let projectGet;
  try {
    projectGet = await getLatestsProjects();
  } catch (error: any) {
    console.log(error.message);
  }

  return (
    <div id="projects" className="min-h-screen bg-[#111122] py-20 lg:px-4">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <button className="inline-flex items-center gap-2 px-6 py-3 mb-8 text-gray-400 border border-gray-400/30 rounded-full hover:bg-gray-400/10 transition-colors">
            <span className="text-xs">&lt;/&gt;</span>
            <span>My Project Space</span>
          </button>

          <h1 className="text-4xl md:text-5xl  font-bold text-white mb-6">
            Projects That Inspire
            <span className="relative inline-block py-2 ml-2">
              <span className="relative z-10 tracking-wider">Developers</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Welcome to my digital showcase — where I share projects,
            experiments, and discoveries from my journey as a developer. These
            projects go beyond tutorials; they explore ideas, experiences, and
            insights that help shape better code and better creators.
          </p>

          <button className="mt-8 px-6 py-3 rounded-full border border-gray-500/30 text-gray-400 text-sm flex items-center gap-2 mx-auto hover:border-gray-400/50 hover:bg-gray-500/5 transition-all">
            <Sparkles className="w-4 h-4" />
            <span>Explore My Latest Projects & Innovations</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectGet?.map((project: IProject) => (
            <div
              key={project._id}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden relative hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.projectImage[0]}
                  alt={project.projectTitle}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-400 transition-colors">
                  {project.projectTitle.slice(0, 20)}..
                </h3>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technology.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-gray-300 border border-slate-600/50"
                    >
                      {tech.technologyName}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="flex-1 px-4 py-2 rounded-full bg-slate-700/50 text-white text-sm font-medium hover:bg-slate-700 transition-colors text-center"
                  >
                    Live →
                  </Link>
                  <Link
                    href={project.liveLink}
                    className="flex-1 px-4 py-2 rounded-full bg-slate-700/50 text-white text-sm font-medium hover:bg-slate-700 transition-colors text-center"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* see more button */}
        <div className="flex justify-center mt-12">
          <Link
            href="#"
            className="px-6 py-3 rounded-full border border-gray-500/30 text-gray-400 text-sm flex items-center gap-2 hover:border-gray-400/50 hover:bg-gray-500/5 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>See More</span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Project;
