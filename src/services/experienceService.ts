import axiosInstance from "@/app/lib/AxiosInstance";

export const createExperience = async (formData: FormData) => {
  const { data } = await axiosInstance.post("/experience", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getAllExperiences = async () => {
  const { data } = await axiosInstance.get("/experience");
  return data;
};

export const getExperienceById = async (id: string) => {
  const { data } = await axiosInstance.get(`/experience/${id}`);
  return data;
};

export const updateExperience = async (id: string, experienceData: any) => {
  const { data } = await axiosInstance.put(`/experience/${id}`, experienceData);
  return data;
};

export const deleteExperience = async (id: string) => {
  const { data } = await axiosInstance.delete(`/experience/${id}`);
  return data;
};
