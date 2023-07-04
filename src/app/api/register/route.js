import { NextResponse } from 'next/server'
import { doc, setDoc } from "firebase/firestore";
import { db } from '@/firebase';
import bcrypt from "bcryptjs";


export async function POST(request) {
    const { name, email, password } = await request.json()
    const hashedPassword = await bcrypt.hash(password, 6)
    try {
        await setDoc(doc(db, "users", email), {
            name: name,
            email: email,
            password: hashedPassword
        });
        return NextResponse.json('success', { status: 200 })
    }
    catch {
        return NextResponse.json('error', { status: 500 })
    }
}