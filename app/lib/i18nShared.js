export const LOCALES = ['it', 'en'];
export const DEFAULT_LOCALE = 'it';
export const LOCALE_COOKIE = 'site-locale';

const dictionaries = {
  it: {
    nav: {
      blog: 'Blog',
      about: 'Chi sono',
      cv: 'CV',
      searchOpen: 'Apri ricerca',
      searchClose: 'Chiudi ricerca',
      searchPlaceholder: 'Cerca post...',
      searchSubmit: 'Vai',
      themeLight: 'Attiva tema chiaro',
      themeDark: 'Attiva tema scuro',
      mainLabel: 'Navigazione principale'
    },
    home: {
      railLabel: 'Navigazione sezioni',
      sections: {
        hero: 'Hero',
        about: 'Chi sono',
        work: 'Progetti',
        blog: 'Blog',
        contact: 'Contatti'
      },
      preloadLogs: [
        '[boot] avvio dell’interfaccia umana...',
        '[io] scansione del portfolio in corso...',
        '[gpu] calibrazione del drama subpixel...',
        '[cache] riscaldamento dei token di design...',
        '[ux] risoluzione delle dipendenze tipografiche...',
        '[ship] build stabile. output visivo in preparazione...'
      ],
      aboutTitle: 'Chi sono',
      aboutParagraphs: [
        'Lavoro tra design e sviluppo, costruendo esperienze digitali precise, essenziali e dirette.',
        'Il mio approccio resta minimale in superficie e rigoroso sotto, con attenzione a motion, tipografia, struttura e qualità tecnica.',
        'Mi interessano interfacce che respirano, sistemi che scalano e prodotti che non hanno bisogno di rumore per lasciare il segno.',
        'Ogni progetto parte dalla chiarezza: cosa conta, cosa si può togliere e cosa deve restare visibile.'
      ],
      workTitle: 'Progetti',
      workItems: [
        {
          index: '01',
          title: 'Sistemi digitali',
          description:
            'Concept, architettura frontend e direzione prodotto per esperienze web pensate per essere chiare, veloci e durevoli.'
        },
        {
          index: '02',
          title: 'Interfacce visive',
          description:
            'Interfacce minimali modellate da ritmo, tipografia e movimento, con attenzione a spaziatura, interazione e ritmo.'
        },
        {
          index: '03',
          title: 'Codice e dettaglio',
          description:
            'Dal prototipo al rilascio, il lavoro resta concentrato su performance, manutenibilità e coerenza dell’esperienza utente.'
        }
      ],
      blogTitle: 'Blog',
      blogParagraph:
        'Ho riportato online l’archivio completo dei miei articoli: post storici, tecnologia, Apple e pezzi su New York, tutti leggibili in una vista unica.',
      openArchive: 'Apri l’archivio',
      contactTitle: 'Contatti'
    },
    about: {
      title: 'Chi sono',
      intro: [
        'Passo buona parte delle giornate in build mode, trasformando idee grezze in prodotti web usabili.',
        'Dopo anni nel software, quello che conta di più per me sono feedback loop rapidi ed esecuzione pulita.',
        'Divido il mio tempo tra product engineering, scrittura tecnica e side project.',
        'Sono aperto a collaborazioni in cui contano davvero craft, velocità e ownership.'
      ],
      githubLink: 'Guarda il mio profilo GitHub e i repository recenti.',
      activityTitle: 'Attività GitHub',
      activityNote1: 'Costruisco ciò che mi entusiasma e lo rilascio come open source.',
      activityNote2: 'Seguimi su GitHub e guarda il dietro le quinte tra commit, issue e release.'
    },
    blog: {
      title: 'Blog',
      lead:
        'Archivio completo degli articoli: tecnologia, Apple, New York e appunti sparsi da rileggere con calma.',
      archiveMeta: (count) => `${count} articoli convertiti in Markdown e consultabili in un unico posto.`,
      backHome: 'Torna alla home',
      loadingArchive: 'Caricamento archivio...',
      empty: 'Nessun post pubblicato al momento.',
      noResults: (query) => `Nessun post trovato per "${query}".`,
      readingMinutes: (minutes) => `${minutes} min di lettura`,
      fallbackExcerpt: 'Descrizione in arrivo.',
      expand: 'Espandi articolo',
      collapse: 'Chiudi articolo',
      openDedicated: 'Apri la pagina dedicata',
      backToBlog: 'Torna al blog',
      contentSoon: 'Contenuto in arrivo.'
    },
    footer: {
      rights: 'Tutti i diritti riservati.',
      builtWith: 'Creato con Next.js, caffè e un occasionale',
      languageLabel: 'Lingua'
    }
  },
  en: {
    nav: {
      blog: 'Blog',
      about: 'About',
      cv: 'CV',
      searchOpen: 'Open search',
      searchClose: 'Close search',
      searchPlaceholder: 'Search posts...',
      searchSubmit: 'Go',
      themeLight: 'Enable light theme',
      themeDark: 'Enable dark theme',
      mainLabel: 'Main navigation'
    },
    home: {
      railLabel: 'Section navigation',
      sections: {
        hero: 'Hero',
        about: 'About me',
        work: 'My work',
        blog: 'Blog',
        contact: 'Contact'
      },
      preloadLogs: [
        '[boot] mounting human interface layer...',
        '[io] scanning /portfolio for aesthetically pleasing packets...',
        '[gpu] calibrating subpixel drama matrix...',
        '[cache] warming design tokens to operating temperature...',
        '[ux] resolving typography dependencies...',
        '[ship] build stable. preparing visual output...'
      ],
      aboutTitle: 'About me',
      aboutParagraphs: [
        'I work across design and development, shaping digital experiences that feel precise, essential and direct.',
        'My approach stays minimal on the surface and rigorous underneath, with attention to motion, typography, structure and technical quality.',
        'I am interested in interfaces that breathe, systems that scale, and products that do not need noise to feel memorable.',
        'Each project starts from clarity: what matters, what can be removed, and what should remain visible.'
      ],
      workTitle: 'My work',
      workItems: [
        {
          index: '01',
          title: 'Digital systems',
          description:
            'Concept, frontend architecture and product direction for web experiences built to feel clear, fast and durable.'
        },
        {
          index: '02',
          title: 'Visual interfaces',
          description:
            'Minimal interfaces shaped by rhythm, typography and motion, with attention to spacing, interaction and pace.'
        },
        {
          index: '03',
          title: 'Code and detail',
          description:
            'From prototype to release, the work stays focused on performance, maintainability and coherent user experience.'
        }
      ],
      blogTitle: 'Blog',
      blogParagraph:
        "I've brought the full archive of my articles back online: older posts, technology, Apple, and New York notes, all readable in one place.",
      openArchive: 'Open the archive',
      contactTitle: 'Contact'
    },
    about: {
      title: 'About',
      intro: [
        "I'm in build mode most days, turning rough ideas into usable web products.",
        'After years in software, I care most about fast feedback loops and clean execution.',
        'I split my time between product engineering, technical writing, and side projects.',
        "I'm open to collaborations where craft, velocity, and ownership all count."
      ],
      githubLink: 'Check my GitHub profile and recent repositories.',
      activityTitle: 'GitHub Activity',
      activityNote1: 'I build what excites me and release it as open source.',
      activityNote2: 'Follow me on GitHub and see the back-story in commits, issues and releases.'
    },
    blog: {
      title: 'Blog',
      lead:
        'Complete archive of articles: technology, Apple, New York, and scattered notes worth revisiting.',
      archiveMeta: (count) => `${count} articles converted to Markdown and available in one archive.`,
      backHome: 'Back to home',
      loadingArchive: 'Loading archive...',
      empty: 'No published posts yet.',
      noResults: (query) => `No posts found for "${query}".`,
      readingMinutes: (minutes) => `${minutes} min read`,
      fallbackExcerpt: 'Description coming soon.',
      expand: 'Expand article',
      collapse: 'Collapse article',
      openDedicated: 'Open dedicated page',
      backToBlog: 'Back to blog',
      contentSoon: 'Content coming soon.'
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Next.js, coffee, and occasional',
      languageLabel: 'Language'
    }
  }
};

export const resolveLocale = (value) => {
  if (typeof value !== 'string') {
    return DEFAULT_LOCALE;
  }

  const normalized = value.toLowerCase().split('-')[0];
  return LOCALES.includes(normalized) ? normalized : DEFAULT_LOCALE;
};

export const getTranslations = (locale) => dictionaries[resolveLocale(locale)];
