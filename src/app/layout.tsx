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
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-slate-100 dark:bg-slate-900">
          <ToggleTheme />
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/champions">Campeões</Link>
            </li>
          </ul>
        </header>
        <body className="h-full min-h-screen bg-slate-100 dark:bg-slate-900">
          {children}
        </body>
      </body>
    </html>
  )
}
