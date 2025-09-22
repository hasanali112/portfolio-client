import React, { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import { useGetSkills } from "../../../../hooks/useSkills";
import SkillsTableSkeleton from "./SkillsTableSkeleton";
import Pagination from "./Pagination";

interface Skill {
  _id: string;
  image: string;
  title: string;
  skillProficiency: number;
  type: string;
}

interface SkillsListProps {
  onEdit: (skill: Skill) => void;
  onDelete: (skillId: string) => void;
}

const SkillsList = ({ onEdit, onDelete }: SkillsListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: skillsData, isLoading, error } = useGetSkills(currentPage, 10);

  if (isLoading) return <SkillsTableSkeleton />;
  if (error) return <div className="text-red-500">Error loading skills</div>;

  const skills = skillsData?.data || [];
  const meta = skillsData?.meta || {};

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">Skills List</h2>
      
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4">Image</th>
              <th className="text-left py-3 px-4">Title</th>
              <th className="text-left py-3 px-4">Type</th>
              <th className="text-left py-3 px-4">Proficiency</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill: Skill) => (
              <tr key={skill._id} className="border-b border-gray-800 hover:bg-gray-800">
                <td className="py-3 px-4">
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    width={40}
                    height={40}
                    className="rounded-lg object-cover"
                  />
                </td>
                <td className="py-3 px-4 font-medium">{skill.title}</td>
                <td className="py-3 px-4">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                    {skill.type}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        style={{ width: `${skill.skillProficiency}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{skill.skillProficiency}%</span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => onEdit(skill)}
                      className="text-blue-400 hover:text-blue-300 p-1"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onDelete(skill._id)}
                      className="text-red-400 hover:text-red-300 p-1"
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

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {skills.map((skill: Skill) => (
          <div key={skill._id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={50}
                  height={50}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-white font-medium">{skill.title}</h3>
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    {skill.type}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(skill)}
                  className="text-blue-400 hover:text-blue-300 p-1"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDelete(skill._id)}
                  className="text-red-400 hover:text-red-300 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-300">
                <span>Proficiency</span>
                <span>{skill.skillProficiency}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                  style={{ width: `${skill.skillProficiency}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {skills.length === 0 && (
        <div className="text-center text-gray-400 py-8">
          No skills found. Add your first skill!
        </div>
      )}

      {/* Pagination */}
      {meta.totalPage > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={meta.totalPage || 1}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Debug info - remove after testing */}
      <div className="text-xs text-gray-500 mt-2">
        Page: {meta.page}, Total: {meta.total}, TotalPages: {meta.totalPage}
      </div>
    </div>
  );
};

export default SkillsList;
