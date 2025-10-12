"use client";
import { useState, useEffect, useCallback } from "react";
import { Play, Pause, Square, RotateCcw, Clock } from "lucide-react";
import { toast } from "sonner";
import { useGetTasks, useUpdateTask } from "@/hooks/useTimeManagement";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [calculatedMinutes, setCalculatedMinutes] = useState(0);
  const [isCountdown, setIsCountdown] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState("");

  type TaskDetail = { id: string; text: string; completed: boolean };
  type Task = {
    _id: string;
    name: string;
    details?: TaskDetail[];
    timers?: any[];
  };
  type TasksResponse = { data: Task[] };

  const { data: tasksData = { data: [] } } = useGetTasks() as {
    data: TasksResponse;
  };
  const updateTaskMutation = useUpdateTask();
  const tasks = (tasksData as TasksResponse).data;

  const saveTimerData = useCallback(async () => {
    if (!selectedTaskId || !taskName || calculatedMinutes === 0) return;

    const task = tasks.find((t) => t._id === selectedTaskId);
    if (!task) return;

    const newTimerEntry = {
      taskName,
      duration: calculatedMinutes,
      completedAt: new Date(),
    };

    const updatedTimers = [...(task.timers || []), newTimerEntry];

    try {
      await updateTaskMutation.mutateAsync({
        id: selectedTaskId,
        data: { timers: updatedTimers },
      });
      toast.success(`Timer saved for task: ${taskName}`);
    } catch (error) {
      toast.error("Failed to save timer data");
    }
  }, [selectedTaskId, taskName, calculatedMinutes, tasks, updateTaskMutation]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (isCountdown && prev <= 1) {
            setIsRunning(false);
            toast.success("Timer finished! 🎉");
            saveTimerData();
            setStartTime("");
            setEndTime("");
            setCalculatedMinutes(0);
            setIsCountdown(false);
            setTaskName("");
            setSelectedTaskId("");
            return 0;
          }
          return isCountdown ? prev - 1 : prev + 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, isCountdown, saveTimerData]);

  const calculateTime = () => {
    if (!startTime || !endTime) return;

    const [startHour, startMin] = startTime.split(":").map(Number);
    const [endHour, endMin] = endTime.split(":").map(Number);

    const startMinutes = startHour * 60 + startMin;
    const endMinutes = endHour * 60 + endMin;

    let diffMinutes = endMinutes - startMinutes;
    if (diffMinutes < 0) diffMinutes += 24 * 60;

    setCalculatedMinutes(diffMinutes);
    setSeconds(diffMinutes * 60);
    setIsCountdown(true);
    setIsRunning(true);
  };

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setSeconds(0);
    setIsCountdown(false);
  };

  const handleReset = () => {
    setSeconds(isCountdown ? calculatedMinutes * 60 : 0);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
      {/* Time Input Section */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-white flex items-center gap-2">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
          Set Timer
        </h2>

        {/* Task Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Task & Detail
          </label>
          <select
            value={selectedTaskId}
            onChange={(e) => {
              const [taskId, detailText] = e.target.value.split("|||");
              setSelectedTaskId(taskId);
              const task = tasks.find((t) => t._id === taskId);
              if (task && detailText) {
                setTaskName(`${task.name} - ${detailText}`);
              } else if (task) {
                setTaskName(task.name);
              }
            }}
            className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a task...</option>
            {tasks.map((task) => (
              <optgroup key={task._id} label={task.name}>
                <option value={task._id}>{task.name} (Main Task)</option>
                {task.details
                  ?.filter((detail) => !detail.completed)
                  .map((detail) => (
                    <option
                      key={`${task._id}-${detail.id}`}
                      value={`${task._id}|||${detail.text}`}
                    >
                      └ {detail.text}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* Custom Task Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Task Name
          </label>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter task name..."
            className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm sm:text-base placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-3 sm:gap-4 sm:items-end">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Start Time
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              End Time
            </label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-2 sm:p-3 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            onClick={calculateTime}
            disabled={!startTime || !endTime || !taskName.trim()}
            className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Calculate & Start
          </button>
        </div>

        {calculatedMinutes > 0 && (
          <div className="mt-4 p-3 bg-gray-800 rounded-lg">
            <span className="text-green-400 font-medium text-sm sm:text-base">
              Duration: {calculatedMinutes} minutes (
              {Math.floor(calculatedMinutes / 60)}h {calculatedMinutes % 60}m)
            </span>
          </div>
        )}
      </div>

      {/* Timer Display */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 sm:p-8 text-center">
        <div className="mb-6 sm:mb-8">
          <div className="text-3xl sm:text-4xl md:text-6xl font-mono text-blue-400 mb-4 break-all">
            {formatTime(seconds)}
          </div>
          <div className="text-gray-400 text-sm sm:text-base">
            {isRunning
              ? isCountdown
                ? "Countdown Running..."
                : "Timer Running..."
              : "Stopped"}
          </div>
          {isCountdown && (
            <div className="text-xs sm:text-sm text-yellow-400 mt-2">
              Countdown Mode - Timer will stop at 00:00:00
            </div>
          )}
          {taskName && (
            <div className="text-xs sm:text-sm text-blue-400 mt-2 break-words px-2">
              Task: {taskName}
            </div>
          )}
        </div>

        {/* Timer Controls */}
        <div className="grid grid-cols-2 sm:flex gap-2 sm:gap-4 justify-center">
          {!isRunning ? (
            <button
              onClick={handleStart}
              disabled={seconds === 0 && !isCountdown}
              className="px-3 sm:px-6 py-2 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Start</span>
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="px-3 sm:px-6 py-2 sm:py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
            >
              <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Pause</span>
            </button>
          )}

          <button
            onClick={handleStop}
            className="px-3 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base"
          >
            <Square className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Stop</span>
          </button>

          <button
            onClick={handleReset}
            className="px-3 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base col-span-2 sm:col-span-1"
          >
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}
