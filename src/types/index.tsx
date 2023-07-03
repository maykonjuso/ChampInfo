export type Champion = {
  id: string
  name: string
}

export type ChampionComplete = {
  id: string
  name: string
  title: string
  skins: [
    {
      num: string
    },
  ]
  lore: string
  tags: string[]
}

export type Theme = 'light' | 'dark'

export type TagProps = {
  name: string
  color?: string
}

export type InfoChampionProps = {
  champion: ChampionComplete
}

export type item = {
  name: string
  plaintext: string
  image: { full: string }
  gold: [total: string, sell: string]
}

export type ListItemsProps = {
  items: item[]
}

export type ListChampionProps = {
  champions: Champion[]
}
