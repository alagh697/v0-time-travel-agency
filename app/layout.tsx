import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Time Travel Agency | Voyagez dans le temps',
  description: 'Explorez les époques les plus fascinantes de l\'humanité avec notre technologie de voyage temporel certifiée et sécurisée. Réservez votre voyage dans le temps dès aujourd\'hui.',
  keywords: ['time travel', 'voyage temporel', 'travel agency', 'agence de voyage', 'history', 'histoire'],
  authors: [{ name: 'Time Travel Agency' }],
  creator: 'Time Travel Agency',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    url: 'https://timetravelagency.com',
    siteName: 'Time Travel Agency',
    title: 'Time Travel Agency | Voyagez dans le temps',
    description: 'Explorez les époques les plus fascinantes de l\'humanité avec notre technologie de voyage temporel certifiée et sécurisée.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Time Travel Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time Travel Agency | Voyagez dans le temps',
    description: 'Explorez les époques les plus fascinantes de l\'humanité.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F0E8' },
    { media: '(prefers-color-scheme: dark)', color: '#2D2A26' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable} data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
