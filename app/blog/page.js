import { getBlogPosts } from '../lib/blog';
import BlogPageClient from './BlogPageClient';
import { siteConfig } from '../lib/site';

export const metadata = {
  title: 'Blog | Marco Dal Prato',
  description: siteConfig.description,
  alternates: {
    canonical: '/blog/'
  },
  openGraph: {
    title: 'Blog | Marco Dal Prato',
    description: siteConfig.description,
    url: '/blog/'
  }
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return <BlogPageClient posts={posts} />;
}
