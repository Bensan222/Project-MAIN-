import { useSuspenseQuery, useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { Suspect } from "@prisma/client";

export const mutationKey = ["delete-suspect"];

export const useDeleteSuspect = () => {
  return useMutation({
    mutationKey,
    mutationFn: async (formData: Pick<Suspect, "id">) => {
      return await apiClient.delete(`/api/suspect/${formData.id}`);
    },
  });
};
