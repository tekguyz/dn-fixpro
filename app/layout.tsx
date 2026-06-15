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
  title: 'DN FIXPRO | Handyman & Appliance Repair Hollywood FL',
  description: 'Professional, same-day residential & commercial appliance repair and handyman upgrades in Hollywood & South FL. $69 diagnostic fee applied directly to your repair!',
  openGraph: {
    title: 'DN FIXPRO Handyman & Appliance Services',
    description: 'Serving Hollywood, Miami, and Boca Raton. On-site mobile dispatch directly to your door.',
    url: 'https://dnfixpro.com',
    siteName: 'DN FIXPRO',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 1200,
        height: 630,
        alt: 'DN FIXPRO Handyman & Appliance Repair South Florida',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DN FIXPRO Handyman & Appliance Services',
    description: 'Same-day mobile dispatch. $69 diagnostics applied to repairs.',
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
    title: 'MyWebSite',
    capable: true,
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
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      </head>
      <body className="font-sans antialiased bg-brand-bg text-brand-text min-h-screen" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

