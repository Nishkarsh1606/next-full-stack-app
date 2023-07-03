import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/firebase'


export async function GET(request) {
    try {
        const coll = collection(db, 'blogs')
        const querySnapShot = await getDocs(coll)
        const posts = []
        querySnapShot.forEach((doc) => {
            posts.push({
                uid: doc.id,
                data: doc.data()
            })
        })
        return NextResponse.json(posts, { status: 200 })
    } catch (err) {
        throw new Error(err)
    }
}