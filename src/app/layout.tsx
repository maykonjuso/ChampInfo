'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'
import Header from './components/header/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Página inicial',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden ">
      <body className="bg-gradient-to-r from-rose-100 to-teal-100 dark:from-slate-900 dark:to-slate-800">
        <Header />
        <AnimatePresence>
          <motion.div
            className={inter.className}
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
