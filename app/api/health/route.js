import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    // Reuse your dbConnect function
    await dbConnect();

    return NextResponse.json(
      { status: "Server and DB are healthy" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: "DB connection failed", error: err.message },
      { status: 500 }
    );
  }
};
