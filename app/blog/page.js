import Link from 'next/link';
import { getBlogPosts } from '../lib/blog';

export const metadata = {
  title: 'Blog | Marco Dal Prato'
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="blog-page">
      <header className="blog-hero">
        <div className="blog-hero__inner">
          <p className="eyebrow">Blog</p>
          <h1>Appunti e mini-post</h1>
          <p className="lead">Piccoli aggiornamenti, note tecniche e idee di lavoro.</p>
          <Link className="blog-back" href="/">
            Torna alla home
          </Link>
        </div>
      </header>
      <section className="blog-list">
        {posts.length ? (
          <div className="cards">
            {posts.map((post, index) => (
              <article key={post.slug} className="card blog-card" style={{ '--card-index': index }}>
                {post.image ? (
                  <div className="blog-card__media">
                    <img src={post.image} alt={post.title} loading="lazy" />
                  </div>
                ) : null}
                <p className="tag">{post.date}</p>
                <h2>
                  <Link className="blog-card__link" href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="detail">{post.excerpt}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="blog-empty">Nessun post pubblicato al momento.</p>
        )}
      </section>
    </main>
  );
}
