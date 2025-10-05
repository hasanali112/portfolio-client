interface BudgetButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function BudgetButton({ label, selected, onClick }: BudgetButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-6 py-4 rounded-xl border-2 font-medium transition-all ${
        selected
          ? "bg-[#057cc5]/30 border-[#057cc5] text-white"
          : "bg-slate-800/30 border-slate-700/50 text-gray-300 hover:bg-slate-800/50 hover:border-slate-600/60"
      }`}
    >
      {label}
    </button>
  );
}
