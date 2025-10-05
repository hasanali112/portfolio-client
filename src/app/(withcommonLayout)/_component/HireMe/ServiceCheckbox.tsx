interface ServiceCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function ServiceCheckbox({ label, checked, onChange }: ServiceCheckboxProps) {
  return (
    <label className="flex items-center justify-between bg-slate-800/30 border border-slate-700/50 rounded-xl px-5 py-4 cursor-pointer hover:bg-slate-800/50 hover:border-slate-600/60 transition-all group">
      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
        {label}
      </span>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className="w-5 h-5 border-2 border-gray-600 rounded peer-checked:bg-[#057cc5] peer-checked:border-[#057cc5] transition-all" />
        {checked && (
          <svg
            className="absolute inset-0 w-5 h-5 text-white pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </label>
  );
}
