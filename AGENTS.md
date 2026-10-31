# Istruzioni per lavorare sul repository

Queste indicazioni valgono per tutto il progetto.

## Contesto

Sito personale di Marco Dal Prato, con portfolio e blog. Stack: Next.js 14 App
Router, React 18, JavaScript e CSS. Hosting: GitHub Pages tramite export statico.
Leggi `README.md` e i file interessati prima di modificare il codice.

## Vincoli di implementazione

- Mantieni `output: 'export'`, `trailingSlash: true` e le immagini non ottimizzate
  lato server in `next.config.mjs`.
- Non introdurre dipendenze da un server in produzione: niente API runtime,
  Server Actions, middleware o rendering che richieda una richiesta al server.
  Le nuove rotte dinamiche devono essere generabili durante la build.
- Usa `next/link` e il router Next.js per la navigazione: applicano già `basePath`.
  Non aggiungere manualmente un secondo prefisso ai loro URL.
- Per asset locali e collegamenti HTML ordinari usa `withBasePath` da
  `app/lib/paths.js`. Evita percorsi assoluti come `/assets/...` senza prefisso.
- Mantieni canonical, sitemap e robots coerenti con `NEXT_PUBLIC_SITE_URL`,
  che comprende anche il percorso del repository.
- Nei Client Component metti `'use client'` prima degli import. Accedi alle API
  del browser negli effetti o negli handler, rispettando il rendering statico.
- Segui lo stile dei file esistenti. Evita dipendenze e ristrutturazioni non
  necessarie alla richiesta.

## Contenuti e interfaccia

- Gli articoli pubblicati sono in `content/blog/`; la lettura avviene in
  `app/lib/blog.js`. Preserva date, slug e URL degli articoli esistenti.
- Il parser del frontmatter supporta solo valori su una riga. Non introdurre
  liste, oggetti o blocchi YAML senza adattare prima il parser.
- Non eseguire gli script di importazione o formattazione su tutto l'archivio
  per una modifica circoscritta: possono riscrivere molti articoli.
- Aggiorna entrambe le lingue per le nuove stringhe dell'interfaccia, seguendo
  i dizionari e i componenti già in uso.
- Preserva navigazione da tastiera, etichette accessibili, tema chiaro/scuro,
  layout mobile e comportamento con movimento ridotto.

## Verifica delle modifiche

Usa Node.js 22 e `npm ci` quando serve installare le dipendenze. Per modifiche
al codice o alla configurazione esegui:

```bash
NEXT_PUBLIC_BASE_PATH=/marcodalprato_website \
NEXT_PUBLIC_SITE_URL=https://mdalprato.github.io/marcodalprato_website \
npm run build
```

Controlla nell'export i link e gli asset sotto il prefisso, i canonical,
`sitemap.xml`, `robots.txt` e `.nojekyll`. Per modifiche visive o interattive,
verifica anche le funzionalità coinvolte nel browser. Per sole modifiche alla
documentazione bastano una revisione di comandi e percorsi e `git diff --check`.
Non dichiarare eseguiti controlli che non hai svolto.

## Git e deploy

- Ispeziona `git status` e preserva le modifiche dell'utente.
- Non committare output di build, dipendenze, `.env*`, token o credenziali.
  Tutto ciò che finisce in `public/` e nelle variabili `NEXT_PUBLIC_*` è pubblico.
- Mantieni `.github/workflows/pages.yml` come unico workflow di pubblicazione.
  Il job di build legge Pages con `pages: read`; il deploy richiede
  `pages: write` e `id-token: write`.
- Un push su `main` avvia il deploy. Quando pubblichi, controlla l'esito del
  workflow prima di dichiarare il sito aggiornato; verifica anche l'URL pubblico.
- Non riscrivere la cronologia o effettuare force push per risolvere un normale
  problema di build o pubblicazione.
- Nel resoconto indica cosa è cambiato, quali verifiche sono passate e se le
  modifiche sono locali, committate o già pubblicate.
