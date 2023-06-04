import Image from "next/image"
import AvatarIcon from "@/app/components/AvatarIcon"

type BlogPostProps = {
    params: {
        id: number
    }
}

const getIndividualPostData = async (id: number) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-store"
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

// const BlogPage = async ({ params: { id } }) => {
//     const post = await getIndividualPostData(id)
//     const imageURL = `https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
//     return (
//         <div className="my-12">
//             <section className="flex justify-between">
//                 <div className="flex flex-col justify-between max-w-[50%]">
//                     <h1 className="text-4xl font-bold">Lorem ipsum</h1>
//                     <p className="text-slate-700 my-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A est aliquid eaque eos! Iure, eveniet culpa quasi repudiandae beatae, natus dolore magnam corporis obcaecati sapiente ut. Ex alias assumenda officiis?
//                         Enim delectus modi numquam pariatur assumenda nemo repellat praesentium culpa ut, reprehenderit dignissimos fugit a, libero nisi doloribus, incidunt cumque magnam eos. Delectus enim adipisci, reiciendis illum sint libero laborum.</p>
//                     <div className="flex items-center gap-x-2">
//                         <AvatarIcon name="John Doe" />
//                         <p className="font-bold">John Doe</p>
//                     </div>
//                 </div>
//                 <div>
//                     <Image src={imageURL} width={400} height={200} alt="" />
//                 </div>
//             </section>
//             <section className="mt-12">
//                 <article>
//                     <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit ullam dignissimos iure, aliquid facilis molestias consectetur dolore unde quis perferendis error accusamus repudiandae, doloremque sequi voluptatum dolorum explicabo odit!</p>
//                     <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, perferendis sapiente? Eos soluta culpa, totam, qui nulla nesciunt, velit in unde ipsum delectus corporis natus consequatur rerum ratione? Suscipit, repudiandae.
//                         Ipsam at quos similique, esse maxime quod sed eaque numquam iure, quis, ipsum repellendus cum aspernatur iste modi a. Esse alias quae enim? Consectetur soluta repellat aliquid qui cumque earum.</p>
//                     <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, perferendis sapiente? Eos soluta culpa, totam, qui nulla nesciunt, velit in unde ipsum delectus corporis natus consequatur rerum ratione? Suscipit, repudiandae.
//                         Ipsam at quos similique, esse maxime quod sed eaque numquam iure, quis, ipsum repellendus cum aspernatur iste modi a. Esse alias quae enim? Consectetur soluta repellat aliquid qui cumque earum.</p>
//                 </article>
//             </section>
//         </div>
//     )
// }

const BlogPage = async ({ params: { id } }: BlogPostProps) => {
    const post = await getIndividualPostData(id)
    const imageURL = `https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`
    return (
        <div className="my-12">
            <section className="flex justify-between">
                <div className="flex flex-col justify-between max-w-[50%]">
                    <h1 className="text-4xl font-bold">{post.title}</h1>
                    <p className="text-slate-700 my-6">que magnam eos. Delectus enim adipisci, reiciendis illum sint libero laborum.</p>
                    <div className="flex items-center gap-x-2">
                        <AvatarIcon name="John Doe" />
                        <p className="font-bold">{post.id}</p>
                    </div>
                </div>
                <div>
                    <Image src={imageURL} width={400} height={20} alt="" />
                </div>
            </section>
            <section className="mt-12">
                <article>
                    <p>{post.body}</p>
                </article>
            </section>
        </div>
    )
}

export default BlogPage