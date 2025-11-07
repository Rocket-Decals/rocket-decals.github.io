import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { EasterEggProvider } from '@/contexts/EasterEggContext';
import './globals.css';
import '../styles/easter-egg-animations.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Rocket Decals',
  description: 'Téléchargez et commandez vos stickers Rocket League personnalisés sur Rocket Decals, le site web et serveur Discord pour tous les passionnés de Rocket League. Compatibles BakkesMod et AlphaConsole.',
  keywords: ['Rocket Decals', 'Rocket League', 'Decals', 'Custom Decals', 'Rocket League Decals', 'Karmine Corp', 'Gentlemate', 'Vitality', 'Esport', 'Stickers'],
  authors: [{ name: 'Raito & Erlow' }],
  creator: 'Erlow',
  publisher: 'Rocket Decals',
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
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://rocket-decals.com/',
    siteName: 'Rocket Decals',
    title: 'Rocket Decals',
    description: 'Téléchargez et commandez vos stickers Rocket League personnalisés sur Rocket Decals, le site web et serveur Discord pour tous les passionnés de Rocket League. Compatibles BakkesMod et AlphaConsole.',
    images: [
      {
        url: 'https://rocket-decals.com/favicon.ico',
        width: 800,
        height: 600,
        alt: 'Rocket Decals Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rocket Decals',
    description: 'Téléchargez et commandez vos stickers Rocket League personnalisés sur Rocket Decals, le site web et serveur Discord pour tous les passionnés de Rocket League. Compatibles BakkesMod et AlphaConsole.',
    images: ['https://rocket-decals.com/favicon.ico'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/img/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/img/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/img/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/img/logo.png" />
        
        {/* Preload critical assets for better performance */}
        <link rel="preload" href="/img/logo.svg" as="image" type="image/svg+xml" />
        <link rel="preload" href="/video/rl-video.mp4" as="video" type="video/mp4" />
      </head>
      <body className={poppins.className}>
        <LanguageProvider>
          <EasterEggProvider>
            {children}
          </EasterEggProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

