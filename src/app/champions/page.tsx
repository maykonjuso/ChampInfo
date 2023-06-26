'use client'

import ModalInfo from './components/modalInfo'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import 'src/app/globals.css'

const imageLoader = ({ src }: any) => {
  return `http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/${src}`
}

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
    <div className="h-full min-h-screen bg-slate-100 dark:bg-slate-900">
      <ModalInfo
        name={name}
        visible={modalVisible}
        setVisible={setModalVisible}
      />
      <div className="h-sreen">
        <form className="">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <input
              className="block w-full rounded-md border border-slate-300 bg-slate-300 py-2 pl-9 pr-3 text-black shadow-sm placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:bg-slate-700 sm:text-sm"
              placeholder="Search for anything..."
              name="inputSearch"
              id="inputSearch"
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
              <div className="m-2 flex h-28 w-24 flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800">
                <Image
                  loader={imageLoader}
                  src={champion.image.full}
                  width={60}
                  height={60}
                  alt={champion.name}
                />
                <p className="mt-1 text-center text-zinc-900 dark:text-zinc-100">
                  {champion.name}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
