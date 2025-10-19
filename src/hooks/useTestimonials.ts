import { createTestimonial, getAllTestimonials, updateTestimonial, deleteTestimonial, getTestimonialsForHome } from "@/services/testimonialService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateTestimonial = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_TESTIMONIAL"],
    mutationFn: createTestimonial,
    onSuccess: (data) => {
      toast.success(data.message || "Testimonial created successfully!");
      queryClient.removeQueries({ queryKey: ["GET_TESTIMONIALS"] });
      queryClient.invalidateQueries({ queryKey: ["GET_TESTIMONIALS"] });
      queryClient.refetchQueries({ queryKey: ["GET_TESTIMONIALS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to create testimonial");
    },
  });
};

export const useGetTestimonials = () => {
  return useQuery({
    queryKey: ["GET_TESTIMONIALS"],
    queryFn: getAllTestimonials,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};

export const useUpdateTestimonial = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; data: any }>({
    mutationKey: ["UPDATE_TESTIMONIAL"],
    mutationFn: ({ id, data }) => updateTestimonial(id, data),
    onSuccess: (data) => {
      toast.success(data.message || "Testimonial updated successfully!");
      queryClient.removeQueries({ queryKey: ["GET_TESTIMONIALS"] });
      queryClient.invalidateQueries({ queryKey: ["GET_TESTIMONIALS"] });
      queryClient.refetchQueries({ queryKey: ["GET_TESTIMONIALS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to update testimonial");
    },
  });
};

export const useGetTestimonialsForHome = () => {
  return useQuery({
    queryKey: ["GET_TESTIMONIALS_FOR_HOME"],
    queryFn: getTestimonialsForHome,
  });
};

export const useDeleteTestimonial = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_TESTIMONIAL"],
    mutationFn: deleteTestimonial,
    onSuccess: (data) => {
      toast.success(data.message || "Testimonial deleted successfully!");
      queryClient.removeQueries({ queryKey: ["GET_TESTIMONIALS"] });
      queryClient.invalidateQueries({ queryKey: ["GET_TESTIMONIALS"] });
      queryClient.refetchQueries({ queryKey: ["GET_TESTIMONIALS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to delete testimonial");
    },
  });
};
