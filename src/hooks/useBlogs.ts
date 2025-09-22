import { createBlog, getAllBlogs, updateBlog, deleteBlog } from "@/services/blogService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_BLOG"],
    mutationFn: createBlog,
    onSuccess: (data) => {
      toast.success(data.message || "Blog created successfully!");
      // More aggressive cache refresh
      queryClient.removeQueries({ queryKey: ["GET_BLOGS"] });
      queryClient.invalidateQueries({ queryKey: ["GET_BLOGS"] });
      queryClient.refetchQueries({ queryKey: ["GET_BLOGS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to create blog");
    },
  });
};

export const useGetBlogs = () => {
  return useQuery({
    queryKey: ["GET_BLOGS"],
    queryFn: getAllBlogs,
    staleTime: 0,
    gcTime: 0, // Previously cacheTime
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; data: any }>({
    mutationKey: ["UPDATE_BLOG"],
    mutationFn: ({ id, data }) => updateBlog(id, data),
    onSuccess: (data) => {
      toast.success(data.message || "Blog updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_BLOGS"] });
      queryClient.refetchQueries({ queryKey: ["GET_BLOGS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to update blog");
    },
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_BLOG"],
    mutationFn: deleteBlog,
    onSuccess: (data) => {
      toast.success(data.message || "Blog deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_BLOGS"] });
      queryClient.refetchQueries({ queryKey: ["GET_BLOGS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to delete blog");
    },
  });
};
