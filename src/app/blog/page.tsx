import Image from 'next/image'
import styles from './blog.module.css'
import Link from 'next/link'

const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/posts`, {
        next: {
            revalidate: 60 * 60 * 24
        }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const BlogPage = async () => {
    const posts = await getData()
    const imageURL = `https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    return (
        <div className='mt-12'>
            <p className='text-center mb-12 font-semibold text-3xl underline'>Welcome to the Blog - Built with Next</p>
            {
                posts.map((post: any) => (
                    <Link href={`/blog/${post._id}`} key={post._id}>
                        <div className='flex flex-col md:flex-row justify-center mb-6'>
                            <div className='min-w-[33%] min-h-[250px] md:min-w-[500px] md:min-h-[250px] relative'>
                                <Image src={imageURL} fill={true} alt='' className='object-cover' />
                                {/* <Image src={imageURL} width={500} height={20} alt='' /> */}
                            </div>
                            <div className='flex flex-col justify-center ml-6 text-left'>
                                <p className='mb-6 font-bold text-3xl'>{post.title}</p>
                                <p className='text-slate-600'>
                                    {post.summary}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default BlogPage