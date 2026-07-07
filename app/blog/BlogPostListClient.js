'use client';

import Link from 'next/link';
import { useDeferredValue, useEffect, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import BlogPostMarkdown from './BlogPostMarkdown';
import { formatBlogDateLabel } from '../lib/blogDate';
import { useLocale } from '../components/LocaleProvider';

const matchesQuery = (post, query) =>
  [post.title, post.excerpt, post.body, post.slug].join(' ').toLowerCase().includes(query);

export default function BlogPostListClient({ posts }) {
  const { locale, messages } = useLocale();
  const t = messages.blog;
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawQuery = (searchParams.get('q') || '').trim();
  const activeSlug = (searchParams.get('post') || '').trim();
  const normalizedQuery = rawQuery.toLowerCase();
  const deferredQuery = useDeferredValue(normalizedQuery);
  const visiblePosts = useMemo(
    () => (deferredQuery ? posts.filter((post) => matchesQuery(post, deferredQuery)) : posts),
    [posts, deferredQuery]
  );
  const activePost = useMemo(
    () => posts.find((post) => post.slug === activeSlug) || null,
    [posts, activeSlug]
  );

  useEffect(() => {
    if (!activePost) {
      document.body.style.removeProperty('overflow');
      return undefined;
    }

    document.body.style.setProperty('overflow', 'hidden');

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        const nextParams = new URLSearchParams(searchParams.toString());
        nextParams.delete('post');
        router.push(nextParams.toString() ? `${pathname}?${nextParams.toString()}` : pathname, {
          scroll: false
        });
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.removeProperty('overflow');
      window.removeEventListener('keydown', handleEscape);
    };
  }, [activePost, pathname, router, searchParams]);

  const openPost = (slug) => {
    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.set('post', slug);
    router.push(`${pathname}?${nextParams.toString()}`, { scroll: false });
  };

  const closePost = () => {
    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete('post');
    router.push(nextParams.toString() ? `${pathname}?${nextParams.toString()}` : pathname, {
      scroll: false
    });
  };

  if (!visiblePosts.length) {
    return <p className="blog-empty">{t.noResults(rawQuery)}</p>;
  }

  return (
    <>
      <div className="blog-stream">
        {visiblePosts.map((post) => (
          <article
            key={post.slug}
            className={`blog-card${activeSlug === post.slug ? ' is-expanded' : ''}`}
          >
            <button
              type="button"
              className="blog-card__toggle"
              aria-haspopup="dialog"
              aria-expanded={activeSlug === post.slug}
              onClick={() => openPost(post.slug)}
            >
              <div className="blog-card__content">
                <p className="meta home-blog-item__meta">
                  <span className="meta-calendar" aria-hidden="true" />
                  {formatBlogDateLabel(post.date, locale)}
                  <span aria-hidden="true">•</span>
                  {t.readingMinutes(post.readingMinutes)}
                </p>
                <h2>{post.title}</h2>
                <p className="home-blog-desc">{post.excerpt || t.fallbackExcerpt}</p>
                <span className="blog-card__cta">{t.expand}</span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {activePost ? (
        <div
          className="blog-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-modal-title"
          onClick={closePost}
        >
          <div className="blog-modal__panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="blog-modal__close" onClick={closePost}>
              {t.collapse}
            </button>
            <div className="blog-modal__body">
              <p className="meta home-blog-item__meta">
                <span className="meta-calendar" aria-hidden="true" />
                {formatBlogDateLabel(activePost.date, locale)}
                <span aria-hidden="true">•</span>
                {t.readingMinutes(activePost.readingMinutes)}
              </p>
              <h2 id="blog-modal-title" className="blog-modal__title">
                {activePost.title}
              </h2>
              {activePost.excerpt ? <p className="lead">{activePost.excerpt}</p> : null}
              <div className="blog-markdown">
                <BlogPostMarkdown value={activePost.body || ''} />
              </div>
              <div className="blog-modal__actions">
                <Link className="blog-card__link" href={`/blog/${activePost.slug}`}>
                  {t.openDedicated}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
