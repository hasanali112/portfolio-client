import { loginUser } from "@/services/authService";
import { setTokenInCookies } from "@/services/cookieService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();

  return useMutation<any, Error, { email: string; password: string }>({
    mutationKey: ["LOGIN_USER"],
    mutationFn: loginUser,
    onSuccess: async (data) => {
      toast.success(data.message || "Login successful!");
      await setTokenInCookies(data.data.token, data.data.refreshToken);
      router.push("/admin");
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message || error.message || "Login failed"
      );
    },
  });
};
