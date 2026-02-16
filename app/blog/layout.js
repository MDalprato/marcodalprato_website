import content from '../content';

export default function BlogLayout({ children }) {
  const t = content.it;

  return (
    <div className="site">
      <header className="site-header">
        <a className="site-name" href="/">
          Marco Dalprato
        </a>
        <nav className="site-nav" aria-label="Main">
          <a href="/#about">{t.nav.about}</a>
          <a href="/#work">{t.nav.portfolio}</a>
          <a href="/blog">{t.nav.blog}</a>
          <a href="/#contact">{t.nav.contact}</a>
        </nav>
      </header>
      {children}
    </div>
  );
}
