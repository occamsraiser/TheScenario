import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers' 
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coding Exercise',
  description: 'Executed by VM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers> {/* this is required for NextUI to work */ }
          {children}
        </Providers>
      </body>
    </html>
  )
}
