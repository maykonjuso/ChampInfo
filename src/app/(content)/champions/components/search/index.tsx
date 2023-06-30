'use client'
import { motion } from 'framer-motion'

export default function Search({ searchHandler }: any) {
  return (
    <label className="relative flex w-full items-center justify-center">
      <motion.input
        whileHover={{ scale: 1.02 }}
        className="flex w-96 items-center rounded-md border bg-whiteGold py-2 pl-5 pr-3 font-SpiegelSemibold text-black shadow-sm placeholder:text-zinc-400 focus:border-gold1 focus:outline-none focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-700 dark:text-white sm:text-sm"
        placeholder="Procure por um campeão..."
        required
        onChange={(e) => {
          searchHandler(e.target.value || '')
        }}
      />
    </label>
  )
}
