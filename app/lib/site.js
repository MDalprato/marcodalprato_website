const DEFAULT_SITE_URL = 'http://localhost:3000';

const normalizeSiteUrl = (value) => {
  if (typeof value !== 'string' || !value.trim()) {
    return DEFAULT_SITE_URL;
  }

  return value.trim().replace(/\/+$/, '');
};

export const siteConfig = {
  name: 'Marco Dal Prato',
  title: 'Marco Dal Prato | Full Stack Web Developer',
  description:
    'Portfolio di Marco Dal Prato, full stack web developer specializzato in siti moderni, interfacce ad alto impatto e backend affidabili.',
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  locale: 'it_IT'
};

export const buildAbsoluteUrl = (path = '/') => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalizedPath}`;
};
