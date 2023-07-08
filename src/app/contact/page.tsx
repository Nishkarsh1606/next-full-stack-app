'use client'
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import Image from 'next/image'
import { useState } from 'react'

const ContactPage = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addDoc(collection(db, 'form'), {
            email: email,
            name: name,
            message: message
        }).then(() => {
            setEmail('')
            setName('')
            setMessage('')
        }).then(() => {
            alert('Submitted!')
        })
    }
    return (
        <div>
            <p className='text-center text-6xl font-bold mb-[60px]'>
                {`Let's keep in touch`}
            </p>
            <div className='flex justify-around'>
                <Image src={'/contact.png'} alt='contact us iamge' width={400} height={200} className='hidden md:block' />
                <form className='flex flex-col min-w-[50%] bg-transparent' onSubmit={handleFormSubmit}>
                    <input type="text" placeholder='Enter your full name' value={name} onChange={e => setName(e.target.value)} className='border-[1px] mb-2 rounded-md outline-none p-2 bg-inherit' required />
                    <input type="email" placeholder='Email id' value={email} onChange={e => setEmail(e.target.value)} className='border-[1px] mb-2 rounded-md outline-none p-2 bg-inherit' required />
                    <textarea name="" id="" cols={30} rows={10} placeholder='message' value={message} onChange={e => setMessage(e.target.value)} className='border-[1px] mb-2 rounded-md outline-none p-2 bg-inherit' required />
                    <button type='submit' className='w-[100px] px-4 py-2 rounded-md bg-green-500 text-white'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage