'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  getTranslations,
  resolveLocale
} from '../lib/i18nShared';

const LocaleContext = createContext({
  locale: DEFAULT_LOCALE,
  messages: getTranslations(DEFAULT_LOCALE),
  setLocale: () => {}
});

export default function LocaleProvider({ children, initialLocale = DEFAULT_LOCALE }) {
  const router = useRouter();
  const [locale, setLocaleState] = useState(resolveLocale(initialLocale));

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(LOCALE_COOKIE);
    const browserLocale = resolveLocale(window.navigator.language);
    const nextLocale = resolveLocale(storedLocale || browserLocale);

    if (nextLocale !== locale) {
      setLocaleState(nextLocale);
    }

    document.documentElement.lang = nextLocale;
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale) => {
    const resolved = resolveLocale(nextLocale);
    setLocaleState(resolved);
    window.localStorage.setItem(LOCALE_COOKIE, resolved);
    router.refresh();
  };

  const value = useMemo(
    () => ({
      locale,
      messages: getTranslations(locale),
      setLocale
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);
