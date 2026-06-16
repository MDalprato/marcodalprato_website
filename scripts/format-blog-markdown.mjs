import { promises as fs } from 'fs';
import path from 'path';
import { formatBlogMarkdownBody } from './blog-formatting.mjs';

const blogDir = path.join(process.cwd(), 'content', 'blog');

const parseMarkdownFile = (raw) => {
  const match = raw.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/);
  if (!match) {
    return { frontmatter: {}, body: raw.trim() };
  }

  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');
    data[key] = value;
  }

  return {
    frontmatter: data,
    body: raw.slice(match[0].length).trim()
  };
};

const run = async () => {
  const entries = await fs.readdir(blogDir);
  const files = entries.filter((entry) => entry.endsWith('.md'));

  for (const file of files) {
    const filePath = path.join(blogDir, file);
    const raw = await fs.readFile(filePath, 'utf8');
    const { frontmatter, body } = parseMarkdownFile(raw);
    const formattedBody = formatBlogMarkdownBody(frontmatter, body);
    const next = `${raw.match(/^---\s*\r?\n[\s\S]*?\r?\n---\s*\r?\n?/)[0]}${formattedBody}\n`;
    await fs.writeFile(filePath, next, 'utf8');
  }

  console.log(`Formatted ${files.length} markdown blog posts.`);
};

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
