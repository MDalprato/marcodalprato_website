export default function ContactSection({ contact }) {
  return (
    <section id="contact" className="panel contact">
      <div className="panel-content">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>{contact.title}</h2>
        <p className="lead">{contact.lead}</p>
        <div className="contact-grid">
          <a href="mailto:hello@marcodalprato.dev">hello@marcodalprato.dev</a>
          <a href="https://www.linkedin.com/in/marcodalprato/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.behance.net" target="_blank" rel="noreferrer">
            Behance
          </a>
        </div>
      </div>
    </section>
  );
}
