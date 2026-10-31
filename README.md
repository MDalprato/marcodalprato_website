# Marco Dal Prato — sito personale

Portfolio, esperienze professionali e archivio del blog. Il sito è sviluppato con
Next.js 14 (App Router), React 18 e CSS, con interfaccia in italiano e inglese.
Viene esportato come HTML, CSS e JavaScript statici e pubblicato su GitHub Pages.

**Sito:** [mdalprato.github.io/marcodalprato_website](https://mdalprato.github.io/marcodalprato_website/)

## Sviluppo locale

Usa Node.js 22, la stessa versione del workflow, e npm.

```bash
npm ci
npm run dev
```

Apri <http://localhost:3000>. Il server di sviluppo usa `.next-dev/`, mentre la
build di produzione usa `.next/` e genera l'export in `out/`.

Per disattivare la schermata iniziale nella build, crea `.env.local`:

```dotenv
NEXT_PUBLIC_ENABLE_LOADER=false
```

In modalità sviluppo il loader è già disattivato.

## Struttura del progetto

| Percorso | Contenuto |
| --- | --- |
| `app/page.js` | Homepage |
| `app/about/` | Pagina personale |
| `app/blog/` | Archivio, ricerca e pagine degli articoli |
| `app/components/` | Componenti condivisi, navigazione e lingua |
| `app/lib/i18nShared.js` | Dizionari dell'interfaccia IT/EN |
| `app/lib/blog.js` | Lettura degli articoli durante la build |
| `app/lib/site.js`, `app/lib/paths.js` | URL del sito e percorsi degli asset |
| `app/globals.css` | Stili e temi |
| `content/blog/` | Articoli Markdown pubblicati |
| `public/` | File pubblici: immagini, CV e archivio TXT |
| `scripts/` | Importazione e formattazione degli articoli |
| `.github/workflows/pages.yml` | Build e pubblicazione su GitHub Pages |

## Aggiungere un articolo

Crea un file in `content/blog/`, ad esempio `2026-10-31-titolo-articolo.md`:

```markdown
---
title: "Titolo dell'articolo"
date: "2026-10-31"
excerpt: "Una breve descrizione del contenuto."
---

Testo dell'articolo in Markdown.
```

Il nome del file diventa lo slug dell'URL; puoi sovrascriverlo con il campo
`slug`. È disponibile anche il campo `image`. Il frontmatter supporta coppie
chiave/valore su una sola riga, non strutture YAML complesse. Gli articoli sono
ordinati per data e generati durante la build: per pubblicarne uno serve un nuovo deploy.

I file in `public/blog/` sono l'archivio TXT originale. Gli script di importazione
e formattazione possono riscrivere gli articoli: controlla il diff prima di
salvare le modifiche.

## Build e anteprima

Per una build servita alla radice del dominio:

```bash
npm run build
python3 -m http.server 3000 --directory out
```

Il secondo comando richiede Python 3. `npm run start` richiama `next start` e
non va usato con questo progetto, configurato con `output: 'export'`.

Per riprodurre la build di GitHub Pages:

```bash
NEXT_PUBLIC_BASE_PATH=/marcodalprato_website \
NEXT_PUBLIC_SITE_URL=https://mdalprato.github.io/marcodalprato_website \
npm run build
```

Questa build va servita sotto `/marcodalprato_website/`, non alla radice.

| Variabile | Uso |
| --- | --- |
| `NEXT_PUBLIC_BASE_PATH` | Prefisso dei percorsi: vuoto in locale o su dominio alla radice; `/marcodalprato_website` su Pages |
| `NEXT_PUBLIC_SITE_URL` | URL completo del sito, incluso il prefisso; usato da canonical, sitemap e robots |
| `NEXT_PUBLIC_ENABLE_LOADER` | Impostare `false` per disattivare il loader in produzione |

Senza `NEXT_PUBLIC_SITE_URL`, gli URL dei metadati usano `http://localhost:3000`.
Le variabili `NEXT_PUBLIC_*` sono pubbliche e vengono incorporate durante la build:
non devono contenere segreti.

## Pubblicazione

Il workflow [Deploy to GitHub Pages](https://github.com/MDalprato/marcodalprato_website/actions/workflows/pages.yml)
parte a ogni push su `main` oppure manualmente con **Run workflow**.

In **Settings → Pages**, la sorgente deve essere **GitHub Actions**. Il workflow
installa le dipendenze con `npm ci`, ricava URL e percorso da Pages, compila il
sito e pubblica solo `out/`. Usa il token automatico di GitHub: non servono
credenziali FTP o token personali.

Mantieni un solo workflow di pubblicazione. Il modello Next.js proposto nelle
impostazioni di GitHub non serve: il repository contiene già quello configurato.
Per un dominio personalizzato, configura il dominio e il DNS in GitHub Pages;
il workflow userà l'URL aggiornato alla build successiva.

## Verifiche prima del push

- Esegui la build con le variabili di GitHub Pages se modifichi codice o percorsi.
- Controlla navigazione, lingua, tema, ricerca del blog e download del CV.
- Verifica che immagini, CSS e JavaScript funzionino anche sotto il prefisso del repository.
- Non includere `.env*`, credenziali, `node_modules/`, `.next/`, `.next-dev/` o `out/` nei commit.

Le indicazioni per gli agenti di sviluppo sono in [AGENTS.md](AGENTS.md).
