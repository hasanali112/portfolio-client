"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useGetProjects } from "@/hooks/useProjects";
import { IProject, ITechnology } from "@/types/project";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Code,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/component/ui/Container";

const ProjectDetail = () => {
  const { id } = useParams();
  const { data: projectData, isLoading } = useGetProjects();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const project = projectData?.data?.find((p: IProject) => p._id === id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] flex items-center justify-center">
        <p className="text-gray-400 text-lg">Project not found</p>
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % project.projectImage.length);
  };

  const prevImage = () => {
    setSelectedImage(
      (prev) =>
        (prev - 1 + project.projectImage.length) % project.projectImage.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] via-[#0d1b2a] to-[#0a1628] py-10">
      <Container>
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        <div className="w-full mx-auto space-y-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div
              className="relative aspect-video rounded-lg overflow-hidden bg-gray-800 cursor-pointer"
              onClick={() => setShowGallery(true)}
            >
              <Image
                src={project.projectImage[selectedImage]}
                alt={project.projectTitle}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 right-3 bg-black/50 rounded-full p-2">
                <ImageIcon className="w-4 h-4 text-white" />
              </div>
            </div>

            {project.projectImage.length > 1 && (
              <div className="flex gap-2 overflow-x-auto justify-center">
                {project.projectImage.map((img: string, idx: number) => (
                  <div
                    key={idx}
                    className={`relative w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 transition-all flex-shrink-0 ${
                      selectedImage === idx
                        ? "border-[#057cc5]"
                        : "border-gray-600"
                    }`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <Image
                      src={img}
                      alt={`${project.projectTitle} ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Basic Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  {project.projectTitle}
                </h1>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50 text-center">
                  <Code className="w-6 h-6 text-[#057cc5] mx-auto mb-2" />
                  <p className="text-white font-semibold">
                    {project.technology.length}
                  </p>
                  <p className="text-xs text-gray-500">Technologies</p>
                </div>
                <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50 text-center">
                  <ImageIcon className="w-6 h-6 text-[#057cc5] mx-auto mb-2" />
                  <p className="text-white font-semibold">
                    {project.projectImage.length}
                  </p>
                  <p className="text-xs text-gray-500">Screenshots</p>
                </div>
                <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50 text-center">
                  <Calendar className="w-6 h-6 text-[#057cc5] mx-auto mb-2" />
                  <p className="text-white font-semibold">
                    {new Date(project.createdAt).getFullYear()}
                  </p>
                  <p className="text-xs text-gray-500">Year</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#057cc5] via-[#005a8e] to-[#04376b] text-white rounded transition-all font-medium shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                  <ExternalLink className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">View Live Demo</span>
                </Link>

                <div className="grid grid-cols-2 gap-3">
                  {project.gitRepoLinkFrontend && (
                    <Link
                      href={project.gitRepoLinkFrontend}
                      target="_blank"
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-[#1f2937] bg-[#1f2937] text-white rounded-lg hover:bg-[#374151] transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Frontend Code
                    </Link>
                  )}

                  {project.gitRepoLinkBackend && (
                    <Link
                      href={project.gitRepoLinkBackend}
                      target="_blank"
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-[#1f2937] bg-[#1f2937] text-white rounded-lg hover:bg-[#374151] transition-all"
                    >
                      <Github className="w-4 h-4" />
                      Backend Code
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Technical Details */}
            <div className="space-y-6">
              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-[#057cc5]" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech: ITechnology, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700 hover:border-[#057cc5]/50 transition-colors"
                    >
                      <Image
                        src={tech.technologyImage}
                        alt={tech.technologyName}
                        width={24}
                        height={24}
                      />
                      <span className="text-gray-300">
                        {tech.technologyName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Timeline */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#057cc5]" />
                  Project Timeline
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                    <span className="text-gray-400">Started</span>
                    <span className="text-white font-medium">
                      {new Date(project.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                    <span className="text-gray-400">Last Updated</span>
                    <span className="text-white font-medium">
                      {new Date(project.updatedAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-400">Status</span>
                    <span className="text-green-400 font-medium flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Live & Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Full Screen Gallery Modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowGallery(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-16">
            <div className="relative max-w-7xl max-h-full w-full">
              <Image
                src={project.projectImage[selectedImage]}
                alt={project.projectTitle}
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] w-full"
              />
            </div>

            {project.projectImage.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-3 z-10"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-3 z-10"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
