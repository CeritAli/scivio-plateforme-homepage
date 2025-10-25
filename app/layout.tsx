import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SCIVIO - Innovation en Éducation Médicale',
  description: 'SCIVIO est spécialisé dans l\'éducation médicale avec des plateformes innovantes pour les étudiants en médecine et les professionnels de santé.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

