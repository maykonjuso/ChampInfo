import '../styles/globals.css'
import { Metadata } from 'next'
import { ReactNode } from 'react'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Página inicial',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} overflow-x-hidden bg-blue1`}>
      <head>
        <head>
          <link
            rel="icon"
            sizes="128x128"
            href="../../public/assets/favicon.ico"
          />
        </head>
      </head>
      <body className="bg-blue1">{children}</body>
    </html>
  )
}
