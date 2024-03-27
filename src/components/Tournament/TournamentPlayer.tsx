'use client'

import { TournamentsPlayersType } from '@/types/TournamentsPlayers'

export const TournamentPlayer = ({
  tournamentPlayer,
}: Readonly<{
  tournamentPlayer: TournamentsPlayersType
}>) => {
  const handleEliminate = async () => {
    await putTournamentPlayer({
      playerId: tournamentPlayer.player.id,
      tournamentId: tournamentPlayer.tournament.id,
      body: {
        points: 0,
        prize: 0,
        finishPosition: 0,
      },
    })
  }

  return (
    <section>
      <h3>{tournamentPlayer.player.name}</h3>

      <div>
        <p>Points: {tournamentPlayer.points}</p>
        <p>Prize: {tournamentPlayer.prize}</p>
        <p>Finish position: {tournamentPlayer.finishPosition}</p>
      </div>

      <button onClick={handleEliminate}>Eliminate</button>
    </section>
  )
}

const putTournamentPlayer = async ({
  tournamentId,
  playerId,
  body,
}: Readonly<{
  tournamentId: string
  playerId: string
  body: {
    points: number
    prize: number
    finishPosition: number
  }
}>) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournaments-players/tournament/${tournamentId}/player/${playerId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  )

  if (!response.ok) {
    throw new Error('Failed to update tournament player data')
  }

  return response.json()
}
