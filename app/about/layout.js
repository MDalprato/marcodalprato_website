import Link from 'next/link';
import { Suspense } from 'react';
import HeaderMenu from '../components/HeaderMenu';

export default function AboutLayout({ children }) {
  return (
    <div className="site">
      <header className="site-header">
        <a className="site-name" href="/">
          Marco Dalprato
        </a>
        <Suspense
          fallback={
            <nav className="site-nav" aria-label="Main">
              <Link className="site-nav__link" href="/blog">
                Posts
              </Link>
              <Link className="site-nav__link is-active" href="/about">
                About
              </Link>
            </nav>
          }
        >
          <HeaderMenu />
        </Suspense>
      </header>
      {children}
    </div>
  );
}
