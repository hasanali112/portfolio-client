import axiosInstance from "@/app/lib/AxiosInstance";

export interface TaskDetail {
  id: string;
  text: string;
  completed: boolean;
}

export interface TimerEntry {
  taskName: string;
  duration: number; // in minutes
  completedAt: Date;
}

export interface Task {
  _id?: string;
  name: string;
  date: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'Started' | 'Completed';
  details: TaskDetail[];
  timers?: TimerEntry[];
}

export interface WeekendSchedule {
  _id?: string;
  day: string;
  focus: string;
  type: string;
  topic: string;
}

export interface DailySchedule {
  _id?: string;
  time: string;
  icon: string;
  task: string;
  description: string;
  startTime?: string;
  endTime?: string;
  duration?: number; // in minutes
  completed?: boolean;
  status?: 'Pending' | 'Running' | 'Complete';
}

export const createTask = async (taskData: Omit<Task, '_id'>) => {
  try {
    const { data } = await axiosInstance.post("/tasks", taskData);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllTasks = async () => {
  try {
    const { data } = await axiosInstance.get("/tasks");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateTask = async (id: string, taskData: Partial<Task>) => {
  try {
    const { data } = await axiosInstance.put(`/tasks/${id}`, taskData);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteTask = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/tasks/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createWeekendSchedule = async (scheduleData: Omit<WeekendSchedule, '_id'>) => {
  try {
    const { data } = await axiosInstance.post("/tasks/weekend-schedule", scheduleData);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getWeekendSchedules = async () => {
  try {
    const { data } = await axiosInstance.get("/tasks/weekend-schedule");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateWeekendSchedule = async (id: string, scheduleData: Partial<WeekendSchedule>) => {
  try {
    const { data } = await axiosInstance.put(`/tasks/weekend-schedule/${id}`, scheduleData);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteWeekendSchedule = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/tasks/weekend-schedule/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createDailySchedule = async (scheduleData: Omit<DailySchedule, '_id'>) => {
  try {
    const { data } = await axiosInstance.post("/tasks/daily-schedule", scheduleData);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getDailySchedules = async () => {
  try {
    const { data } = await axiosInstance.get("/tasks/daily-schedule");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateDailySchedule = async (id: string, scheduleData: Partial<DailySchedule>) => {
  try {
    const { data } = await axiosInstance.put(`/tasks/daily-schedule/${id}`, scheduleData);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteDailySchedule = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/tasks/daily-schedule/${id}`);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const completeDailySchedule = async (id: string) => {
  try {
    const { data } = await axiosInstance.put(`/tasks/daily-schedule/${id}`, { status: 'Complete' });
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const startDailySchedule = async (id: string) => {
  try {
    const { data } = await axiosInstance.put(`/tasks/daily-schedule/${id}`, { status: 'Running' });
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};