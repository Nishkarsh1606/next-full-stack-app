'use client'
import { signOut, useSession } from "next-auth/react"

const LogoutBtn = () => {
    const session = useSession()
    if (session.status === 'authenticated') {
        return (
            <button onClick={() => signOut()} className="py-2 px-4 bg-green-500 text-white font-bold rounded-md">Logout</button>
        )
    } else if (session.status === 'unauthenticated') {
        return
    }
}

export default LogoutBtn