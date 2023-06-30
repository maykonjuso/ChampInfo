import { GetChampionsById } from './services/get-champion'

export default async function Page({ params }: { params: { id?: string } }) {
  const id = params.id || ''
  const champion = await GetChampionsById(id)
  return <h1>{champion.lore}</h1>
}
