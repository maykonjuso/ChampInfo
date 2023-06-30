import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="flex h-10 w-full items-center justify-center gap-1 bg-black">
      <h2 className="font-SpiegelSemibold text-white">
        Designed by <span className="font-SpiegelBold">Maykon Santos</span>
      </h2>
      <Heart className="text-red-600" />
    </footer>
  )
}
