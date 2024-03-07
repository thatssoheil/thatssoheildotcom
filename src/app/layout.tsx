import './globals.css'

import type { Metadata } from 'next'

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer'
import MatrixBackground from '@/components/core/MatrixBackground'
import React from 'react'

export const metadata: Metadata = {
    title: 'Soheil Fakour',
    description: 'Coding Vision into Existence',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
        <head>
            <title>Soheil Fakour</title>
            <meta name='description' content='Coding Vision into Existence'/>
            <meta name='author' content='Soheil Fakour'/>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        </head>
        <body>
        <Header/>
        <MatrixBackground/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
