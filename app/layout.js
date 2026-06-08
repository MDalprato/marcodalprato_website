import './globals.css';
import { siteConfig } from './lib/site';

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
      <body>{children}</body>
    </html>
  );
}
