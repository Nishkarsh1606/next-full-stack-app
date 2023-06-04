'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ContactPage = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        alert('submitted')
        setEmail('')
        setName('')
        setMessage('')
    }
    return (
        <div>
            <p className='text-center text-6xl font-bold mb-[60px]'>
                Let's keep in touch
            </p>
            <div className='flex justify-around'>
                <Image src={'/contact.png'} alt='contact us iamge' width={400} className='hidden md:block' />
                <form className='flex flex-col min-w-[50%]' onSubmit={handleFormSubmit}>
                    <input type="text" placeholder='Enter your full name' value={name} onChange={e => setName(e.target.value)} className='border-2 mb-2 rounded-md outline-none p-1' />
                    <input type="email" placeholder='Email id' value={email} onChange={e => setEmail(e.target.value)} className='border-2 mb-2 rounded-md outline-none p-1' />
                    <textarea name="" id="" cols={30} rows={10} placeholder='message' value={message} onChange={e => setMessage(e.target.value)} className='border-2 mb-2 rounded-md outline-none p-1' />
                    <button type='submit' className='w-[100px] px-4 py-2 rounded-md bg-green-500 text-white'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage