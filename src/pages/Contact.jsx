import { useEffect, useState } from 'react';
import { Instagram, Linkedin, Camera } from 'lucide-react';

const FORMSUBMIT_ACTION = 'https://formsubmit.co/juliaalves3107@gmail.com';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [status, setStatus] = useState('idle');

  return (
    <main className="page-contact">
      <section className="page-hero reveal-up">
        <div className="container">
          <h1 className="page-title">Contact me</h1>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container contact-layout">
          <div className="contact-social-block reveal-up stagger-1">
            <h2 className="contact-block-title">Redes</h2>
            <div className="contact-social-icons">
              <a
                href="https://www.instagram.com/pequeno_formato_/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="Instagram"
              >
                <Instagram size={22} strokeWidth={1.5} />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.pexels.com/pt-br/@julia-alves-95407659/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="Pexels"
              >
                <Camera size={22} strokeWidth={1.5} />
                <span>Pexels</span>
              </a>
              <a
                href="https://www.linkedin.com/in/juliaalvesperes/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} strokeWidth={1.5} />
                <span>LinkedIn</span>
              </a>
            </div>
            <a className="contact-mail" href="mailto:juliaalves3107@gmail.com">
              juliaalves3107@gmail.com
            </a>
          </div>

          <div className="contact-form-card reveal-up stagger-2">
            <h2 className="contact-block-title">Mensagem</h2>
            <form
              className="contact-form"
              action={FORMSUBMIT_ACTION}
              method="POST"
              onSubmit={() => setStatus('sending')}
            >
              <input type="hidden" name="_subject" value="Novo contacto — portfolio Julia Alves" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px' }} aria-hidden />

              <label className="field">
                <span>Nome</span>
                <input type="text" name="nome" required placeholder="O teu nome" />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" name="email" required placeholder="email@exemplo.com" />
              </label>
              <label className="field">
                <span>Contacto</span>
                <input type="text" name="contacto" placeholder="Telemóvel ou outro contacto" />
              </label>
              <label className="field">
                <span>Mensagem</span>
                <textarea name="mensagem" rows={5} required placeholder="Escreve a tua mensagem…" />
              </label>

              <button type="submit" className="btn-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'A enviar…' : 'Enviar'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
