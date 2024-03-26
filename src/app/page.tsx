import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <ol>
        <li>
          <Link href={`/players`}>Players</Link>
        </li>
        <li>
          <Link href={`/tournaments`}>Tournaments</Link>
        </li>
        <li>
          <Link href={`/rankings`}>Rankings</Link>
        </li>
      </ol>
    </main>
  )
}
