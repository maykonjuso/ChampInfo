'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import 'src/app/globals.css'
import Search from '../search'
import { Champion, ListProps } from '../../types'
import { useState } from 'react'
import Link from 'next/link'

export default function List({ champions }: ListProps) {
  const [championsFilter, setChampionsFilter] = useState<Champion[]>(champions)

  const searchHandler = (childdata: string) => {
    setChampionsFilter(filterChampion(champions, childdata))
  }

  function filterChampion(data: Champion[], query: string) {
    return data.filter((champ) =>
      champ.name.toLowerCase().includes(query.toLowerCase()),
    )
  }

  return (
    <div className="h-full min-h-screen">
      <div className="h-sreen flex w-full flex-col items-center justify-center">
        <Search searchHandler={searchHandler} />
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 grid min-[350px]:grid-cols-4 sm:grid-cols-6 xl:grid-cols-12"
        >
          {championsFilter.map((champion: any) => (
            <motion.li
              key={champion.name}
              className="w-max cursor-pointer list-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={`/champions/${champion.id}`}>
                <div className="m-2 flex h-20 w-20 flex-col items-center justify-center overflow-hidden rounded-md bg-slate-200 drop-shadow-sm dark:bg-slate-800">
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
