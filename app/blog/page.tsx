import Image from 'next/image'
import styles from './blog.module.css'
import Link from 'next/link'

const getData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
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
        <div>
            {
                posts.map((post: any) => (
                    <Link href={`/blog/${post.id}`} key={post.id}>
                        <div className='flex flex-col  md:flex-row justify-between mb-6'>
                            <div className='min-w-[33%] min-h-[250px] md:min-w-[500px] md:min-h-[250px] relative'>
                                <Image src={imageURL} fill={true} alt='' className='object-cover' />
                                {/* <Image src={imageURL} width={500} height={20} alt='' /> */}
                            </div>
                            <div className='flex flex-col justify-center ml-6 text-left'>
                                <p className='mb-6 font-bold text-3xl'>{post.title}</p>
                                <p className='text-slate-600'>
                                    {post.body}
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