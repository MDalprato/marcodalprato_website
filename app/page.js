import content from './content';
import Link from 'next/link';
import { getBlogPosts } from './lib/blog';

export default async function Home() {
  const t = content.it;
  const posts = await getBlogPosts();
  const year = new Date().getFullYear();

  return (
    <main id="top" className="site">
      <header className="site-header">
        <a className="site-name" href="#top">
          Marco Dalprato
        </a>
        <nav className="site-nav" aria-label="Main">
          <a href="#about">About</a>
          <a href="#blog-home">Blog</a>
          <a href="/blog">Blog</a>
        </nav>
      </header>

      <section id="about" className="section intro">
        <div className="intro-head">
          <img className="intro-portrait" src="/assets/images/picture.avif" alt="Marco Dalprato" />
          <h1>Marco Dalprato</h1>
        </div>
        <p>
          Full-stack developer crafting clean interfaces and resilient backends.
          <br />
          I turn complex ideas into fast, scalable products people actually enjoy using.
        </p>
      </section>

      <section id="blog-home" className="section">
        <h2>{t.blog.title}</h2>
        {posts.length ? (
          <div className="home-blog-list">
            {posts.map((post) => (
              <article key={post.slug} className="home-blog-item">
                <p className="meta">{post.date}</p>
                <h3>
                  <Link className="blog-card__link" href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="home-blog-desc">{post.excerpt || 'Descrizione in arrivo.'}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="blog-empty">{t.blog.empty}</p>
        )}
      </section>

      <section className="section hashtags-section">
        <ul className="hashtags-list" aria-label={t.tech.listLabel}>
          {t.tech.items.map((item) => (
            <li key={item.label}>#{item.label.replaceAll('.', '').replaceAll(' ', '').toLowerCase()}</li>
          ))}
        </ul>
      </section>

      <footer className="site-footer">
        <p>
          &copy; {year} Marco Dalprato. {t.footer.copyright}
        </p>
      </footer>
    </main>
  );
}
