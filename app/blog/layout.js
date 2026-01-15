import Ambient from '../components/Ambient';
import SocialLinks from '../components/SocialLinks';
import content from '../content';

export default function BlogLayout({ children }) {
  const t = content.it;

  return (
    <div className="site-shell blog-shell">
      <Ambient />
      <header className="topbar">
        <span className="brand">Marco Dalprato</span>
        <nav className="nav-links">
          <a href="/#about">{t.nav.about}</a>
          <a href="/#portfolio">{t.nav.portfolio}</a>
          <a href="/blog">{t.nav.blog}</a>
          <a href="/#cv">{t.nav.cv}</a>
          <a href="/#contact">{t.nav.contact}</a>
        </nav>
      </header>
      {children}
      <footer className="footer">
        <div className="footer-inner">
          <p>{t.footer.note}</p>
          <div className="footer-links">
            <SocialLinks />
          </div>
        </div>
      </footer>
    </div>
  );
}
