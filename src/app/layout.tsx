import './globals.css'

import type { Metadata } from 'next'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
