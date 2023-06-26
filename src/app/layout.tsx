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
    <html lang="en" className="overflow-x-hidden">
      <body className={inter.className}>
        <header className="flex items-center gap-8 bg-slate-100 px-20 py-10 dark:bg-slate-900">
          <ul className="flex gap-4">
            <li className="text-zinc-900 dark:text-zinc-100">
              <Link href="/">Home</Link>
            </li>
            <li className="text-zinc-900 dark:text-zinc-100">
              <Link href="/champions">Campeões</Link>
            </li>
          </ul>
          <ToggleTheme />
        </header>
        <div className="h-full min-h-screen bg-slate-100 dark:bg-slate-900">
          {children}
        </div>
      </body>
    </html>
  )
}
