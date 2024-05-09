import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Aside from './components/Aside'

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
      <body className={`flex h-screen ${inter.className}`}>
        <Aside />

        {children}
      </body>
    </html>
  )
}
