import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  createLinkedInConnection,
  getAllLinkedInConnections,
  updateLinkedInConnection,
  deleteLinkedInConnection,
  checkPendingConnections,
  sendDM,
  startOutreach,
} from "@/services/linkedinConnectionService";

export const useGetLinkedInConnections = (params?: {
  page?: number;
  limit?: number;
  search?: string;
  reqStatus?: string;
  dmStatus?: string;
}) => {
  return useQuery({
    queryKey: ["GET_LINKEDIN_CONNECTIONS", params],
    queryFn: async () => await getAllLinkedInConnections(params),
  });
};

export const useCreateLinkedInConnection = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, any>({
    mutationKey: ["CREATE_LINKEDIN_CONNECTION"],
    mutationFn: async (data) => await createLinkedInConnection(data),
    onSuccess: (data) => {
      toast.success(data.message || "LinkedIn connection created successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_LINKEDIN_CONNECTIONS"] });
      queryClient.refetchQueries({ queryKey: ["GET_LINKEDIN_CONNECTIONS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to create connection");
    },
  });
};

export const useUpdateLinkedInConnection = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; data: any }>({
    mutationKey: ["UPDATE_LINKEDIN_CONNECTION"],
    mutationFn: async ({ id, data }) => await updateLinkedInConnection(id, data),
    onSuccess: (data) => {
      toast.success(data.message || "LinkedIn connection updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_LINKEDIN_CONNECTIONS"] });
      queryClient.refetchQueries({ queryKey: ["GET_LINKEDIN_CONNECTIONS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to update connection");
    },
  });
};

export const useDeleteLinkedInConnection = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_LINKEDIN_CONNECTION"],
    mutationFn: async (id) => await deleteLinkedInConnection(id),
    onSuccess: (data) => {
      toast.success(data.message || "LinkedIn connection deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_LINKEDIN_CONNECTIONS"] });
      queryClient.refetchQueries({ queryKey: ["GET_LINKEDIN_CONNECTIONS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to delete connection");
    },
  });
};

export const useSendDM = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["SEND_DM"],
    mutationFn: async (id) => await sendDM(id),
    onSuccess: (data) => {
      toast.success(data.message || "DM sent successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_LINKEDIN_CONNECTIONS"] });
      queryClient.refetchQueries({ queryKey: ["GET_LINKEDIN_CONNECTIONS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to send DM");
    },
  });
};

export const useStartOutreach = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["START_OUTREACH"],
    mutationFn: async (id) => await startOutreach(id),
    onSuccess: (data) => {
      toast.success(data.message || "Outreach started successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_LINKEDIN_CONNECTIONS"] });
      queryClient.refetchQueries({ queryKey: ["GET_LINKEDIN_CONNECTIONS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to start outreach");
    },
  });
};
