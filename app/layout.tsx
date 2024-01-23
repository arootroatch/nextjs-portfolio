import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/ThemeSwitch'
import ThemeContextProvider from '@/context/themeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alex Root-Roatch | Portfolio',
  description: 'Alex Root-Roatch is a full-stack developer with 3 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header/>
              
            {children}
            <Footer/>
          </ActiveSectionContextProvider>
          <Toaster position='top-right'/>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  )
}
