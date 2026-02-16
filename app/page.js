import content from './content';
import Link from 'next/link';
import { Suspense } from 'react';
import { getBlogPosts } from './lib/blog';
import HeaderMenu from './components/HeaderMenu';
import SocialLinks from './components/SocialLinks';
import SiteFooter from './components/SiteFooter';

const formatDateLabel = (dateString) => {
  const parsedDate = new Date(dateString);
  if (Number.isNaN(parsedDate.getTime())) {
    return dateString || '';
  }

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
    .format(parsedDate)
    .replace(/(\w{3}) (\d{4})$/, '$1, $2');
};

export default async function Home() {
  const t = content.it;
  const posts = await getBlogPosts();

  return (
    <main id="top" className="site site--with-footer">
      <header className="site-header">
        <a className="site-name" href="#top">
          Marco Dalprato
        </a>
        <Suspense
          fallback={
            <nav className="site-nav" aria-label="Main">
              <Link className="site-nav__link" href="/blog">
                Posts
              </Link>
              <Link className="site-nav__link" href="/about">
                About
              </Link>
            </nav>
          }
        >
          <HeaderMenu />
        </Suspense>
      </header>

      <section id="about" className="section intro">
        <div className="intro-head">
          <img className="intro-portrait" src="/assets/images/picture.avif" alt="Marco Dalprato" />
          <div className="intro-content">
            <h1>
              Hi, I&apos;m @mdalprato.
              {/* <span className="intro-rss" aria-hidden="true">
                RSS
              </span> */}
            </h1>
            <p className="intro-bio">
              Full-stack developer crafting clean interfaces and resilient backends.
              <br />
              I turn complex ideas into fast, scalable products people actually enjoy using.
            </p>
            <div className="intro-social">
              <SocialLinks showText={false} />
            </div>
          </div>
        </div>
      </section>

      <section id="blog-home" className="section">
        <h2>{t.blog.title}</h2>
        {posts.length ? (
          <div className="home-blog-list">
            {posts.map((post) => (
              <article key={post.slug} className="home-blog-item">
                <h3>
                  <Link className="blog-card__link" href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="meta home-blog-item__meta">
                  <span className="meta-calendar" aria-hidden="true" />
                  {formatDateLabel(post.date)}
                  <span aria-hidden="true">•</span>
                  {post.readingMinutes} min read
                </p>
                <p className="home-blog-desc">{post.excerpt || 'Descrizione in arrivo.'}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="blog-empty">{t.blog.empty}</p>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
