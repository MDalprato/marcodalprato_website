import Link from 'next/link';
import { Suspense } from 'react';
import HeaderMenu from '../components/HeaderMenu';
import SiteFooter from '../components/SiteFooter';

export default function BlogLayout({ children }) {
  return (
    <div className="site site--with-footer">
      <header className="site-header">
        <a className="site-name" href="/">
          Marco Dalprato
        </a>
        <Suspense
          fallback={
            <nav className="site-nav" aria-label="Main">
              <Link className="site-nav__link is-active" href="/blog">
                Blog
              </Link>
            </nav>
          }
        >
          <HeaderMenu showAbout={false} showCv={false} showThemeToggle={false} />
        </Suspense>
      </header>
      {children}
      <SiteFooter />
    </div>
  );
}
