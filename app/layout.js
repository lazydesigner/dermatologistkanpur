import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { SITE_CONFIG, SEO_KEYWORDS } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata = {
  title: {
    default: SITE_CONFIG.name + ' - ' + SITE_CONFIG.tagline,
    template: `%s | ${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`
  },
  description: SITE_CONFIG.description,
  keywords: SEO_KEYWORDS.join(', '),
  authors: [{ name: 'Skin World Team' }],
  creator: 'Skin World',
  publisher: 'Skin World',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name + ' - ' + SITE_CONFIG.tagline,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name + ' - ' + SITE_CONFIG.tagline,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name + ' - ' + SITE_CONFIG.tagline,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preload critical resources */}
        {/* <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        /> */}
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#007BFF" />
        <meta name="msapplication-TileColor" content="#007BFF" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-primary text-white p-4 z-50 rounded-br-lg transition-all"
        >
          Skip to main content
        </a>
        
        {/* Main content wrapper */}
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": SITE_CONFIG.name,
              "description": SITE_CONFIG.description,
              "url": SITE_CONFIG.url,
              "logo": SITE_CONFIG.url + SITE_CONFIG.logo,
              "image": SITE_CONFIG.url + SITE_CONFIG.ogImage,
              "telephone": "+91-99369-59955",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "113/131 Swaroop Nagar (Near Madhuraj hospital)",
                "addressLocality": "Kanpur",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "208002",
                "addressCountry": "IN"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ],
              "priceRange": "$",
              "medicalSpecialty": "Dermatology"
            })
          }}
        />
        <script src="http://localhost:3001/embed.js" data-widget="fc5ba355-9c9e-4337-85a4-1c5fd528bbf1"></script>
      </body>
    </html>
  )
}