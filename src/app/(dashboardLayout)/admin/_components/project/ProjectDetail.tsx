import React from "react";
import Image from "next/image";
import { X, ExternalLink, Github } from "lucide-react";

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  project: any;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{project.projectTitle}</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project Images */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Project Images</h3>
            <div className="grid grid-cols-2 gap-2">
              {project.projectImage?.map((image: string, index: number) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${project.projectTitle} ${index + 1}`}
                  width={128}
                  height={128}
                  className="w-full h-32 object-cover rounded-lg border border-gray-700"
                />
              ))}
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Links</h3>
              <div className="space-y-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                {project.gitRepoLinkFrontend && (
                  <a
                    href={project.gitRepoLinkFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Frontend Repository
                  </a>
                )}
                {project.gitRepoLinkBackend && (
                  <a
                    href={project.gitRepoLinkBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Backend Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {project.technology?.map((tech: any, index: number) => (
              <div
                key={index}
                className="bg-gray-800 p-3 rounded-lg border border-gray-700 text-center"
              >
                {tech.technologyImage && (
                  <Image
                    src={tech.technologyImage}
                    alt={tech.technologyName}
                    width={32}
                    height={32}
                    className="w-8 h-8 mx-auto mb-2 object-contain"
                  />
                )}
                <span className="text-white text-sm font-medium">{tech.technologyName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Metadata */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Created:</span>
              <span className="text-white ml-2">
                {new Date(project.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div>
              <span className="text-gray-400">Last Updated:</span>
              <span className="text-white ml-2">
                {new Date(project.updatedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
