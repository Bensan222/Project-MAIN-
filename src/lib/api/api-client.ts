import { DefaultOptions } from "@tanstack/react-query";

export const defaultOptions: DefaultOptions = {
  mutations: {},

  queries: {
    refetchInterval: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  },
};
