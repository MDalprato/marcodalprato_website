import GitHubActivity from '../components/GitHubActivity';

export const metadata = {
  title: 'About | Marco Dal Prato'
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="section about-intro">
        <h1>About</h1>
        <div className="about-grid">
          <img className="about-photo" src="/assets/images/mac.jpg" alt="Marco Dal Prato workspace" />
          <div className="about-copy">
            <p>Deep in vibe-coding mode, testing shiny web tech and practical product ideas.</p>
            <p>After years building software, modern web feels like the right place to move fast.</p>
            <p>I split my time between engineering, writing notes, and shipping side experiments.</p>
            <p>I&apos;m open to new collaborations where product and code quality both matter.</p>
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
