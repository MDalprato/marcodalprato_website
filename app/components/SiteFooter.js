'use client';

import SocialLinks from './SocialLinks';
import CollapseTrigger from './CollapseTrigger';
import { useLocale } from './LocaleProvider';

export default function SiteFooter() {
  const { messages } = useLocale();
  const year = new Date().getFullYear();
  const t = messages.footer;

  return (
    <footer className="site-footer">
      <div className="footer-social">
        <SocialLinks showText={false} />
      </div>
      <p>
        &copy; {year} Marco Dalprato. {t.rights} {t.builtWith} <CollapseTrigger />.
      </p>
    </footer>
  );
}
