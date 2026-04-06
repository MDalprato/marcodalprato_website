import Link from 'next/link';
import { Suspense } from 'react';
import GitHubActivity from '../components/GitHubActivity';
import HeaderMenu from '../components/HeaderMenu';
import SiteFooter from '../components/SiteFooter';
import { siteConfig } from '../lib/site';

export const metadata = {
  title: 'About | Marco Dal Prato',
  description: siteConfig.description,
  alternates: {
    canonical: '/about/'
  },
  openGraph: {
    title: 'About | Marco Dal Prato',
    description: siteConfig.description,
    url: '/about/'
  }
};

export default function AboutPage() {
  return (
    <main className="site shell site--with-footer about-page">
      <div className="page-orb page-orb--two" data-parallax data-speed="14" />
      <div className="page-grid" aria-hidden="true" />

      <header className="site-header" data-reveal>
        <Link className="site-name" href="/">
          <span>Marco Dal Prato</span>
          <small>Full Stack Web Developer</small>
        </Link>
        <Suspense fallback={null}>
          <HeaderMenu />
        </Suspense>
      </header>

      <section className="section-shell about-section">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">About</p>
          <h1>Build mode, quasi sempre.</h1>
          <p className="lead">
            Mi piace trasformare idee ancora grezze in prodotti usabili, veloci e abbastanza
            ordinati da poter essere mantenuti senza sofferenza inutile.
          </p>
        </div>
        <div className="section-content about-grid">
          <img className="about-photo" src="/assets/images/about-me.jpeg" alt="Marco Dal Prato" />
          <div className="about-copy">
            <p>
              Negli anni ho lavorato tra supporto tecnico, infrastruttura, sviluppo software e
              integrazione di sistemi. Questo oggi mi aiuta a prendere decisioni meno teoriche e
              piu utili.
            </p>
            <p>
              Mi interessano soprattutto frontend ben costruiti, backend solidi e processi di
              delivery che permettono ai team di muoversi veloci senza generare caos.
            </p>
            <p>
              Scrivo codice, rifinisco dettagli di interazione e cerco sempre la versione piu
              chiara di un prodotto, non quella piu rumorosa.
            </p>
            <p>
              <a
                className="about-inline-link"
                href="https://github.com/MDalprato"
                target="_blank"
                rel="noreferrer"
              >
                Guarda il mio GitHub e i repository pubblici piu recenti.
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell about-section">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Open source</p>
          <h2>Attivita recente su GitHub.</h2>
          <p className="lead">
            Una parte del mio lavoro resta privata, ma su GitHub si vede comunque il modo in cui
            affronto tool, release e sperimentazione.
          </p>
        </div>
        <div className="section-content">
          <div className="github-activity-widget" data-reveal style={{ '--delay': '120ms' }}>
            <GitHubActivity username="MDalprato" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
