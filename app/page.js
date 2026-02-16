import content from './content';
import SocialLinks from './components/SocialLinks';

export default function Home() {
  const t = content.it;
  const year = new Date().getFullYear();

  return (
    <main id="top" className="site">
      <header className="site-header">
        <a className="site-name" href="#top">
          Marco Dalprato
        </a>
        <nav className="site-nav" aria-label="Main">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="/blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about" className="section intro">
        <p className="kicker">{t.hero.eyebrow}</p>
        <h1>{t.hero.title}</h1>
        <p>{t.hero.lead}</p>
      </section>

      <section id="work" className="section">
        <h2>{t.portfolio.title}</h2>
        <div className="timeline-list">
          {t.portfolio.items.map((item) => (
            <article key={`${item.role}-${item.time}`} className="timeline-item">
              <p className="meta">{item.time}</p>
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>{t.tech.title}</h2>
        <ul className="stack-list" aria-label={t.tech.listLabel}>
          {t.tech.items.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="section contact">
        <h2>{t.contact.title}</h2>
        <p>{t.contact.lead}</p>
        <div className="social-grid">
          <SocialLinks />
        </div>
        <p>
          <a className="inline-link" href="/assets/cv/cv.pdf">
            {t.cv.cta}
          </a>
        </p>
      </section>

      <footer className="site-footer">
        <p>
          &copy; {year} Marco Dalprato. {t.footer.copyright}
        </p>
      </footer>
    </main>
  );
}
