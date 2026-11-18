# Portafolio — José de Jesús Ramos Ramos

Portafolio personal construido con **React + Vite + TypeScript + Tailwind CSS**.

## Cómo correrlo en tu máquina

```bash
npm install
npm run dev
```

Luego abre la URL que aparezca en la terminal (por lo general `http://localhost:5173`).

## Cómo editarlo

- **Textos, proyectos, habilidades y datos de contacto**: edita `src/data.ts`.
- **Tu foto**: guarda la imagen dentro de `public/` (por ejemplo `public/foto.jpg`) y en `src/data.ts` cambia `photo: null` por `photo: "/foto.jpg"`. Mientras tanto se muestran tus iniciales (JJRR).
- **Colores**: cambia los valores de `--color-accent`, etc. en `src/index.css`.

## Cómo publicarlo (gratis)

### Vercel (recomendado)
1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com) → *New Project* → importa tu repo.
3. Vercel detecta Vite automáticamente. Clic en *Deploy*.

### Netlify
1. Sube el proyecto a GitHub.
2. En [netlify.com](https://netlify.com) → *Add new site* → *Import an existing project*.
3. Build command: `npm run build` · Publish directory: `dist`.

### GitHub Pages
```bash
npm run build
```
La carpeta `dist/` es lo que se publica. Puedes usar `vite.config.ts` con `base: "/tu-repo/"` para rutas correctas.

## Estructura

```
src/
  App.tsx              # Compone todas las secciones
  data.ts              # TODO el contenido editable
  index.css            # Tailwind + colores del tema
  components/
    Nav.tsx
    Hero.tsx
    About.tsx
    Projects.tsx
    Skills.tsx
    Contact.tsx
    Footer.tsx
```
