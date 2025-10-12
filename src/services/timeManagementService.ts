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
