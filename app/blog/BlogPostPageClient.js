'use client';

import Link from 'next/link';
import { useLocale } from '../components/LocaleProvider';
import { formatBlogDateLabel } from '../lib/blogDate';
import BlogPostMarkdown from './BlogPostMarkdown';

export default function BlogPostPageClient({ post, normalizedBody, readingMinutes }) {
  const { locale, messages } = useLocale();
  const t = messages.blog;

  return (
    <main className="blog-page blog-post">
      <header className="blog-hero">
        <div className="blog-hero__inner">
          <p className="eyebrow">Blog</p>
          <h1>{post.title}</h1>
          <p className="meta home-blog-item__meta">
            <span className="meta-calendar" aria-hidden="true" />
            {formatBlogDateLabel(post.date, locale)}
            <span aria-hidden="true">•</span>
            {t.readingMinutes(readingMinutes)}
          </p>
          <Link className="blog-back" href="/blog">
            {t.backToBlog}
          </Link>
        </div>
      </header>
      <article className="blog-article">
        {post.image ? (
          <div className="blog-article__media">
            <img src={post.image} alt={post.title} />
          </div>
        ) : null}
        {post.excerpt ? <p className="lead">{post.excerpt}</p> : null}
        {normalizedBody ? (
          <div className="blog-article__body blog-markdown">
            <BlogPostMarkdown value={normalizedBody} />
          </div>
        ) : (
          <p className="blog-empty">{t.contentSoon}</p>
        )}
      </article>
    </main>
  );
}
