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
    <html
      lang="en"
      className={`${inter.className} h-full w-full overflow-x-hidden bg-blue1 dark:bg-white`}
    >
      <head>
        <link
          rel="icon"
          sizes="128x128"
          href="../../public/assets/favicon.ico"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="h-full w-full bg-blue1 dark:bg-white">{children}</body>
    </html>
  )
}
