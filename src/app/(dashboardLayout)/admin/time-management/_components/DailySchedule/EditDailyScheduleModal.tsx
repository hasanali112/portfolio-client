import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { DailySchedule as IDailySchedule } from "@/services/timeManagementService";

interface EditDailyScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  schedule: IDailySchedule | null;
  onUpdate: (updatedSchedule: IDailySchedule) => void;
  isLoading: boolean;
}

const EditDailyScheduleModal: React.FC<EditDailyScheduleModalProps> = ({
  isOpen,
  onClose,
  schedule,
  onUpdate,
  isLoading,
}) => {
  const [formData, setFormData] = useState<IDailySchedule>({
    _id: "",
    time: "",
    icon: "",
    task: "",
    description: "",
    startTime: "",
    endTime: "",
    duration: 0,
  });

  useEffect(() => {
    if (schedule) {
      // Parse existing time range if it exists
      const timeRange = schedule.time;
      let startTime = schedule.startTime || "";
      let endTime = schedule.endTime || "";
      
      // If no separate start/end times, try to parse from time range
      if (!startTime && !endTime && timeRange.includes('-')) {
        const [start, end] = timeRange.split('-');
        startTime = start.trim();
        endTime = end.trim();
      }
      
      setFormData({
        ...schedule,
        startTime,
        endTime,
      });
    }
  }, [schedule]);

  // Function to calculate duration between two times
  const calculateDuration = (startTime: string, endTime: string): number => {
    if (!startTime || !endTime) return 0;
    
    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);
    
    const startMinutes = startHour * 60 + startMin;
    const endMinutes = endHour * 60 + endMin;
    
    return endMinutes - startMinutes;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      
      // Auto-calculate duration and time range when start/end times change
      if (name === 'startTime' || name === 'endTime') {
        const startTime = name === 'startTime' ? value : prev.startTime || '';
        const endTime = name === 'endTime' ? value : prev.endTime || '';
        
        if (startTime && endTime) {
          const duration = calculateDuration(startTime, endTime);
          const timeRange = `${startTime}-${endTime}`;
          
          updated.duration = duration;
          updated.time = timeRange;
        }
      }
      
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Ensure time range is set
    if (formData.startTime && formData.endTime) {
      const duration = calculateDuration(formData.startTime, formData.endTime);
      const timeRange = `${formData.startTime}-${formData.endTime}`;
      
      const updatedData = {
        ...formData,
        time: timeRange,
        duration: duration,
      };
      
      onUpdate(updatedData);
    } else {
      onUpdate(formData);
    }
  };

  if (!isOpen || !schedule) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">Edit Daily Schedule</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Start Time
              </label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime || ''}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                End Time
              </label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime || ''}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          
          {formData.duration && formData.duration > 0 && (
            <div className="bg-gray-800 p-3 rounded-lg">
              <span className="text-sm text-gray-400">Duration: </span>
              <span className="text-blue-400 font-medium">
                {formData.duration < 60 
                  ? `${formData.duration}min` 
                  : `${Math.floor(formData.duration / 60)}h ${formData.duration % 60}min`
                }
              </span>
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Icon (Emoji)
            </label>
            <input
              type="text"
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              placeholder="⏰"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Task Name
            </label>
            <input
              type="text"
              name="task"
              value={formData.task}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-800 text-gray-300 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? "Updating..." : "Update Schedule"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDailyScheduleModal;
