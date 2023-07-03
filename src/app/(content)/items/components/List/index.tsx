'use client'
import { motion } from 'framer-motion'
import Search from '../../../champions/components/Search'
import { ListItemsProps, item } from '../../../../../types'
import UseListItem from '../../../../../hooks/UseListItem'
import Image from 'next/image'

export default async function ItemsList({ items }: ListItemsProps) {
  const { itemsFilter, searchHandler } = UseListItem(items)

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
          {itemsFilter.map((item: item) => (
            <motion.li
              className="w-max cursor-pointer list-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={item.name}
            >
              <div className="m-2 flex h-10 w-10 flex-col items-center justify-center overflow-hidden rounded-md bg-slate-800 drop-shadow-sm dark:bg-slate-200">
                <Image
                  src={`http://ddragon.leagueoflegends.com/cdn/13.13.1/img/item/${item.image.full}`}
                  width={48}
                  height={48}
                  alt={item.name}
                  priority={true}
                />
              </div>
              <p className="text-sm text-white dark:text-black">{item.name}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
