"use client";
import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProjectPagination from "./ProjectPagination";

interface ProjectsClientProps {
  children: React.ReactNode;
  totalPages: number;
}

const ProjectsClient = ({ children, totalPages }: ProjectsClientProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  
  const currentPage = parseInt(searchParams.get('page') || '1');

  const handlePageChange = (page: number) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.set('page', page.toString());
      router.push(`/projects?${params.toString()}`);
    });
  };

  return (
    <>
      {isPending ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400"></div>
        </div>
      ) : (
        children
      )}
      
      {totalPages > 1 && (
        <ProjectPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          isLoading={isPending}
        />
      )}
    </>
  );
};

export default ProjectsClient;
