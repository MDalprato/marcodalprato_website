'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { useLocale } from '../components/LocaleProvider';
import BlogPostListClient from './BlogPostListClient';

export default function BlogPageClient({ posts }) {
  const { messages } = useLocale();
  const t = messages.blog;

  return (
    <main className="blog-page">
      <header className="blog-hero">
        <div className="blog-hero__inner">
          <p className="eyebrow">Blog</p>
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
          <p className="blog-hero__meta">{t.archiveMeta(posts.length)}</p>
          <Link className="blog-back" href="/">
            {t.backHome}
          </Link>
        </div>
      </header>
      <section className="blog-list">
        {posts.length ? (
          <Suspense fallback={<p className="blog-empty">{t.loadingArchive}</p>}>
            <BlogPostListClient posts={posts} />
          </Suspense>
        ) : (
          <p className="blog-empty">{t.empty}</p>
        )}
      </section>
    </main>
  );
}
