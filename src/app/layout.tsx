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
  title: 'Jones Pressure Washing | Bergen & Essex County, NJ',
  description:
    'Jones Pressure Washing provides professional pressure washing and soft washing across Bergen and Essex County, NJ. Fully insured and locally owned.',
  keywords: [
    'pressure washing',
    'soft washing',
    'power washing NJ',
    'Bergen County pressure washing',
    'Essex County pressure washing'
  ],
  icons: {
    icon: [
      { url: '/logo-black.jpg', type: 'image/jpg', sizes: '16x16' },
      { url: '/logo-black.jpg', type: 'image/jpg', sizes: '32x32' },
      { url: '/logo-black.jpg', type: 'image/jpg', sizes: '64x64' }
    ],
    apple: [{ url: '/logo-black.jpg', sizes: '180x180' }]
  },
  metadataBase: new URL(
    process.env.SITE_URL || 'https://www.jonespressurewashingnj.com'
  ),
  openGraph: {
    title: 'Jones Pressure Washing | Bergen & Essex County, NJ',
    description:
      'Professional pressure washing and soft washing for residential and commercial properties in Bergen and Essex County, New Jersey.',
    type: 'website',
    url: '/', // will be resolved against metadataBase
    images: ['/logo-black.jpg'],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jones Pressure Washing | Bergen & Essex County, NJ',
    description:
      'Professional pressure washing and soft washing for homes and businesses in Bergen and Essex County, NJ.',
    images: ['/logo-black.jpg']
  }
}

const baseUrl = 'https://www.jonespressurewashingnj.com'

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${baseUrl}/#website`,
  url: baseUrl,
  name: 'Jones Pressure Washing',
  publisher: {
    '@id': `${baseUrl}/#localbusiness`
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
          id="jpw-website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
