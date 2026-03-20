import { getBlogPosts } from './lib/blog';
import { buildAbsoluteUrl } from './lib/site';

export default async function sitemap() {
  const posts = await getBlogPosts();
  const staticPages = [
    {
      url: buildAbsoluteUrl('/'),
      lastModified: new Date()
    },
    {
      url: buildAbsoluteUrl('/about/'),
      lastModified: new Date()
    },
    {
      url: buildAbsoluteUrl('/blog/'),
      lastModified: new Date()
    }
  ];

  const blogPages = posts.map((post) => ({
    url: buildAbsoluteUrl(`/blog/${post.slug}/`),
    lastModified: post.date ? new Date(post.date) : new Date()
  }));

  return [...staticPages, ...blogPages];
}
