'use client'
import React, { useEffect, useState } from 'react'
import Switch from '@mui/material/Switch'
import { Moon } from 'lucide-react'

export default function ToggleTheme() {
  const [theme, setTheme] = useState('dark')

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
    <div className="flex items-center">
      <Switch sx={{ m: 1 }} onChange={handler} defaultChecked className="m-0" />
      <Moon className="text-zinc-900 dark:text-zinc-100" />
    </div>
  )
}
