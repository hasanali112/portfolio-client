"use client";
import React, { useState } from "react";
import { useGetCaseStudies, useCreateCaseStudy, useUpdateCaseStudy, useDeleteCaseStudy } from "@/hooks/useCaseStudies";
import { Plus, Edit, Trash2, Eye, FileText } from "lucide-react";
import ConfirmationModal from "../_components/ConfirmationModal";

const CaseStudiesPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);
  const [caseStudyToDelete, setCaseStudyToDelete] = useState<string | null>(null);

  const { data: caseStudiesData, isLoading } = useGetCaseStudies();
  const createMutation = useCreateCaseStudy();
  const updateMutation = useUpdateCaseStudy();
  const deleteMutation = useDeleteCaseStudy();

  const caseStudies = caseStudiesData?.data || [];

  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const technologiesData = formData.get("technologies");
    const technologies = technologiesData ? (technologiesData as string).split(",").map(t => t.trim()) : [];
    
    const caseStudyData = {
      data: JSON.stringify({
        title: formData.get("title"),
        description: formData.get("description"),
        category: formData.get("category"),
        challenge: formData.get("challenge"),
        solution: formData.get("solution"),
        outcome: formData.get("outcome"),
        technologies: technologies,
        link: formData.get("link"),
        githubLink: formData.get("githubLink"),
        isPublished: formData.get("isPublished") === "on",
      })
    };

    const submitData = new FormData();
    submitData.append("data", caseStudyData.data);
    
    const thumbnailFile = formData.get("thumbnail") as File;
    if (thumbnailFile && thumbnailFile.size > 0) {
      submitData.append("thumbnail", thumbnailFile);
    }

    createMutation.mutate(submitData, {
      onSuccess: () => setShowCreateForm(false)
    });
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const technologiesData = formData.get("technologies");
    const technologies = technologiesData ? (technologiesData as string).split(",").map(t => t.trim()) : [];
    
    const caseStudyData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      challenge: formData.get("challenge"),
      solution: formData.get("solution"),
      outcome: formData.get("outcome"),
      technologies: technologies,
      link: formData.get("link"),
      githubLink: formData.get("githubLink"),
      isPublished: formData.get("isPublished") === "on",
    };

    updateMutation.mutate({ id: selectedCaseStudy._id, data: caseStudyData }, {
      onSuccess: () => {
        setShowUpdateForm(false);
        setSelectedCaseStudy(null);
      }
    });
  };

  const handleDelete = (id: string) => {
    setCaseStudyToDelete(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (caseStudyToDelete) {
      deleteMutation.mutate(caseStudyToDelete, {
        onSuccess: () => {
          setShowDeleteModal(false);
          setCaseStudyToDelete(null);
        }
      });
    }
  };

  const openUpdateForm = (caseStudy: any) => {
    setSelectedCaseStudy(caseStudy);
    setShowUpdateForm(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Case Studies</h1>
          <p className="text-gray-400">Manage your case studies and project showcases</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Case Study
        </button>
      </div>

      {/* Case Studies List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((caseStudy: any) => (
          <div key={caseStudy._id} className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all">
            <div className="aspect-video bg-gray-800 relative overflow-hidden">
              {caseStudy.thumbnail ? (
                <img 
                  src={caseStudy.thumbnail} 
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <FileText className="w-12 h-12 text-gray-600" />
                </div>
              )}
              <div className="absolute top-2 right-2 flex gap-2">
                <span className={`px-2 py-1 text-xs rounded-full ${caseStudy.isPublished ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {caseStudy.isPublished ? 'Published' : 'Draft'}
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">{caseStudy.category}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{caseStudy.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2 mb-4">{caseStudy.description}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {caseStudy.technologies?.slice(0, 3).map((tech: string, idx: number) => (
                  <span key={idx} className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {caseStudy.technologies?.length > 3 && (
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                    +{caseStudy.technologies.length - 3}
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => openUpdateForm(caseStudy)}
                  className="flex-1 flex items-center justify-center gap-1 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(caseStudy._id)}
                  className="flex items-center justify-center gap-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 px-3 py-2 rounded-lg text-sm transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {caseStudies.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No case studies yet</h3>
          <p className="text-gray-400 mb-4">Create your first case study to showcase your work</p>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Add Case Study
          </button>
        </div>
      )}

      {/* Create Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-bold text-white">Create Case Study</h2>
            </div>
            <form onSubmit={handleCreate} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                <input name="title" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
                <input name="category" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                <textarea name="description" required rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Challenge</label>
                <textarea name="challenge" required rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Solution</label>
                <textarea name="solution" required rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Outcome</label>
                <textarea name="outcome" required rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Technologies (comma separated)</label>
                <input name="technologies" placeholder="React, Node.js, MongoDB" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Thumbnail</label>
                <input name="thumbnail" type="file" accept="image/*" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Live Link</label>
                <input name="link" type="url" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">GitHub Link</label>
                <input name="githubLink" type="url" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div className="flex items-center gap-2">
                <input name="isPublished" type="checkbox" id="isPublished" className="w-4 h-4" />
                <label htmlFor="isPublished" className="text-sm text-gray-400">Publish immediately</label>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setShowCreateForm(false)} className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">Cancel</button>
                <button type="submit" disabled={createMutation.isPending} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50">
                  {createMutation.isPending ? 'Creating...' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Update Modal */}
      {showUpdateForm && selectedCaseStudy && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-800">
              <h2 className="text-xl font-bold text-white">Edit Case Study</h2>
            </div>
            <form onSubmit={handleUpdate} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
                <input name="title" defaultValue={selectedCaseStudy.title} required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
                <input name="category" defaultValue={selectedCaseStudy.category} required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
                <textarea name="description" defaultValue={selectedCaseStudy.description} required rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Challenge</label>
                <textarea name="challenge" defaultValue={selectedCaseStudy.challenge} required rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Solution</label>
                <textarea name="solution" defaultValue={selectedCaseStudy.solution} required rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Outcome</label>
                <textarea name="outcome" defaultValue={selectedCaseStudy.outcome} required rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Technologies (comma separated)</label>
                <input name="technologies" defaultValue={selectedCaseStudy.technologies?.join(", ")} placeholder="React, Node.js, MongoDB" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Live Link</label>
                <input name="link" defaultValue={selectedCaseStudy.link} type="url" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">GitHub Link</label>
                <input name="githubLink" defaultValue={selectedCaseStudy.githubLink} type="url" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500" />
              </div>
              <div className="flex items-center gap-2">
                <input name="isPublished" type="checkbox" id="editIsPublished" defaultChecked={selectedCaseStudy.isPublished} className="w-4 h-4" />
                <label htmlFor="editIsPublished" className="text-sm text-gray-400">Published</label>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => {setShowUpdateForm(false); setSelectedCaseStudy(null);}} className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">Cancel</button>
                <button type="submit" disabled={updateMutation.isPending} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50">
                  {updateMutation.isPending ? 'Updating...' : 'Update'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setCaseStudyToDelete(null);
        }}
        onConfirm={confirmDelete}
        title="Delete Case Study"
        message="Are you sure you want to delete this case study? This action cannot be undone."
        confirmText="Delete"
        isLoading={deleteMutation.isPending}
      />
    </div>
  );
};

export default CaseStudiesPage;
