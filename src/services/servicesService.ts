import axiosInstance from "@/app/lib/AxiosInstance";

export const createService = async (formData: FormData) => {
  const { data } = await axiosInstance.post("/services", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getAllServices = async () => {
  const { data } = await axiosInstance.get("/services");
  return data;
};

export const getServiceById = async (id: string) => {
  const { data } = await axiosInstance.get(`/services/${id}`);
  return data;
};

export const updateService = async (id: string, serviceData: FormData | any) => {
  const headers = serviceData instanceof FormData 
    ? { "Content-Type": "multipart/form-data" }
    : { "Content-Type": "application/json" };
    
  const { data } = await axiosInstance.put(`/services/${id}`, serviceData, { headers });
  return data;
};

export const deleteService = async (id: string) => {
  const { data } = await axiosInstance.delete(`/services/${id}`);
  return data;
};
