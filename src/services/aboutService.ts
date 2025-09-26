import axiosInstance from "@/app/lib/AxiosInstance";

export const createAbout = async (formData: FormData) => {
  const { data } = await axiosInstance.post("/about", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getAbout = async () => {
  const { data } = await axiosInstance.get("/about");
  return data;
};

export const getAboutById = async (id: string) => {
  const { data } = await axiosInstance.get(`/about/${id}`);
  return data;
};

export const updateAbout = async (id: string, aboutData: any) => {
  const { data } = await axiosInstance.put(`/about/${id}`, aboutData);
  return data;
};

export const deleteAbout = async (id: string) => {
  const { data } = await axiosInstance.delete(`/about/${id}`);
  return data;
};

export const getMyBio = async () => {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/about`, {
      cache: "no-cache",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data;
  } catch (error) {
    return null;
  }
};
