/**
 * Imagens servidas pelo Vite a partir de /assets/images/...
 * Nota: Bagoeira está com .dng — exporta JPG/PNG para a mesma pasta para aparecerem no site.
 */

const asUrlList = (modules) =>
  Object.values(modules).filter((v) => typeof v === 'string');

const bagoeiraModules = import.meta.glob(
  '../../assets/images/Bagoeira/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

const ordinarioModules = import.meta.glob(
  '../../assets/images/Ordinário/*.jpg',
  { eager: true, import: 'default' }
);

const aboutModules = import.meta.glob(
  '../../assets/images/AboutMe/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

export const bagoeiraImages = asUrlList(bagoeiraModules);
export const ordinarioImages = asUrlList(ordinarioModules);
export const aboutImages = asUrlList(aboutModules);

export function allProjectImages() {
  return [...bagoeiraImages, ...ordinarioImages];
}

/** Baralha (Fisher–Yates) — cópia */
export function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
