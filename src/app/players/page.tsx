import LayoutDefault from '@/components/Layouts/Default'
import { PaginationType } from '@/types/Pagination'
import { PlayerType } from '@/types/Player'

export default async function Players() {
  const players = await getPlayers()

  return (
    <main>
      <LayoutDefault>
        <h1>Players</h1>

        <ul>
          {players.content.map((player) => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>
      </LayoutDefault>
    </main>
  )
}

async function getPlayers(): Promise<PaginationType<PlayerType>> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/players`)

  if (!response.ok) {
    throw new Error('Failed to fetch players data')
  }

  return response.json()
}
