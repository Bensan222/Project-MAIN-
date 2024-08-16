import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const limit = parseInt(req.nextUrl.searchParams.get("limit") || "10");
  const page = parseInt(req.nextUrl.searchParams.get("page") || "1");

  if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
    return NextResponse.json(
      { error: "Invalid page or limit" },
      {
        status: 400,
      },
    );
  }
  try {
    const totalSuspects = await db.suspect.count();
    const suspects = await db.suspect.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
    return NextResponse.json(
      {
        total: totalSuspects,
        page: page,
        limit: limit,
        suspects,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch suspects" },
      { status: 500 },
    );
  }
}
