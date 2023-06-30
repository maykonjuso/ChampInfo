'use client'
import { motion } from 'framer-motion'

export default function Search({ searchHandler }: any) {
  return (
    <label className="relative flex w-full items-center justify-center">
      <motion.input
        whileHover={{ scale: 1.02 }}
        className="flex w-96 items-center rounded-md border border-zinc-900 bg-slate-700 py-2 pl-5 pr-3 font-SpiegelSemibold text-white shadow-sm placeholder:text-zinc-400 focus:outline-none  dark:border-zinc-200 dark:bg-zinc-200 dark:text-black sm:text-sm"
        placeholder="Procure por um campeão..."
        required
        onChange={(e) => {
          searchHandler(e.target.value || '')
        }}
      />
    </label>
  )
}
