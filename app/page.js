import Link from 'next/link';
import { Suspense } from 'react';
import content from './content';
import { getBlogPosts } from './lib/blog';
import HeaderMenu from './components/HeaderMenu';
import SocialLinks from './components/SocialLinks';
import SiteFooter from './components/SiteFooter';

const focusAreas = [
  {
    title: 'Frontend che si fa ricordare',
    description:
      'Interfacce Next.js e React con motion design, hierarchy chiara, accessibilita e attenzione reale al feeling durante lo scroll.'
  },
  {
    title: 'Backend che regge',
    description:
      'API, integrazioni, code asincrone e dati ben modellati in Node.js, NestJS, PostgreSQL e MongoDB per prodotti che devono stare in piedi davvero.'
  },
  {
    title: 'Shipping senza attrito',
    description:
      'Docker, CI/CD, ambienti cloud e processi pragmatici per passare da idea a rilascio con meno frizione e piu continuita.'
  }
];

const deliverySteps = [
  {
    index: '01',
    title: 'Direction',
    description:
      'Allineo obiettivi prodotto, tono visivo, architettura e priorita prima di scrivere componenti o endpoint.'
  },
  {
    index: '02',
    title: 'Build',
    description:
      'Disegno il sistema UI, collego i flussi chiave e porto il codice in una forma estendibile invece che fragile.'
  },
  {
    index: '03',
    title: 'Stabilize',
    description:
      'Riduco attriti, rendo il comportamento prevedibile e sistemo performance, edge case e dettagli di interazione.'
  },
  {
    index: '04',
    title: 'Ship',
    description:
      'Consegno un prodotto leggibile dal team, pronto a essere mantenuto e abbastanza solido da supportare iterazioni veloci.'
  }
];

const signalItems = [
  'Next.js',
  'React',
  'TypeScript',
  'NestJS',
  'PostgreSQL',
  'MongoDB',
  'RabbitMQ',
  'Docker',
  'OpenShift',
  'AWS'
];

const formatDateLabel = (dateString) => {
  const parsedDate = new Date(dateString);
  if (Number.isNaN(parsedDate.getTime())) {
    return dateString || '';
  }

  return new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(parsedDate);
};

