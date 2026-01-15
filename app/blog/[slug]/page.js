import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '../../lib/blog';
import { getBlogPosts } from '../../lib/blog';

const normalizeBody = (body) => {
  if (Array.isArray(body)) {
    return body.filter((item) => typeof item === 'string' && item.trim().length);
  }
  if (typeof body === 'string') {
    return body
      .split(/\n\n+/)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
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

  const paragraphs = normalizeBody(post.body);

  return (
    <main className="blog-page blog-post">
      <header className="blog-hero">
        <div className="blog-hero__inner">
          <p className="eyebrow">Blog</p>
          <h1>{post.title}</h1>
          <p className="tag">{post.date}</p>
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
        {paragraphs.length ? (
          <div className="blog-article__body">
            {paragraphs.map((paragraph, index) => (
              <p key={`${post.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p className="blog-empty">Contenuto in arrivo.</p>
        )}
      </article>
    </main>
  );
}
