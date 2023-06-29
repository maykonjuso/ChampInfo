import { motion } from 'framer-motion'

export default function Search({ searchHandler }: any) {
  return (
    <label className="relative flex w-full items-center justify-center">
      <motion.input
        whileHover={{ scale: 1.02 }}
        className="flex w-96 items-center rounded-md border border-slate-300 bg-slate-300 py-2 pl-5 pr-3 text-zinc-900 shadow-sm placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-700 dark:text-zinc-100 sm:text-sm"
        placeholder="Procure por um campeão..."
        required
        onChange={(e) => {
          searchHandler(e.target.value || '')
        }}
      />
    </label>
  )
}
