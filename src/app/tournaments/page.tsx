import LayoutDefault from '@/components/layouts/default'
import { PaginationType } from '@/types/Pagination'
import { TournamentType } from '@/types/Tournament'

export default async function Tournaments() {
  const tournaments = await getTournaments()

  return (
    <main>
      <LayoutDefault>
        <h1>Tournaments</h1>

        <ul>
          {tournaments.content.map((tournaments) => (
            <li key={tournaments.id}>{tournaments.title}</li>
          ))}
        </ul>
      </LayoutDefault>
    </main>
  )
}

async function getTournaments(): Promise<PaginationType<TournamentType>> {
  const response = await fetch(`${process.env.API_URL}/tournaments`)

  if (!response.ok) {
    throw new Error('Failed to fetch players data')
  }

  return response.json()
}
