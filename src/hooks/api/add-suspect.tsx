import { useSuspenseQuery, useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { Suspect } from "@prisma/client";

export const mutationKey = ["add-suspect"];

export const useAddSuspect = () => {
  return useMutation({
    mutationKey,
    mutationFn: async (formData: Omit<Suspect, "id">) => {
      return await apiClient.post("/api/suspect", formData);
    },
  });
};
