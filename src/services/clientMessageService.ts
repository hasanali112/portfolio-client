import axiosInstance from "@/app/lib/AxiosInstance";

export const createClientMessage = async (data: any) => {
  const response = await axiosInstance.post('/client-messages', data);
  return response.data;
};

export const getAllClientMessages = async () => {
  const response = await axiosInstance.get('/client-messages');
  return response.data;
};

export const updateMessageStatus = async (id: string, status: string) => {
  const response = await axiosInstance.patch(`/client-messages/${id}/status`, { status });
  return response.data;
};

export const deleteClientMessage = async (id: string) => {
  const response = await axiosInstance.delete(`/client-messages/${id}`);
  return response.data;
};
