const links = [
  {
    label: 'Email',
    text: 'marcodalprato@icloud.com',
    href: 'mailto:marcodalprato@icloud.com',
    icon: function MailIcon() {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Zm0 2.1 8 4.6 8-4.6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      );
    }
  },
  {
    label: 'LinkedIn',
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/marcodalprato/',
    external: true,
    icon: function LinkedInIcon() {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M6.6 9.4V18M6.6 6.2v.1M10.3 18v-4.6c0-2.4 3.2-2.6 3.2 0V18M17.2 18v-4.6c0-4.3-5.2-4.2-6.9-2.1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      );
    }
  },
  {
    label: 'GitHub',
    text: 'GitHub',
    href: 'https://github.com/MDalprato',
    external: true,
    icon: function GitHubIcon() {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M9 19.5c-3 .9-3-1.4-4.5-1.8M13.5 22v-3.1c0-.9-.3-1.5-.8-1.9 2.7-.3 5.5-1.3 5.5-6a4.7 4.7 0 0 0-1.3-3.2 4.4 4.4 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.3 11.3 0 0 0-6 0C5.2 4.3 4.2 4.6 4.2 4.6a4.4 4.4 0 0 0-.1 3.2 4.7 4.7 0 0 0-1.3 3.2c0 4.7 2.8 5.7 5.5 6-.5.4-.8 1.1-.8 2.2V22"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      );
    }
  },
  {
    label: 'Instagram',
    text: 'Instagram',
    href: 'https://www.instagram.com/mdalprato/',
    external: true,
    icon: function InstagramIcon() {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle
            cx="12"
            cy="12"
            r="3.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      );
    }
  }
];

export default function SocialLinks({ showText = true }) {
  return (
    <>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            className={`social-link${showText ? '' : ' icon-only'}`}
            href={link.href}
            aria-label={link.label}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            <Icon />
            <span className="social-link__label">{link.text}</span>
          </a>
        );
      })}
    </>
  );
}
