"use client";
import { useGetProjects } from "@/hooks/useProjects";
import { IProject } from "@/types/project";
import ProjectDetailClient from "./ProjectDetailClient";

export default function ProjectDetailClientWrapper({ id }: { id: string }) {
  const { data: projectData, isLoading } = useGetProjects();
  const project = projectData?.data?.find((p: IProject) => p._id === id);

  return <ProjectDetailClient project={project} isLoading={isLoading} />;
}
