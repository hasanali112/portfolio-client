"use client";

import { useCreateTask } from "@/hooks/useTimeManagement";
import { useState } from "react";

const TaskForm = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");

  const createTaskMutation = useCreateTask();

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
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8">
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
  );
};

export default TaskForm;
