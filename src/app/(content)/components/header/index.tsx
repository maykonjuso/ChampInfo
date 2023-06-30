'use client'

import Link from 'next/link'
import ToggleTheme from '../toggle'

export default function Header() {
  return (
    <header className="flex items-center justify-between rounded-xl  px-20 py-2 ">
      <ul className="flex gap-4">
        <li className="font-SpiegelBold text-zinc-900 dark:text-zinc-100">
          <Link href="/champions">CAMPEÕES</Link>
        </li>
        <li className="font-SpiegelBold text-zinc-900 dark:text-zinc-100">
          <Link href="/items">ITENS</Link>
        </li>
        <li className="font-SpiegelBold text-zinc-900 dark:text-zinc-100">
          <Link href="/about">SOBRE</Link>
        </li>
      </ul>
      <ToggleTheme />
    </header>
  )
}
