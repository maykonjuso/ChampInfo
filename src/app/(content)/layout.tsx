'use client'

import '../globals.css'
import { Inter } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} overflow-x-hidden`}>
      <body className="flex h-full w-full flex-col gap-2 bg-blue1 dark:bg-white">
        <Header />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-full w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  )
}
