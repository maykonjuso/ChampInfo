import './globals.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="background h-screen w-screen">
      <div className="flex h-full w-full items-center bg-gradient-to-r from-blue1 from-40%">
        <div className="ml-10 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center">
            <h1 className="font-BeaufortBold text-9xl text-whiteGold">
              CHAMPINFO
            </h1>
            <h2 className="font-BeaufortBoldItalic text-6xl text-gold1">
              UNIVERSO LEAGUE OF LEGENDS
            </h2>
          </div>
          <Link href="/champions">
            <button className="border-2 border-gold1 px-8 py-2 font-SpiegelBold text-whiteGold duration-500 hover:bg-gold1 ">
              EXPLORAR
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
