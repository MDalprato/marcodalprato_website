import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '../../lib/blog';
import { getBlogPosts } from '../../lib/blog';

const IMAGE_BLOCK_PATTERN = /^!\[([^\]]*)\]\((\S+?)(?:\s+["']([^"']+)["'])?\)$/;

const normalizeBody = (body) => {
  if (Array.isArray(body)) {
    return body.filter((item) => typeof item === 'string' && item.trim().length).join('\n\n');
  }
  if (typeof body === 'string') {
    return body.trim();
  }
  return '';
};

const parseMarkdownBlocks = (body) => {
  const normalized = normalizeBody(body);
  if (!normalized) {
    return [];
  }

  return normalized
    .split(/\n\n+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .map((block) => {
      const imageMatch = block.match(IMAGE_BLOCK_PATTERN);

      if (imageMatch) {
        return {
          type: 'image',
          alt: imageMatch[1] || '',
          src: imageMatch[2],
          caption: imageMatch[3] || ''
        };
      }

      return {
        type: 'paragraph',
        text: block.replace(/\n+/g, ' ')
      };
    });
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

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
    .format(parsedDate)
    .replace(/(\w{3}) (\d{4})$/, '$1, $2');
};

export async function generateMetadata({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: 'Post non trovato | Marco Dal Prato' };
  }
  return { title: `${post.title} | Marco Dal Prato` };
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

  const blocks = parseMarkdownBlocks(post.body);
  const readingMinutes = Math.max(1, Math.round(countWords(post.body || post.excerpt) / 190));

  return (
    <main className="blog-page blog-post">
      <header className="blog-hero">
        <div className="blog-hero__inner">
          <p className="eyebrow">Blog</p>
          <h1>{post.title}</h1>
          <p className="meta home-blog-item__meta">
            <span className="meta-calendar" aria-hidden="true" />
            {formatDateLabel(post.date)}
            <span aria-hidden="true">•</span>
            {readingMinutes} min read
          </p>
          <Link className="blog-back" href="/blog">
            Torna al blog
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
        {blocks.length ? (
          <div className="blog-article__body">
            {blocks.map((block, index) => (
              block.type === 'image' ? (
                <figure key={`${post.slug}-${index}`} className="blog-article__media">
                  <img src={block.src} alt={block.alt || post.title} loading="lazy" />
                  {block.caption ? <figcaption className="meta">{block.caption}</figcaption> : null}
                </figure>
              ) : (
                <p key={`${post.slug}-${index}`}>{block.text}</p>
              )
            ))}
          </div>
        ) : (
          <p className="blog-empty">Contenuto in arrivo.</p>
        )}
      </article>
    </main>
  );
}
