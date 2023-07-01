'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const show = {
  opacity: 1,
  display: 'block',
}

const hide = {
  opacity: 0,
  duration: 1.5,
  transitionEnd: {
    display: 'none',
  },
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className="h-full w-full bg-blue1">
      <motion.div
        className="background h-screen w-screen"
        animate={isVisible ? show : hide}
      >
        <div className="flex h-full w-full items-center bg-gradient-to-r from-blue1 from-40%">
          <div className="ml-10 flex flex-col items-center gap-12">
            <div className="flex flex-col items-center">
              <h1 className="font-BeaufortBold text-9xl text-whiteGold ">
                CHAMPINFO
              </h1>
              <h2 className="font-BeaufortBoldItalic text-6xl text-gold1">
                UNIVERSO LEAGUE OF LEGENDS
              </h2>
            </div>
            <Link href="/champions">
              <button
                className="border-4 border-gold1 px-8 py-2 font-SpiegelBold text-whiteGold duration-500 hover:bg-gold1 "
                onClick={() => setIsVisible(!isVisible)}
              >
                EXPLORAR
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
