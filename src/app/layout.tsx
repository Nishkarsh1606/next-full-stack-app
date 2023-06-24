import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AuthProvider from '@/src/components/AuthProvider'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../context/ThemeContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Full Stack App',
  description: 'Full stack app using Next.js 13 App Router, Auth.js, MongoDB, SSR, CSR components.',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* @ts-ignore */}
        <ThemeProvider>
          <AuthProvider>
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
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
