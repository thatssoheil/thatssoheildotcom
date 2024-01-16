import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'


const ubuntu = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: '500',
})

export const metadata: Metadata = {
  title: 'Soheil Fakour',
  description: 'Coding Vision into Existence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={ubuntu.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
