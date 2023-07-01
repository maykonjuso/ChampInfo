import { ChampionID } from '../types'

export async function GetChampionsById(id: string) {
  const response = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion/${id}.json`,
  )
  const data = await response.json()
  const champions: ChampionID[] = await Object.values(data.data)
  const champion = champions[0]

  return champion || []
}
