import './globals.css';
import { Space_Mono } from 'next/font/google';
import { siteConfig } from './lib/site';

const fontMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono'
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
    card: 'summary',
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
      <body className={fontMono.variable}>{children}</body>
    </html>
  );
}
