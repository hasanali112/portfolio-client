import React from "react";
import { Plus } from "lucide-react";

interface ProjectHeaderProps {
  onAddProject: () => void;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ onAddProject }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Projects Management</h1>
        <p className="text-gray-400">Manage your portfolio projects and showcase your work.</p>
      </div>
      <button 
        onClick={onAddProject}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-200"
      >
        <Plus className="w-4 h-4" />
        <span>Add Project</span>
      </button>
    </div>
  );
};

export default ProjectHeader;
