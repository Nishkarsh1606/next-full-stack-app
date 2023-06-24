'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const LoginPage = () => {
  const session = useSession()
  const router = useRouter()
  if (session.status === 'unauthenticated') {
    return (
      <div>
        <button onClick={() => signIn('google')}>Login With Google</button>
        <p onClick={() => router.push('/dashboard/register')}>New user? Register here </p>
      </div>
    )
  } else {
    return (
      <button onClick={() => signOut()}>Logout</button>
    )
  }
}

export default LoginPage