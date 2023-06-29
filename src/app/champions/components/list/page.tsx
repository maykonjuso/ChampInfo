'use client'

import ModalInfo from '../modalInfo/page'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import 'src/app/globals.css'
import Search from '../search/page'
import { Champion } from '../../types'

export default function ListChampions() {
  const [champion, setChampion] = useState<Champion[]>([])
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')
  const [name, setName] = useState<string>('')

  useEffect(() => {
    fetch(
      'http://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion.json',
    )
      .then((res) => res.json())
      .then((data) => {
        setChampion(filterItems(Object.values(data.data), search))
      })
  }, [search])

  const searchHandler = (childdata: string) => {
    setSearch(childdata)
  }

  const nameHandler = (name: string) => {
    setName(name)
    setModalVisible(true)
  }

  function filterItems(data: Champion[], query: string) {
    return data.filter((champ) =>
      champ.name.toLowerCase().includes(query.toLowerCase()),
    )
  }

  return (
    <div className="h-full min-h-screen">
      {name !== '' && (
        <ModalInfo
          name={name}
          visible={modalVisible}
          setVisible={setModalVisible}
        />
      )}
      <div className="h-sreen flex w-full flex-col items-center justify-center">
        <Search searchHandler={searchHandler} />
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 grid min-[350px]:grid-cols-3 sm:grid-cols-6 xl:grid-cols-12"
        >
          {champion.map((champion: any) => (
            <motion.li
              key={champion.name}
              className="w-max cursor-pointer list-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => nameHandler(champion.id)}
            >
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
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
