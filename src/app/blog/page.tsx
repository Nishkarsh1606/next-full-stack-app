import Link from 'next/link'
import BlogPostCard from '@/src/components/BlogPostCard'


export const metadata = {
    title: 'Blogs Page',
    description: 'Here you will find the best blogs regarding Next.js version 13'
}

// const getData = async () => {
//     const res = await fetch(`http://localhost:3000/api/posts`, {
//         cache: 'no-cache'
//     })
//     if (!res.ok) {
//         throw new Error('Failed to fetch data')
//     }
//     return res.json()
// }

const BlogPage = () => {
    // const posts = await getData()
    const imageURL = `https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    return (
        <div className='mt-12'>
            <p className='text-center mb-12 font-semibold text-3xl underline'>Coming Soon...</p>
            {/* {
                posts.map((post: any) => (
                    <Link href={`/blog/${post.uid}`} key={post.uid}>
                        <BlogPostCard imgURL={imageURL} summary={post.data.summary} title={post.data.title} />
                    </Link>
                ))
            } */}
        </div>
    )
}

export default BlogPage