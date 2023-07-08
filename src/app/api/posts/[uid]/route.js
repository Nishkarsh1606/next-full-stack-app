import { NextRequest, NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../firebase";


export async function GET(request, { params: { uid } }) {
    try {
        const docRef = doc(db, 'blogs', uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            return NextResponse.json(docSnap.data())
        } else {
            return NextResponse.json({})
        }
    } catch (error) {
        throw new Error(error)
    }
}