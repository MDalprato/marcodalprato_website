import Link from 'next/link';
import { Suspense } from 'react';
import { getBlogPosts } from '../lib/blog';
import { siteConfig } from '../lib/site';
import HeaderMenu from '../components/HeaderMenu';
import SiteFooter from '../components/SiteFooter';
import BlogPostListClient from './BlogPostListClient';

export const metadata = {
  title: 'Blog | Marco Dal Prato',
  description: siteConfig.description,
  alternates: {
    canonical: '/blog/'
  },
  openGraph: {
    title: 'Blog | Marco Dal Prato',
    description: siteConfig.description,
    url: '/blog/'
  }
};

const formatDateLabel = (dateString) => {
  const parsedDate = new Date(dateString);
  if (Number.isNaN(parsedDate.getTime())) {
    return dateString || '';
  }

  return new Intl.DateTimeFormat('it-IT', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(parsedDate);
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="site shell site--with-footer blog-page">
      <div className="page-orb page-orb--one" data-parallax data-speed="18" />
      <div className="page-orb page-orb--two" data-parallax data-speed="12" />
      <div className="page-grid" aria-hidden="true" />

      <header className="site-header" data-reveal>
        <Link className="site-name" href="/">
          <span>Marco Dal Prato</span>
          <small>Full Stack Web Developer</small>
        </Link>
        <Suspense
          fallback={
            <nav className="site-nav" aria-label="Main">
              <Link className="site-nav__link" href="/#services">
                Servizi
              </Link>
              <Link className="site-nav__link" href="/#work">
                Esperienza
              </Link>
              <Link className="site-nav__link" href="/#stack">
                Stack
              </Link>
              <Link className="site-nav__link is-active" href="/blog">
                Blog
              </Link>
              <Link className="site-nav__link" href="/#contact">
                Contatti
              </Link>
              <a
                className="site-nav__link site-nav__link--button"
                href="/assets/cv/cv.pdf"
                target="_blank"
                rel="noreferrer"
              >
                CV
              </a>
            </nav>
          }
        >
          <HeaderMenu />
        </Suspense>
      </header>

      <section className="blog-hero" data-reveal>
        <div className="blog-hero__copy">
          <p className="eyebrow">Blog</p>
          <h1>Appunti di build, idee tecniche e piccoli fix che fanno differenza.</h1>
          <p className="lead">
            Una sezione separata dalla home, pensata per raccogliere note operative, esperimenti e
            riflessioni su sviluppo frontend, backend e workflow.
          </p>
        </div>
        <div className="blog-hero__aside" data-reveal style={{ '--delay': '140ms' }}>
          <div className="mini-panel">
            <span className="mini-panel__value">{posts.length || '0'}</span>
            <p>Post pubblicati al momento.</p>
          </div>
          {posts[0] ? (
            <div className="mini-panel">
              <span className="mini-panel__value">{formatDateLabel(posts[0].date)}</span>
              <p>Ultimo aggiornamento disponibile nel feed.</p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="blog-list-panel" data-reveal>
        {posts.length ? (
          <Suspense
            fallback={
              <div className="posts-grid">
                {posts.map((post) => (
                  <article key={post.slug} className="blog-card">
                    <p className="meta blog-card__meta">
                      <span className="meta-calendar" aria-hidden="true" />
                      {formatDateLabel(post.date)}
                      <span aria-hidden="true">•</span>
                      {post.readingMinutes} min read
                    </p>
                    <h2>
                      <Link className="blog-card__link" href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p>{post.excerpt || 'Descrizione in arrivo.'}</p>
                  </article>
                ))}
              </div>
            }
          >
            <BlogPostListClient posts={posts} />
          </Suspense>
        ) : (
          <p className="blog-empty">Nessun post pubblicato al momento.</p>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
