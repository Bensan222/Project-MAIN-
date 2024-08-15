import {
  QueryCache,
  MutationCache,
  QueryClient,
  isServer,
  defaultShouldDehydrateQuery,
} from "@tanstack/react-query";
import { defaultOptions } from "./api/api-client";

// Assuming errorHandler and toastFunc are defined somewhere in your code

function makeQueryClient(): QueryClient {
  const queryCache = new QueryCache({
    onError: (err) => {
      console.log(err);
    },
  });

  const mutationCache = new MutationCache({
    onError: (err, _var, _ctx, _mutation) => {
      console.log(err);
    },
  });

  return new QueryClient({
    defaultOptions: {
      queries: {
        ...defaultOptions.queries,
      },
      mutations: {
        ...defaultOptions.mutations, // Ensure mutations options are included if needed
      },
      dehydrate: {
        // include pending queries in dehydration
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
    },
    queryCache,
    mutationCache,
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function useGetQueryClient(): QueryClient {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  } else {
    // Browser: make a new query client if we don't already have one
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient();
    }
    return browserQueryClient;
  }
}
