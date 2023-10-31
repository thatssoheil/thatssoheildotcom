import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import './globals.css'

export const metadata: Metadata = {
  title: 'Soheil Fakour',
  description: 'Frontend Web Developer bringing designs to life.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
