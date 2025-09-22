import { createProject, getAllProjects, updateProject, deleteProject } from "@/services/projectService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_PROJECT"],
    mutationFn: createProject,
    onSuccess: (data) => {
      toast.success(data.message || "Project created successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_PROJECTS"] });
      queryClient.refetchQueries({ queryKey: ["GET_PROJECTS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to create project");
    },
  });
};

export const useGetProjects = () => {
  return useQuery({
    queryKey: ["GET_PROJECTS"],
    queryFn: getAllProjects,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; data: any }>({
    mutationKey: ["UPDATE_PROJECT"],
    mutationFn: ({ id, data }) => updateProject(id, data),
    onSuccess: (data) => {
      toast.success(data.message || "Project updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_PROJECTS"] });
      queryClient.refetchQueries({ queryKey: ["GET_PROJECTS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to update project");
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_PROJECT"],
    mutationFn: deleteProject,
    onSuccess: (data) => {
      toast.success(data.message || "Project deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_PROJECTS"] });
      queryClient.refetchQueries({ queryKey: ["GET_PROJECTS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to delete project");
    },
  });
};
