"use client"

import { useGetQueryClient } from "@/lib/tanstack-query";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const RootProviders = (props: Props) => {
  const queryClient = useGetQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default RootProviders;
