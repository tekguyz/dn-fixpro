import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://dn-fixpro.vercel.app/'),
  title: {
    default: 'DN FIXPRO | Handyman & Appliance Repair Hollywood FL',
    template: '%s | DN FIXPRO'
  },
  description: 'Professional, same-day residential & commercial appliance repair and handyman upgrades in Hollywood & South FL. $69 diagnostic fee applied directly to your repair!',
  keywords: [
    'Handyman Hollywood FL',
    'Appliance Repair Broward County',
    'Same Day Appliance Fix',
    'Hollywood FL Handyman Upgrades',
    'Gold Standard Diagnostics',
    'Commercial Appliance Repair',
    'Direct Mobile Dispatch Repair',
    'DN FIXPRO Florida'
  ],
  authors: [{ name: 'DN FIXPRO Team' }],
  creator: 'DN FIXPRO',
  publisher: 'DN FIXPRO',
  openGraph: {
    title: 'DN FIXPRO | Handyman & Appliance Repair Hollywood FL',
    description: 'Professional, same-day residential & commercial appliance repair and handyman upgrades in Hollywood & South FL. $69 diagnostic fee applied directly to your repair!',
    url: 'https://dn-fixpro.vercel.app/',
    siteName: 'DN FIXPRO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DN FIXPRO Premium Handyman & Same-Day Appliance Repair South Florida',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DN FIXPRO | Handyman & Appliance Repair Hollywood FL',
    description: 'Same-day mobile dispatch. $69 diagnostics fully applied 100% to your repair costs. Save with low overhead!',
    images: ['/og-image.jpg'],
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon1.png', type: 'image/png' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'DN FIXPRO',
    capable: true,
    statusBarStyle: 'black',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
      style={{ colorScheme: 'dark' }}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="DN FIXPRO" />
      </head>
      <body className="font-sans antialiased bg-brand-bg text-brand-text min-h-screen" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

