import './globals.css';
import { Space_Grotesk, Syne } from 'next/font/google';
import ScrollEffects from './components/ScrollEffects';
import { siteConfig } from './lib/site';

const fontSans = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sans'
});

const fontDisplay = Syne({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-display'
});

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: '/',
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description
  },
  icons: {
    icon: '/assets/images/about-me.jpeg',
    shortcut: '/assets/images/about-me.jpeg',
    apple: '/assets/images/about-me.jpeg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={`${fontSans.variable} ${fontDisplay.variable}`}>
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}
