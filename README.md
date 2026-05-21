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

O site publicado tem de ser o **build** (`dist/`), não o `index.html` da raiz do repositório (esse ficheiro só serve para o `vite` em desenvolvimento e aponta para `/src/...`, que o GitHub Pages não compila).

### Opção recomendada: GitHub Actions

1. Faz push do branch `main` (o workflow em `.github/workflows/deploy-github-pages.yml` corre em cada push).
2. No repositório GitHub: **Settings → Pages**.
3. Em **Build and deployment**, em **Source**, escolhe **GitHub Actions** (não uses pasta `/docs` vazia nem esperes que a raiz do repo sirva o build sozinha).
4. Espera o workflow **Deploy GitHub Pages** terminar; o site fica em `https://alvesjulia31.github.io/`.

Para um **repositório de projecto** (`https://<user>.github.io/<repo>/`), descomenta e ajusta `base` em `vite.config.js` para `'/nome-do-repo/'`.

### Rotas (React Router)

O script `build` copia `dist/index.html` para `dist/404.html` para refreshes em caminhos como `/projects` funcionarem no GitHub Pages.

## Rotas

| Caminho        | Conteúdo                          |
|----------------|-----------------------------------|
| `/`            | Home + mosaico aleatório          |
| `/projects`    | Dois projects (cards)             |
| `/projects/bagoeira` | Galeria Bagoeira          |
| `/projects/ordinario`| Galeria Ordinário         |
| `/sobre`       | About + animações                 |
| `/contacto`    | Redes + formulário                |
