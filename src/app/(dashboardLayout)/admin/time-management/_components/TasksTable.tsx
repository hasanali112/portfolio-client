'use client';

import { Task } from "@/services/timeManagementService";
import { ChevronDown, ChevronRight, Edit, Play, Timer, Trash2 } from "lucide-react";
import Link from "next/link";
import TaskDetails from "./TaskDetails";

interface TasksTableProps {
  tasks: Task[];
  expandedTasks: Set<string>;
  editingId: string | null;
  toggleExpand: (id: string) => void;
  startTask: (id: string) => void;
  setEditingId: (id: string | null) => void;
  deleteTask: (id: string) => void;
  addDetail: (taskId: string, newDetail: string) => void;
  toggleDetailComplete: (taskId: string, detailId: string) => void;
  updateTaskMutation: any;
  deleteTaskMutation: any;
}

const TasksTable = ({ tasks, expandedTasks, editingId, toggleExpand, startTask, setEditingId, deleteTask, addDetail, toggleDetailComplete, updateTaskMutation, deleteTaskMutation }: TasksTableProps) => {
  return (
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
                {expandedTasks.has(task._id!) && (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 bg-gray-800/30">
                      <TaskDetails task={task} editingId={editingId} addDetail={addDetail} toggleDetailComplete={toggleDetailComplete} updateTaskMutation={updateTaskMutation} />
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
  );
};

export default TasksTable;