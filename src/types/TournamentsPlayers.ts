import { PlayerType } from './Player'
import { TournamentType } from './Tournament'

export type TournamentsPlayersType = {
  id: string
  player: PlayerType
  tournament: TournamentType
  points: number,
  prize: number,
  finishPosition: number
}
