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
    <div className="h-full w-full bg-blue1 dark:bg-white">
      <motion.div
        className="background h-screen w-screen"
        animate={isVisible ? show : hide}
      >
        <div className="relative flex h-full w-full items-center bg-gradient-to-t from-blue1 from-30%">
          <div className="absolute mb-40 flex h-full w-full flex-col items-center justify-end gap-12">
            <div className="flex flex-col items-center ">
              <h1 className="font-BeaufortBold text-whiteGold max-[600px]:text-4xl min-[600px]:text-8xl xl:text-9xl">
                CHAMPINFO
              </h1>
              <h2 className="font-BeaufortBoldItalic text-gold1 max-[600px]:text-xl min-[600px]:text-2xl xl:text-4xl">
                UNIVERSO LEAGUE OF LEGENDS
              </h2>
            </div>
            <Link href="/champions">
              <button
                className="border-2 border-gold1 px-8 py-2 font-SpiegelBold text-whiteGold duration-500 hover:bg-gold1 "
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
