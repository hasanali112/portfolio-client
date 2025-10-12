"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Edit,
  Trash2,
  Play,
  ChevronDown,
  ChevronRight,
  Timer,
} from "lucide-react";
import {
  useCreateTask,
  useGetTasks,
  useUpdateTask,
  useDeleteTask,
} from "@/hooks/useTimeManagement";
import { Task, TaskDetail } from "@/services/timeManagementService";

export default function TimeManagement() {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newDetail, setNewDetail] = useState("");
  const [expandedTasks, setExpandedTasks] = useState<Set<string>>(new Set());

  const { data: tasksData, isLoading, refetch } = useGetTasks();
  const createTaskMutation = useCreateTask();
  const updateTaskMutation = useUpdateTask();
  const deleteTaskMutation = useDeleteTask();

  const tasks = (tasksData as { data?: Task[] })?.data || [];

  const addTask = async () => {
    if (!taskName.trim()) return;

    try {
      await createTaskMutation.mutateAsync({
        name: taskName.trim(),
        date: new Date(taskDate).toLocaleDateString(),
        priority,
        status: "Pending",
        details: [],
        timers: [],
      });

      setTaskName("");
      await refetch();
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

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

  const addDetail = async (taskId: string) => {
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

      setNewDetail("");
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

      {/* Add Task Form */}
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-white">Add New Task</h2>
        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addTask()}
            placeholder="Enter task name..."
            className="flex-1 min-w-[200px] p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          />
          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as "High" | "Medium" | "Low")
            }
            className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
          >
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
          <button
            onClick={addTask}
            disabled={createTaskMutation.isPending}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
          >
            {createTaskMutation.isPending ? "Adding..." : "Add Task"}
          </button>
        </div>
      </div>

      {/* Tasks Table */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Task Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Priority
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {tasks.map((task: Task) => (
                <>
                  <tr key={task._id} className="hover:bg-gray-800/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleExpand(task._id!)}
                          className="text-gray-400 hover:text-white"
                        >
                          {expandedTasks.has(task._id!) ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>
                        <span
                          className="text-white cursor-pointer"
                          onClick={() => toggleExpand(task._id!)}
                        >
                          {task.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-300">{task.date}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          task.priority === "High"
                            ? "bg-red-500/20 text-red-400"
                            : task.priority === "Medium"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          task.status === "Started"
                            ? "bg-blue-500/20 text-blue-400"
                            : task.status === "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {task.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Link
                          href="/admin/timer"
                          className="p-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
                          title="Open Timer"
                        >
                          <Timer className="w-4 h-4" />
                        </Link>
                        {task.status === "Pending" && (
                          <button
                            onClick={() => startTask(task._id!)}
                            disabled={updateTaskMutation.isPending}
                            className="p-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors disabled:opacity-50"
                            title="Start Task"
                          >
                            <Play className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => setEditingId(task._id!)}
                          className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                          title="Update Task"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteTask(task._id!)}
                          disabled={deleteTaskMutation.isPending}
                          className="p-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors disabled:opacity-50"
                          title="Delete Task"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Expanded Details */}
                  {expandedTasks.has(task._id!) && (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 bg-gray-800/30">
                        <div className="space-y-3">
                          {/* Add Detail Form */}
                          {editingId === task._id && (
                            <div className="flex gap-2 mb-4">
                              <input
                                type="text"
                                value={newDetail}
                                onChange={(e) => setNewDetail(e.target.value)}
                                onKeyPress={(e) =>
                                  e.key === "Enter" && addDetail(task._id!)
                                }
                                placeholder="Add task detail..."
                                className="flex-1 p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                              />
                              <button
                                onClick={() => addDetail(task._id!)}
                                disabled={updateTaskMutation.isPending}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                              >
                                Add
                              </button>
                            </div>
                          )}

                          {/* Detail List */}
                          <div className="space-y-2">
                            {task.details
                              .filter((detail: TaskDetail) => !detail.completed)
                              .map((detail: TaskDetail) => (
                                <div
                                  key={detail.id}
                                  className="flex items-center gap-3"
                                >
                                  <input
                                    type="checkbox"
                                    checked={detail.completed}
                                    onChange={() =>
                                      toggleDetailComplete(task._id!, detail.id)
                                    }
                                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                                  />
                                  <span className="text-gray-300">
                                    {detail.text}
                                  </span>
                                </div>
                              ))}
                            {task.details.filter(
                              (detail: TaskDetail) => !detail.completed
                            ).length === 0 &&
                              task.details.length > 0 && (
                                <div className="text-center py-4 text-green-400">
                                  All tasks completed! 🎉
                                </div>
                              )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
          {tasks.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              No tasks yet. Add your first task above.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
