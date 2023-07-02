'use client'

import '../../../styles/globals.css'
import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-full w-full bg-blue1 dark:bg-white"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
