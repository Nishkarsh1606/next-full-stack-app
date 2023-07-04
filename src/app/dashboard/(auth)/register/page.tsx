'use client'
import { FormEvent, useState } from "react"
import { useRouter } from 'next/navigation'

const Register = () => {
    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setError] = useState(false)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const data = {
            name: name,
            email: email,
            password: password
        }
        try {
            const res = await fetch('/api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            if (res.status === 200) {
                console.log(res.body)
                router.push('/dashboard/login?account=created successfully')
            } else {
                setError(true)
            }
        } catch (e: any) {
            setError(true)
            throw new Error(e)
        }
    }
    return (
        <div className="text-center">
            <form className="flex flex-col gap-10 max-w-md mt-6 mx-auto" onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter full name" className="bg-inherit outline-none p-6 border-gray-600-500 border-[0.1px] rounded-md" />
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email" className="bg-inherit outline-none p-6 border-gray-600-500 border-[0.1px] rounded-md" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter password" className="bg-inherit outline-none p-6 border-gray-600-500 border-[0.1px] rounded-md" />
                <button type="submit" className="bg-green-500 rounded-lg p-3 text-white">Register</button>
            </form>
            <p className="mt-3 text-gray-600 hover:cursor-pointer" onClick={() => router.push('/dashboard/login')}>Already registered? Login here</p>
            {
                err && <p className="text-red-600">Something went wrong. Please try again</p>
            }
        </div>
    )
}

export default Register