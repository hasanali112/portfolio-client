"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
}

const ProjectPagination = ({ currentPage, totalPages, onPageChange, isLoading }: ProjectPaginationProps) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1 || isLoading}
        className="p-2 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 text-gray-400 hover:border-gray-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i + 1}
          onClick={() => onPageChange(i + 1)}
          disabled={isLoading}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50 ${
            currentPage === i + 1
              ? "bg-gradient-to-r from-slate-700 to-slate-600 text-white border border-slate-500"
              : "bg-gradient-to-br from-slate-800/50 to-slate-900/50 text-gray-400 border border-slate-700/50 hover:border-gray-500/50"
          }`}
        >
          {i + 1}
        </button>
      ))}
      
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages || isLoading}
        className="p-2 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 text-gray-400 hover:border-gray-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ProjectPagination;
