"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import AddSkillForm from "./AddSkillForm";
import EditSkillModal from "./EditSkillModal";
import SkillsList from "./SkillsList";

interface Skill {
  _id: string;
  image: string;
  title: string;
  skillProficiency: number;
  type: string;
}

const SkillsManagement = () => {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);

  const handleEdit = (skill: Skill) => {
    setEditingSkill(skill);
    setIsEditModalOpen(true);
  };

  const handleDelete = (skillId: string) => {
    if (confirm("Are you sure you want to delete this skill?")) {
      // TODO: Implement delete functionality
      console.log("Delete skill:", skillId);
    }
  };

  const handleCloseEdit = () => {
    setIsEditModalOpen(false);
    setEditingSkill(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Skills Management</h1>
        <button
          onClick={() => setIsAddFormOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Skill</span>
        </button>
      </div>

      {/* Skills List */}
      <SkillsList onEdit={handleEdit} onDelete={handleDelete} />

      {/* Add Form Modal */}
      <AddSkillForm
        isOpen={isAddFormOpen}
        onClose={() => setIsAddFormOpen(false)}
      />

      {/* Edit Modal */}
      <EditSkillModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEdit}
        skill={editingSkill}
      />
    </div>
  );
};

export default SkillsManagement;
