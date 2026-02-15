import { API_BASE_URL } from "@/config/env";

export const getSkills = async () => {
  const res = await fetch(`${API_BASE_URL}/skills`, {
    cache: "no-cache",
  });
  const result = await res.json();
  return result;
};
