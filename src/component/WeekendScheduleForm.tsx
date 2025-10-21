import { useCreateWeekendSchedule } from "@/hooks/useWeekendSchedule";
import { useState } from "react";

const WeekendScheduleForm = () => {
  const [day, setDay] = useState("");
  const [focus, setFocus] = useState("");
  const [type, setType] = useState("");
  const [topic, setTopic] = useState("");

  const createWeekendScheduleMutation = useCreateWeekendSchedule();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createWeekendScheduleMutation.mutate({ day, focus, type, topic });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg border border-gray-800 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Add Weekend Schedule</h2>
      <div className="flex gap-4 flex-wrap">
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Day"
          className="flex-1 min-w-[200px] p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          value={focus}
          onChange={(e) => setFocus(e.target.value)}
          placeholder="Focus"
          className="flex-1 min-w-[200px] p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Type"
          className="flex-1 min-w-[200px] p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Topic"
          className="flex-1 min-w-[200px] p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={createWeekendScheduleMutation.isPending}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50"
        >
          {createWeekendScheduleMutation.isPending ? "Adding..." : "Add Schedule"}
        </button>
      </div>
    </form>
  );
};

export default WeekendScheduleForm;
