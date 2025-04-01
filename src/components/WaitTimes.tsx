import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { getWaitTimes } from "@/service";
import { WaitTimesResponse } from "@/service/type";

const queryClient = new QueryClient();

export const WaitingTimes = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
};

function Example() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async (): Promise<WaitTimesResponse> => {
      return await getWaitTimes({});
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <div>{isFetching ? "Updating..." : data?.waitTimes}</div>
    </div>
  );
}
