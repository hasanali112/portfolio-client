import axiosInstance from "@/app/lib/AxiosInstance";

export const createProduct = async (formData: FormData) => {
  const { data } = await axiosInstance.post("/shop", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getAllProducts = async () => {
  const { data } = await axiosInstance.get("/shop");
  return data;
};

export const getProductById = async (id: string) => {
  const { data } = await axiosInstance.get(`/shop/${id}`);
  return data;
};

export const updateProduct = async (id: string, productData: any) => {
  const { data } = await axiosInstance.put(`/shop/${id}`, productData);
  return data;
};

export const deleteProduct = async (id: string) => {
  const { data } = await axiosInstance.delete(`/shop/${id}`);
  return data;
};
