"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Play, Pause, Square, RotateCcw, ArrowLeft } from "lucide-react";
import { useCompleteDailySchedule } from "@/hooks/useDailySchedule";

function TimerContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const completeDailyScheduleMutation = useCompleteDailySchedule();
  
  // Get data from URL params
  const task = searchParams.get("task") || "Task";
  const duration = parseInt(searchParams.get("duration") || "0");
  const description = searchParams.get("description") || "";
  const icon = searchParams.get("icon") || "⏰";
  const scheduleId = searchParams.get("scheduleId");

  // Timer states
  const [timeLeft, setTimeLeft] = useState(duration * 60); // Convert minutes to seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [initialTime] = useState(duration * 60);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsCompleted(true);
            // Mark schedule as complete if scheduleId exists
            if (scheduleId) {
              completeDailyScheduleMutation.mutate(scheduleId);
            }
            // Play completion sound (optional)
            if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
              const utterance = new SpeechSynthesisUtterance("Timer completed!");
              window.speechSynthesis.speak(utterance);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, scheduleId, completeDailyScheduleMutation]);

  // Format time display
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Calculate progress percentage
  const progressPercentage = initialTime > 0 ? ((initialTime - timeLeft) / initialTime) * 100 : 0;

  // Timer controls
  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
      setIsCompleted(false);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
    setIsCompleted(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
    setIsCompleted(false);
  };

  const handleGoBack = () => {
    router.push("/admin/time-management");
  };

  // Get color based on time remaining
  const getTimerColor = () => {
    if (initialTime === 0) return "text-gray-400";
    const percentage = (timeLeft / initialTime) * 100;
    if (percentage > 50) return "text-green-400";
    if (percentage > 25) return "text-yellow-400";
    return "text-red-400";
  };

  const getProgressColor = () => {
    if (initialTime === 0) return "stroke-gray-400";
    const percentage = (timeLeft / initialTime) * 100;
    if (percentage > 50) return "stroke-green-400";
    if (percentage > 25) return "stroke-yellow-400";
    return "stroke-red-400";
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <button
            onClick={handleGoBack}
            className="fixed top-6 left-6 p-2 text-gray-400 hover:text-white transition-colors z-10"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <div className="text-6xl mb-4">{icon}</div>
          <h1 className="text-2xl font-bold mb-2">{task}</h1>
          {description && (
            <p className="text-gray-400 text-sm">{description}</p>
          )}
        </div>

        {/* Circular Progress */}
        <div className="relative w-80 h-80 mx-auto mb-8">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-800"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - (progressPercentage || 0) / 100)}`}
              className={`transition-all duration-1000 ${getProgressColor()}`}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Timer display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-6xl font-mono font-bold ${getTimerColor()}`}>
                {formatTime(timeLeft)}
              </div>
              <div className="text-gray-400 text-sm mt-2">
                {isCompleted ? "Completed!" : isRunning ? "Running..." : "Paused"}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4 mb-8">
          {!isRunning ? (
            <button
              onClick={handleStart}
              disabled={timeLeft === 0}
              className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg transition-colors font-medium"
            >
              <Play className="w-5 h-5" />
              <span>Start</span>
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="flex items-center space-x-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors font-medium"
            >
              <Pause className="w-5 h-5" />
              <span>Pause</span>
            </button>
          )}

          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Reset</span>
          </button>
        </div>

        {/* Task Info */}
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Duration:</span>
            <span className="text-white font-medium">{duration} minutes</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400">Progress:</span>
            <span className="text-white font-medium">{Math.round(progressPercentage) || 0}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Status:</span>
            <span className={`font-medium ${
              isCompleted ? "text-green-400" : 
              isRunning ? "text-blue-400" : "text-gray-400"
            }`}>
              {isCompleted ? "Completed" : isRunning ? "In Progress" : "Paused"}
            </span>
          </div>
        </div>

        {/* Completion Message */}
        {isCompleted && (
          <div className="mt-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg text-center">
            <div className="text-green-400 text-2xl mb-2">🎉</div>
            <h3 className="text-green-400 font-bold mb-1">Task Completed!</h3>
            <p className="text-green-300 text-sm">Great job on completing your task!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TimerPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>}>
      <TimerContent />
    </Suspense>
  );
}
