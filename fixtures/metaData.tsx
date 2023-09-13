const metaData = {
  title: 'The title of the webpage',
  description: 'The description of the webpage',
  applicationName: 'Application Name',
  referrer: 'origin-when-cross-origin',
  keywords: ['Any', 'SEO', 'Keywords'],
  authors: [{ name: 'Roshan Singh', url: 'https://singhroshan.com' }],
  colorScheme: 'dark',
  creator: 'Roshan Singh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://domainname.com'),
  openGraph: {
    title: 'The title of the webpage',
    description: 'The description of the webpage',
    url: 'https://domainname.com',
    siteName: 'Website Name',
    images: [
      {
        url: 'https://domainname.com/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://domainname.com/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'The title of the webpage',
    description: 'The description of the webpage',
    siteId: '1467726470533754880',
    creator: '@sinrosha',
    creatorId: '1467726470533754880',
    images: ['https://domainname.com/og.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'google',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
  alternates: {
    canonical: 'https://domainname.com',
    languages: {
      'en-US': 'https://domainname.com/en-US',
      'de-DE': 'https://domainname.com/de-DE',
    }
  },
}
