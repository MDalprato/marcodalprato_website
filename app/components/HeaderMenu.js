'use client';

import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useLocale } from './LocaleProvider';
import LocaleSwitch from './LocaleSwitch';

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
    <line x1="16.2" y1="16.2" x2="21" y2="21" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="2.5" x2="12" y2="5.1" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="18.9" x2="12" y2="21.5" stroke="currentColor" strokeWidth="2" />
    <line x1="2.5" y1="12" x2="5.1" y2="12" stroke="currentColor" strokeWidth="2" />
    <line x1="18.9" y1="12" x2="21.5" y2="12" stroke="currentColor" strokeWidth="2" />
    <line x1="5.3" y1="5.3" x2="7.1" y2="7.1" stroke="currentColor" strokeWidth="2" />
    <line x1="16.9" y1="16.9" x2="18.7" y2="18.7" stroke="currentColor" strokeWidth="2" />
    <line x1="16.9" y1="7.1" x2="18.7" y2="5.3" stroke="currentColor" strokeWidth="2" />
    <line x1="5.3" y1="18.7" x2="7.1" y2="16.9" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M15.8 3.8c-1 0.2-2 0.7-2.8 1.5a8 8 0 0 0 0 11.4 8 8 0 0 0 7.1 2.3 9 9 0 1 1-4.3-15.2z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HeaderMenu({
  showAbout = true,
  showCv = true,
  showThemeToggle = true
}) {
  const { messages } = useLocale();
  const t = messages.nav;
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const navRef = useRef(null);
  const inputRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const rawTheme = window.localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const nextTheme =
      rawTheme === 'light' || rawTheme === 'dark' ? rawTheme : prefersLight ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  }, []);

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  useEffect(() => {
    if (searchOpen) {
      inputRef.current?.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) {
      return undefined;
    }

    const closeSearchIfOutside = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', closeSearchIfOutside);
    return () => document.removeEventListener('mousedown', closeSearchIfOutside);
  }, [searchOpen]);

  useEffect(
    () => () => {
      if (fadeTimerRef.current) {
        window.clearTimeout(fadeTimerRef.current);
      }
    },
    []
  );

  const isBlogPage = pathname?.startsWith('/blog');
  const isAboutPage = pathname === '/about';

  const toggleTheme = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;

    if (reduceMotion) {
      setTheme(nextTheme);
      root.setAttribute('data-theme', nextTheme);
      window.localStorage.setItem('theme', nextTheme);
      return;
    }

    const previousThemeTokens = getComputedStyle(root);
    root.style.setProperty('--theme-overlay-bg', previousThemeTokens.getPropertyValue('--bg').trim());
    root.style.setProperty(
      '--theme-overlay-glow',
      previousThemeTokens.getPropertyValue('--bg-glow').trim()
    );

    root.classList.remove('theme-transition-fade');
    root.classList.add('theme-transition');

    window.requestAnimationFrame(() => {
      setTheme(nextTheme);
      root.setAttribute('data-theme', nextTheme);
      window.localStorage.setItem('theme', nextTheme);

      window.requestAnimationFrame(() => {
        root.classList.add('theme-transition-fade');
      });
    });

    if (fadeTimerRef.current) {
      window.clearTimeout(fadeTimerRef.current);
    }

    fadeTimerRef.current = window.setTimeout(() => {
      root.classList.remove('theme-transition', 'theme-transition-fade');
      root.style.removeProperty('--theme-overlay-bg');
      root.style.removeProperty('--theme-overlay-glow');
    }, 640);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const cleaned = query.trim();
    const params = new URLSearchParams();
    if (cleaned) {
      params.set('q', cleaned);
    }
    router.push(params.toString() ? `/blog?${params.toString()}` : '/blog');
    setSearchOpen(false);
  };

  return (
    <nav className="site-nav" aria-label={t.mainLabel} ref={navRef}>
      <Link className={`site-nav__link${isBlogPage ? ' is-active' : ''}`} href="/blog">
        {t.blog}
      </Link>
      {showAbout ? (
        <Link className={`site-nav__link${isAboutPage ? ' is-active' : ''}`} href="/about">
          {t.about}
        </Link>
      ) : null}
      {showCv ? (
        <a
          className="site-nav__link"
          href="/assets/cv/cv.pdf"
          target="_blank"
          rel="noreferrer"
        >
          {t.cv}
        </a>
      ) : null}
      <LocaleSwitch />
      <button
        className="site-nav__icon-btn"
        type="button"
        aria-label={searchOpen ? t.searchClose : t.searchOpen}
        onClick={() => setSearchOpen((open) => !open)}
      >
        <SearchIcon />
      </button>
      {showThemeToggle ? (
        <button
          className="site-nav__icon-btn"
          type="button"
          aria-label={theme === 'dark' ? t.themeLight : t.themeDark}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      ) : null}
      {searchOpen ? (
        <form className="site-search" role="search" onSubmit={handleSearchSubmit}>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.searchPlaceholder}
            aria-label={t.searchPlaceholder}
          />
          <button type="submit">{t.searchSubmit}</button>
        </form>
      ) : null}
    </nav>
  );
}
