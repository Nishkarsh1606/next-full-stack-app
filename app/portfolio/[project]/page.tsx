import Button from '@/app/components/Button'
import Image from 'next/image'
import React from 'react'

const ProjectPage = ({ params: { project } }: { params: { project: string } }) => {
    return (
        <div>
            <p className='text-xl font-bold'>{project}</p>
            <div className='min-h-[60vh]'>
                <div className='flex justify-between mb-6 even:flex-row-reverse'>
                    <div className='flex flex-col justify-center max-w-[50%]'>
                        <h1 className='text-3xl mb-3 font-bold'>Title</h1>
                        <p className='mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Button title='See More' url='#' />
                    </div>
                    <div className='hidden md:block'>
                        <Image src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg' width={500} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage