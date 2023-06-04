import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-6 flex justify-between'>
            <div>©2023 Findr. All rights reserved.</div>
            <div className='flex gap-x-3'>
                <Image src='/1.png' width={20} alt='Facebook logo' className='object-contain' />
                <Image src='/2.png' width={20} alt='instagram logo' className='object-contain' />
                <Image src='/3.png' width={20} alt='twitter logo' className='object-contain' />
                <Image src='/4.png' width={20} alt='youtube logo' className='object-contain' />
            </div>
        </div>
    )
}

export default Footer