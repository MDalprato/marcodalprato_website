export default function FooterSection({ footer, lang, setLang }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>{footer.note}</p>
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
