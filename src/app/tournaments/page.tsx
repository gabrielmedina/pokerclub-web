import LayoutDefault from '@/components/Layouts/Default'
import { PaginationType } from '@/types/Pagination'
import { TournamentType } from '@/types/Tournament'
import Link from 'next/link'

export default async function Tournaments() {
  const tournaments = await getTournaments()

  return (
    <main>
      <LayoutDefault>
        <h1>Tournaments</h1>

        <ul>
          {tournaments.content.map((tournament) => (
            <li key={tournament.id}>
              <Link href={`/tournaments/${tournament.id}`}>
                {tournament.title}
              </Link>
            </li>
          ))}
        </ul>
      </LayoutDefault>
    </main>
  )
}

async function getTournaments(): Promise<PaginationType<TournamentType>> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tournaments`)

  if (!response.ok) {
    throw new Error('Failed to fetch tournaments data')
  }

  return response.json()
}
