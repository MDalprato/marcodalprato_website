'use client';

import { useLocale } from './LocaleProvider';

export default function LocaleSwitch({ className = '' }) {
  const { locale, setLocale } = useLocale();
  const classes = ['locale-switch', className].filter(Boolean).join(' ');

  return (
    <div className={classes} aria-label="Language switcher">
      <button
        type="button"
        className={`locale-switch__button${locale === 'it' ? ' is-active' : ''}`}
        onClick={() => setLocale('it')}
      >
        IT
      </button>
      <button
        type="button"
        className={`locale-switch__button${locale === 'en' ? ' is-active' : ''}`}
        onClick={() => setLocale('en')}
      >
        EN
      </button>
    </div>
  );
}
