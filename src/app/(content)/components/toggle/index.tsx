'use client'
import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ToggleTheme() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <motion.div
      className="flex cursor-pointer items-center"
      onClick={handler}
      whileHover={{ scale: 1.1, rotate: [0, 180, 180, 0] }}
      whileTap={{ scale: 0.9 }}
    >
      {theme === 'dark' ? (
        <Moon className="text-black" />
      ) : (
        <Sun className="text-white" />
      )}
    </motion.div>
  )
}
