import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../context/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Full Stack App',
  description: 'Full stack app using Next.js 13 App Router, Auth.js, MongoDB, SSR, CSR components.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* @ts-ignore */}
        <ThemeProvider>
          <div className='flex flex-col justify-between max-w-[80vw] min-h-screen mx-auto p-6'>
            <header>
              <Navbar />
            </header>
            <div>
              {children}
            </div>
            <footer>
              <Footer />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
