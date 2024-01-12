import { connectToDB } from "@/lib/utils/connectToDb";
import { NextResponse } from "next/server";
import { User } from "@/lib/models";

export async function GET(request, { params: { id } }) {
  try {
    await connectToDB()
    const user = await User.findOne({id });
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch User",
        error,
      },
      { status: 500 }
    );
  }
}
