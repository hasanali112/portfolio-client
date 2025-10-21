import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  createDailySchedule,
  getDailySchedules,
  updateDailySchedule,
  deleteDailySchedule,
  completeDailySchedule,
  startDailySchedule,
  DailySchedule,
} from "@/services/timeManagementService";

export const useCreateDailySchedule = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, Omit<DailySchedule, '_id'>>({
    mutationKey: ["CREATE_DAILY_SCHEDULE"],
    mutationFn: async (scheduleData) => await createDailySchedule(scheduleData),
    onSuccess: async (data) => {
      toast.success(data.message || "Daily schedule created successfully!");
      await queryClient.refetchQueries({ queryKey: ["GET_DAILY_SCHEDULES"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to create daily schedule");
    },
  });
};

export const useGetDailySchedules = () => {
  return useQuery({
    queryKey: ["GET_DAILY_SCHEDULES"],
    queryFn: getDailySchedules,
  });
};

export const useUpdateDailySchedule = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, { id: string; data: Partial<DailySchedule> }>(
    {
      mutationKey: ["UPDATE_DAILY_SCHEDULE"],
      mutationFn: async ({ id, data }) => await updateDailySchedule(id, data),
      onSuccess: async (data) => {
        toast.success(data.message || "Daily schedule updated successfully!");
        await queryClient.refetchQueries({ queryKey: ["GET_DAILY_SCHEDULES"] });
      },
      onError: (error: any) => {
        toast.error(error?.response?.data?.message || "Failed to update daily schedule");
      },
    }
  );
};

export const useDeleteDailySchedule = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, string>(
    {
      mutationKey: ["DELETE_DAILY_SCHEDULE"],
      mutationFn: async (id) => await deleteDailySchedule(id),
      onSuccess: async (data) => {
        toast.success(data.message || "Daily schedule deleted successfully!");
        await queryClient.refetchQueries({ queryKey: ["GET_DAILY_SCHEDULES"] });
      },
      onError: (error: any) => {
        toast.error(error?.response?.data?.message || "Failed to delete daily schedule");
      },
    }
  );
};

export const useCompleteDailySchedule = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, string>(
    {
      mutationKey: ["COMPLETE_DAILY_SCHEDULE"],
      mutationFn: async (id) => await completeDailySchedule(id),
      onSuccess: async (data) => {
        toast.success(data.message || "Task completed successfully!");
        await queryClient.refetchQueries({ queryKey: ["GET_DAILY_SCHEDULES"] });
      },
      onError: (error: any) => {
        toast.error(error?.response?.data?.message || "Failed to complete task");
      },
    }
  );
};

export const useStartDailySchedule = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, string>(
    {
      mutationKey: ["START_DAILY_SCHEDULE"],
      mutationFn: async (id) => await startDailySchedule(id),
      onSuccess: async (data) => {
        await queryClient.refetchQueries({ queryKey: ["GET_DAILY_SCHEDULES"] });
      },
      onError: (error: any) => {
        toast.error(error?.response?.data?.message || "Failed to start task");
      },
    }
  );
};
