'use client'

import '../../styles/globals.css'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Footer from './components/footer'
import Header from './components/header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col gap-2 bg-blue1 dark:bg-white">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  )
}
