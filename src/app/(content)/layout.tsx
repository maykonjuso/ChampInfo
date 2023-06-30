'use client'

import '../globals.css'
import { Inter } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} overflow-x-hidden`}>
      <body className="bg-gradient-to-r from-[#F0E6D2] to-[##f7f7f7] dark:from-[#091428] dark:to-[#0A1428]">
        <Header />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  )
}
