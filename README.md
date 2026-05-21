# Julia Alves | Fotografia & Vídeo

Portfólio em **React + Vite**: home com mosaico aleatório a partir das fotos dos projects, páginas **Bagoeira** e **Ordinário**, secção **About** com fotos em `assets/images/AboutMe`, e **Contact** com redes + formulário (FormSubmit → `juliaalves3107@gmail.com`).

## Imagens

- **`assets/images/Ordinário/`** — JPG (já incluídos no build).
- **`assets/images/Bagoeira/`** — neste momento só há ficheiros **`.dng`**, que o browser não mostra como `<img>`. Exporta **JPG ou PNG** para esta pasta para a galeria Bagoeira aparecer.
- **`assets/images/AboutMe/`** — fotos da página About.

## Formulário de contacto

O formulário em `/contacto` usa [FormSubmit](https://formsubmit.co): na **primeira submissão** costumas receber um email de ativação; confirma para começar a receber mensagens.

## Comandos

```bash
npm install
npm run dev
npm run build
```

## GitHub Pages

Descomenta e ajusta `base` em `vite.config.js` se o site não estiver na raiz do domínio. Opcional: `gh-pages` com `npm run deploy` (ver secção no histórico do README ou adiciona scripts `predeploy` / `deploy`).

## Rotas

| Caminho        | Conteúdo                          |
|----------------|-----------------------------------|
| `/`            | Home + mosaico aleatório          |
| `/projects`    | Dois projects (cards)             |
| `/projects/bagoeira` | Galeria Bagoeira          |
| `/projects/ordinario`| Galeria Ordinário         |
| `/sobre`       | About + animações                 |
| `/contacto`    | Redes + formulário                |
