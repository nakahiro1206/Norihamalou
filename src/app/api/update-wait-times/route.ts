import { UpdateWaitTimesInput, UpdateWaitTimesResponse } from "@/service/type";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const response = await fetch("/api/mock/update");
    const result = (await response.json()) as { waitTimes: number };
    const r: UpdateWaitTimesResponse = {
      ok: true,
    };
    return NextResponse.json(r);
  } catch (error) {
    const err: UpdateWaitTimesResponse = {
      ok: false,
      message: "Failed to fetch wait times",
    };
    return NextResponse.json(err, { status: 500 });
  }
}
