import './globals.css';
import { Space_Mono } from 'next/font/google';

const fontMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono'
});

export const metadata = {
  title: 'Marco Dal Prato | Sviluppatore Web JavaScript',
  description:
    'Portfolio di Marco Dal Prato, sviluppatore web JavaScript specializzato in esperienze web moderne, performanti e accessibili.',
  icons: {
    icon: '/assets/images/picture.avif',
    shortcut: '/assets/images/picture.avif',
    apple: '/assets/images/picture.avif'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={fontMono.variable}>{children}</body>
    </html>
  );
}
