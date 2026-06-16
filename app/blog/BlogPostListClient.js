'use client';

import Link from 'next/link';
import { useDeferredValue, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BlogPostMarkdown from './BlogPostMarkdown';
import { formatBlogDateLabel } from '../lib/blogDate';
import { useLocale } from '../components/LocaleProvider';

const matchesQuery = (post, query) =>
  [post.title, post.excerpt, post.body, post.slug].join(' ').toLowerCase().includes(query);

export default function BlogPostListClient({ posts }) {
  const { locale, messages } = useLocale();
  const t = messages.blog;
  const searchParams = useSearchParams();
  const rawQuery = (searchParams.get('q') || '').trim();
  const normalizedQuery = rawQuery.toLowerCase();
  const deferredQuery = useDeferredValue(normalizedQuery);
  const [expandedSlug, setExpandedSlug] = useState(posts[0]?.slug || null);
  const visiblePosts = useMemo(
    () => (deferredQuery ? posts.filter((post) => matchesQuery(post, deferredQuery)) : posts),
    [posts, deferredQuery]
  );

  if (!visiblePosts.length) {
    return <p className="blog-empty">{t.noResults(rawQuery)}</p>;
  }

  return (
    <div className="blog-stream">
      {visiblePosts.map((post) => (
        <article
          key={post.slug}
          className={`blog-card${expandedSlug === post.slug ? ' is-expanded' : ''}`}
        >
          <button
            type="button"
            className="blog-card__toggle"
            aria-expanded={expandedSlug === post.slug}
            onClick={() => setExpandedSlug((current) => (current === post.slug ? null : post.slug))}
          >
            <div className="blog-card__media">
              <img src={post.image} alt={post.title} loading="lazy" />
            </div>
            <div className="blog-card__content">
              <p className="meta home-blog-item__meta">
                <span className="meta-calendar" aria-hidden="true" />
                {formatBlogDateLabel(post.date, locale)}
                <span aria-hidden="true">•</span>
                {t.readingMinutes(post.readingMinutes)}
              </p>
              <h2>{post.title}</h2>
              <p className="home-blog-desc">{post.excerpt || t.fallbackExcerpt}</p>
              <span className="blog-card__cta">
                {expandedSlug === post.slug ? t.collapse : t.expand}
              </span>
            </div>
          </button>
          {expandedSlug === post.slug ? (
            <div className="blog-card__expanded">
              <div className="blog-markdown">
                <BlogPostMarkdown value={post.body || ''} />
              </div>
              <Link className="blog-card__link" href={`/blog/${post.slug}`}>
                {t.openDedicated}
              </Link>
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
