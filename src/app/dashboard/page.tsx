'use client'
import PostContent from "@/src/components/PostContent"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'authenticated') {
    return (
      <div className="flex flex-col md:flex-row">
        <div className="w-1/2 mr-2">
          Posts
        </div>
        <div className="w-1/2">
          <PostContent />
        </div>
      </div>
    )
  } else if (session.status === 'loading') {
    <p>Loading...</p>
  } else {
    router?.push('/dashboard/login')
  }
}

export default Dashboard