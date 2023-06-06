import Image from "next/image"
import AvatarIcon from "@/src/components/AvatarIcon"

type BlogPostProps = {
    params: {
        id: string
    }
}

const getIndividualPostData = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store"
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


const BlogPage = async ({ params: { id } }: BlogPostProps) => {
    const post = await getIndividualPostData(id)
    const imageURL = post.image
    return (
        <div className="my-12">
            <section className="flex justify-between">
                <div className="flex flex-col justify-between max-w-[50%]">
                    <h1 className="text-4xl font-bold">{post.title}</h1>
                    <p className="text-slate-700 my-6">{post.summary}</p>
                    <div className="flex items-center gap-x-2">
                        {/* <AvatarIcon name={post.author} /> */}
                        <p className="font-bold">{post.id}</p>
                    </div>
                </div>
                <div>
                    <Image src={imageURL} width={400} height={20} alt="blog post image" />
                </div>
            </section>
            <section className="mt-12">
                <article>
                    <p>{post.content}</p>
                </article>
            </section>
        </div>
    )
}

export default BlogPage