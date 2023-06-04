import Button from '@/app/components/Button'
import Image from 'next/image'
import items from './data'
import { notFound } from 'next/navigation';


const getData = (category: string) => {
    // @ts-ignore
    const data = items[category]
    if (!data) {
        notFound()
    }
    return data
}

const ProjectPage = ({ params: { project } }: { params: { project: string } }) => {
    const data = getData(project)
    return (
        <div>
            {
                data.map((item: any, index: number) => (
                    <div key={item.id}>
                        <p className='text-xl font-bold'>{item.title}</p>
                        <div className='min-h-[60vh]'>
                            <div className={`flex justify-between mb-6 ${index % 2 === 0 && 'flex-row-reverse'}`}>
                                <div className='flex flex-col justify-center max-w-[50%]'>
                                    <h1 className='text-3xl mb-3 font-bold'>Title</h1>
                                    <p className='mb-3'>{item.desc}</p>
                                    <Button title='See More' url='#' />
                                </div>
                                <div className='hidden md:block'>
                                    <Image src={item.image} width={500} height={20} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectPage