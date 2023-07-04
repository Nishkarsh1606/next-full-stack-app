import Link from 'next/link'
import React from 'react'
import DarkModeToggle from './DarkModeToggle/DarkModeToggle'
import LogoutBtn from './LogoutBtn'

const Navbar = () => {
    const links = [
        {
            id: 1,
            link: '/about',
            title: 'About'
        },
        {
            id: 2,
            link: '/blog',
            title: 'Blog'
        },
        {
            id: 3,
            link: '/contact',
            title: 'Contact'
        },
        {
            id: 4,
            link: '/portfolio',
            title: 'Portfolio'
        },
        {
            id: 5,
            link: '/dashboard',
            title: 'Dashboard'
        }
    ]
    return (
        <nav className='flex justify-between items-center mb-12 md:mb-6'>
            <div>
                <Link href='/'>
                    <h1 className='text-3xl font-bold'>Full App</h1>
                </Link>
            </div>
            <div className='hidden md:flex gap-x-5 items-center'>
                <DarkModeToggle />
                {
                    links.map((link) => (
                        <li key={link.id} className='list-none'>
                            <Link href={link.link} className='hover:text-green-700'>{link.title}</Link>
                        </li>
                    ))
                }
            <LogoutBtn/>
            </div>
        </nav>
    )
}

export default Navbar