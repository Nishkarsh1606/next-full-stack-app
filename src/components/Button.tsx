'use client'
import Link from "next/link"

const Button = ({ url, title }: { url: string, title: string }) => {
    return (
        <Link href={url}>
            <button className="py-2 px-4 bg-green-500 text-white font-bold rounded-md">{title}</button>
        </Link>
    )
}

export default Button