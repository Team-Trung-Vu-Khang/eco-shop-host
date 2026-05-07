import { useQuery } from "@tanstack/react-query";
import { fetchCurrentAuthUser } from "@/features/auth/api";

export function useAuthMeQuery(token?: string | null) {
  return useQuery({
    queryKey: ["auth", "me"],
    queryFn: () => {
      if (!token) {
        throw new Error("Không tìm thấy token đăng nhập.");
      }

      return fetchCurrentAuthUser(token);
    },
    enabled: Boolean(token),
    staleTime: 5 * 60 * 1000,
  });
}
