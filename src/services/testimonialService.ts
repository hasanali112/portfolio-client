import axiosInstance from "@/app/lib/AxiosInstance";

export const createTestimonial = async (formData: FormData) => {
  const { data } = await axiosInstance.post("/testimonial", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getAllTestimonials = async () => {
  const { data } = await axiosInstance.get("/testimonial");
  return data;
};

export const getTestimonialById = async (id: string) => {
  const { data } = await axiosInstance.get(`/testimonial/${id}`);
  return data;
};

export const updateTestimonial = async (id: string, testimonialData: any) => {
  const { data } = await axiosInstance.put(`/testimonial/${id}`, testimonialData);
  return data;
};

export const deleteTestimonial = async (id: string) => {
  const { data } = await axiosInstance.delete(`/testimonial/${id}`);
  return data;
};
