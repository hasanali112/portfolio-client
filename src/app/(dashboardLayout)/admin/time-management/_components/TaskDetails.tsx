'use client';

import { Task, TaskDetail } from "@/services/timeManagementService";
import { useState } from "react";

interface TaskDetailsProps {
  task: Task;
  editingId: string | null;
  addDetail: (taskId: string, newDetail: string) => void;
  toggleDetailComplete: (taskId: string, detailId: string) => void;
  updateTaskMutation: any;
}

const TaskDetails = ({ task, editingId, addDetail, toggleDetailComplete, updateTaskMutation }: TaskDetailsProps) => {
  const [newDetail, setNewDetail] = useState("");

  return (
    <div className="space-y-3">
      {/* Add Detail Form */}
      {editingId === task._id && (
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newDetail}
            onChange={(e) => setNewDetail(e.target.value)}
            onKeyPress={(e) =>
              e.key === "Enter" && addDetail(task._id!, newDetail)
            }
            placeholder="Add task detail..."
            className="flex-1 p-2 bg-gray-700 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={() => addDetail(task._id!, newDetail)}
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
  );
};

export default TaskDetails;
