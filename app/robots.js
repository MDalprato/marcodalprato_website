import { buildAbsoluteUrl } from './lib/site';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    sitemap: buildAbsoluteUrl('/sitemap.xml'),
    host: buildAbsoluteUrl('/')
  };
}
