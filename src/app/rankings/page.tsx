import LayoutDefault from '@/components/Layouts/Default'
import { PaginationType } from '@/types/Pagination'
import { RankingType } from '@/types/Ranking'
import Link from 'next/link'

export default async function Rankings() {
  const rankings = await getRankings()

  return (
    <main>
      <LayoutDefault>
        <h1>Rankings</h1>

        <ul>
          {rankings.content.map((ranking) => (
            <li key={ranking.id}>
              <Link href={`/rankings/${ranking.id}`}>{ranking.title}</Link>
            </li>
          ))}
        </ul>
      </LayoutDefault>
    </main>
  )
}

async function getRankings(): Promise<PaginationType<RankingType>> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rankings`)

  if (!response.ok) {
    throw new Error('Failed to fetch rankings data')
  }

  return response.json()
}
