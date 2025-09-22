import { getAllContacts, updateContact, deleteContact, markAsRead, markAsReplied, archiveContact, createContactInfo, getContactInfo, updateContactInfo } from "@/services/contactService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetContacts = () => {
  return useQuery({
    queryKey: ["GET_CONTACTS"],
    queryFn: getAllContacts,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};

export const useUpdateContact = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; data: any }>({
    mutationKey: ["UPDATE_CONTACT"],
    mutationFn: ({ id, data }) => updateContact(id, data),
    onSuccess: (data) => {
      toast.success(data.message || "Contact updated successfully!");
      queryClient.removeQueries({ queryKey: ["GET_CONTACTS"] });
      queryClient.invalidateQueries({ queryKey: ["GET_CONTACTS"] });
      queryClient.refetchQueries({ queryKey: ["GET_CONTACTS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to update contact");
    },
  });
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_CONTACT"],
    mutationFn: deleteContact,
    onSuccess: (data) => {
      toast.success(data.message || "Contact deleted successfully!");
      queryClient.removeQueries({ queryKey: ["GET_CONTACTS"] });
      queryClient.invalidateQueries({ queryKey: ["GET_CONTACTS"] });
      queryClient.refetchQueries({ queryKey: ["GET_CONTACTS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to delete contact");
    },
  });
};

export const useMarkAsRead = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["MARK_AS_READ"],
    mutationFn: markAsRead,
    onSuccess: (data) => {
      toast.success(data.message || "Contact marked as read!");
      queryClient.removeQueries({ queryKey: ["GET_CONTACTS"] });
      queryClient.invalidateQueries({ queryKey: ["GET_CONTACTS"] });
      queryClient.refetchQueries({ queryKey: ["GET_CONTACTS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to mark as read");
    },
  });
};

export const useMarkAsReplied = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["MARK_AS_REPLIED"],
    mutationFn: markAsReplied,
    onSuccess: (data) => {
      toast.success(data.message || "Contact marked as replied!");
      queryClient.removeQueries({ queryKey: ["GET_CONTACTS"] });
      queryClient.invalidateQueries({ queryKey: ["GET_CONTACTS"] });
      queryClient.refetchQueries({ queryKey: ["GET_CONTACTS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to mark as replied");
    },
  });
};

export const useArchiveContact = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["ARCHIVE_CONTACT"],
    mutationFn: archiveContact,
    onSuccess: (data) => {
      toast.success(data.message || "Contact archived successfully!");
      queryClient.removeQueries({ queryKey: ["GET_CONTACTS"] });
      queryClient.invalidateQueries({ queryKey: ["GET_CONTACTS"] });
      queryClient.refetchQueries({ queryKey: ["GET_CONTACTS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to archive contact");
    },
  });
};

// Contact Info Hooks
export const useGetContactInfo = () => {
  return useQuery({
    queryKey: ["GET_CONTACT_INFO"],
    queryFn: getContactInfo,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};

export const useCreateContactInfo = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, any>({
    mutationKey: ["CREATE_CONTACT_INFO"],
    mutationFn: createContactInfo,
    onSuccess: (data) => {
      toast.success(data.message || "Contact info created successfully!");
      queryClient.removeQueries({ queryKey: ["GET_CONTACT_INFO"] });
      queryClient.invalidateQueries({ queryKey: ["GET_CONTACT_INFO"] });
      queryClient.refetchQueries({ queryKey: ["GET_CONTACT_INFO"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to create contact info");
    },
  });
};

export const useUpdateContactInfo = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; data: any }>({
    mutationKey: ["UPDATE_CONTACT_INFO"],
    mutationFn: ({ id, data }) => updateContactInfo(id, data),
    onSuccess: (data) => {
      toast.success(data.message || "Contact info updated successfully!");
      queryClient.removeQueries({ queryKey: ["GET_CONTACT_INFO"] });
      queryClient.invalidateQueries({ queryKey: ["GET_CONTACT_INFO"] });
      queryClient.refetchQueries({ queryKey: ["GET_CONTACT_INFO"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to update contact info");
    },
  });
};
