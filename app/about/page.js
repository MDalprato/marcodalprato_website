import AboutPageClient from './AboutPageClient';
import { siteConfig } from '../lib/site';

export const metadata = {
  title: 'About | Marco Dal Prato',
  description: siteConfig.description,
  alternates: {
    canonical: '/about/'
  },
  openGraph: {
    title: 'About | Marco Dal Prato',
    description: siteConfig.description,
    url: '/about/'
  }
};

export default function AboutPage() {
  return <AboutPageClient />;
}
