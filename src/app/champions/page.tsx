import ListChampions from './components/list/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Campeões',
  description: 'Página de campeões',
}

export default function champions() {
  return <ListChampions />
}
