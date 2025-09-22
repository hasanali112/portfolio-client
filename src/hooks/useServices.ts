import { createService, getAllServices, updateService, deleteService } from "@/services/servicesService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateService = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_SERVICE"],
    mutationFn: createService,
    onSuccess: (data) => {
      toast.success(data.message || "Service created successfully!");
      queryClient.removeQueries({ queryKey: ["GET_SERVICES"] });
      queryClient.invalidateQueries({ queryKey: ["GET_SERVICES"] });
      queryClient.refetchQueries({ queryKey: ["GET_SERVICES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to create service");
    },
  });
};

export const useGetServices = () => {
  return useQuery({
    queryKey: ["GET_SERVICES"],
    queryFn: getAllServices,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};

export const useUpdateService = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; data: FormData | any }>({
    mutationKey: ["UPDATE_SERVICE"],
    mutationFn: ({ id, data }) => updateService(id, data),
    onSuccess: (data) => {
      toast.success(data.message || "Service updated successfully!");
      queryClient.removeQueries({ queryKey: ["GET_SERVICES"] });
      queryClient.invalidateQueries({ queryKey: ["GET_SERVICES"] });
      queryClient.refetchQueries({ queryKey: ["GET_SERVICES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to update service");
    },
  });
};

export const useDeleteService = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_SERVICE"],
    mutationFn: deleteService,
    onSuccess: (data) => {
      toast.success(data.message || "Service deleted successfully!");
      queryClient.removeQueries({ queryKey: ["GET_SERVICES"] });
      queryClient.invalidateQueries({ queryKey: ["GET_SERVICES"] });
      queryClient.refetchQueries({ queryKey: ["GET_SERVICES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to delete service");
    },
  });
};
