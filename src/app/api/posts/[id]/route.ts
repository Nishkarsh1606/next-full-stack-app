import { NextResponse } from "next/server";
import Posts from "../../../../models/Post.js";
import connect from "../../../../utils/db.js";

export async function GET(request: Request, { params: { id } }: any) {
  try {
    await connect();
    const post = Posts.findById(id);
    //@ts-ignore
    console.log(post.mongooseCollection.name);
    // return NextResponse.json(post, { status: 200 });
    return NextResponse.json(id);
  } catch (err) {
    throw new Error(`Couldn't connect to database`);
  }
}