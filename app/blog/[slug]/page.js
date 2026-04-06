import Link from 'next/link';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPostBySlug, getBlogPosts } from '../../lib/blog';
import { siteConfig } from '../../lib/site';
import HeaderMenu from '../../components/HeaderMenu';
import SiteFooter from '../../components/SiteFooter';

const normalizeBody = (body) => {
  if (Array.isArray(body)) {
    return body.filter((item) => typeof item === 'string' && item.trim().length).join('\n\n');
  }
  if (typeof body === 'string') {
    return body.trim();
  }
  return '';
};

const countWords = (value) => {
  if (Array.isArray(value)) {
    return value
      .join(' ')
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
  }

  if (typeof value !== 'string') {
    return 0;
  }

  return value.trim().split(/\s+/).filter(Boolean).length;
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

const isInternalLink = (href) =>
  typeof href === 'string' &&
  (href.startsWith('/') || href.startsWith('#') || href.startsWith('./') || href.startsWith('../'));

const markdownComponents = {
  a: ({ node, href, children, ...props }) => {
    void node;

    if (!href) {
      return <span>{children}</span>;
    }

    if (isInternalLink(href)) {
      return (
        <Link className="blog-markdown__link" href={href} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a
        {...props}
        className="blog-markdown__link"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
  },
  img: ({ node, src, alt, title }) => {
    void node;

    if (!src) {
      return null;
    }

    return (
      <figure className="blog-article__media">
        <img src={src} alt={alt || ''} loading="lazy" />
        {title ? <figcaption className="meta">{title}</figcaption> : null}
      </figure>
    );
  }
};

export async function generateMetadata({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post non trovato | Marco Dal Prato' };
  }
  const title = `${post.title} | Marco Dal Prato`;
  const description = post.excerpt || siteConfig.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}/`
    },
    openGraph: {
      title,
      description,
      url: `/blog/${post.slug}/`,
      type: 'article'
    }
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  const normalizedBody = normalizeBody(post.body);
  const readingMinutes = Math.max(1, Math.round(countWords(post.body || post.excerpt) / 190));

  return (
    <main className="site shell site--with-footer blog-page blog-post">
      <div className="page-orb page-orb--one" data-parallax data-speed="16" />
      <div className="page-grid" aria-hidden="true" />

      <header className="site-header" data-reveal>
        <Link className="site-name" href="/">
          <span>Marco Dal Prato</span>
          <small>Full Stack Web Developer</small>
        </Link>
        <Suspense fallback={null}>
          <HeaderMenu />
        </Suspense>
      </header>

      <header className="blog-hero blog-hero--post" data-reveal>
        <div className="blog-hero__copy">
          <p className="eyebrow">Blog</p>
          <h1>{post.title}</h1>
          <p className="meta blog-card__meta">
            <span className="meta-calendar" aria-hidden="true" />
            {formatDateLabel(post.date)}
            <span aria-hidden="true">•</span>
            {readingMinutes} min read
          </p>
        </div>
        <Link className="text-link" href="/blog">
          Torna al blog
        </Link>
      </header>

      <article className="blog-article" data-reveal>
        {post.image ? (
          <div className="blog-article__media">
            <img src={post.image} alt={post.title} />
          </div>
        ) : null}
        {post.excerpt ? <p className="lead blog-article__lead">{post.excerpt}</p> : null}
        {normalizedBody ? (
          <div className="blog-article__body blog-markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {normalizedBody}
            </ReactMarkdown>
          </div>
        ) : (
          <p className="blog-empty">Contenuto in arrivo.</p>
        )}
      </article>

      <SiteFooter />
    </main>
  );
}
