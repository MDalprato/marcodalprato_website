'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const isInternalLink = (href) =>
  typeof href === 'string' &&
  (href.startsWith('/') || href.startsWith('#') || href.startsWith('./') || href.startsWith('../'));

const markdownComponents = {
  a: ({ node, href, children, ...props }) => {
    void node;

    if (!href) {
      return <span>{children}</span>;
    }

    if (isInternalLink(href)) {
      return (
        <Link className="blog-markdown__link" href={href} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a
        {...props}
        className="blog-markdown__link"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
  },
  img: ({ node, src, alt, title }) => {
    void node;

    if (!src) {
      return null;
    }

    return (
      <figure className="blog-article__media">
        <img src={src} alt={alt || ''} loading="lazy" />
        {title ? <figcaption className="meta">{title}</figcaption> : null}
      </figure>
    );
  }
};

export default function BlogPostMarkdown({ value }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
      {value}
    </ReactMarkdown>
  );
}
