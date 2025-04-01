import {
  UpdateWaitTimesInput,
  UpdateWaitTimesResponse,
  WaitTimesInput,
  WaitTimesResponse,
} from "@/service/type";

export async function getWaitTimes(
  input: WaitTimesInput,
): Promise<WaitTimesResponse> {
  const response = await fetch("/api/get-wait-times", { method: "GET" });
  const result = (await response.json()) as WaitTimesResponse;
  return result;
}

export async function updateWaitTimes(
  input: UpdateWaitTimesInput,
): Promise<UpdateWaitTimesResponse> {
  const response = await fetch("/api/update-wait-times", { method: "POST" });
  const result = (await response.json()) as UpdateWaitTimesResponse;
  return result;
}
