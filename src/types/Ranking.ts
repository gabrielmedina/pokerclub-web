import { TournamentType } from './Tournament'

export type RankingType = {
  id: string
  title: string
  tournaments: TournamentType[]
  createdAt: string
  finishedAt: string
}
