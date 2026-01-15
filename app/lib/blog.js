import { promises as fs } from 'fs';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

const parseDate = (value) => {
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
};

const normalizePost = (data, filename) => ({
  slug: data.slug || filename.replace(/\.json$/, ''),
  title: data.title || 'Untitled',
  date: data.date || '',
  excerpt: data.excerpt || '',
  image: data.image || '',
  body: data.body || data.content || ''
});

export const getBlogPosts = async () => {
  try {
    const entries = await fs.readdir(BLOG_DIR);
    const jsonFiles = entries.filter((name) => name.endsWith('.json'));
    const posts = await Promise.all(
      jsonFiles.map(async (name) => {
        const filePath = path.join(BLOG_DIR, name);
        const raw = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(raw);
        return normalizePost(data, name);
      })
    );

    posts.sort((a, b) => parseDate(b.date) - parseDate(a.date));
    return posts;
  } catch (error) {
    if (error && error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
};

export const getBlogPostBySlug = async (slug) => {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
};
