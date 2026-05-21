import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { aboutImages } from '../data/projectAssets';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [primary, secondary] =
    aboutImages.length >= 2 ? aboutImages : [aboutImages[0], aboutImages[0]];

  return (
    <main className="page-about">
      <section className="about-hero">
        <div className="about-hero__bg" aria-hidden />
        <div className="container about-hero__inner">
          <div className="about-copy reveal-up">
            <p className="eyebrow">About me</p>
            <p className="page-lead about-copy__text">
                Hi! I’m Julia Alves, a Brazilian creative based in Portugal for the past 8 years. I’m currently studying Audiovisual Design, while exploring my passion for visual storytelling through photography, video and digital content.

                My creative path began with photography, which shaped the way I observe details, light and composition. Over time, that visual sensitivity naturally expanded into video and editing, where I enjoy combining aesthetics, rhythm and narrative to create meaningful visual experiences.

                Through my work, I’m constantly learning, experimenting and refining my creative voice across different visual formats.
                <br />
                <br />

            </p>
            <Link to="/contacto" className="btn-outline reveal-up stagger-1">
              Contactar
            </Link>
          </div>

          <div className="about-visual">
            {primary ? (
              <>
                <figure className="about-float about-float--a float-y">
                  <img src={primary} alt="Julia Alves" />
                </figure>
                {secondary && (
                  <figure className="about-float about-float--b float-y-delayed">
                    <img src={secondary} alt="" />
                  </figure>
                )}
                <div className="about-orbit" />
              </>
            ) : (
              <p className="about-visual__empty">Adiciona fotos em assets/images/AboutMe</p>
            )}
          </div>
        </div>
      </section>

      {aboutImages.length > 0 && (
        <section className="section about-strip">
          <div className="container">
            <div className="about-marquee" aria-hidden>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default About;
