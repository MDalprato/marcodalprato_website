export default function CvSection({ cv }) {
  return (
    <section id="cv" className="panel">
      <div className="panel-content split">
        <div>
          <p className="eyebrow">{cv.eyebrow}</p>
          <h2>{cv.title}</h2>
          <p className="lead">{cv.lead}</p>
        </div>
        <a className="button" href="/assets/cv/cv.pdf">
          {cv.cta}
        </a>
      </div>
    </section>
  );
}
