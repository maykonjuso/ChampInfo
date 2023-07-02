'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Search from '../Search'
import { ListChampionProps } from '../../../../../types'
import Link from 'next/link'
import UseList from '../../../../../hooks/UseList'

export default function List({ champions }: ListChampionProps) {
  const { championsFilter, searchHandler } = UseList(champions)

  return (
    <div className="bg-blue1 dark:bg-white">
      <div className="mb-10 flex min-h-full w-full flex-col items-center justify-center bg-blue1 dark:bg-white">
        <Search searchHandler={searchHandler} />
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 grid h-full min-[350px]:grid-cols-4 sm:grid-cols-6 xl:grid-cols-12"
        >
          {championsFilter.map((champion: any) => (
            <motion.li
              key={champion.name}
              className="w-max cursor-pointer list-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={`/champions/${champion.id}`}>
                <div className="m-2 flex h-20 w-20 flex-col items-center justify-center overflow-hidden rounded-md bg-slate-800 drop-shadow-sm dark:bg-slate-200">
                  <Image
                    src={`http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/${champion.id}.png`}
                    width={150}
                    height={150}
                    alt={champion.name}
                    className="scale-125"
                    priority={true}
                  />
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
