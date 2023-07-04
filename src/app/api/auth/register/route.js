import { NextResponse } from "next/server";
import connect from '../../../../utils/db'
import User from '../../../../models/User'
// import { bcrypt } from 'bcryptjs'

export async function POST(request) {
    const { name, email, password } = await request.json()
    // const hashedPassword = await bcrypt.hash(password, 5)
    await connect()
    const newUser = new User({
        name,
        email,
        password
    })
    try {
        await newUser.save()
        return NextResponse.json('User has been created', { status: 200 })
    } catch (error) {
        return NextResponse.json(error.message, { status: 500 })
    }
}