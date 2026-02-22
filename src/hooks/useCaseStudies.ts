import { createCaseStudy, getAllCaseStudies, updateCaseStudy, deleteCaseStudy } from "@/services/caseStudyService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateCaseStudy = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_CASE_STUDY"],
    mutationFn: createCaseStudy,
    onSuccess: (data) => {
      toast.success(data.message || "Case study created successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_CASE_STUDIES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to create case study");
    },
  });
};

export const useGetCaseStudies = () => {
  return useQuery({
    queryKey: ["GET_CASE_STUDIES"],
    queryFn: getAllCaseStudies,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const useUpdateCaseStudy = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; data: any }>({
    mutationKey: ["UPDATE_CASE_STUDY"],
    mutationFn: ({ id, data }) => updateCaseStudy(id, data),
    onSuccess: (data) => {
      toast.success(data.message || "Case study updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_CASE_STUDIES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to update case study");
    },
  });
};

export const useDeleteCaseStudy = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_CASE_STUDY"],
    mutationFn: deleteCaseStudy,
    onSuccess: (data) => {
      toast.success(data.message || "Case study deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_CASE_STUDIES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to delete case study");
    },
  });
};
