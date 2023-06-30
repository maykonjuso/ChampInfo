import { ChampionID } from '../../types'

export async function GetChampionsById(id: string) {
  'use server'
  const response = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/13.12.1/data/pt_BR/champion/${id}.json`,
  )
  const data = await response.json()
  const champions: ChampionID[] = Object.values(data.data)
  return champions[0]
}
