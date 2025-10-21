"use client";

import { useState } from "react";
import {
  useGetTasks,
  useUpdateTask,
  useDeleteTask,
} from "@/hooks/useTimeManagement";
import { Task, TaskDetail } from "@/services/timeManagementService";
import WeekendTable from "@/component/WeekendTable";
import WeekendScheduleForm from "@/component/WeekendScheduleForm";
import TaskForm from "./_components/TaskForm";
import TasksTable from "./_components/TasksTable";
import DailySchedule from "./_components/DailySchedule/DailySchedule";

export default function TimeManagement() {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [expandedTasks, setExpandedTasks] = useState<Set<string>>(new Set());

  const { data: tasksData, isLoading, refetch } = useGetTasks();
  const updateTaskMutation = useUpdateTask();
  const deleteTaskMutation = useDeleteTask();

  const tasks = (tasksData as { data?: Task[] })?.data || [];

  const deleteTask = async (id: string) => {
    try {
      await deleteTaskMutation.mutateAsync(id);
      await refetch();
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const startTask = async (id: string) => {
    try {
      await updateTaskMutation.mutateAsync({
        id,
        data: { status: "Started" },
      });
      await refetch();
    } catch (error) {
      console.error("Failed to start task:", error);
    }
  };

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedTasks);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedTasks(newExpanded);
  };

  const addDetail = async (taskId: string, newDetail: string) => {
    if (!newDetail.trim()) return;

    const task = tasks.find((t: Task) => t._id === taskId);
    if (!task) return;

    const updatedDetails = [
      ...task.details,
      {
        id: Date.now().toString(),
        text: newDetail.trim(),
        completed: false,
      },
    ];

    try {
      await updateTaskMutation.mutateAsync({
        id: taskId,
        data: { details: updatedDetails },
      });

      await refetch();
    } catch (error) {
      console.error("Failed to add detail:", error);
    }
  };

  const toggleDetailComplete = async (taskId: string, detailId: string) => {
    const task = tasks.find((t: Task) => t._id === taskId);
    if (!task) return;

    const updatedDetails = task.details.map((detail: TaskDetail) =>
      detail.id === detailId
        ? { ...detail, completed: !detail.completed }
        : detail
    );

    try {
      await updateTaskMutation.mutateAsync({
        id: taskId,
        data: { details: updatedDetails },
      });
      await refetch();
    } catch (error) {
      console.error("Failed to update detail:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 bg-black min-h-screen text-white flex items-center justify-center">
        <div className="text-xl">Loading tasks...</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8 text-white">Time Management</h1>

      <WeekendScheduleForm />
      <WeekendTable />
      <DailySchedule />
    </div>
  );
}
