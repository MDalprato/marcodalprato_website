'use client';

import SocialLinks from './SocialLinks';
import CollapseTrigger from './CollapseTrigger';
import { useLocale } from './LocaleProvider';

export default function SiteFooter() {
  const { locale, messages, setLocale } = useLocale();
  const year = new Date().getFullYear();
  const t = messages.footer;

  return (
    <footer className="site-footer">
      <div className="footer-social">
        <SocialLinks showText={false} />
      </div>
      <div className="footer-locale">
        <span className="footer-locale__label">{t.languageLabel}</span>
        <div className="footer-locale__actions">
          <button
            type="button"
            className={`footer-locale__button${locale === 'it' ? ' is-active' : ''}`}
            onClick={() => setLocale('it')}
          >
            IT
          </button>
          <button
            type="button"
            className={`footer-locale__button${locale === 'en' ? ' is-active' : ''}`}
            onClick={() => setLocale('en')}
          >
            EN
          </button>
        </div>
      </div>
      <p>
        &copy; {year} Marco Dalprato. {t.rights} {t.builtWith} <CollapseTrigger />.
      </p>
    </footer>
  );
}
