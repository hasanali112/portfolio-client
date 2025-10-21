import { useGetWeekendSchedules, useUpdateWeekendSchedule, useDeleteWeekendSchedule } from "@/hooks/useWeekendSchedule";
import { WeekendSchedule } from "@/services/timeManagementService";
import { useState } from "react";
import { Edit, Trash2 } from 'lucide-react';

const WeekendTable = () => {
  const { data: weekendSchedulesData, isLoading } = useGetWeekendSchedules();
  const weekendSchedules = (weekendSchedulesData as { data?: WeekendSchedule[] })?.data || [];
  const updateWeekendScheduleMutation = useUpdateWeekendSchedule();
  const deleteWeekendScheduleMutation = useDeleteWeekendSchedule();

  const [editingSchedule, setEditingSchedule] = useState<WeekendSchedule | null>(null);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingSchedule) {
      updateWeekendScheduleMutation.mutate({ id: editingSchedule._id!, data: editingSchedule });
      setEditingSchedule(null);
    }
  };

  const handleDelete = (id: string) => {
    deleteWeekendScheduleMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="p-6 bg-black min-h-screen text-white flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden mb-8">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                Day
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                Focus
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                Type
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                Topic
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {weekendSchedules.map((row) => (
              <tr key={row._id} className="hover:bg-gray-800/50">
                <td className="px-6 py-4 text-gray-300">{row.day}</td>
                <td className="px-6 py-4 text-gray-300">{row.focus}</td>
                <td className="px-6 py-4 text-gray-300">{row.type}</td>
                <td className="px-6 py-4 text-gray-300">{row.topic}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingSchedule(row)}
                      className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                      title="Update Task"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(row._id!)}
                      disabled={deleteWeekendScheduleMutation.isPending}
                      className="p-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors disabled:opacity-50"
                      title="Delete Task"
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

      {editingSchedule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h2 className="text-xl font-semibold mb-4 text-white">Edit Weekend Schedule</h2>
            <form onSubmit={handleUpdate}>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  value={editingSchedule.day}
                  onChange={(e) => setEditingSchedule({ ...editingSchedule, day: e.target.value })}
                  placeholder="Day"
                  className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 max-w-xs"
                />
                <input
                  type="text"
                  value={editingSchedule.focus}
                  onChange={(e) => setEditingSchedule({ ...editingSchedule, focus: e.target.value })}
                  placeholder="Focus"
                  className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 max-w-xs"
                />
                <input
                  type="text"
                  value={editingSchedule.type}
                  onChange={(e) => setEditingSchedule({ ...editingSchedule, type: e.target.value })}
                  placeholder="Type"
                  className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 max-w-xs"
                />
                <input
                  type="text"
                  value={editingSchedule.topic}
                  onChange={(e) => setEditingSchedule({ ...editingSchedule, topic: e.target.value })}
                  placeholder="Topic"
                  className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 max-w-xs"
                />
                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={updateWeekendScheduleMutation.isPending}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
                  >
                    {updateWeekendScheduleMutation.isPending ? "Updating..." : "Update Schedule"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingSchedule(null)}
                    className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeekendTable;
