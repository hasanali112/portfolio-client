import { createExperience, getAllExperiences, updateExperience, deleteExperience } from "@/services/experienceService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateExperience = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_EXPERIENCE"],
    mutationFn: createExperience,
    onSuccess: (data) => {
      toast.success(data.message || "Experience created successfully!");
      queryClient.removeQueries({ queryKey: ["GET_EXPERIENCES"] });
      queryClient.invalidateQueries({ queryKey: ["GET_EXPERIENCES"] });
      queryClient.refetchQueries({ queryKey: ["GET_EXPERIENCES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to create experience");
    },
  });
};

export const useGetExperiences = () => {
  return useQuery({
    queryKey: ["GET_EXPERIENCES"],
    queryFn: getAllExperiences,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};

export const useUpdateExperience = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; data: any }>({
    mutationKey: ["UPDATE_EXPERIENCE"],
    mutationFn: ({ id, data }) => updateExperience(id, data),
    onSuccess: (data) => {
      toast.success(data.message || "Experience updated successfully!");
      queryClient.removeQueries({ queryKey: ["GET_EXPERIENCES"] });
      queryClient.invalidateQueries({ queryKey: ["GET_EXPERIENCES"] });
      queryClient.refetchQueries({ queryKey: ["GET_EXPERIENCES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to update experience");
    },
  });
};

export const useDeleteExperience = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_EXPERIENCE"],
    mutationFn: deleteExperience,
    onSuccess: (data) => {
      toast.success(data.message || "Experience deleted successfully!");
      queryClient.removeQueries({ queryKey: ["GET_EXPERIENCES"] });
      queryClient.invalidateQueries({ queryKey: ["GET_EXPERIENCES"] });
      queryClient.refetchQueries({ queryKey: ["GET_EXPERIENCES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to delete experience");
    },
  });
};
