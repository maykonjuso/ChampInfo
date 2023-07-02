import { useState } from 'react'
import { Champion } from '../types'

export default function UseList(champions: Champion[]) {
  const [championsFilter, setChampionsFilter] = useState<Champion[]>(champions)

  const searchHandler = (childdata: string) => {
    setChampionsFilter(filterChampion(champions, childdata))
  }

  function filterChampion(data: Champion[], query: string) {
    return data.filter((champ) =>
      champ.name.toLowerCase().includes(query.toLowerCase()),
    )
  }

  return { championsFilter, searchHandler }
}
