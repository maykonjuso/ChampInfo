import { Metadata } from 'next'
import List from './components/list'
import { GetChampions } from './services/get-champions'

export const metadata: Metadata = {
  title: 'Campeões',
  description: 'Página de campeões',
}

export default async function champions() {
  const champions = await GetChampions()
  return <List champions={champions} />
}
