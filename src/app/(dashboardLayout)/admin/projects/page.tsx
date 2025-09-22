"use client";
import React, { useState } from "react";
import { useGetProjects, useCreateProject, useUpdateProject, useDeleteProject } from "@/hooks/useProjects";
import ProjectHeader from "../_components/project/ProjectHeader";
import ProjectList from "../_components/project/ProjectList";
import CreateProjectForm from "../_components/project/CreateProjectForm";
import UpdateProjectForm from "../_components/project/UpdateProjectForm";
import ProjectDetail from "../_components/project/ProjectDetail";

const ProjectsPage = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDetailView, setShowDetailView] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const { data: projectsData, isLoading } = useGetProjects();
  const createMutation = useCreateProject();
  const updateMutation = useUpdateProject();
  const deleteMutation = useDeleteProject();

  const projects = projectsData?.data || [];

  const handleCreate = (e: any) => {
    const formData = e.currentTarget.formData;
    createMutation.mutate(formData, {
      onSuccess: () => setShowCreateForm(false)
    });
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const projectData = {
      projectTitle: formData.get("projectTitle"),
      description: formData.get("description"),
      liveLink: formData.get("liveLink"),
      gitRepoLinkFrontend: formData.get("gitRepoLinkFrontend"),
      gitRepoLinkBackend: formData.get("gitRepoLinkBackend"),
    };

    updateMutation.mutate({ id: selectedProject._id, data: projectData }, {
      onSuccess: () => {
        setShowUpdateForm(false);
        setSelectedProject(null);
      }
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      deleteMutation.mutate(id);
    }
  };

  const openUpdateForm = (project: any) => {
    setSelectedProject(project);
    setShowUpdateForm(true);
  };

  const openDetailView = (project: any) => {
    setSelectedProject(project);
    setShowDetailView(true);
  };

  const closeDetailView = () => {
    setShowDetailView(false);
    setSelectedProject(null);
  };

  return (
    <div className="space-y-6">
      <ProjectHeader onAddProject={() => setShowCreateForm(true)} />
      
      <ProjectList 
        projects={projects}
        onEdit={openUpdateForm}
        onDelete={handleDelete}
        onViewDetail={openDetailView}
        isLoading={isLoading}
      />

      <CreateProjectForm
        isOpen={showCreateForm}
        onClose={() => setShowCreateForm(false)}
        onSubmit={handleCreate}
        isLoading={createMutation.isPending}
      />

      <UpdateProjectForm
        isOpen={showUpdateForm}
        onClose={() => {
          setShowUpdateForm(false);
          setSelectedProject(null);
        }}
        onSubmit={handleUpdate}
        project={selectedProject}
        isLoading={updateMutation.isPending}
      />

      <ProjectDetail
        isOpen={showDetailView}
        onClose={closeDetailView}
        project={selectedProject}
      />
    </div>
  );
};

export default ProjectsPage;
