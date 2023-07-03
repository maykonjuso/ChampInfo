import { useState } from 'react'
import { item } from '../types'

export default function UseListItem(items: item[]) {
  const [itemsFilter, setitemsFilter] = useState<item[]>(items)

  const searchHandler = (childdata: string) => {
    setitemsFilter(filterItems(items, childdata))
  }

  function filterItems(data: item[], query: string) {
    return data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    )
  }

  return { itemsFilter, searchHandler }
}
