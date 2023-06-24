import { NextResponse } from "next/server";
import Blog from '@/src/models/Blog'
import connect from '@/src/utils/db'

export async function GET(request) {
    try {
        await connect()
        const blogPosts = await Blog.find()
        return NextResponse.json(blogPosts, { status: 200 })
    } catch (e) {
        throw new Error(e)
    }
}