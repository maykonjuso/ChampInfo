import { item } from '../types'

export default async function GetItems() {
  const response = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/13.13.1/data/pt_BR/item.json`,
  )

  const data = await response.json()
  const items: item[] = Object.values(data.data)

  return items
}
