import axiosInstance from "@/app/lib/AxiosInstance";

export const createSkill = async (formData: FormData) => {
  try {
    const { data } = await axiosInstance.post(
      "/skills/create-skill",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateSkill = async (id: string, formData: FormData) => {
  try {
    const { data } = await axiosInstance.put(
      `/skills/update-skill/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllSkills = async (page = 1, limit = 10) => {
  try {
    const url = `/skills?page=${page}&limit=${limit}`;
    console.log("Fetching skills with URL:", url); // Debug log
    const { data } = await axiosInstance.get(url);
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getSkillCount = async () => {
  try {
    const { data } = await axiosInstance.get("/skills/count");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
