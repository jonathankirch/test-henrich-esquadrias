import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Henrich Esquadrias',
  description: 'A melhor esquadria de Canabarro Teutonia - RS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
