import { QueryCache, QueryClient } from "react-query";

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error);
  },
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 60 * 1000 * 5,
      onError: (e) => {
        console.log(e);
      },
    },
  },
  queryCache,
});
