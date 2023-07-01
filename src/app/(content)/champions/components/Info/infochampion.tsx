import { ChampionID } from '../../../../../types'

type InfoChampionProps = {
  champion: ChampionID
}

export default async function InfoChampion({ champion }: InfoChampionProps) {
  return (
    <div className="h-full w-full">
      <div className="">
        <h1 className="font-BeaufortBoldItalic text-6xl text-white dark:text-black">
          {champion.name.toUpperCase()}
        </h1>
        <h2 className="font-SpiegelBold text-2xl text-white opacity-50 dark:text-black">
          {champion.title}
        </h2>
        <ul className="font-SpiegelBold text-lg text-white dark:text-black">
          {champion.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <p className="font-SpiegelSemibold text-lg text-white dark:text-black">
        {champion.lore}
      </p>
    </div>
  )
}
