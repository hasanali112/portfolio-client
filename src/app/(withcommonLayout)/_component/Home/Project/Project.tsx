"use client";

import React, { useEffect, useState } from "react";
import {
  ExternalLink,
  File,
  FileText,
  FolderDot,
  FolderGit2,
  FolderOpenDot,
  FoldHorizontal,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Container from "../../../../../component/ui/Container";
import Link from "next/link";
import { getLatestsProjects } from "@/services/projectService";
import { IProject } from "@/types/project";
import ReButton from "@/component/Button/ReButton";

const Project = () => {
  const [projectGet, setProjectGet] = useState<IProject[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await getLatestsProjects();
        setProjectGet(projects);
      } catch (error: any) {
        console.log(error.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div id="projects" className="min-h-screen bg-[#111122] py-20 lg:px-4">
      <Container>
        {/* Header */}

        <div className="text-center flex flex-col items-center justify-center md-10 md:mb-16">
          <ReButton
            title="My Project Space"
            variant="outline"
            icon={<FolderOpenDot className="w-5 h-5" />}
            className="h-[45px] rounded-full mb-8"
          />

          <h1 className="text-xl md:text-5xl font-bold text-white mb-6">
            Projects That Inspire
            <span className="relative inline-block py-2 ml-2">
              <span className="relative z-10 tracking-wider">Developers</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5DC]/20 to-transparent rounded-lg transform -skew-x-12"></div>
            </span>
          </h1>

          <p className="text-gray-400 text-lg hidden md:block max-w-3xl mx-auto leading-relaxed">
            Welcome to my digital showcase — where I share projects,
            experiments, and discoveries from my journey as a developer. These
            projects go beyond tutorials; they explore ideas, experiences, and
            insights that help shape better code and better creators.
          </p>

          <button className="mt-8 px-6 py-3 hidden rounded-full border border-gray-500/30 text-gray-400 text-sm md:flex items-center gap-2 mx-auto hover:border-gray-400/50 hover:bg-gray-500/5 transition-all">
            <Sparkles className="w-4 h-4" />
            <span>Explore My Latest Projects & Innovations</span>
          </button>
        </div>

        {/* Projects Grid - Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 md:px-0">
          {projectGet?.map((project: IProject) => (
            <div
              key={project._id}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden relative hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
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

                {/* Action Buttons */}
                <div className="flex gap-3 relative z-10">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-full bg-slate-700/50 text-white text-sm font-medium hover:bg-slate-700 transition-colors text-center inline-block"
                  >
                    Live →
                  </a>
                  <Link
                    href={`/projects/${project._id}`}
                    className="flex-1 px-4 py-2 rounded-full bg-slate-700/50 text-white text-sm font-medium hover:bg-slate-700 transition-colors text-center inline-block"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Carousel - Mobile */}
        <div className="md:hidden">
          <div className="relative">
            {/* Prev Button */}
            <button
              onClick={() => {
                const carousel = document.getElementById('projects-carousel');
                carousel?.scrollBy({ left: -256, behavior: 'smooth' });
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-600/50"
            >
              ←
            </button>

            {/* Next Button */}
            <button
              onClick={() => {
                const carousel = document.getElementById('projects-carousel');
                carousel?.scrollBy({ left: 256, behavior: 'smooth' });
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-slate-800/80 hover:bg-slate-700 text-white rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-600/50"
            >
              →
            </button>

            {/* Carousel */}
            <div
              id="projects-carousel"
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-12 snap-x snap-mandatory"
            >
              {projectGet?.map((project: IProject) => (
                <div
                  key={project._id}
                  className="flex-shrink-0 w-full max-w-sm mx-auto group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden relative hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10 hover:border-white/30 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 snap-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                  {/* Project Image */}
                  <div className="relative h-32 overflow-hidden">
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
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-400 transition-colors">
                      {project.projectTitle.slice(0, 18)}..
                    </h3>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technology.slice(0, 2).map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-slate-700/50 text-gray-300 border border-slate-600/50"
                        >
                          <Image
                            src={tech.technologyImage}
                            alt={tech.technologyName}
                            width={12}
                            height={12}
                            className="w-3 h-3"
                          />
                          <span className="text-xs">{tech.technologyName}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-400 text-xs mb-4 line-clamp-2">
                      {project.description.slice(0, 80)}...
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-2 relative z-10">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-1.5 rounded-full bg-slate-700/50 text-white text-xs font-medium hover:bg-slate-700 transition-colors text-center inline-block"
                      >
                        Live →
                      </a>
                      <Link
                        href={`/projects/${project._id}`}
                        className="flex-1 px-3 py-1.5 rounded-full bg-slate-700/50 text-white text-xs font-medium hover:bg-slate-700 transition-colors text-center inline-block"
                      >
                        Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* see more button */}
        <div className="flex flex-wrap gap-1 mt-10 justify-center items-center">
          <Link href="/projects">
            <ReButton
              title="View All Projects"
              icon={<FileText className="w-5 h-5" />}
              className="h-[45px] rounded-full"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Project;
