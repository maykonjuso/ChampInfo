import Image from 'next/image'

import { TagProps } from '../../../../../types'

export default function Classes(tags: string[]) {
  const tagsPT: TagProps[] = tags.map((tag) => {
    if (tag === 'Mage') {
      return { name: 'MAGO', color: 'bg-sky-500' }
    }
    if (tag === 'Tank') {
      return { name: 'TANQUE', color: 'bg-rose-600' }
    }
    if (tag === 'Assassin') {
      return { name: 'ASSASSINO', color: 'bg-red-500' }
    }
    if (tag === 'Marksman') {
      return { name: 'ATIRADOR', color: 'bg-purple-600' }
    }
    if (tag === 'Fighter') {
      return { name: 'LUTADOR', color: 'bg-lime-500' }
    }
    if (tag === 'Support') {
      return { name: 'SUPORTE', color: 'bg-pink-600' }
    }
    return { name: tag }
  })
  return (
    <div>
      <ul className="flex gap-3">
        {tagsPT.map((tag) => (
          <li key={tag.name}>
            <div
              className={`flex w-max items-center justify-center gap-2 rounded-3xl ${tag.color} px-2 py-2 `}
            >
              <Image
                src={`../../../../../assets/${tag.name.toLocaleLowerCase()}.svg`}
                width={15}
                height={15}
                alt={tag.name}
                priority={true}
              />
              <p className="font-SpiegelSemibold text-sm text-white ">
                {tag.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
