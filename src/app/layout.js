import Footer from '@/components/footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from './AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Glorify',
  description: 'An app created by Sameer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
        <div className='container'>
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
