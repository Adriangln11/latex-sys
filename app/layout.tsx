import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Aside from './components/Aside'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Látex Mexicana',
  description: 'ERP interno',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`relative flex h-screen ${inter.className}`}>
        <Aside />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
