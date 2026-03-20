# Marco Dalprato Website

Sito personale in Next.js (App Router).

## Requisiti
- Node.js 18+
- npm

## Avvio in locale
```bash
npm install
npm run dev
```
Apri `http://localhost:3000`.

## Build e produzione
```bash
npm run build
npm run start
```

## Lint
```bash
npm run lint
```

## Variabili d'ambiente
Per disattivare il loader in locale:
```bash
# .env.local
NEXT_PUBLIC_ENABLE_LOADER=false
```

Per generare canonical, `robots.txt` e `sitemap.xml` con il dominio corretto:
```bash
# .env.local o env di produzione
NEXT_PUBLIC_SITE_URL=https://tuo-dominio.it
```

## Struttura
- `app/page.js`: pagina principale e composizione sezioni
- `app/components/`: componenti UI
- `app/content.js`: contenuti IT/EN
- `app/globals.css`: stile globale

## Note
Il loader mostra una schermata di boot con floppy/LOAD. Il sito appare solo dopo il click con un effetto CRT di accensione.
