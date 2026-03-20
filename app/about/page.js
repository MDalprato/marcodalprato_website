import GitHubActivity from '../components/GitHubActivity';
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
  return (
    <main className="about-page">
      <section className="section about-intro">
        <h1>About</h1>
        <div className="about-grid">
          <img className="about-photo" src="/assets/images/about-me.jpeg" alt="Marco Dal Prato" />
          <div className="about-copy">
            <p>I&apos;m in build mode most days, turning rough ideas into usable web products.</p>
            <p>
              After years in software, I care most about fast feedback loops and clean execution.
            </p>
            <p>I split my time between product engineering, technical writing, and side projects.</p>
            <p>I&apos;m open to collaborations where craft, velocity, and ownership all count.</p>
            <p>
              <a
                className="about-inline-link"
                href="https://github.com/MDalprato"
                target="_blank"
                rel="noreferrer"
              >
                Check my GitHub profile and recent repositories.
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section about-activity">
        <h2>GitHub Activity</h2>
        <GitHubActivity username="MDalprato" />
        <p className="about-note">I build what excites me and release it as open source.</p>
        <p className="about-note">
          Follow me on GitHub and see the back-story in commits, issues and releases.
        </p>
      </section>
    </main>
  );
}
