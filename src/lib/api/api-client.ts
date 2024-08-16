import { DefaultOptions } from "@tanstack/react-query";
import axios from "axios"

export const apiClient = axios.create() 

export const defaultOptions: DefaultOptions = {
  mutations: {},

  queries: {
    refetchInterval: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  },
};
