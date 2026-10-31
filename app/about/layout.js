import Link from 'next/link';
import { Suspense } from 'react';
import HeaderMenu from '../components/HeaderMenu';
import SiteFooter from '../components/SiteFooter';

export default function AboutLayout({ children }) {
  return (
    <div className="site site--with-footer">
      <header className="site-header">
        <Link className="site-name" href="/">
          Marco Dalprato
        </Link>
        <Suspense
          fallback={
            <nav className="site-nav" aria-label="Main">
              <Link className="site-nav__link" href="/blog">
                Blog
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
      <SiteFooter />
    </div>
  );
}
