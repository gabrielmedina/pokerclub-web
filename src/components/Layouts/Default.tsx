import Link from 'next/link'

export default function LayoutDefault({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Link href={`/`}>Voltar</Link>
      {children}
    </div>
  )
}
