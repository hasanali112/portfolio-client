import React from "react";
import { X } from "lucide-react";

interface UpdateProjectFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  project: any;
  isLoading: boolean;
}

const UpdateProjectForm: React.FC<UpdateProjectFormProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  project, 
  isLoading 
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Update Project</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            name="projectTitle"
            defaultValue={project.projectTitle}
            placeholder="Project Title"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
            required
          />
          <textarea
            name="description"
            defaultValue={project.description}
            placeholder="Description"
            className="w-full p-3 bg-gray-800 text-white rounded-lg h-24"
            required
          />
          <input
            name="liveLink"
            defaultValue={project.liveLink}
            placeholder="Live Link"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
            required
          />
          <input
            name="gitRepoLinkFrontend"
            defaultValue={project.gitRepoLinkFrontend || ""}
            placeholder="Frontend Repo Link (Optional)"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
          />
          <input
            name="gitRepoLinkBackend"
            defaultValue={project.gitRepoLinkBackend || ""}
            placeholder="Backend Repo Link (Optional)"
            className="w-full p-3 bg-gray-800 text-white rounded-lg"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? "Updating..." : "Update Project"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProjectForm;
