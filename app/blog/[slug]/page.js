import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '../../lib/blog';
import { getBlogPosts } from '../../lib/blog';
import { siteConfig } from '../../lib/site';
import BlogPostPageClient from '../BlogPostPageClient';

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
    <BlogPostPageClient
      post={post}
      normalizedBody={normalizedBody}
      readingMinutes={readingMinutes}
    />
  );
}
