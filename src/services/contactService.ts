import axiosInstance from "@/app/lib/AxiosInstance";

export const submitContactForm = async (contactData: any) => {
  const { data } = await axiosInstance.post("/contact", contactData);
  return data;
};

export const getAllContacts = async () => {
  const { data } = await axiosInstance.get("/contact");
  return data;
};

export const getContactById = async (id: string) => {
  const { data } = await axiosInstance.get(`/contact/${id}`);
  return data;
};

export const updateContact = async (id: string, contactData: any) => {
  const { data } = await axiosInstance.put(`/contact/${id}`, contactData);
  return data;
};

export const deleteContact = async (id: string) => {
  const { data } = await axiosInstance.delete(`/contact/${id}`);
  return data;
};

export const markAsRead = async (id: string) => {
  const { data } = await axiosInstance.patch(`/contact/${id}/read`);
  return data;
};

export const markAsReplied = async (id: string) => {
  const { data } = await axiosInstance.patch(`/contact/${id}/replied`);
  return data;
};

export const archiveContact = async (id: string) => {
  const { data } = await axiosInstance.patch(`/contact/${id}/archive`);
  return data;
};

// Contact Info Services
export const createContactInfo = async (contactInfoData: any) => {
  const { data } = await axiosInstance.post("/contact/info", contactInfoData);
  return data;
};

export const getContactInfo = async () => {
  const { data } = await axiosInstance.get("/contact/info/details");
  return data;
};

export const updateContactInfo = async (id: string, contactInfoData: any) => {
  const { data } = await axiosInstance.put(`/contact/info/${id}`, contactInfoData);
  return data;
};
