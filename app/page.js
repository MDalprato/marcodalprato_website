'use client';

import { useEffect, useState } from 'react';
import content from './content';
import Ambient from './components/Ambient';
import ContactSection from './components/ContactSection';
import CvSection from './components/CvSection';
import FooterSection from './components/FooterSection';
import HeroSection from './components/HeroSection';
import LoadingOverlay from './components/LoadingOverlay';
import PortfolioSection from './components/PortfolioSection';
import TechStackSection from './components/TechStackSection';
import Topbar from './components/Topbar';

export default function Home() {
  const [lang, setLang] = useState('it');
  const t = content[lang];
  const loaderEnabled = process.env.NEXT_PUBLIC_ENABLE_LOADER !== 'false';
  const [isReady, setIsReady] = useState(!loaderEnabled);

  useEffect(() => {
    const stored = window.localStorage.getItem('mdp-lang');
    if (stored === 'it' || stored === 'en') {
      setLang(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('mdp-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (!isReady) {
      return undefined;
    }

    const panels = document.querySelectorAll('.panel');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    panels.forEach((panel) => observer.observe(panel));

    return () => observer.disconnect();
  }, [isReady]);

  return (
    <main className="onepage">
      {loaderEnabled && !isReady ? (
        <LoadingOverlay enabled={loaderEnabled} onComplete={() => setIsReady(true)} />
      ) : null}
      {isReady ? (
        <div className={`site-shell${loaderEnabled ? ' crt-on' : ''}`}>
          <Ambient />
          <Topbar nav={t.nav} />
          <HeroSection hero={t.hero} />
          <PortfolioSection portfolio={t.portfolio} />
          <TechStackSection tech={t.tech} />
          <CvSection cv={t.cv} />
          <ContactSection contact={t.contact} />
          <FooterSection footer={t.footer} lang={lang} setLang={setLang} />
        </div>
      ) : null}
    </main>
  );
}
