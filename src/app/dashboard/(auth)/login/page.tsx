'use client'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

const LoginPage = () => {
  const session = useSession()
  const router = useRouter()
  const [userEmail, setUserEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<boolean>(false)
  const validateUserLogin = async (e: FormEvent<HTMLFormElement>) => {

  }
  if (session.status === 'unauthenticated') {
    return (
      <div className='flex flex-col items-center'>
        <section className='w-[33%] mb-6'>
          <form onSubmit={validateUserLogin} className='flex flex-col gap-y-6'>
            <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} className='bg-black border-[0.1px] p-3 rounded-md outline-none' placeholder='Email' required />
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='bg-black border-[0.1px] p-3 rounded-md outline-none' placeholder='Password' required />
            <button className="py-2 px-4 bg-green-500 text-white font-bold rounded-md">Log In</button>
          </form>
        </section>
        <section id='googleAuthProvider' className='w-[33%] text-center'>
          <div onClick={() => signIn('google')} className='flex items-center justify-center mb-6 w-[100%] border-2 p-3 rounded-md'>
            <Image src={'/google.svg'} height={20} width={20} alt='google icon' className='mr-2' />
            <button>Login With Google</button>
          </div>
          <div onClick={() => signIn('github')} className='flex items-center justify-center mb-6 w-[100%] border-2 p-3 rounded-md'>
            <Image src={'/githubicon.svg'} height={20} width={20} alt='github icon' className='mr-2 object-contain' />
            <button>Login With Github</button>
          </div>
          {error && <p className='text-red-500 mb-4'>Something went wrong. Please try again</p>}
          <p onClick={() => router.push('/dashboard/register')} className='hover:cursor-pointer'>New user? Register here </p>
        </section>
      </div>
    )
  } else if (session.status === 'authenticated') {
    router?.push('/dashboard')
  }
}

export default LoginPage