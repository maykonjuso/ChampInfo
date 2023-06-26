'use client'

import { useEffect, useState } from 'react'
import { Grid, Switch } from '@nextui-org/react'
import { Moon, SunDim } from 'lucide-react'

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
    <Grid>
      <Switch
        checked={true}
        onChange={handler}
        size="lg"
        iconOn={<Moon />}
        iconOff={<SunDim />}
      />
    </Grid>
  )
}
