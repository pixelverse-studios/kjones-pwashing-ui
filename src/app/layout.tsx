import type { Metadata } from 'next'
import Script from 'next/script'
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
  title:
    'Jones Pressure Washing | Professional Pressure & Soft Washing in New Jersey',
  description:
    'Professional pressure washing and soft washing services for homes and businesses in Bergen and Essex County, NJ. Licensed, insured, and locally owned.',
  icons: {
    icon: [
      { url: '/logo-black.jpg', type: 'image/jpg', sizes: '16x16' },
      { url: '/logo-black.jpg', type: 'image/jpg', sizes: '32x32' },
      { url: '/logo-black.jpg', type: 'image/jpg', sizes: '64x64' }
    ],
    apple: [{ url: '/logo-black.jpg', sizes: '180x180' }]
  },
  metadataBase: new URL(
    process.env.SITE_URL || 'https://www.jonespressurewashing.com'
  ),
  openGraph: {
    title:
      'Jones Pressure Washing | Professional Pressure & Soft Washing in NJ',
    description:
      'Expert pressure washing services for residential and commercial properties in Bergen and Essex County, New Jersey.',
    type: 'website',
    url: '/ ', // will be resolved against metadataBase
    images: ['/logo-black.jpg'],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jones Pressure Washing | NJ Pressure Washing Services',
    description:
      'Professional pressure washing for homes and businesses in Bergen and Essex County, NJ.',
    images: ['/logo-black.jpg']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="sitebehavior-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (
                function() {
                  var sbSiteSecret = '368a4814-73ce-42ec-82ee-7d929fde4209';
                  window.sitebehaviourTrackingSecret = sbSiteSecret;
                  var scriptElement = document.createElement('script');
                  scriptElement.async = true;
                  scriptElement.id = 'site-behaviour-script-v2';
                  scriptElement.src = 'https://sitebehaviour-cdn.fra1.cdn.digitaloceanspaces.com/index.min.js?sitebehaviour-secret=' + sbSiteSecret;
                  document.head.appendChild(scriptElement); 
                }
            )();
      `
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-inter`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
