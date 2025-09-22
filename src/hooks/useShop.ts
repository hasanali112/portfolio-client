import { createProduct, getAllProducts, updateProduct, deleteProduct } from "@/services/shopService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_PRODUCT"],
    mutationFn: createProduct,
    onSuccess: (data) => {
      toast.success(data.message || "Product created successfully!");
      queryClient.removeQueries({ queryKey: ["GET_PRODUCTS"] });
      queryClient.invalidateQueries({ queryKey: ["GET_PRODUCTS"] });
      queryClient.refetchQueries({ queryKey: ["GET_PRODUCTS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to create product");
    },
  });
};

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["GET_PRODUCTS"],
    queryFn: getAllProducts,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; data: any }>({
    mutationKey: ["UPDATE_PRODUCT"],
    mutationFn: ({ id, data }) => updateProduct(id, data),
    onSuccess: (data) => {
      toast.success(data.message || "Product updated successfully!");
      queryClient.removeQueries({ queryKey: ["GET_PRODUCTS"] });
      queryClient.invalidateQueries({ queryKey: ["GET_PRODUCTS"] });
      queryClient.refetchQueries({ queryKey: ["GET_PRODUCTS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to update product");
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_PRODUCT"],
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      toast.success(data.message || "Product deleted successfully!");
      queryClient.removeQueries({ queryKey: ["GET_PRODUCTS"] });
      queryClient.invalidateQueries({ queryKey: ["GET_PRODUCTS"] });
      queryClient.refetchQueries({ queryKey: ["GET_PRODUCTS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to delete product");
    },
  });
};
