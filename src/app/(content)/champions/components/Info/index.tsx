'use client'

import { useEffect } from 'react'
import { InfoChampionProps } from '../../../../../types'
import Classes from '../Classes'
import { AnimatePresence, motion } from 'framer-motion'

export default async function InfoChampion({ champion }: InfoChampionProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-full w-full"
      >
        <div
          style={{
            background: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg)`,
            backgroundSize: 'cover',
            height: '100%',
            backgroundPosition: 'center',
          }}
        >
          <div className="flex h-full w-full flex-col justify-end bg-gradient-to-t from-blue1 from-20% dark:from-white dark:from-10%">
            <div className="mb-2 flex flex-col justify-end gap-5 p-5">
              <div className="flex items-center min-[350px]:flex-col min-[350px]:gap-5 lg:flex-row xl:flex-row">
                <div className="flex items-center justify-center min-[350px]:flex-col min-[350px]:gap-2 lg:flex-row lg:gap-5 xl:flex-row xl:gap-10">
                  <h1 className="font-BeaufortBoldItalic text-gold1 min-[350px]:text-4xl xl:text-6xl">
                    {champion.name.toUpperCase()}
                  </h1>
                  <h2 className="font-SpiegelBold text-3xl text-white opacity-70  dark:text-black">
                    {champion.title.charAt(0).toUpperCase() +
                      champion.title.slice(1).toLowerCase()}
                  </h2>
                </div>
                {Classes(champion.tags)}
              </div>
              <p className="text-justify indent-20 font-SpiegelSemibold text-lg text-white dark:text-black">
                {champion.lore}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
