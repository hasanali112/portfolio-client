import { createSkill, getAllSkills, getSkillCount } from "@/services/skillService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateSkill = () => {
  const queryClient = useQueryClient();
  
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_SKILL"],
    mutationFn: async (formData) => await createSkill(formData),
    onSuccess: (data) => {
      toast.success(data.message || "Skill created successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_SKILLS"] });
      queryClient.invalidateQueries({ queryKey: ["GET_SKILL_COUNT"] });
      queryClient.refetchQueries({ queryKey: ["GET_SKILLS"] });
      queryClient.refetchQueries({ queryKey: ["GET_SKILL_COUNT"] });
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || error.message || "Failed to create skill");
    },
  });
};

export const useGetSkills = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["GET_SKILLS", page, limit],
    queryFn: () => getAllSkills(page, limit),
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
};

export const useGetSkillCount = () => {
  return useQuery({
    queryKey: ["GET_SKILL_COUNT"],
    queryFn: getSkillCount,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
};
