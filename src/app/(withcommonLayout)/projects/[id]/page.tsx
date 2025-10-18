"use client";
import { useState, useEffect } from "react";
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
  const [isPlaying, setIsPlaying] = useState(true);

  const project = projectData?.data?.find((p: IProject) => p._id === id);

  // Auto-play carousel
  useEffect(() => {
    if (!project || project.projectImage.length <= 1 || !isPlaying) return;

    const interval = setInterval(() => {
      setSelectedImage((prev) => (prev + 1) % project.projectImage.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [project, isPlaying]);

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
      {isLoading ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400"></div>
        </div>
      ) : !project ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-gray-400 text-lg">Project not found</p>
        </div>
      ) : (
        <Container>
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors lg:px-10"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="lg:my-10 my-5 lg:px-10">
            <h1 className="lg:text-5xl text-3xl font-bold text-white mb-4">
              {project.projectTitle}
            </h1>
            <div>
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
                    <span className="text-gray-300">{tech.technologyName}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:px-10 space-y-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div
                className="relative aspect-video rounded-lg overflow-hidden bg-gray-800 cursor-pointer"
                onClick={() => setShowGallery(true)}
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
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

                {/* Carousel Navigation */}
                {project.projectImage.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>

                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.projectImage.map((_: any, idx: number) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(idx);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            selectedImage === idx ? "bg-white" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Basic Info */}
              <div className="space-y-6 lg:col-span-8">
                {/* About Section */}
                <div className="relative bg-gradient-to-br from-[#057cc5]/10 via-transparent to-[#04376b]/10 backdrop-blur-md rounded-xl p-8 border border-[#8ac9f4]/40 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#057cc5]/5 to-transparent opacity-50"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#057cc5]/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1 h-8 bg-gradient-to-b from-[#057cc5] to-[#04376b] rounded-full"></div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        About
                      </h2>
                    </div>
                    <p className="text-gray-200 leading-relaxed text-lg font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Features Section */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-[#057cc5] to-[#04376b] rounded-full"></div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Features
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {project.features?.map((feature: string, idx: number) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 px-4 py-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-[#057cc5]/30 transition-colors"
                      >
                        <div className="w-2 h-2 bg-[#057cc5] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Technical Details */}
              <div className="flex flex-col gap-6 lg:col-span-4">
                {/* Project Links Card */}
                <div className="bg-slate-800/30 rounded-lg p-6 border border-[#8ac9f4]/40 hover:border-[#057cc5]/30 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-[#057cc5]" />
                    Project Links
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      className="flex items-center justify-between px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-[#057cc5]/50 transition-colors group"
                    >
                      <span className="text-gray-300 group-hover:text-white">
                        Live Demo
                      </span>
                      <ExternalLink className="w-5 h-5 text-[#057cc5]" />
                    </Link>

                    {project.gitRepoLinkFrontend && (
                      <Link
                        href={project.gitRepoLinkFrontend}
                        target="_blank"
                        className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-[#057cc5]/50 transition-colors group"
                      >
                        <Github className="w-5 h-5 text-[#057cc5]" />
                        <span className="text-gray-300 group-hover:text-white">
                          Frontend Code
                        </span>
                      </Link>
                    )}

                    {project.gitRepoLinkBackend && (
                      <Link
                        href={project.gitRepoLinkBackend}
                        target="_blank"
                        className="flex items-center gap-3 px-4 py-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-[#057cc5]/50 transition-colors group"
                      >
                        <Github className="w-5 h-5 text-[#057cc5]" />
                        <span className="text-gray-300 group-hover:text-white">
                          Backend Code
                        </span>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Project Stats Card */}
                <div className="bg-slate-800/30 rounded-lg p-6 border border-[#8ac9f4]/40 hover:border-[#057cc5]/30 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#057cc5]" />
                    Project Stats
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                      <span className="text-gray-400">Technologies</span>
                      <span className="text-white font-medium">
                        {project.technology.length}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                      <span className="text-gray-400">Features</span>
                      <span className="text-white font-medium">
                        {project.features?.length || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                      <span className="text-gray-400">Images</span>
                      <span className="text-white font-medium">
                        {project.projectImage.length}
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
      )}

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
