import { promises as fs } from 'fs';
import path from 'path';
import { formatBlogMarkdownBody } from './blog-formatting.mjs';

const sourceDir = path.join(process.cwd(), 'public', 'blog');
const targetDir = path.join(process.cwd(), 'content', 'blog');

const imageCatalog = {
  city:
    'https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=1600&q=80',
  apple:
    'https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?auto=format&fit=crop&w=1600&q=80',
  code:
    'https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?auto=format&fit=crop&w=1600&q=80',
  cinema:
    'https://images.unsplash.com/photo-1548095115-45697e222a58?auto=format&fit=crop&w=1600&q=80',
  writing:
    'https://images.unsplash.com/photo-1761322572550-967ea8c0bfd9?auto=format&fit=crop&w=1600&q=80'
};

const keywordGroups = [
  {
    image: imageCatalog.apple,
    keywords: [
      'apple',
      'iphone',
      'ipad',
      'mac',
      'itunes',
      'airplay',
      'airport',
      'beats',
      'thunderbolt',
      'watch'
    ]
  },
  {
    image: imageCatalog.code,
    keywords: [
      'php',
      'mysql',
      'web',
      'internet',
      'html',
      'backup',
      'time machine',
      'wifi',
      'cloud',
      'domotica',
      'app'
    ]
  },
  {
    image: imageCatalog.cinema,
    keywords: [
      'netflix',
      'film',
      'movie',
      'telefilm',
      'serie',
      'breaking bad',
      'cinema',
      'tv'
    ]
  },
  {
    image: imageCatalog.city,
    keywords: [
      'new york',
      'nyc',
      'starbucks',
      'america',
      'manhattan',
      'brooklyn',
      'empire state',
      'states'
    ]
  }
];

const escapeYaml = (value) => JSON.stringify(value ?? '');

const trimParagraph = (value) =>
  value
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim();

const paragraphsFromBody = (rawBody) => {
  const lines = rawBody
    .replace(/\r/g, '')
    .replace(/\u00a0/g, ' ')
    .split('\n')
    .map((line) => line.trim())
    .filter((line, index, list) => !(line === '' && list[index - 1] === ''));

  const paragraphs = [];
  let buffer = [];

  const pushBuffer = () => {
    if (!buffer.length) {
      return;
    }

    const paragraph = trimParagraph(buffer.join(' '));
    if (paragraph) {
      paragraphs.push(paragraph);
    }
    buffer = [];
  };

  for (const line of lines) {
    if (!line || /^[-–—]+$/.test(line)) {
      pushBuffer();
      continue;
    }

    buffer.push(line);
  }

  pushBuffer();
  return paragraphs;
};

const excerptFromParagraphs = (paragraphs) => {
  const firstParagraph = paragraphs[0] || '';
  if (firstParagraph.length <= 180) {
    return firstParagraph;
  }

  const shortened = firstParagraph.slice(0, 177).trim().replace(/\s+\S*$/, '');
  return `${shortened.replace(/[.,;:!?-]*$/, '')}...`;
};

const pickImage = ({ title, body, slug }) => {
  const haystack = `${title} ${body} ${slug}`.toLowerCase();
  const match = keywordGroups.find((group) =>
    group.keywords.some((keyword) => haystack.includes(keyword))
  );

  return match?.image || imageCatalog.writing;
};

const parsePost = (filename, raw) => {
  const cleaned = raw.replace(/^\uFEFF/, '').trim();
  const [headerLine = '', ...rest] = cleaned.split(/\r?\n/);
  const headerMatch = headerLine.match(/^(\d{2})\/(\d{2})\/(\d{4})\s*-\s*(.+)$/);

  if (!headerMatch) {
    throw new Error(`Header non valido per ${filename}`);
  }

  const [, day, month, year, title] = headerMatch;
  const slug = filename.replace(/\.txt$/, '');
  const date = `${year}-${month}-${day}`;
  const paragraphs = paragraphsFromBody(rest.join('\n'));
  const body = paragraphs.join('\n\n');
  const excerpt = excerptFromParagraphs(paragraphs);

  return {
    slug,
    title: title.trim(),
    date,
    excerpt,
    image: pickImage({ title, body, slug }),
    body
  };
};

const toMarkdown = (post) => `---
title: ${escapeYaml(post.title)}
date: ${escapeYaml(post.date)}
slug: ${escapeYaml(post.slug)}
excerpt: ${escapeYaml(post.excerpt)}
image: ${escapeYaml(post.image)}
---

${formatBlogMarkdownBody(post, post.body)}
`;

const run = async () => {
  await fs.mkdir(targetDir, { recursive: true });
  const entries = await fs.readdir(sourceDir);
  const files = entries.filter((entry) => entry.endsWith('.txt')).sort();

  for (const filename of files) {
    const sourcePath = path.join(sourceDir, filename);
    const raw = await fs.readFile(sourcePath, 'utf8');
    const post = parsePost(filename, raw);
    const targetPath = path.join(targetDir, `${post.slug}.md`);
    await fs.writeFile(targetPath, toMarkdown(post), 'utf8');
  }

  console.log(`Imported ${files.length} blog posts into ${path.relative(process.cwd(), targetDir)}`);
};

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
