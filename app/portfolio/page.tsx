import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PortfolioPage = () => {
    return (
        <div className='flex flex-col min-h-[60vh]'>
            <p className='font-bold text-2xl mt-6'>Choose a gallery</p>
            <div className='flex gap-x-2'>
                <Link href={'/portfolio/Illustration'} className='w-[250px] h-[300px] relative'>
                    <Image src='/illustration.png' fill={true} alt='' className='object-cover rounded-md border-2' />
                </Link>
                <Link href={'/portfolio/Apps'} className='w-[250px] h-[300px] relative'>
                    <Image src='/apps.jpg' fill={true} alt='' className='object-cover rounded-md border-2' />
                </Link>
                <Link href={'/portfolio/Websites'} className='w-[250px] h-[300px] relative'>
                    <Image src='/websites.jpg' fill={true} alt='' className='object-cover rounded-md border-2' />
                </Link>
            </div>
        </div>
    )
}

export default PortfolioPage