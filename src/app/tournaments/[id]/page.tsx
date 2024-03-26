import LayoutDefault from '@/components/layouts/default'
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
              {tournamentPlayers.map(
                ({ player, points, prize, finishPosition }) => (
                  <li key={player.id}>
                    <section>
                      <h3>{player.name}</h3>
                      <p>Points: {points}</p>
                      <p>Prize: {prize}</p>
                      <p>Finish position: {finishPosition}</p>
                    </section>
                  </li>
                )
              )}
            </ol>
          </section>
        </article>
      </LayoutDefault>
    </main>
  )
}

async function getTournament(id: string): Promise<TournamentType> {
  const response = await fetch(`${process.env.API_URL}/tournaments/${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch tournament data')
  }

  return response.json()
}

async function getTournamentPlayers(
  id: string
): Promise<TournamentsPlayersType[]> {
  const response = await fetch(
    `${process.env.API_URL}/tournaments-players/tournament/${id}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch players of tournament data')
  }

  return response.json()
}
