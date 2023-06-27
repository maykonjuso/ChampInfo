'use client'

import ModalInfo from './components/modalInfo'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import 'src/app/globals.css'

type Champion = {
  name: string
  image: {
    full: string
  }
}

export default function List() {
  const [champion, setChampion] = useState<Champion[]>([])
  const [championFull, setChampionFull] = useState<Champion[]>([])
  const [search, setSearch] = useState<string>('')
  const [name, setName] = useState<string>('')

  function filterItems(data: Champion[], query: string) {
    return data.filter((champ) =>
      champ.name.toLowerCase().includes(query.toLowerCase()),
    )
  }

  useEffect(() => {
    fetch(
      'http://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion.json',
    )
      .then((res) => res.json())
      .then((data) => {
        setChampion(Object.values(data.data))
        setChampionFull(Object.values(data.data))
      })
  }, [])

  useEffect(() => {
    setChampion(filterItems(championFull, search))
  }, [championFull, search])

  const [modalVisible, setModalVisible] = useState(false)

  const handler = (name: string) => {
    setModalVisible(true)
    setName(name)
  }

  return (
    <motion.div
      className="h-full min-h-screen bg-slate-100 pt-5 dark:bg-slate-900"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      {name !== '' && (
        <ModalInfo
          name={name}
          visible={modalVisible}
          setVisible={setModalVisible}
        />
      )}
      <div className="h-sreen flex w-full flex-col items-center justify-center">
        <form className="flex w-full items-center justify-center">
          <label className="relative flex w-full items-center justify-center">
            <span className="sr-only">Search</span>

            <input
              className="flex w-96 items-center rounded-md border border-slate-300 bg-slate-300 py-2 pl-5 pr-3 text-zinc-900 shadow-sm duration-300 placeholder:text-slate-400 hover:-translate-y-1 hover:scale-110 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-700 dark:text-zinc-100 sm:text-sm"
              placeholder="Procure por um campeão..."
              name="inputSearch"
              id="inputSearch"
              required
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
          </label>
        </form>
        <ul className="mt-4 grid min-[350px]:grid-cols-3 sm:grid-cols-6 xl:grid-cols-12">
          {champion.map((champion: any) => (
            <motion.li
              key={champion.name}
              className="w-max cursor-pointer list-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handler(champion.id)}
            >
              <div className="m-2 flex h-20 w-20 flex-col items-center justify-center overflow-hidden rounded-md bg-slate-200 drop-shadow-sm dark:bg-slate-800">
                <Image
                  src={`http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/${champion.id}.png`}
                  width={150}
                  height={150}
                  alt={champion.name}
                  className="scale-125"
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
