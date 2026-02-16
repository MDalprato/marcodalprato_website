import SocialLinks from './SocialLinks';
import CollapseTrigger from './CollapseTrigger';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-social">
        <SocialLinks showText={false} />
      </div>
      <p>
        &copy; {year} Marco Dalprato. All rights reserved. Built with Next.js, coffee, and
        occasional <CollapseTrigger />.
      </p>
    </footer>
  );
}
