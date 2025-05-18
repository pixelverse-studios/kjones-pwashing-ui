import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Jones Pressure Washing | Professional Services in New Jersey',
  description:
    'Professional pressure & soft washing services for homes and businesses in Bergen & Essex County, New Jersey.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
