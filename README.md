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
python3 -m http.server 3000 --directory out
```

La build genera il sito statico in `out/`. `next start` non è compatibile con
`output: 'export'`: in produzione basta un hosting statico.

## GitHub Pages

1. Nel repository apri **Settings → Pages → Build and deployment** e seleziona
   **GitHub Actions** come Source.
2. Pubblica queste modifiche su `main`. Il workflow `pages.yml` compila e pubblica
   `out/` a ogni push; può essere avviato anche da **Actions → Deploy to GitHub Pages
   → Run workflow**.
3. L'indirizzo standard è `https://mdalprato.github.io/marcodalprato_website/`.

Il workflow legge da GitHub Pages il percorso e l'URL effettivi, quindi supporta
anche un dominio personalizzato configurato in Settings → Pages. Non richiede
segreti FTP o token personali: usa il token automatico di GitHub.

Per verificare localmente la build con il percorso del repository:

```bash
NEXT_PUBLIC_BASE_PATH=/marcodalprato_website \
NEXT_PUBLIC_SITE_URL=https://mdalprato.github.io/marcodalprato_website \
npm run build
```

`NEXT_PUBLIC_BASE_PATH` deve essere vuoto per un dominio alla radice, oppure un
percorso con slash iniziale e senza slash finale. `NEXT_PUBLIC_SITE_URL` deve
contenere l'URL completo, incluso lo stesso percorso. In sviluppo locale non
serve impostarli. Il file `public/.nojekyll` viene copiato nell'export.

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
