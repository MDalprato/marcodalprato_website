'use client';

import { useEffect } from 'react';

const portfolioItems = [
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
];

export default function Home() {
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
          <a href="#about">Chi sono</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contattami</a>
        </nav>
      </header>

      <section id="about" className="panel hero">
        <div className="panel-content">
          <p className="eyebrow">Sviluppatore web JavaScript</p>
          <h1 className="typewriter">Creo esperienze web che si muovono bene.</h1>
          <p className="lead">
            Progetto interfacce moderne in React e Next.js, combinando motion, performance
            e accessibilita. Lavoro con brand e team digitali per trasformare idee in
            prodotti scalabili.
          </p>
        </div>
        <div className="hero-card">
          <p className="card-title">Focus attuale</p>
          <ul>
            <li>Next.js e architetture statiche</li>
            <li>Animazioni con UI narrative</li>
            <li>Design system e componenti</li>
          </ul>
        </div>
      </section>

      <section id="portfolio" className="panel">
        <div className="panel-content">
          <p className="eyebrow">Portfolio</p>
          <h2>Attivita recenti e collaborazioni.</h2>
          <div className="cards">
            {portfolioItems.map((item) => (
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
            <p className="eyebrow">CV</p>
            <h2>Scarica il mio curriculum completo.</h2>
            <p className="lead">
              Un riepilogo delle esperienze, competenze tecniche e progetti chiave in un
              documento pronto da condividere.
            </p>
          </div>
          <a className="button" href="/cv-marco-dalprato.pdf">
            Apri il CV
          </a>
        </div>
      </section>

      <section id="contact" className="panel contact">
        <div className="panel-content">
          <p className="eyebrow">Contattami</p>
          <h2>Parliamo del tuo prossimo progetto.</h2>
          <p className="lead">
            Scrivimi per collaborazioni, consulenze o per rimettere in carreggiata il tuo
            prodotto web.
          </p>
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
    </main>
  );
}
