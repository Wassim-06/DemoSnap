import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DemoSnap — Créez des démos interactives qui vendent pour vous',
  description: 'Enregistrez votre appli en 5 minutes ; obtenez un lien interactif qui vend pour vous — sans code ni RDV de démo.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
