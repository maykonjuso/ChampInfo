import './globals.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="background h-screen w-screen">
      <div className="flex h-full w-full items-center bg-gradient-to-r from-[#010A13] from-40%">
        <div className="ml-10 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-BeaufortBold text-9xl text-[#F0E6D2]">
              CHAMPINFO
            </h1>
            <h2 className="font-BeaufortBold text-5xl text-[#C89B3C]">
              UNIVERSO LEAGUE OF LEGENDS
            </h2>
          </div>
          <Link href="/champions">
            <button className="border-2 border-[#C89B3C] px-8 py-2 font-SpiegelBold text-[#F0E6D2] duration-500 hover:bg-[#C89B3C] ">
              EXPLORAR
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
