'use client';

import { useEffect, useRef, useState } from 'react';

const navItems = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About me' },
  { id: 'work', label: 'My work' },
  { id: 'contact', label: 'Contact' }
];

const workItems = [
  {
    index: '01',
    title: 'Digital systems',
    description:
      'Concept, frontend architecture and product direction for web experiences built to feel clear, fast and durable.'
  },
  {
    index: '02',
    title: 'Visual interfaces',
    description:
      'Minimal interfaces shaped by rhythm, typography and motion, with attention to spacing, interaction and pace.'
  },
  {
    index: '03',
    title: 'Code and detail',
    description:
      'From prototype to release, the work stays focused on performance, maintainability and coherent user experience.'
  }
];

const preloadLogs = [
  '[boot] mounting human interface layer...',
  '[io] scanning /portfolio for aesthetically pleasing packets...',
  '[gpu] calibrating subpixel drama matrix...',
  '[cache] warming design tokens to operating temperature...',
  '[ux] resolving typography dependencies...',
  '[ship] build stable. preparing visual output...'
];

export default function Home() {
  const shellRef = useRef(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [logIndex, setLogIndex] = useState(0);
  const [hoveredNav, setHoveredNav] = useState(null);

  const scrollToSection = (sectionId, options = {}) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const top = Math.max(section.offsetTop, 0);
    const behavior = options.behavior ?? 'smooth';

    window.scrollTo({ top, behavior });
    window.history.replaceState(null, '', `#${sectionId}`);
  };

  useEffect(() => {
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
    if (isReady) {
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
  }, [isReady]);

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

      <main
        ref={shellRef}
        className={`onepage-shell${isReady ? ' is-ready' : ''}`}
      >
        <nav
          className={`section-rail${hoveredNav ? ' is-hovering' : ''}`}
          aria-label="Section navigation"
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
          <div className="panel-label">About me</div>
          <div className="panel-content">
            <p>
              I work across design and development, shaping digital experiences that feel precise,
              essential and direct.
            </p>
            <p>
              My approach stays minimal on the surface and rigorous underneath, with attention to
              motion, typography, structure and technical quality.
            </p>
            <p>
              I am interested in interfaces that breathe, systems that scale, and products that do
              not need noise to feel memorable.
            </p>
            <p>
              Each project starts from clarity: what matters, what can be removed, and what should
              remain visible.
            </p>
          </div>
        </section>

        <section id="work" className="panel">
          <div className="section-heading">
            <span>My work</span>
          </div>
          <div className="work-grid">
            {workItems.map((item) => (
              <article key={item.index} className="work-card">
                <span className="work-card__index">{item.index}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="panel panel--contact">
          <div className="section-heading">
            <span>Contact</span>
          </div>
          <a className="contact-link" href="mailto:marcodalprato@icloud.com">
            marcodalprato@icloud.com
          </a>
        </section>
      </main>
    </>
  );
}
