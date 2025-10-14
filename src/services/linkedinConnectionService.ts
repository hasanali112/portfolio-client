import axiosInstance from "@/app/lib/AxiosInstance";

export const createLinkedInConnection = async (data: any) => {
  const response = await axiosInstance.post("/linkedin-connections", data);
  return response.data;
};

export const getAllLinkedInConnections = async (params?: {
  page?: number;
  limit?: number;
  search?: string;
  reqStatus?: string;
  dmStatus?: string;
}) => {
  const queryParams = new URLSearchParams();
  
  if (params?.page) queryParams.append('page', params.page.toString());
  if (params?.limit) queryParams.append('limit', params.limit.toString());
  if (params?.search) queryParams.append('search', params.search);
  if (params?.reqStatus) queryParams.append('reqStatus', params.reqStatus);
  if (params?.dmStatus) queryParams.append('dmStatus', params.dmStatus);

  const url = queryParams.toString() 
    ? `/linkedin-connections?${queryParams.toString()}`
    : '/linkedin-connections';
    
  const response = await axiosInstance.get(url);
  return response.data;
};

export const updateLinkedInConnection = async (id: string, data: any) => {
  const response = await axiosInstance.put(`/linkedin-connections/${id}`, data);
  return response.data;
};

export const deleteLinkedInConnection = async (id: string) => {
  const response = await axiosInstance.delete(`/linkedin-connections/${id}`);
  return response.data;
};

export const checkPendingConnections = async () => {
  const response = await axiosInstance.get("/linkedin-connections/check-pending");
  return response.data;
};

export const sendDM = async (id: string) => {
  const response = await axiosInstance.post(`/linkedin-connections/${id}/send-dm`);
  return response.data;
};

export const startOutreach = async (id: string) => {
  const response = await axiosInstance.post(`/linkedin-connections/${id}/start-outreach`);
  return response.data;
};
