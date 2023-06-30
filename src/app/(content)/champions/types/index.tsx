export type Champion = {
  id: string
  name: string
}

export type ChampionID = {
  id: string
  name: string
  lore: string
}

export type ListProps = {
  champions: Champion[]
}
