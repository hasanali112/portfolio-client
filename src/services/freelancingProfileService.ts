import axiosInstance from "@/app/lib/AxiosInstance";

export const createFreelancingProfile = async (formData: FormData) => {
  const { data } = await axiosInstance.post("/freelancing-profiles", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getAllFreelancingProfiles = async (filters: any = {}) => {
  const { data } = await axiosInstance.get("/freelancing-profiles", { params: filters });
  return data;
};

export const getFreelancingProfileById = async (id: string) => {
  const { data } = await axiosInstance.get(`/freelancing-profiles/${id}`);
  return data;
};

export const updateFreelancingProfile = async (id: string, formData: FormData) => {
  const { data } = await axiosInstance.patch(`/freelancing-profiles/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const deleteFreelancingProfile = async (id: string) => {
  const { data } = await axiosInstance.delete(`/freelancing-profiles/${id}`);
  return data;
};

export const getFeaturedProfiles = async () => {
  const { data } = await axiosInstance.get("/freelancing-profiles/featured");
  return data;
};

export const getProfilesByCategory = async (category: string) => {
  const { data } = await axiosInstance.get(`/freelancing-profiles/category/${category}`);
  return data;
};
