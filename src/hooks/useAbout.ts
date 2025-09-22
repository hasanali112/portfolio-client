import { createAbout, getAbout, updateAbout, deleteAbout } from "@/services/aboutService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateAbout = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_ABOUT"],
    mutationFn: createAbout,
    onSuccess: (data) => {
      toast.success(data.message || "About information created successfully!");
      queryClient.removeQueries({ queryKey: ["GET_ABOUT"] });
      queryClient.invalidateQueries({ queryKey: ["GET_ABOUT"] });
      queryClient.refetchQueries({ queryKey: ["GET_ABOUT"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to create about information");
    },
  });
};

export const useGetAbout = () => {
  return useQuery({
    queryKey: ["GET_ABOUT"],
    queryFn: getAbout,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};

export const useUpdateAbout = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; data: any }>({
    mutationKey: ["UPDATE_ABOUT"],
    mutationFn: ({ id, data }) => updateAbout(id, data),
    onSuccess: (data) => {
      toast.success(data.message || "About information updated successfully!");
      queryClient.removeQueries({ queryKey: ["GET_ABOUT"] });
      queryClient.invalidateQueries({ queryKey: ["GET_ABOUT"] });
      queryClient.refetchQueries({ queryKey: ["GET_ABOUT"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to update about information");
    },
  });
};

export const useDeleteAbout = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_ABOUT"],
    mutationFn: deleteAbout,
    onSuccess: (data) => {
      toast.success(data.message || "About information deleted successfully!");
      queryClient.removeQueries({ queryKey: ["GET_ABOUT"] });
      queryClient.invalidateQueries({ queryKey: ["GET_ABOUT"] });
      queryClient.refetchQueries({ queryKey: ["GET_ABOUT"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to delete about information");
    },
  });
};
