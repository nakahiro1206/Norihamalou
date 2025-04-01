import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<NextResponse> {
  try {
    // const response = await fetch("http://localhost:3000/api/mock"); // Or your actual API endpoint
    // const result = (await response.json()) as { waitTimes: number };

    return NextResponse.json({ waitTimes: 100 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
