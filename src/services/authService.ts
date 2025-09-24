import axiosInstance from "@/app/lib/AxiosInstance";

export const loginUser = async (credentials: { email: string; password: string }) => {
  const { data } = await axiosInstance.post("/auth/login", credentials);
  return data;
};
