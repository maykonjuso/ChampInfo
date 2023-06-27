import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import ToggleTheme from './components/toggle/page'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Página inicial',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden ">
      <body className={inter.className}>
        <div className="bg-gradient-to-r from-rose-100 to-teal-100 dark:from-slate-900 dark:to-slate-800">
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
          <div className="h-full min-h-screen bg-regal-blue ">{children}</div>
        </div>
      </body>
    </html>
  )
}
