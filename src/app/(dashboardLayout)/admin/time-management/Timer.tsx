'use client';
import { useState, useEffect } from 'react';
import { Play, Pause, Square } from 'lucide-react';

interface TimerProps {
  taskId: string;
  taskName: string;
  isActive: boolean;
  onStop: () => void;
}

export default function Timer({ taskId, taskName, isActive, onStop }: TimerProps) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsRunning(true);
    } else {
      setIsRunning(false);
    }
  }, [isActive]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setSeconds(0);
    onStop();
  };

  if (!isActive) return null;

  return (
    <div className="fixed top-4 right-4 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-lg z-50">
      <div className="text-center">
        <h3 className="text-white font-semibold mb-2 truncate max-w-[200px]">
          {taskName}
        </h3>
        <div className="text-2xl font-mono text-blue-400 mb-4">
          {formatTime(seconds)}
        </div>
        <div className="flex gap-2 justify-center">
          {isRunning ? (
            <button
              onClick={handlePause}
              className="p-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
              title="Pause"
            >
              <Pause className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleResume}
              className="p-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              title="Resume"
            >
              <Play className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleStop}
            className="p-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            title="Stop"
          >
            <Square className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
