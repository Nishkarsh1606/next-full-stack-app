'use client'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()
  if (session.status === 'authenticated') {
    return (
      <div>Hello Dashboard</div>
    )
  } else {
    router.push('/dashboard/register')
  }
}

export default Dashboard