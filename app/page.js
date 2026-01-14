'use client';

import { useEffect, useState } from 'react';

const content = {
  it: {
    nav: {
      about: 'Chi sono',
      portfolio: 'Portfolio',
      cv: 'CV',
      contact: 'Contattami'
    },
    hero: {
      eyebrow: 'Sviluppatore web JavaScript',
      title: 'Full Stack Dev.',
      lead:
        'Progetto interfacce moderne in React e Next.js, combinando motion, performance e accessibilita. Lavoro con brand e team digitali per trasformare idee in prodotti scalabili.',
      focusTitle: 'Focus attuale',
      focusItems: ['Next.js e architetture statiche', 'Animazioni con UI narrative', 'Design system e componenti']
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Attivita recenti e collaborazioni.',
      items: [
        {
          role: 'Front-end Developer',
          company: 'Aurea Studio',
          time: '2021 - 2023',
          detail: 'Landing e-commerce ad alte prestazioni, componenti UI e motion design.'
        },
        {
          role: 'Web Developer',
          company: 'Nova Digital',
          time: '2019 - 2021',
          detail: 'Siti corporate in Next.js, integrazioni CMS e ottimizzazione SEO tecnica.'
        },
        {
          role: 'Freelance',
          company: 'Clienti diretti',
          time: '2016 - oggi',
          detail: 'Prodotti web su misura, audit performance e refactor di progetti legacy.'
        }
      ]
    },
    cv: {
      eyebrow: 'CV',
      title: 'Scarica il mio curriculum completo.',
      lead:
        'Un riepilogo delle esperienze, competenze tecniche e progetti chiave in un documento pronto da condividere.',
      cta: 'Apri il CV'
    },
    contact: {
      eyebrow: 'Contattami',
      title: 'Parliamo del tuo prossimo progetto.',
      lead:
        'Scrivimi per collaborazioni, consulenze o per rimettere in carreggiata il tuo prodotto web.'
    },
    footer: {
      note: `Disponibile per nuove collaborazioni dal ${new Date().getFullYear()}.`,
      langLabel: 'Lingua',
      it: 'IT',
      en: 'EN'
    }
  },
  en: {
    nav: {
      about: 'About',
      portfolio: 'Work',
      cv: 'CV',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'JavaScript Web Developer',
      title: 'Full Stack Dev.',
      lead:
        'I design modern React and Next.js experiences, blending motion, performance, and accessibility. I partner with brands and digital teams to turn ideas into scalable products.',
      focusTitle: 'Current focus',
      focusItems: ['Next.js and static architectures', 'Motion-led UI storytelling', 'Design systems and components']
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Recent activity and collaborations.',
      items: [
        {
          role: 'Front-end Developer',
          company: 'Aurea Studio',
          time: '2021 - 2023',
          detail: 'High-performance e-commerce landings, UI components, and motion design.'
        },
        {
          role: 'Web Developer',
          company: 'Nova Digital',
          time: '2019 - 2021',
          detail: 'Corporate sites in Next.js, CMS integrations, and technical SEO optimizations.'
        },
        {
          role: 'Freelance',
          company: 'Direct clients',
          time: '2016 - today',
          detail: 'Custom web products, performance audits, and legacy project refactors.'
        }
      ]
    },
    cv: {
      eyebrow: 'CV',
      title: 'Download the full resume.',
      lead:
        'A clear snapshot of experience, technical skills, and key projects in a share-ready document.',
      cta: 'Open CV'
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about your next project.",
      lead: 'Reach out for collaborations, consulting, or to bring your web product back on track.'
    },
    footer: {
      note: 'Available for new collaborations from 2024.',
      langLabel: 'Language',
      it: 'IT',
      en: 'EN'
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState('it');
  const t = content[lang];

  useEffect(() => {
    const stored = window.localStorage.getItem('mdp-lang');
    if (stored === 'it' || stored === 'en') {
      setLang(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('mdp-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const panels = document.querySelectorAll('.panel');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    panels.forEach((panel) => observer.observe(panel));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="onepage">
      <div className="ambient" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <header className="topbar">
        <span className="brand">Marco Dalprato</span>
        <nav className="nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#portfolio">{t.nav.portfolio}</a>
          <a href="#cv">{t.nav.cv}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
      </header>

      <section id="about" className="panel hero">
        <div className="panel-content">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="typewriter">{t.hero.title}</h1>
          <p className="lead">{t.hero.lead}</p>
        </div>
        <div className="hero-card">
          <p className="card-title">{t.hero.focusTitle}</p>
          <ul>
            {t.hero.focusItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="portfolio" className="panel">
        <div className="panel-content">
          <p className="eyebrow">{t.portfolio.eyebrow}</p>
          <h2>{t.portfolio.title}</h2>
          <div className="cards">
            {t.portfolio.items.map((item) => (
              <article key={item.role} className="card">
                <p className="tag">{item.time}</p>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p className="detail">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cv" className="panel">
        <div className="panel-content split">
          <div>
            <p className="eyebrow">{t.cv.eyebrow}</p>
            <h2>{t.cv.title}</h2>
            <p className="lead">{t.cv.lead}</p>
          </div>
          <a className="button" href="/assets/cv/cv.pdf">
            {t.cv.cta}
          </a>
        </div>
      </section>

      <section id="contact" className="panel contact">
        <div className="panel-content">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p className="lead">{t.contact.lead}</p>
          <div className="contact-grid">
            <a href="mailto:hello@marcodalprato.dev">hello@marcodalprato.dev</a>
            <a href="https://www.linkedin.com/in/marcodalprato/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.behance.net" target="_blank" rel="noreferrer">
              Behance
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <p>{t.footer.note}</p>
          <div className="lang-switch" role="group" aria-label={t.footer.langLabel}>
            <button
              type="button"
              onClick={() => setLang('it')}
              className={lang === 'it' ? 'active' : ''}
            >
              {t.footer.it}
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={lang === 'en' ? 'active' : ''}
            >
              {t.footer.en}
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
