import SocialLinks from './SocialLinks';

export default function FooterSection({ footer, lang, setLang }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <SocialLinks showText={false} />
        </div>
        <p className="footer-copy">
          &copy; {year} Marco Dalprato. {footer.copyright}
        </p>
        <div className="lang-switch" role="group" aria-label={footer.langLabel}>
          <button
            type="button"
            onClick={() => setLang('it')}
            className={lang === 'it' ? 'active' : ''}
          >
            {footer.it}
          </button>
          <button
            type="button"
            onClick={() => setLang('en')}
            className={lang === 'en' ? 'active' : ''}
          >
            {footer.en}
          </button>
        </div>
      </div>
    </footer>
  );
}
