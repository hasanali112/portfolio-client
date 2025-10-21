import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { createWeekendSchedule, getWeekendSchedules, updateWeekendSchedule, deleteWeekendSchedule, WeekendSchedule } from "@/services/timeManagementService";

export const useCreateWeekendSchedule = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, Omit<WeekendSchedule, '_id'>>({
    mutationKey: ["CREATE_WEEKEND_SCHEDULE"],
    mutationFn: async (scheduleData) => await createWeekendSchedule(scheduleData),
    onSuccess: async (data) => {
      toast.success(data.message || "Weekend schedule created successfully!");
      await queryClient.refetchQueries({ queryKey: ["GET_WEEKEND_SCHEDULES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to create weekend schedule");
    },
  });
};

export const useGetWeekendSchedules = () => {
  return useQuery({
    queryKey: ["GET_WEEKEND_SCHEDULES"],
    queryFn: getWeekendSchedules,
  });
};

export const useUpdateWeekendSchedule = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, { id: string; data: Partial<WeekendSchedule> }>({
    mutationKey: ["UPDATE_WEEKEND_SCHEDULE"],
    mutationFn: async ({ id, data }) => await updateWeekendSchedule(id, data),
    onSuccess: async (data) => {
      toast.success(data.message || "Weekend schedule updated successfully!");
      await queryClient.refetchQueries({ queryKey: ["GET_WEEKEND_SCHEDULES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to update weekend schedule");
    },
  });
};

export const useDeleteWeekendSchedule = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_WEEKEND_SCHEDULE"],
    mutationFn: async (id) => await deleteWeekendSchedule(id),
    onSuccess: async (data) => {
      toast.success(data.message || "Weekend schedule deleted successfully!");
      await queryClient.refetchQueries({ queryKey: ["GET_WEEKEND_SCHEDULES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to delete weekend schedule");
    },
  });
};