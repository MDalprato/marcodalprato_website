'use client';

import { useEffect, useRef } from 'react';

export default function PortfolioSection({ portfolio }) {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) {
      return undefined;
    }

    let rafId = null;

    const updateProgress = () => {
      rafId = null;
      const rect = timeline.getBoundingClientRect();
      const viewport = window.innerHeight || 0;
      const anchor = viewport * 0.65;
      const progress = (anchor - rect.top) / rect.height;
      const clamped = Math.min(1, Math.max(0, progress));
      timeline.style.setProperty('--timeline-progress', clamped.toFixed(3));
    };

    const onScroll = () => {
      if (rafId !== null) {
        return;
      }
      rafId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="portfolio" className="panel timeline-panel" data-anim="left">
      <div className="panel-content">
        <p className="eyebrow">{portfolio.eyebrow}</p>
        <h2>{portfolio.title}</h2>
        <div className="timeline" ref={timelineRef}>
          {portfolio.items.map((item, index) => (
            <article key={`${item.role}-${item.time}`} className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card" style={{ '--card-index': index }}>
                <p className="tag">{item.time}</p>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p className="detail">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
