import List from './components/List'
import { Metadata } from 'next'
import { GetChampions } from '../../../services/get-champions'

export const metadata: Metadata = {
  title: 'Campeões',
  description: 'Página de campeões',
}

export default async function champions() {
  const champions = await GetChampions()
  return (
    <div className="bg-blue1 dark:bg-white">
      <List champions={champions} />
    </div>
  )
}
