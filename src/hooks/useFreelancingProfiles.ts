import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import * as freelancingProfileService from "@/services/freelancingProfileService";

// Hooks
export const useCreateFreelancingProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: any) => {
      const formData = new FormData();
      
      // Handle file uploads
      if (data.gigImageFile) {
        formData.append('gigImage', data.gigImageFile);
        delete data.gigImageFile;
      }
      if (data.platformLogoFile) {
        formData.append('platformLogo', data.platformLogoFile);
        delete data.platformLogoFile;
      }
      
      // Append other data
      Object.keys(data).forEach(key => {
        if (typeof data[key] === 'object' && data[key] !== null) {
          formData.append(key, JSON.stringify(data[key]));
        } else {
          formData.append(key, data[key]);
        }
      });

      return freelancingProfileService.createFreelancingProfile(formData);
    },
    onSuccess: () => {
      toast.success("Freelancing profile created successfully!");
      queryClient.invalidateQueries({ queryKey: ["freelancing-profiles"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to create profile");
    },
  });
};

export const useGetFreelancingProfiles = (filters: any = {}) => {
  return useQuery({
    queryKey: ["freelancing-profiles", filters],
    queryFn: () => freelancingProfileService.getAllFreelancingProfiles(filters),
    select: (data) => data.data,
  });
};

export const useGetFreelancingProfileById = (id: string) => {
  return useQuery({
    queryKey: ["freelancing-profile", id],
    queryFn: () => freelancingProfileService.getFreelancingProfileById(id),
    enabled: !!id,
    select: (data) => data.data,
  });
};

export const useUpdateFreelancingProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => {
      const formData = new FormData();
      
      // Handle file uploads
      if (data.gigImageFile) {
        formData.append('gigImage', data.gigImageFile);
        delete data.gigImageFile;
      }
      if (data.platformLogoFile) {
        formData.append('platformLogo', data.platformLogoFile);
        delete data.platformLogoFile;
      }
      
      // Append other data
      Object.keys(data).forEach(key => {
        if (typeof data[key] === 'object' && data[key] !== null) {
          formData.append(key, JSON.stringify(data[key]));
        } else {
          formData.append(key, data[key]);
        }
      });

      return freelancingProfileService.updateFreelancingProfile(id, formData);
    },
    onSuccess: () => {
      toast.success("Freelancing profile updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["freelancing-profiles"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to update profile");
    },
  });
};

export const useDeleteFreelancingProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: freelancingProfileService.deleteFreelancingProfile,
    onSuccess: () => {
      toast.success("Freelancing profile deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["freelancing-profiles"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to delete profile");
    },
  });
};

export const useGetFeaturedProfiles = () => {
  return useQuery({
    queryKey: ["featured-profiles"],
    queryFn: freelancingProfileService.getFeaturedProfiles,
    select: (data) => data.data,
  });
};

export const useGetProfilesByCategory = (category: string) => {
  return useQuery({
    queryKey: ["profiles-by-category", category],
    queryFn: () => freelancingProfileService.getProfilesByCategory(category),
    enabled: !!category,
    select: (data) => data.data,
  });
};
