import Link from 'next/link';
import { Suspense } from 'react';
import { getBlogPosts } from '../lib/blog';
import BlogPostListClient from './BlogPostListClient';

export const metadata = {
  title: 'Blog | Marco Dal Prato'
};

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

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="blog-page">
      <header className="blog-hero">
        <div className="blog-hero__inner">
          <p className="eyebrow">Blog</p>
          <h1>Blog</h1>
          <p className="lead">Piccoli aggiornamenti, note tecniche e idee di lavoro.</p>
          <Link className="blog-back" href="/">
            Torna alla home
          </Link>
        </div>
      </header>
      <section className="blog-list">
        {posts.length ? (
          <Suspense
            fallback={
              <div className="home-blog-list blog-stream">
                {posts.map((post) => (
                  <article key={post.slug} className="home-blog-item">
                    <h2>
                      <Link className="blog-card__link" href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
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
            }
          >
            <BlogPostListClient posts={posts} />
          </Suspense>
        ) : (
          <p className="blog-empty">Nessun post pubblicato al momento.</p>
        )}
      </section>
    </main>
  );
}
