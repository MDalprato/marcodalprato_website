import SocialLinks from './SocialLinks';
import CollapseTrigger from './CollapseTrigger';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" data-reveal>
      <div className="footer-social">
        <SocialLinks showText={false} />
      </div>
      <p>
        &copy; {year} Marco Dal Prato. Full stack web developer focused on product craft,
        resilient backend architecture e shipping veloce.
      </p>
      <p className="site-footer__note">
        Built with Next.js, motion detail e occasional <CollapseTrigger />.
      </p>
    </footer>
  );
}
