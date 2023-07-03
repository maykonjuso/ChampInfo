'use client'

import Link from 'next/link'
import ToggleTheme from '../ToggleTheme'

export default function Header() {
  return (
    <header className="flex items-center justify-between rounded-xl px-20 py-4 min-[350px]:px-5 ">
      <ul className="flex gap-10">
        <li className="link link-underline link-underline-black font-SpiegelBold text-lg text-white dark:text-black">
          <Link href="/champions">CAMPEÕES</Link>
        </li>
        <li className="link link-underline link-underline-black font-SpiegelBold text-lg text-white dark:text-black">
          <Link href="/items">ITENS</Link>
        </li>
        <li className="link link-underline link-underline-black font-SpiegelBold text-lg text-white dark:text-black">
          <Link href="/about">SOBRE</Link>
        </li>
      </ul>
      <ToggleTheme />
    </header>
  )
}
