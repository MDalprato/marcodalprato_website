export default function HeroSection({ hero }) {
  return (
    <section id="about" className="panel hero">
      <div className="panel-content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1 className="typewriter">{hero.title}</h1>
        <p className="lead">{hero.lead}</p>
      </div>
      <div className="hero-card">
        <p className="card-title">{hero.focusTitle}</p>
        <ul>
          {hero.focusItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
