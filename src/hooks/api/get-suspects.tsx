'use client'

import { useSuspenseQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { Suspect } from "@prisma/client";

export type SuspectTableRes = {
  total: number;
  page: number;
  limit: number;
  suspects: Suspect[];
};

export const queryKey = ["get-suspect"] as const;
export const queryFn = async () => {
  const res = await apiClient.get("/api/suspect");
  return res.data as SuspectTableRes;
};

export const useGetSuspects = () => {
  return useSuspenseQuery({
    queryKey,
    queryFn,
  });
};
