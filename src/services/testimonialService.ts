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
  const { data } = await axiosInstance.put(
    `/testimonial/${id}`,
    testimonialData
  );
  return data;
};

export const deleteTestimonial = async (id: string) => {
  const { data } = await axiosInstance.delete(`/testimonial/${id}`);
  return data;
};

export const getTestimonialsForHome = async () => {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/testimonial`, {
      cache: "force-cache",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data;
  } catch (error) {
    return null;
  }
};
