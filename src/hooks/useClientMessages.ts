import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createClientMessage, getAllClientMessages, updateMessageStatus, deleteClientMessage } from "@/services/clientMessageService";

export const useCreateClientMessage = () => {
  return useMutation<any, Error, any>({
    mutationKey: ["CREATE_CLIENT_MESSAGE"],
    mutationFn: createClientMessage,
    onSuccess: (data) => {
      toast.success(data.message || "Message sent successfully!");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to send message");
    },
  });
};

export const useGetClientMessages = () => {
  return useQuery({
    queryKey: ["GET_CLIENT_MESSAGES"],
    queryFn: getAllClientMessages,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
};

export const useUpdateMessageStatus = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; status: string }>({
    mutationKey: ["UPDATE_MESSAGE_STATUS"],
    mutationFn: ({ id, status }) => updateMessageStatus(id, status),
    onSuccess: (data) => {
      toast.success(data.message || "Status updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_CLIENT_MESSAGES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to update status");
    },
  });
};

export const useDeleteClientMessage = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_CLIENT_MESSAGE"],
    mutationFn: deleteClientMessage,
    onSuccess: (data) => {
      toast.success(data.message || "Message deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_CLIENT_MESSAGES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to delete message");
    },
  });
};
