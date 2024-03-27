import LayoutDefault from '@/components/Layouts/Default'
import { RankingType } from '@/types/Ranking'

export default async function Tournament({
  params,
}: {
  params: { id: string }
}) {
  const ranking = await getRanking(params.id)

  return (
    <main>
      <LayoutDefault>
        <article>
          <header>
            <h1>{ranking.title}</h1>
          </header>

          <section>
            <h2>Tournaments</h2>

            <ol>
              {ranking.tournaments.map((tournament) => (
                <li key={tournament.id}>
                  <h3>{tournament.title}</h3>
                </li>
              ))}
            </ol>
          </section>
        </article>
      </LayoutDefault>
    </main>
  )
}

async function getRanking(id: string): Promise<RankingType> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rankings/${id}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch ranking data')
  }

  return response.json()
}
