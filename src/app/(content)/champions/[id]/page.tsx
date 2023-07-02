import { GetChampionsById } from '../../../../services/get-champion-by-id'
import InfoChampion from '../components/Info'

export default async function Page({ params }: { params: { id: string } }) {
  const champion = await GetChampionsById(params.id)

  return (
    <div className="h-full">
      <InfoChampion champion={champion} />
    </div>
  )
}
