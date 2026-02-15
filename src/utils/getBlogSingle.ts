import { API_BASE_URL } from "@/config/env";

export const singleBlog = async (_id: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/${_id}`, {
      cache: "no-store",
    });
    const result = await res.json();
    return result;
  } catch (error: any) {
    console.log(error.message);
  }
};
