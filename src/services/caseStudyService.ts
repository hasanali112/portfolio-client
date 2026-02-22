import axiosInstance from "@/app/lib/AxiosInstance";

export const createCaseStudy = async (formData: FormData) => {
  const { data } = await axiosInstance.post("/case-studies", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getAllCaseStudies = async () => {
  const { data } = await axiosInstance.get("/case-studies");
  return data;
};

export const getCaseStudyById = async (id: string) => {
  const { data } = await axiosInstance.get(`/case-studies/${id}`);
  return data;
};

export const updateCaseStudy = async (id: string, caseStudyData: any) => {
  const { data } = await axiosInstance.put(`/case-studies/${id}`, caseStudyData);
  return data;
};

export const deleteCaseStudy = async (id: string) => {
  const { data } = await axiosInstance.delete(`/case-studies/${id}`);
  return data;
};
