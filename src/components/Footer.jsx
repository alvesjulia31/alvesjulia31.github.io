import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Camera } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer">
      <Link to="/" className="footer-logo">
        JA.
      </Link>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/sobre">About</Link>
        <Link to="/contacto">Contact me</Link>
      </div>

      <div className="social-links">
        <a
          href="https://www.instagram.com/pequeno_formato_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram size={20} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.pexels.com/pt-br/@julia-alves-95407659/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pexels"
        >
          <Camera size={20} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/juliaalvesperes/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} strokeWidth={1.5} />
        </a>
      </div>

      <button type="button" onClick={scrollToTop} className="back-to-top">
        ↑ Back to Top
      </button>

      <p className="copyright">&copy; {new Date().getFullYear()} Julia Alves. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
