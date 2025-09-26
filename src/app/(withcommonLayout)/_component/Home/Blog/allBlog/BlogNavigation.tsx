"use client";

interface BlogNavigationProps {
  onCategoryChange: (category: string) => void;
  currentCategory: string;
  isLoading: boolean;
}

const BlogNavigation = ({ 
  onCategoryChange, 
  currentCategory,
  isLoading 
}: BlogNavigationProps) => {
  const tabs = ["All", "Web Dev", "Mobile Dev", "AI/ML", "DevOps", "UI/UX"];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onCategoryChange(tab)}
            disabled={isLoading}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all disabled:opacity-50 ${
              currentCategory === tab
                ? "bg-gradient-to-r from-slate-700 to-slate-600 text-white border border-slate-500"
                : "bg-gradient-to-br from-slate-800/50 to-slate-900/50 text-gray-400 border border-slate-700/50 hover:border-gray-500/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogNavigation;
