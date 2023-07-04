'use client'
import PostContent from "@/src/components/PostContent"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { doc, deleteDoc } from "firebase/firestore";
// import { collection, query, where, onSnapshot, orderBy, setDoc } from "firebase/firestore";
// import { useEffect, useState } from "react"
import { db } from "@/firebase"
import useSWR from 'swr'

interface PostType {
  uid: string,
  data: {
    title?: string,
    summary?: string,
    content?: string,
    imageURL?: string
  }
}

const Dashboard = () => {
  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('/api/posts', fetcher)
  const session = useSession()
  const router = useRouter()
  // const [data, setData] = useState<PostType[]>([])
  const imageURL = `https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`

  // useEffect(() => {
  //   const q = query(collection(db, "blogs"), orderBy("timestamp", "desc"));
  //   const postsArray: PostType[] = []
  //   onSnapshot(q, (snapshot) => {
  //     snapshot.forEach((doc) => {
  //       postsArray.push({
  //         uid: doc.id,
  //         data: doc.data()
  //       })
  //     })
  //   })
  //   setData(postsArray)
  // }, [])

  const handlePostDeletion = async (postID: string) => {
    await deleteDoc(doc(db, 'blogs', postID))
      .then(() => alert('Post deleted. Refresh to see updated list'))
      .catch((e) => { throw new Error(e) })
  }

  if (session.status === 'authenticated') {
    return (
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-[30%] mr-2 flex flex-col gap-y-4">
          {
            data && data.map((post: PostType) => (
              <div key={post.uid} className="flex justify-between items-center p-1 border-[1px] border-gray-500 rounded-sm">
                <div>
                  <p>{post.data.title}</p>
                  <p>{post.data.summary}</p>
                </div>
                <button className="bg-red-500 p-1 rounded-sm" onClick={() => handlePostDeletion(post.uid)}>
                  Delete
                </button>
              </div>
            ))
          }
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