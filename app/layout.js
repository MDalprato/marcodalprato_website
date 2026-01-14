import './globals.css';

export const metadata = {
  title: 'Marco Dal Prato | Sviluppatore Web JavaScript',
  description:
    'Portfolio di Marco Dal Prato, sviluppatore web JavaScript specializzato in esperienze web moderne, performanti e accessibili.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
