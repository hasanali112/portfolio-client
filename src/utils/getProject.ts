import { API_BASE_URL } from "@/config/env";

export const getProject = async () => {
  const res = await fetch(`${API_BASE_URL}/projects`, {
    cache: "no-cache",
  });
  const result = await res.json();
  return result;
};
