import { NextRequest, NextResponse } from "next/server";
import connect from "../../../utils/db";
import Post from "../../../models/Post";

export async function GET(request: Request) {
  try {
    await connect();
    const posts = await Post.find();
    return NextResponse.json('hello', { status: 200 });
  } catch (err) {
    throw new Error("Failed to connect to DB");
  }
}
