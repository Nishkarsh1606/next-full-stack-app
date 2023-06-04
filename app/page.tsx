import Image from 'next/image'
import Button from './components/Button'
import styles from './homepage.module.css'

export default function HomePage() {
  return (
    <main className='flex flex-col md:flex-row items-center justify-between md:mt-[-3rem]'>
      <div className='md:max-w-[60%]'>
        <h1 className={`font-bold mb-6 ${styles.title}`}>Better design for your digital products.</h1>
        <h2 className='text-2xl mb-6'>Turning your idea into Reality. We bring together the teams from the global tech industry.</h2>
        <Button title='Contact Us' url='/contact' />
      </div>
      <Image src='/hero.png' width={400} height={200} alt='hero image' className={styles.img}/>
    </main>
  )
}