import { Metadata } from 'next'
import GetItems from '../../../services/get-item'
import ItemsList from './components/List'

export const metadata: Metadata = {
  title: 'Itens',
  description: 'Página de itens',
}

export default async function items() {
  const items = await GetItems()
  return <ItemsList items={items} />
}
