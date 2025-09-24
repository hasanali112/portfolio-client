"use server";

import { cookies } from "next/headers";

export const setTokenInCookies = async (
  token: string,
  refreshToken?: string
) => {
  const cookieStore = await cookies();
  cookieStore.set("accessToken", token);
  if (refreshToken) {
    cookieStore.set("refreshToken", refreshToken);
  }
};

export const getAccessTokenFromCookies = async () => {
  const cookieStore = await cookies();
  return cookieStore.get("accessToken")?.value;
};

export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
};
