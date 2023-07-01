import { Champion } from '../types'

export async function GetChampions() {
  const response = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion.json`,
  )
  const data = await response.json()
  const champions: Champion[] = Object.values(data.data)
  return champions
}
