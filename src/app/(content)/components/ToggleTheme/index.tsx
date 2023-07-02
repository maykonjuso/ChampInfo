'use client'
import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import useTheme from '../../../../hooks/UseToggle'

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.div
      className="flex cursor-pointer items-center"
      onClick={toggleTheme}
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
