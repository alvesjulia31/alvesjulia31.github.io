import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { allProjectImages, shuffle } from '../data/projectAssets';

const PLACEHOLDER =
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=70';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mosaic = useMemo(() => {
    const pool = allProjectImages();
    if (pool.length === 0) {
      return Array.from({ length: 9 }, () => PLACEHOLDER);
    }
    const shuffled = shuffle(pool);
    const count = Math.min(14, Math.max(8, shuffled.length));
    const picked = shuffled.slice(0, count);
    while (picked.length < count) {
      picked.push(...shuffle(pool).slice(0, count - picked.length));
    }
    return picked.slice(0, count);
  }, []);

  return (
    <main className="page-home">
      <section className="home-hero">
        <div className="home-hero__noise" aria-hidden />
        <div className="container home-hero__grid">
          <div className="home-hero__intro reveal-up">
            <p className="eyebrow">Portfolio</p>
            <h1>JULIA ALVES</h1>
            <p className="home-lead">
                Hello! I'm Julia Alves, currently pursuing a Bachelor's degree in Audiovisual. This webpage serves as a vibrant tapestry of my creative journey, where I showcase my passion for visual storytelling, innovative projects, and a diverse skillset.
            </p>
            <div className="home-hero__actions">
              <Link to="/projects" className="btn-primary reveal-up stagger-1">
                See Projects
              </Link>
              <Link to="/sobre" className="btn-outline reveal-up stagger-2">
                About me
              </Link>
            </div>
          </div>

          <div className="home-mosaic" aria-hidden>
            {mosaic.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className={`home-mosaic__cell home-mosaic__cell--${(i % 6) + 1}`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <img src={src} alt="" loading={i > 4 ? 'lazy' : 'eager'} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section home-cta-band reveal-up">
        <div className="container home-cta-band__inner">
          <p className="home-cta-band__text">
          </p>

        </div>
      </section>
    </main>
  );
};

export default Home;
