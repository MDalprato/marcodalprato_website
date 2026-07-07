'use client';

import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { useLocale } from '../components/LocaleProvider';
import BlogPostListClient from './BlogPostListClient';

export default function BlogPageClient({ posts }) {
  const { messages } = useLocale();
  const t = messages.blog;
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasActivePost = new URLSearchParams(window.location.search).has('post');

    if (reduceMotion || hasActivePost) {
      setIntroDone(true);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIntroDone(true);
    }, 1100);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <main className={`blog-page blog-page--intro${introDone ? ' is-ready' : ''}`}>
      <div className={`blog-intro${introDone ? ' is-hidden' : ''}`} aria-hidden="true">
        <span className="blog-intro__title">BLOG</span>
      </div>
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
