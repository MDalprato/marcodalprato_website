export default function HeroSection({ hero }) {
  return (
    <section id="about" className="panel hero">
      <div className="panel-content hero-grid">
        <div className="hero-media">
          <img className="hero-portrait" src="/assets/images/picture.avif" alt="Marco Dalprato" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="typewriter">{hero.title}</h1>
          <p className="lead">{hero.lead}</p>
        </div>
      </div>
    </section>
  );
}
