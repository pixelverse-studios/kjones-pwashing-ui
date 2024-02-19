import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JPW',
  description: 'Jones Pressure Washing NJ'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
