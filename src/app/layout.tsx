import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode, Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Página inicial',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} overflow-x-hidden`}>
      <head>
        <head>
          <link rel="icon" sizes="128x128" href="/favicon.ico" />
        </head>
      </head>
      <body>
        <Suspense fallback={<p>Loading feed...</p>}>{children}</Suspense>
      </body>
    </html>
  )
}
