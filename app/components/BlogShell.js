'use client';

import { useState } from 'react';
import LocaleSwitch from './LocaleSwitch';

const items = [
  { href: '/#hero', label: 'Hero' },
  { href: '/#about', label: 'About me' },
  { href: '/#work', label: 'My work' },
  { href: '/blog', label: 'Blog', active: true },
  { href: '/#contact', label: 'Contact' }
];

export default function BlogShell({ children }) {
  const [hoveredNav, setHoveredNav] = useState(null);

  return (
    <div className="blog-shell">
      <LocaleSwitch className="locale-switch--home" />
      <nav
        className={`section-rail${hoveredNav ? ' is-hovering' : ''}`}
        aria-label="Section navigation"
        onMouseLeave={() => setHoveredNav(null)}
      >
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`section-rail__link${item.active || hoveredNav === item.href ? ' is-active' : ''}${
              hoveredNav && hoveredNav !== item.href ? ' is-collapsing' : ''
            }`}
            onMouseEnter={() => setHoveredNav(item.href)}
          >
            {item.label.split('').map((character, index) => (
              <span
                key={`${item.href}-${index}`}
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
      <div className="blog-shell__content">{children}</div>
    </div>
  );
}
