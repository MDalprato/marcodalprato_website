'use client';

import GitHubActivity from '../components/GitHubActivity';
import { useLocale } from '../components/LocaleProvider';

export default function AboutPageClient() {
  const { messages } = useLocale();
  const t = messages.about;

  return (
    <main className="about-page">
      <section className="section about-intro">
        <h1>{t.title}</h1>
        <div className="about-grid">
          <img className="about-photo" src="/assets/images/about-me.jpeg" alt="Marco Dal Prato" />
          <div className="about-copy">
            {t.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <a
                className="about-inline-link"
                href="https://github.com/MDalprato"
                target="_blank"
                rel="noreferrer"
              >
                {t.githubLink}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section about-activity">
        <h2>{t.activityTitle}</h2>
        <GitHubActivity username="MDalprato" />
        <p className="about-note">{t.activityNote1}</p>
        <p className="about-note">{t.activityNote2}</p>
      </section>
    </main>
  );
}
