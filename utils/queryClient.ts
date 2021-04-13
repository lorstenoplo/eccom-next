import { QueryCache, QueryClient } from "react-query";

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error);
  },
});
console.log(queryCache);
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60 * 1000 * 5,
      onError: (e) => {
        if ("message" in (e as Error)) {
          console.log((e as Error).message);
        }
      },
    },
  },
  queryCache,
});
