'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale } from './components/LocaleProvider';
import GitHubActivity from './components/GitHubActivity';
import LocaleSwitch from './components/LocaleSwitch';

const isLoaderEnabled =
  process.env.NODE_ENV !== 'development' && process.env.NEXT_PUBLIC_ENABLE_LOADER !== 'false';

export default function Home() {
  const { messages } = useLocale();
  const home = messages.home;
  const about = messages.about;
  const preloadLogs = [
    '[boot] mounting human interface layer...',
    '[io] scanning /portfolio for aesthetically pleasing packets...',
    '[gpu] calibrating subpixel drama matrix...',
    '[cache] warming design tokens to operating temperature...',
    '[ux] resolving typography dependencies...',
    '[ship] build stable. preparing visual output...'
  ];
  const navItems = [
    { id: 'hero', label: home.sections.hero },
    { id: 'about', label: home.sections.about },
    { id: 'work', label: home.sections.work },
    { id: 'contact', label: home.sections.contact }
  ];
  const shellRef = useRef(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isReady, setIsReady] = useState(!isLoaderEnabled);
  const [logIndex, setLogIndex] = useState(0);
  const [hoveredNav, setHoveredNav] = useState(null);

  const scrollToSection = (sectionId, options = {}) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const top = Math.max(section.getBoundingClientRect().top + window.scrollY, 0);
    const behavior = options.behavior ?? 'smooth';

    window.scrollTo({ top, behavior });
    window.history.replaceState(null, '', `#${sectionId}`);
  };

  useEffect(() => {
    if (!isLoaderEnabled) {
      return undefined;
    }

    const expandTimer = window.setTimeout(() => {
      setIsExpanding(true);
    }, 5000);

    const readyTimer = window.setTimeout(() => {
      setIsReady(true);
    }, 6200);

    return () => {
      window.clearTimeout(expandTimer);
      window.clearTimeout(readyTimer);
    };
  }, []);

  useEffect(() => {
    if (!isLoaderEnabled || isReady) {
      return undefined;
    }

    const logTimer = window.setInterval(() => {
      setLogIndex((current) => {
        if (current >= preloadLogs.length - 1) {
          return current;
        }

        return current + 1;
      });
    }, 900);

    return () => {
      window.clearInterval(logTimer);
    };
  }, [isReady, preloadLogs.length]);

  useEffect(() => {
    const applyHashScroll = () => {
      const hash = window.location.hash.replace('#', '');

      if (!hash) {
        return;
      }

      window.setTimeout(() => {
        scrollToSection(hash, { behavior: 'auto' });
      }, 0);
    };

    applyHashScroll();
    window.addEventListener('hashchange', applyHashScroll);

    return () => {
      window.removeEventListener('hashchange', applyHashScroll);
    };
  }, []);

  useEffect(() => {
    const shell = shellRef.current;

    if (!shell) {
      return undefined;
    }

    let frameId = 0;
    let currentY = 0;
    let targetY = 0;
    let resizeObserver;

    const syncHeight = () => {
      document.body.style.height = `${shell.scrollHeight}px`;
    };

    const animate = () => {
      targetY = window.scrollY;
      currentY += (targetY - currentY) * 0.075;

      if (Math.abs(targetY - currentY) < 0.1) {
        currentY = targetY;
      }

      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(targetY / maxScroll, 0), 1);

      shell.style.transform = `translate3d(0, ${-currentY}px, 0)`;
      shell.style.setProperty('--scroll-progress', progress.toFixed(4));
      frameId = window.requestAnimationFrame(animate);
    };

    syncHeight();
    animate();

    window.addEventListener('resize', syncHeight);

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncHeight);
      resizeObserver.observe(shell);
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', syncHeight);
      resizeObserver?.disconnect();
      document.body.style.height = '';
      shell.style.transform = '';
    };
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      {isLoaderEnabled ? (
        <div
          className={`preloader${isExpanding ? ' is-expanding' : ''}${isReady ? ' is-hidden' : ''}`}
          aria-hidden="true"
        >
          <div className="preloader__bar" />
          {!isExpanding ? (
            <div className="preloader__terminal">
              <span className="preloader__prompt">&gt;</span>
              <span className="preloader__log">{preloadLogs[logIndex]}</span>
            </div>
          ) : null}
        </div>
      ) : null}

      <main
        ref={shellRef}
        className={`onepage-shell${isReady ? ' is-ready' : ''}`}
      >
        <LocaleSwitch className="locale-switch--home" />
        <nav
          className={`section-rail${hoveredNav ? ' is-hovering' : ''}`}
          aria-label={home.railLabel}
          onMouseLeave={() => setHoveredNav(null)}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`section-rail__link${hoveredNav === item.id ? ' is-active' : ''}${
                hoveredNav && hoveredNav !== item.id ? ' is-collapsing' : ''
              }`}
              onClick={(event) => handleNavClick(event, item.id)}
              onMouseEnter={() => setHoveredNav(item.id)}
            >
              {item.label.split('').map((character, index) => (
                <span
                  key={`${item.id}-${index}`}
                  className="section-rail__glyph"
                  style={{
                    '--glyph-index': index,
                    '--fall-distance': `${18 + index * 7}px`,
                    '--fall-rotate': `${(index % 2 === 0 ? 1 : -1) * (8 + index * 2)}deg`
                  }}
                >
                  {character === ' ' ? '\u00A0' : character}
                </span>
              ))}
            </a>
          ))}
        </nav>

        <section id="hero" className="panel panel--hero">
          <div className="hero-name">
            <span>Marco</span>
            <span>Dalprato</span>
          </div>
        </section>

        <section id="about" className="panel panel--split">
          <div className="panel-label">{home.aboutTitle}</div>
          <div className="panel-content">
            {home.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="work" className="panel">
          <div className="section-heading">
            <span>{home.workTitle}</span>
          </div>
          <div className="work-showcase">
            <div className="work-grid">
              {home.workItems.map((item) => (
                <article key={item.index} className="work-card">
                  <span className="work-card__index">{item.index}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <aside className="github-showcase">
              <div className="github-showcase__header">
                <p className="github-showcase__eyebrow">{about.activityTitle}</p>
                <a
                  className="about-inline-link"
                  href="https://github.com/MDalprato"
                  target="_blank"
                  rel="noreferrer"
                >
                  {about.githubLink}
                </a>
              </div>
              <GitHubActivity username="MDalprato" />
            </aside>
          </div>
        </section>

        <section id="contact" className="panel panel--contact">
          <div className="section-heading">
            <span>{home.contactTitle}</span>
          </div>
          <div className="contact-stack">
            <a className="contact-link" href="mailto:marcodalprato@icloud.com">
              Mail
            </a>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/marcodalprato/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="contact-link"
              href="https://github.com/MDalprato"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="contact-link"
              href="https://www.instagram.com/mdalprato/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="contact-link"
              href="https://drive.google.com/drive/folders/1lH0XudGgBoNHdHYVB5mezvu-NpAhGj0C?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              CV
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
