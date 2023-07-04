import Image from "next/image"

type BlogPostType = {
    imgURL?: string,
    title: string,
    summary: string
}

const BlogPostCard = ({ imgURL, title, summary }: BlogPostType) => {
    return (
        <div className='flex flex-col md:flex-row justify-center mb-6'>
            {
                imgURL &&
                <div className='min-w-[33%] min-h-[250px] md:min-w-[500px] md:min-h-[250px] relative'>
                    <Image src={imgURL} fill={true} alt='' className='object-cover' />
                </div>
            }
            <div className='flex flex-col justify-center ml-6 text-left'>
                <p className='mb-6 font-bold text-3xl'>{title}</p>
                <p className='text-slate-600'>
                    {summary}
                </p>
            </div>
        </div>
    )
}

export default BlogPostCard