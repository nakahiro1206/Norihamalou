import { NextResponse } from "next/server";
import { WaitTimesResponse } from "@/service/type";

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const response = await fetch("http://localhost:3000/api/mock"); // Or your actual API endpoint
    const result = (await response.json()) as { waitTimes: number };

    const r: WaitTimesResponse = {
      ok: true,
      waitTimes: result.waitTimes,
    };

    return NextResponse.json(r);
  } catch (error) {
    const err: WaitTimesResponse = {
      ok: false,
      message: "Failed to fetch wait times",
    };

    return NextResponse.json(err, { status: 500 });
  }
}
