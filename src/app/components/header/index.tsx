'use client'

import Link from 'next/link'
import ToggleTheme from '../toggle'

export default function Header() {
  return (
    <header className="flex items-center justify-between rounded-xl  px-20 py-2 ">
      <ul className="flex gap-4">
        <li className="font-semibold text-zinc-900 dark:text-zinc-100">
          <Link href="/">Home</Link>
        </li>
        <li className="font-semibold text-zinc-900 dark:text-zinc-100">
          <Link href="/champions">Campeões</Link>
        </li>
        <li className="font-semibold text-zinc-900 dark:text-zinc-100">
          <Link href="/items">Itens</Link>
        </li>
      </ul>
      <ToggleTheme />
    </header>
  )
}
