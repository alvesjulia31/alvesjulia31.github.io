import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { bagoeiraImages, ordinarioImages } from '../data/projectAssets';

const PROJECTS = {
  bagoeira: {
    title: 'Bagoeira',
    description:
      'Série em Bagoeira — paisagem, luz e silêncio. (Se não vês fotos, exporta JPG ou PNG para `assets/images/Bagoeira`; ficheiros .dng não abrem no browser.)',
    images: bagoeiraImages,
  },
  ordinario: {
    title: 'Ordinário',
    description: 'Coleção Ordinário — imagens em formato NFT / série editorial.',
    images: ordinarioImages,
  },
};

const ProjectTemplate = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = PROJECTS[id];

  if (!project) {
    return (
      <div className="container not-found reveal-up">
        <h2>Projeto não encontrado</h2>
        <Link to="/projects" className="btn-outline">
          Voltar aos projects
        </Link>
      </div>
    );
  }

  const hasImages = project.images.length > 0;

  return (
    <main className="page-project">
      <section className="page-hero reveal-up">
        <div className="container">
          <Link to="/projects" className="back-link">
            ← projects
          </Link>
          <h1 className="page-title">{project.title}</h1>
          <p className="page-lead">{project.description}</p>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          {!hasImages && (
            <div className="empty-gallery reveal-up">
              <p>
                Ainda não há imagens JPG/PNG nesta pasta. Adiciona ficheiros em{' '}
                <code>assets/images/{id === 'bagoeira' ? 'Bagoeira' : 'Ordinário'}</code> e volta a
                fazer <code>npm run build</code>.
              </p>
            </div>
          )}
          {hasImages && (
            <div className="masonry-grid masonry-grid--animated">
              {project.images.map((img, index) => (
                <div
                  key={img}
                  className="masonry-item reveal-up"
                  style={{ transitionDelay: `${Math.min(index, 12) * 0.05}s` }}
                >
                  <img src={img} alt={`${project.title} ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProjectTemplate;
