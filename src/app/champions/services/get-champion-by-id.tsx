import { ChampionID } from '../types'

export async function GetChampionById(id: string) {
  const response = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion/${id}.json`,
  )
  const data = await response.json()
  const champion: ChampionID[] = Object.values(data.data)
  return champion[0]
}
