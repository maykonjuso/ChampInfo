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

export type ListChampionProps = {
  champions: Champion[]
}

export type Theme = 'light' | 'dark'

export type TagProps = {
  name: string
  color?: string
}

export type InfoChampionProps = {
  champion: ChampionComplete
}
