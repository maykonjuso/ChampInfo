import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Página inicial',
}

export default function Home() {
  return <main className="h-full">Home app</main>
}
