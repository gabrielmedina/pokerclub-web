'use server'

import LayoutDefault from '@/components/Layouts/Default'
import { TournamentPlayer } from '@/components/Tournament/TournamentPlayer'
import { TournamentType } from '@/types/Tournament'
import { TournamentsPlayersType } from '@/types/TournamentsPlayers'

export default async function Tournament({
  params,
}: {
  params: { id: string }
}) {
  const tournament = await getTournament(params.id)
  const tournamentPlayers = await getTournamentPlayers(params.id)

  return (
    <main>
      <LayoutDefault>
        <article>
          <header>
            <h1>{tournament.title}</h1>
            <p>Buyin: {tournament.buyin}</p>
          </header>

          <section>
            <h2>Players</h2>

            <ol>
              {tournamentPlayers.map((tournamentPlayer) => (
                <li key={tournamentPlayer.player.id}>
                  <TournamentPlayer tournamentPlayer={tournamentPlayer} />
                </li>
              ))}
            </ol>
          </section>
        </article>
      </LayoutDefault>
    </main>
  )
}

async function getTournament(id: string): Promise<TournamentType> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournaments/${id}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch tournament data')
  }

  return response.json()
}

async function getTournamentPlayers(
  id: string
): Promise<TournamentsPlayersType[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournaments-players/tournament/${id}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch players of tournament data')
  }

  return response.json()
}

// async function putTournamentPlayer({
//   tournamentId,
//   playerId,
//   body,
// }: Readonly<{
//   'use server'

//   tournamentId: string
//   playerId: string
//   body: {
//     points: number
//     prize: number
//     finishPosition: number
//   }
// }>) {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/tournaments-players/tournament/${tournamentId}/player/${playerId}`,
//     {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     }
//   )

//   if (!response.ok) {
//     console.log(response)
//     throw new Error('Failed to update tournament player data')
//   }

//   return response.json()
// }
