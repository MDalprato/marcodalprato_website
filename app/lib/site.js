const DEFAULT_SITE_URL = 'http://localhost:3000';

const normalizeSiteUrl = (value) => {
  if (typeof value !== 'string' || !value.trim()) {
    return DEFAULT_SITE_URL;
  }

  return value.trim().replace(/\/+$/, '');
};

export const siteConfig = {
  name: 'Marco Dal Prato',
  title: 'Marco Dal Prato | Sviluppatore Web JavaScript',
  description:
    'Portfolio di Marco Dal Prato, sviluppatore web JavaScript specializzato in esperienze web moderne, performanti e accessibili.',
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  locale: 'it_IT'
};

export const buildAbsoluteUrl = (path = '/') => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
};
