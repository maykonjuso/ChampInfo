'use client'

import Link from 'next/link'
import ToggleTheme from '../toggle'

export default function Header() {
  return (
    <header className="flex items-center justify-between rounded-xl  px-20 py-4 ">
      <ul className="flex gap-10">
        <li className="link link-underline link-underline-black font-SpiegelBoldItalic text-lg text-black dark:text-white">
          <Link href="/champions">CAMPEÕES</Link>
        </li>
        <li className="link link-underline link-underline-black font-SpiegelBoldItalic text-lg text-black dark:text-white">
          <Link href="/items">ITENS</Link>
        </li>
        <li className="link link-underline link-underline-black font-SpiegelBoldItalic text-lg text-black dark:text-white">
          <Link href="/about">SOBRE</Link>
        </li>
      </ul>
      <ToggleTheme />
    </header>
  )
}
