export type Champion = {
  id: string
  name: string
}

export type ChampionID = {
  id: string
  name: string
  title: string
  skins: {
    num: string
  }
  lore: string
  tags: string[]
}

export type ListProps = {
  champions: Champion[]
}
