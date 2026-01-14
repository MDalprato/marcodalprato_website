export default function PortfolioSection({ portfolio }) {
  return (
    <section id="portfolio" className="panel" data-anim="left">
      <div className="panel-content">
        <p className="eyebrow">{portfolio.eyebrow}</p>
        <h2>{portfolio.title}</h2>
        <div className="cards">
          {portfolio.items.map((item, index) => (
            <article key={item.role} className="card" style={{ '--card-index': index }}>
              <p className="tag">{item.time}</p>
              <h3>{item.role}</h3>
              <p className="company">{item.company}</p>
              <p className="detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
