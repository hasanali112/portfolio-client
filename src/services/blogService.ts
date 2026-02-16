import axiosInstance from "@/app/lib/AxiosInstance";
import { API_BASE_URL } from "@/config/env";

export const createBlog = async (formData: FormData) => {
  const { data } = await axiosInstance.post("/blog", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

export const getAllBlogs = async () => {
  const { data } = await axiosInstance.get("/blog");
  return data;
};

export const getBlogById = async (id: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/blog/${id}`, {
      cache: "no-cache",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
};

export const updateBlog = async (id: string, blogData: any) => {
  const { data } = await axiosInstance.put(`/blog/${id}`, blogData);
  return data;
};

export const deleteBlog = async (id: string) => {
  const { data } = await axiosInstance.delete(`/blog/${id}`);
  return data;
};

export const getLatestsBlogs = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/blog`, {
      cache: "no-cache",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data;
  } catch (error) {
    return null;
  }
};
