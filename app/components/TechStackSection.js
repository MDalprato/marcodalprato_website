export default function TechStackSection({ tech }) {
  const items = [...tech.items, ...tech.items];
  const duration = Math.max(22, tech.items.length * 2.2);

  return (
    <section id="tech" className="panel tech" data-anim="left">
      <div className="panel-content">
        <p className="eyebrow">{tech.eyebrow}</p>
        <h2>{tech.title}</h2>
        <div className="tech-marquee" aria-hidden="true">
          <div className="tech-track" style={{ '--marquee-duration': `${duration}s` }}>
            {items.map((item, index) => (
              <div className="tech-item" key={`${item.label}-${index}`}>
                <img src={item.icon} alt="" loading="lazy" />
                <span className="sr-only">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="tech-list" aria-label={tech.listLabel}>
          {tech.items.map((item) => (
            <span className="tech-pill" key={item.label}>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
