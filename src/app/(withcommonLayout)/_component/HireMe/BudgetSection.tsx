import BudgetButton from "./BudgetButton";

interface BudgetSectionProps {
  selectedBudget: string;
  setSelectedBudget: (budget: string) => void;
}

export default function BudgetSection({ selectedBudget, setSelectedBudget }: BudgetSectionProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-yellow-400 text-2xl">💰</span>
        <h2 className="text-2xl font-bold">Project Budget</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <BudgetButton
          label="$200"
          selected={selectedBudget === "200"}
          onClick={() => setSelectedBudget("200")}
        />
        <BudgetButton
          label="$300"
          selected={selectedBudget === "300"}
          onClick={() => setSelectedBudget("300")}
        />
        <BudgetButton
          label="$400"
          selected={selectedBudget === "400"}
          onClick={() => setSelectedBudget("400")}
        />
        <BudgetButton
          label="$500"
          selected={selectedBudget === "500"}
          onClick={() => setSelectedBudget("500")}
        />
        <BudgetButton
          label="$700"
          selected={selectedBudget === "700"}
          onClick={() => setSelectedBudget("700")}
        />
        <BudgetButton
          label="$1000"
          selected={selectedBudget === "1000"}
          onClick={() => setSelectedBudget("1000")}
        />
        <BudgetButton
          label="$2000+"
          selected={selectedBudget === "2000+"}
          onClick={() => setSelectedBudget("2000+")}
        />
      </div>
    </div>
  );
}
