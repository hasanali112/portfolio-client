"use client";
import { useMemo } from "react";
import { useGetProjects } from "@/hooks/useProjects";
import { IProject } from "@/types/project";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AllProjectsProps {
  category?: string;
  page?: number;
}

const AllProjects = ({ category = "All", page = 1 }: AllProjectsProps) => {
  const { data: projectData, isLoading } = useGetProjects();

  const filteredProjects = useMemo(() => {
    if (!projectData?.data) return [];

    let filtered = projectData.data;

    const startIndex = (page - 1) * 10;
    const endIndex = startIndex + 10;
    return filtered.slice(startIndex, endIndex);
  }, [projectData, page]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  return (
    <div>
      {!filteredProjects.length ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-400 text-lg">No projects found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project: IProject) => (
            <Link key={project._id} href={`/projects/${project._id}`}>
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden relative hover:border-white/30 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>

                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.projectImage[0]}
                    alt={project.projectTitle}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-400 transition-colors">
                    {project.projectTitle.slice(0, 20)}..
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technology.slice(0, 3).map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-slate-700/50 text-gray-300 border border-slate-600/50"
                      >
                        <Image
                          src={tech.technologyImage}
                          alt={tech.technologyName}
                          width={16}
                          height={16}
                          className="w-4 h-4"
                        />
                        <span>{tech.technologyName}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 px-4 py-2 rounded-full bg-slate-700/50 text-white text-sm font-medium hover:bg-slate-700 transition-colors text-center"
                    >
                      Live →
                    </a>
                    <span className="flex-1 px-4 py-2 rounded-full bg-slate-700/50 text-white text-sm font-medium hover:bg-slate-700 transition-colors text-center">
                      Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProjects;
