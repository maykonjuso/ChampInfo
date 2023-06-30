import { GetChampionsById } from '../services/get-champion-by-id'
import InfoChampion from './info/infochampion'

export default async function Page({ params }: { params: { id: string } }) {
  const champion = await GetChampionsById(params.id)

  return <InfoChampion champion={champion} />
}
