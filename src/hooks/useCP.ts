import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api/v1';

// Get all CP solutions
export const useGetCP = () => {
  return useQuery({
    queryKey: ['cp'],
    queryFn: async () => {
      const response = await axios.get(`${API_BASE_URL}/cp`);
      return response.data;
    },
  });
};

// Get single CP solution
export const useGetSingleCP = (id: string) => {
  return useQuery({
    queryKey: ['cp', id],
    queryFn: async () => {
      const response = await axios.get(`${API_BASE_URL}/cp/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

// Create CP solution
export const useCreateCP = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axios.post(`${API_BASE_URL}/cp`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cp'] });
    },
  });
};

// Update CP solution
export const useUpdateCP = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: any }) => {
      const response = await axios.put(`${API_BASE_URL}/cp/${id}`, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cp'] });
    },
  });
};

// Delete CP solution
export const useDeleteCP = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.delete(`${API_BASE_URL}/cp/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cp'] });
    },
  });
};
