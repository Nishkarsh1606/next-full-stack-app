'use client'
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useRef } from "react";

const PostContent = () => {
    const formRef: React.RefObject<HTMLFormElement> = useRef(null)
    const postContentToDB = async (e: any) => {
        e.preventDefault()
        const pattern = /\s/g
        const urlTitle = e.target[1].value.replace(pattern, '-')
        const blogRef = await addDoc(collection(db, "blogs"), {
            author: e.target[0].value,
            title: e.target[1].value,
            summary: e.target[2].value,
            content: e.target[3].value,
            imageURL: e.target[4].value || null,
            urlTitle
        }).then(() => {
            alert('Post added successfully')
            // @ts-ignore
            formRef.current.reset()
        })

    }
    return (
        <div className="">
            <form className="flex flex-col gap-y-3" onSubmit={postContentToDB} ref={formRef}>
                <input type="text" placeholder="Author name" className="p-2 bg-transparent border-2 rounded-md" />
                <input type="text" placeholder="Title" className="p-2 bg-transparent border-2 rounded-md" />
                <input type="text" placeholder="Summary" className="p-2 bg-transparent border-2 rounded-md" />
                <input type="text" placeholder="Post Content" className="p-2 bg-transparent border-2 rounded-md" />
                <input type="text" placeholder="Image url" className="p-2 bg-transparent border-2 rounded-md" />
                <button type="submit" className="py-2 px-4 bg-green-500 text-white font-bold rounded-md">Add Content</button>
            </form>
        </div>
    )
}

export default PostContent