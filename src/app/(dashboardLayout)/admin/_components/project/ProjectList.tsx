import React from "react";
import { Edit, Trash2, ExternalLink, Eye } from "lucide-react";
import TableSkeleton from "./TableSkeleton";

interface ProjectListProps {
  projects: any[];
  onEdit: (project: any) => void;
  onDelete: (id: string) => void;
  onViewDetail: (project: any) => void;
  isLoading: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, onEdit, onDelete, onViewDetail, isLoading }) => {
  if (isLoading) return <TableSkeleton />;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Project</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Technology</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Links</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {projects.map((project: any) => (
              <tr key={project._id} className="hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-white">{project.projectTitle}</div>
                  <div className="text-xs text-gray-400 mt-1">{project.description?.substring(0, 50)}...</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technology?.slice(0, 3).map((tech: any, idx: number) => (
                      <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                        {tech.technologyName}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <a href={project.liveLink} target="_blank" className="text-blue-400 hover:text-blue-300 text-sm">
                    Live Demo
                  </a>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => onViewDetail(project)}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => window.open(project.liveLink, '_blank')}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      title="Open Live Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onEdit(project)}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      title="Edit Project"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onDelete(project._id)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;
