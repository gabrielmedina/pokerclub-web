import LayoutDefault from '@/components/layouts/default'
import { PaginationType } from '@/types/Pagination'
import { RankingType } from '@/types/Ranking'

export default async function Rankings() {
  const rankings = await getRankings()

  console.log(rankings)

  return (
    <main>
      <LayoutDefault>
        <h1>Rankings</h1>

        <ul>
          {rankings.content.map((ranking) => (
            <li key={ranking.id}>{ranking.title}</li>
          ))}
        </ul>
      </LayoutDefault>
    </main>
  )
}

async function getRankings(): Promise<PaginationType<RankingType>> {
  const response = await fetch(`${process.env.API_URL}/rankings`)

  if (!response.ok) {
    throw new Error('Failed to fetch rankings data')
  }

  return response.json()
}
