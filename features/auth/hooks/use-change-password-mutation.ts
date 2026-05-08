import { useMutation } from "@tanstack/react-query";
import { changeCurrentUserPassword } from "@/features/auth/api";

export function useChangePasswordMutation() {
  return useMutation({
    mutationFn: changeCurrentUserPassword,
  });
}
