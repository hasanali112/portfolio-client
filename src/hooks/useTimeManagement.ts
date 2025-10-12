import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createTask, getAllTasks, updateTask, deleteTask, Task } from "@/services/timeManagementService";

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, Omit<Task, '_id'>>({
    mutationKey: ["CREATE_TASK"],
    mutationFn: async (taskData) => await createTask(taskData),
    onSuccess: async (data) => {
      toast.success(data.message || "Task created successfully!");
      await queryClient.refetchQueries({ queryKey: ["GET_TASKS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to create task");
    },
  });
};

export const useGetTasks = () => {
  return useQuery({
    queryKey: ["GET_TASKS"],
    queryFn: getAllTasks,
    staleTime: 0,
    gcTime: 0,
    refetchOnWindowFocus: false,
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; data: Partial<Task> }>({
    mutationKey: ["UPDATE_TASK"],
    mutationFn: async ({ id, data }) => await updateTask(id, data),
    onSuccess: async (data) => {
      toast.success(data.message || "Task updated successfully!");
      await queryClient.refetchQueries({ queryKey: ["GET_TASKS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to update task");
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_TASK"],
    mutationFn: async (id) => await deleteTask(id),
    onSuccess: async (data) => {
      toast.success(data.message || "Task deleted successfully!");
      await queryClient.refetchQueries({ queryKey: ["GET_TASKS"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to delete task");
    },
  });
};
