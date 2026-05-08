import { useMutation } from "@tanstack/react-query";
import { submitRegistrationProfile } from "@/features/registration/api";

export function useRegistrationMutation() {
  return useMutation({
    mutationFn: submitRegistrationProfile,
  });
}
