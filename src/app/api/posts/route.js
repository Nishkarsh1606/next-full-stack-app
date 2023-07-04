import { NextResponse } from "next/server";
import { collection, query, getDocs, orderBy, onSnapshot } from "firebase/firestore";
import { db } from '@/firebase'


export async function GET(request) {
    try {
        const q = query(collection(db, "blogs"), orderBy("timestamp", "desc"));
        const posts = []
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
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