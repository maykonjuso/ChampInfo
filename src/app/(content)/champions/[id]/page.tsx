import { GetChampionsById } from '../../../../services/get-champion-by-id'
import InfoChampion from '../components/Info/infochampion'

export default async function Page({ params }: { params: { id: string } }) {
  const champion = await GetChampionsById(params.id)

  return <InfoChampion champion={champion} />
}
