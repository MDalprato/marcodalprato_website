'use client';

import { useEffect } from 'react';

const getParallaxShift = (node, viewportHeight) => {
  const rect = node.getBoundingClientRect();
  const speed = Number(node.dataset.speed || 18);
  const elementCenter = rect.top + rect.height / 2;
  const viewportCenter = viewportHeight / 2;
  const distance = elementCenter - viewportCenter;

  return `${(-distance / viewportHeight) * speed}px`;
};

export default function ScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealNodes = Array.from(document.querySelectorAll('[data-reveal]'));
    const parallaxNodes = Array.from(document.querySelectorAll('[data-parallax]'));

    if (reduceMotion) {
      revealNodes.forEach((node) => node.classList.add('is-visible'));
      parallaxNodes.forEach((node) => node.style.setProperty('--parallax-shift', '0px'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');

            if (entry.target.dataset.revealOnce !== 'false') {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    revealNodes.forEach((node) => observer.observe(node));

    let frameId = 0;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight;
      parallaxNodes.forEach((node) => {
        node.style.setProperty('--parallax-shift', getParallaxShift(node, viewportHeight));
      });
      frameId = 0;
    };

    const requestParallaxUpdate = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
    window.addEventListener('resize', requestParallaxUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', requestParallaxUpdate);
      window.removeEventListener('resize', requestParallaxUpdate);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return null;
}
