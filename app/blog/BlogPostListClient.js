'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

const matchesQuery = (post, query) =>
  [post.title, post.excerpt, post.body, post.slug].join(' ').toLowerCase().includes(query);

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

export default function BlogPostListClient({ posts }) {
  const searchParams = useSearchParams();
  const rawQuery = (searchParams.get('q') || '').trim();
  const normalizedQuery = rawQuery.toLowerCase();
  const visiblePosts = useMemo(
    () => (normalizedQuery ? posts.filter((post) => matchesQuery(post, normalizedQuery)) : posts),
    [posts, normalizedQuery]
  );

  if (!visiblePosts.length) {
    return <p className="blog-empty">Nessun post trovato per "{rawQuery}".</p>;
  }

  return (
    <div className="posts-grid">
      {visiblePosts.map((post, index) => (
        <article
          key={post.slug}
          className="blog-card"
          data-reveal
          data-reveal-once="false"
          style={{ '--delay': `${80 + index * 50}ms` }}
        >
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
  );
}
