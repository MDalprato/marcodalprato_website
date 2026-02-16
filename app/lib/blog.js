import { promises as fs } from 'fs';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

const parseDate = (value) => {
  const parsed = Date.parse(value);
  return Number.isNaN(parsed) ? 0 : parsed;
};

const countWords = (value) => {
  const normalized = Array.isArray(value)
    ? value.join(' ')
    : typeof value === 'string'
      ? value
      : '';

  if (!normalized.trim()) {
    return 0;
  }

  const textOnly = normalized
    .replace(/!\[[^\]]*]\([^)]+\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[`*_>#-]/g, ' ');

  return textOnly.trim().split(/\s+/).filter(Boolean).length;
};

const unquote = (value) => {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
};

const parseMarkdownFile = (raw) => {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) {
    return { data: {}, body: raw.trim() };
  }

  const frontmatter = match[1];
  const body = raw.slice(match[0].length).trim();
  const data = {};

  for (const line of frontmatter.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) {
      continue;
    }

    const separatorIndex = trimmed.indexOf(':');
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    data[key] = unquote(value);
  }

  return { data, body };
};

const normalizePost = (data, filename) => ({
  slug: data.slug || filename.replace(/\.md$/, ''),
  title: data.title || 'Untitled',
  date: data.date || '',
  excerpt: data.excerpt || '',
  image: data.image || '',
  body: data.body || data.content || '',
  readingMinutes: Math.max(1, Math.round(countWords(data.body || data.content || data.excerpt) / 190))
});

export const getBlogPosts = async () => {
  try {
    const entries = await fs.readdir(BLOG_DIR);
    const markdownFiles = entries.filter((name) => name.endsWith('.md'));
    const posts = await Promise.all(
      markdownFiles.map(async (name) => {
        const filePath = path.join(BLOG_DIR, name);
        const raw = await fs.readFile(filePath, 'utf8');
        const { data: frontmatter, body } = parseMarkdownFile(raw);
        return normalizePost({ ...frontmatter, body }, name);
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
