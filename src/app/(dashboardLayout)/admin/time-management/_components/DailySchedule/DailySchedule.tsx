import React, { useState } from "react";
import { Edit, Trash2, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  useCreateDailySchedule,
  useGetDailySchedules,
  useUpdateDailySchedule,
  useDeleteDailySchedule,
  useStartDailySchedule,
} from "@/hooks/useDailySchedule";
import { DailySchedule as IDailySchedule } from "@/services/timeManagementService";
import EditDailyScheduleModal from "./EditDailyScheduleModal";
import ConfirmationModal from "../../../_components/ConfirmationModal";

export default function DailySchedule() {
  const router = useRouter();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSchedule, setSelectedSchedule] =
    useState<IDailySchedule | null>(null);
  const [scheduleToDeleteId, setScheduleToDeleteId] = useState<string | null>(
    null
  );

  const createDailyScheduleMutation = useCreateDailySchedule();
  const {
    data: dailySchedulesData,
    isLoading,
    refetch,
  } = useGetDailySchedules();
  const updateDailyScheduleMutation = useUpdateDailySchedule();
  const deleteDailyScheduleMutation = useDeleteDailySchedule();
  const startDailyScheduleMutation = useStartDailySchedule();

  const dailySchedules =
    (dailySchedulesData as { data?: IDailySchedule[] })?.data || [];

  // Function to calculate duration between two times
  const calculateDuration = (startTime: string, endTime: string): number => {
    if (!startTime || !endTime) return 0;

    const [startHour, startMin] = startTime.split(":").map(Number);
    const [endHour, endMin] = endTime.split(":").map(Number);

    const startMinutes = startHour * 60 + startMin;
    const endMinutes = endHour * 60 + endMin;

    return endMinutes - startMinutes;
  };

  // Function to convert 24-hour to 12-hour format
  const formatTime12Hour = (time24: string): string => {
    if (!time24) return "";
    const [hours, minutes] = time24.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  // Function to format time range in 12-hour format
  const formatTimeRange = (timeRange: string): string => {
    if (!timeRange || !timeRange.includes("-")) return timeRange;
    const [start, end] = timeRange.split("-");
    return `${formatTime12Hour(start.trim())}-${formatTime12Hour(end.trim())}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Calculate duration
    const duration = calculateDuration(
      data.startTime as string,
      data.endTime as string
    );
    const timeRange = `${data.startTime}-${data.endTime}`;

    const scheduleData = {
      time: timeRange,
      icon: data.icon as string,
      task: data.task as string,
      description: data.description as string,
      startTime: data.startTime as string,
      endTime: data.endTime as string,
      duration: duration,
      status: 'Pending' as const
    };

    createDailyScheduleMutation.mutate(scheduleData, {
      onSuccess: () => {
        form.reset();
        refetch();
      },
    });
  };

  const handleEdit = (schedule: IDailySchedule) => {
    setSelectedSchedule(schedule);
    setShowEditModal(true);
  };

  const handleDelete = (id: string) => {
    setScheduleToDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (scheduleToDeleteId) {
      deleteDailyScheduleMutation.mutate(scheduleToDeleteId, {
        onSuccess: () => {
          setShowDeleteModal(false);
          setScheduleToDeleteId(null);
          refetch();
        },
      });
    }
  };

  const handleUpdate = (updatedData: IDailySchedule) => {
    if (selectedSchedule?._id) {
      updateDailyScheduleMutation.mutate(
        { id: selectedSchedule._id, data: updatedData },
        {
          onSuccess: () => {
            setShowEditModal(false);
            setSelectedSchedule(null);
            refetch();
          },
        }
      );
    }
  };

  const handleStartTimer = (schedule: IDailySchedule) => {
    // Mark schedule as running
    if (schedule._id) {
      startDailyScheduleMutation.mutate(schedule._id);
    }
    
    // Calculate duration if not available
    let duration = schedule.duration || 0;
    if (!duration && schedule.startTime && schedule.endTime) {
      duration = calculateDuration(schedule.startTime, schedule.endTime);
    }
    if (!duration && schedule.time && schedule.time.includes('-')) {
      const [start, end] = schedule.time.split('-');
      duration = calculateDuration(start.trim(), end.trim());
    }

    // Navigate to timer page with schedule data
    const queryParams = new URLSearchParams({
      task: schedule.task || "Task",
      duration: duration.toString(),
      description: schedule.description || "",
      icon: schedule.icon || "⏰",
      scheduleId: schedule._id || ""
    });

    router.push(`/admin/time-management/timer?${queryParams.toString()}`);
  };

  const formatDuration = (minutes: number): string => {
    if (minutes < 60) {
      return `${minutes.toFixed(2)} min`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0
      ? `${hours}h ${remainingMinutes.toFixed(2)}min`
      : `${hours}h`;
  };

  if (isLoading) {
    return (
      <div className="p-6 bg-black min-h-screen text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2 text-center">
          Daily Developer Schedule
        </h1>
        <p className="text-slate-300 text-center mb-8">
          Your structured routine for consistent growth and productivity
        </p>

        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-white">
            Add New Schedule
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <div className="flex gap-2">
              <input
                type="time"
                name="startTime"
                placeholder="Start Time"
                className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
              <span className="text-white self-center">-</span>
              <input
                type="time"
                name="endTime"
                placeholder="End Time"
                className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <input
              type="text"
              name="icon"
              placeholder="Icon (emoji)"
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="text"
              name="task"
              placeholder="Task Name"
              className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Task Description"
              className="md:col-span-2 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              disabled={createDailyScheduleMutation.isPending}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
            >
              {createDailyScheduleMutation.isPending
                ? "Adding..."
                : "Add Schedule"}
            </button>
          </form>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Time Range
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Task
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {dailySchedules.map((item, index) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-slate-300 whitespace-nowrap font-medium">
                      {formatTimeRange(item.time)}
                    </td>
                    <td className="px-6 py-4 text-slate-300 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.status === 'Complete' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.status === 'Complete' ? 'Complete' : (() => {
                          let duration = item.duration || 0;
                          if (!duration && item.startTime && item.endTime) {
                            duration = calculateDuration(
                              item.startTime,
                              item.endTime
                            );
                          }
                          if (
                            !duration &&
                            item.time &&
                            item.time.includes("-")
                          ) {
                            const [start, end] = item.time.split("-");
                            duration = calculateDuration(
                              start.trim(),
                              end.trim()
                            );
                          }
                          return duration > 0
                            ? formatDuration(duration)
                            : "1.00 min";
                        })()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-medium text-white">
                          {item.task}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-300 text-sm">
                      {item.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        item.status === 'Complete' ? 'bg-green-100 text-green-800' :
                        item.status === 'Running' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {item.status || 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleStartTimer(item)}
                          className="text-green-400 hover:text-green-300 p-2 rounded-lg bg-green-400/10 hover:bg-green-400/20 transition-colors"
                          title="Start Timer"
                        >
                          <Play className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleEdit(item)}
                          className="text-yellow-400 hover:text-yellow-300 p-1 rounded"
                          title="Edit Schedule"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item._id!)}
                          className="text-red-400 hover:text-red-300 p-1 rounded"
                          title="Delete Schedule"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && selectedSchedule && (
        <EditDailyScheduleModal
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          schedule={selectedSchedule}
          onUpdate={handleUpdate}
          isLoading={updateDailyScheduleMutation.isPending}
        />
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
        title="Delete Daily Schedule"
        message="Are you sure you want to delete this daily schedule entry? This action cannot be undone."
        confirmText="Delete"
        isLoading={deleteDailyScheduleMutation.isPending}
      />
    </div>
  );
}