export default async function Home() {
  const t = content.it;
  const posts = await getBlogPosts();
  const featuredPosts = posts.slice(0, 3);
  const experiences = t.portfolio.items;
  const stack = t.tech.items;

  return (
    <main id="top" className="site shell site--with-footer">
      <div className="page-orb page-orb--one" data-parallax data-speed="24" />
      <div className="page-orb page-orb--two" data-parallax data-speed="18" />
      <div className="page-grid" aria-hidden="true" />

      <header className="site-header" data-reveal>
        <a className="site-name" href="#top">
          <span>Marco Dal Prato</span>
          <small>Full Stack Web Developer</small>
        </a>
        <Suspense
          fallback={
            <nav className="site-nav" aria-label="Main">
              <Link className="site-nav__link" href="/#services">
                Servizi
              </Link>
              <Link className="site-nav__link" href="/#work">
                Esperienza
              </Link>
              <Link className="site-nav__link" href="/#stack">
                Stack
              </Link>
              <Link className="site-nav__link" href="/blog">
                Blog
              </Link>
              <Link className="site-nav__link" href="/#contact">
                Contatti
              </Link>
              <a
                className="site-nav__link site-nav__link--button"
                href="/assets/cv/cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                CV
              </a>
            </nav>
          }
        >
          <HeaderMenu />
        </Suspense>
      </header>

      <section className="hero" id="hero">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Product-minded engineer for modern web products</p>
          <h1>
            Siti e prodotti web
            <br />
            con presenza visiva forte,
            <br />
            codice pulito e backend solidi.
          </h1>
          <p className="lead hero-lead">
            Progetto esperienze one-page, dashboard, piattaforme interne e flussi full stack che
            uniscono design contemporaneo, performance e manutenzione reale nel tempo.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#contact">
              Parliamo del progetto
            </a>
            <Link className="button button--ghost" href="/blog">
              Entra nel blog
            </Link>
          </div>
          <ul className="hero-pills">
            <li>Motion e scroll storytelling</li>
            <li>React / Next.js / Node.js</li>
            <li>Architetture API-first e event-driven</li>
          </ul>
        </div>

        <div className="hero-side" data-reveal style={{ '--delay': '140ms' }}>
          <article className="profile-card" data-parallax data-speed="10">
            <div className="profile-card__visual">
              <img src="/assets/images/about-me.jpeg" alt="Marco Dal Prato" />
            </div>
            <div className="profile-card__body">
              <p className="kicker">Currently building</p>
              <h2>Esperienze digitali veloci, eleganti e concrete.</h2>
              <p>
                Dal frontend al deployment, con focus su prodotti che devono essere belli da usare
                ma anche semplici da evolvere.
              </p>
            </div>
          </article>

          <div className="hero-stats">
            <article className="mini-panel">
              <span className="mini-panel__value">2021+</span>
              <p>Software development in team prodotto.</p>
            </article>
            <article className="mini-panel">
              <span className="mini-panel__value">Full stack</span>
              <p>UI, API, integrazioni, code, CI/CD e ambienti cloud.</p>
            </article>
            <article className="mini-panel">
              <span className="mini-panel__value">Aperto</span>
              <p>Collaborazioni selettive su prodotti web e redesign ad alto impatto.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="signal-band" data-reveal>
        <p>Stack e ambienti con cui lavoro ogni settimana</p>
        <div className="signal-band__list">
          {signalItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="services" className="section-shell">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Servizi</p>
          <h2>Un portfolio one-page non deve sembrare un template.</h2>
          <p className="lead">
            Lavoro su siti personali, presenze professionali e prodotti digitali dove estetica,
            chiarezza e architettura devono convivere senza compromessi grossolani.
          </p>
        </div>
        <div className="section-content card-grid">
          {focusAreas.map((area, index) => (
            <article
              key={area.title}
              className="feature-card"
              data-reveal
              style={{ '--delay': `${120 + index * 80}ms` }}
            >
              <span className="feature-card__index">0{index + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section-shell">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Esperienza</p>
          <h2>Dal supporto tecnico al product engineering.</h2>
          <p className="lead">
            Ho costruito un profilo full stack partendo da operativita reale, assistenza,
            infrastruttura e sviluppo di software interno: oggi questo si traduce in scelte piu
            pragmatiche e meno decorative.
          </p>
        </div>
        <div className="section-content timeline">
          {experiences.map((item, index) => (
            <article
              key={`${item.company}-${item.time}`}
              className="timeline-card"
              data-reveal
              style={{ '--delay': `${100 + index * 70}ms` }}
            >
              <p className="timeline-card__meta">
                <span>{item.time}</span>
                <span>{item.company}</span>
              </p>
              <h3>{item.role}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="section-shell">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Stack</p>
          <h2>Tecnologie scelte per costruire e far durare.</h2>
          <p className="lead">
            Il mio stack unisce frontend moderno, backend affidabile e tool di delivery che
            permettono di iterare senza perdere leggibilita o controllo.
          </p>
        </div>
        <div className="section-content stack-layout">
          <article className="stack-panel" data-reveal style={{ '--delay': '120ms' }}>
            <p className="kicker">Core setup</p>
            <h3>JavaScript e TypeScript al centro, con attenzione al flusso end-to-end.</h3>
            <ul className="stack-points">
              <li>Frontend in React / Next.js con design system e motion misurato.</li>
              <li>Backend in Node.js / NestJS con API, code e integrazioni di terze parti.</li>
              <li>Dati e delivery con PostgreSQL, MongoDB, Docker, CI/CD, OpenShift e AWS.</li>
            </ul>
          </article>
          <div className="stack-cloud" data-reveal style={{ '--delay': '200ms' }}>
            {stack.map((item, index) => (
              <span
                key={item.label}
                className="stack-chip"
                style={{ '--delay': `${140 + index * 30}ms` }}
              >
                <img src={item.icon} alt="" aria-hidden="true" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Metodo</p>
          <h2>Scroll coinvolgente fuori, struttura difendibile dentro.</h2>
          <p className="lead">
            Un buon sito personale deve sembrare intenzionale in superficie, ma sotto deve restare
            leggibile, veloce e pronto a crescere senza rifarlo da capo.
          </p>
        </div>
        <div className="section-content process-grid">
          {deliverySteps.map((step, index) => (
            <article
              key={step.index}
              className="process-card"
              data-reveal
              style={{ '--delay': `${100 + index * 80}ms` }}
            >
              <span className="process-card__index">{step.index}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="blog" className="section-shell">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Blog</p>
          <h2>Note tecniche, idee, ottimizzazioni e scelte di lavoro.</h2>
          <p className="lead">
            Il sito resta one-page per presentazione e contatto, mentre il blog vive in una sezione
            dedicata per approfondimenti, update e piccoli post operativi.
          </p>
          <Link className="text-link" href="/blog">
            Vedi tutti i post
          </Link>
        </div>
        <div className="section-content posts-grid">
          {featuredPosts.length ? (
            featuredPosts.map((post, index) => (
              <article
                key={post.slug}
                className="blog-card"
                data-reveal
                style={{ '--delay': `${120 + index * 70}ms` }}
              >
                <p className="meta blog-card__meta">
                  <span className="meta-calendar" aria-hidden="true" />
                  {formatDateLabel(post.date)}
                  <span aria-hidden="true">•</span>
                  {post.readingMinutes} min read
                </p>
                <h3>
                  <Link className="blog-card__link" href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p>{post.excerpt || 'Descrizione in arrivo.'}</p>
              </article>
            ))
          ) : (
            <p className="blog-empty" data-reveal>
              {t.blog.empty}
            </p>
          )}
        </div>
      </section>

      <section id="contact" className="contact-panel" data-reveal>
        <div className="contact-panel__copy">
          <p className="eyebrow">Contatti</p>
          <h2>Se vuoi un sito o un prodotto web con piu carattere, partiamo da qui.</h2>
          <p className="lead">
            Scrivimi per redesign, one-page professionali, frontend ad alta cura oppure progetti
            full stack da mettere in produzione con criterio.
          </p>
        </div>
        <div className="contact-panel__actions">
          <a className="button button--primary" href="mailto:marcodalprato@icloud.com">
            marcodalprato@icloud.com
          </a>
          <div className="contact-panel__socials">
            <SocialLinks />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
