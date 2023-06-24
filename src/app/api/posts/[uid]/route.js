import { NextResponse } from "next/server";
import Blog from "@/src/models/Blog";
import connect from "@/src/utils/db";

export async function GET(request, { params: { uid } }) {
    try {
        await connect()
        const blogPost = await Blog.findOne({ uid: uid })
        return NextResponse.json(blogPost, { status: 200 })
    } catch (error) {
        throw new Error(error)
    }
}