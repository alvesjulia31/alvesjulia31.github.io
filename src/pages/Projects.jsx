import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bagoeiraImages, ordinarioImages } from '../data/projectAssets';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coverBagoeira = bagoeiraImages[0] ?? ordinarioImages[0] ?? null;
  const coverOrdinario = ordinarioImages[0] ?? null;

  return (
    <main className="page-projects">
      <section className="page-hero reveal-up">
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h1 className="page-title">projects</h1>
          <p className="page-lead">
            Press to view more...
          </p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="project-pair-grid">
            <Link to="/projects/bagoeira" className="project-hero-card reveal-up stagger-1">
              <div className="project-hero-card__media">
                {coverBagoeira ? (
                  <img src={coverBagoeira} alt="" />
                ) : (
                  <div className="project-hero-card__placeholder">Bagoeira</div>
                )}
                <div className="project-hero-card__shine" aria-hidden />
              </div>
              <div className="project-hero-card__meta">
                <h2>Bagoeira</h2>
                <span className="project-hero-card__cta">See more →</span>
              </div>
            </Link>

            <Link to="/projects/ordinario" className="project-hero-card reveal-up stagger-2">
              <div className="project-hero-card__media">
                {coverOrdinario ? (
                  <img src={coverOrdinario} alt="" />
                ) : (
                  <div className="project-hero-card__placeholder">Ordinário</div>
                )}
                <div className="project-hero-card__shine" aria-hidden />
              </div>
              <div className="project-hero-card__meta">
                <h2>Ordinário</h2>
                <span className="project-hero-card__cta">See more →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
