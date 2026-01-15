import SocialLinks from './SocialLinks';

export default function ContactSection({ contact }) {
  return (
    <section id="contact" className="panel contact" data-anim="tilt">
      <div className="panel-content">
        <p className="eyebrow">{contact.eyebrow}</p>
        <h2>{contact.title}</h2>
        <p className="lead">{contact.lead}</p>
        <div className="contact-grid">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
