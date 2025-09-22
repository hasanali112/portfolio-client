import axiosInstance from "@/app/lib/AxiosInstance";

export const createProject = async (formData: FormData) => {
  const { data } = await axiosInstance.post("/projects", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getAllProjects = async () => {
  const { data } = await axiosInstance.get("/projects");
  return data;
};

export const getProjectById = async (id: string) => {
  const { data } = await axiosInstance.get(`/projects/${id}`);
  return data;
};

export const updateProject = async (id: string, projectData: any) => {
  const { data } = await axiosInstance.put(`/projects/${id}`, projectData);
  return data;
};

export const deleteProject = async (id: string) => {
  const { data } = await axiosInstance.delete(`/projects/${id}`);
  return data;
};
