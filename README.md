# Portafolio · Daniel Capote Vázquez

Portafolio profesional de **Daniel Capote Vázquez** — Desarrollador de Software especializado en Inteligencia Artificial y desarrollo web.

Construido con un enfoque minimalista premium (tema oscuro rojo/negro), microanimaciones sutiles, accesibilidad, SEO completo y excelente rendimiento.

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

---

## ✨ Características

- ⚡️ **Next.js 14 (App Router)** + **React 18** + **TypeScript** estricto
- 🎨 **TailwindCSS** con sistema de tokens (variables CSS) y tema **rojo/negro**
- 🌗 **Dark mode** (por defecto) + modo claro, sin parpadeo (anti-FOUC)
- 🎬 **Framer Motion** — reveal on-scroll, microanimaciones, respeta `prefers-reduced-motion`
- 🧩 Componentes **shadcn/ui**-style (Button, Card, Badge, Tooltip, Input, Textarea)
- 📊 Barra de progreso de scroll, botón "Back to Top", loader inicial, fondo animado sutil
- 📬 **Formulario de contacto** funcional con **Resend** (API Route) + validación con **Zod** + honeypot anti-spam
- 🔍 **SEO completo**: metadata, Open Graph dinámico, JSON-LD (Schema.org), `sitemap.xml`, `robots.txt`
- ♿️ Accesibilidad: HTML semántico, foco visible, `aria-*`, contraste cuidado
- 📱 Responsive perfecto (mobile-first)
- 🗂️ Contenido **100% desacoplado** en `data/` — actualizar el portafolio = editar objetos tipados

---

## 📁 Estructura del proyecto

```
.
├── app/                    # App Router (páginas, layout, rutas API, SEO)
│   ├── api/contact/        # Endpoint del formulario (Resend)
│   ├── globals.css         # Estilos globales + tokens del tema
│   ├── layout.tsx          # Layout raíz, metadata, providers
│   ├── page.tsx            # Home (ensambla las secciones)
│   ├── not-found.tsx       # 404 personalizada
│   ├── opengraph-image.tsx # Imagen OG dinámica
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/
│   ├── common/             # Reveal, ScrollProgress, BackToTop, Loader, etc.
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, About, Experience, Projects, Skills, ...
│   ├── theme/              # ThemeProvider + ThemeToggle
│   └── ui/                 # Primitivos shadcn-style
├── data/                   # ← TODO tu contenido vive aquí
├── hooks/                  # Hooks reutilizables
├── lib/                    # utils, constants, validaciones (zod)
├── public/                 # Assets (foto, CV, favicon, imágenes de proyectos)
└── types/                  # Tipos TypeScript compartidos
```

---

## 🚀 Puesta en marcha

### Requisitos

- **Node.js 18.17+** (recomendado 20+)
- npm (o pnpm / yarn)

### Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Variables de entorno
cp .env.example .env.local
# edita .env.local con tus valores (ver abajo)

# 3. Servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Scripts

| Script | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | ESLint |
| `npm run typecheck` | Comprobación de tipos (tsc) |

---

## 🔐 Variables de entorno

Copia `.env.example` a `.env.local` y completa:

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (SEO/OG/sitemap). En prod: `https://tudominio.com` |
| `RESEND_API_KEY` | API key de [Resend](https://resend.com/api-keys) |
| `CONTACT_FROM_EMAIL` | Remitente verificado en Resend (dev: `onboarding@resend.dev`) |
| `CONTACT_TO_EMAIL` | Email donde recibirás los mensajes |

> El formulario funciona sin configurar Resend, pero devolverá un aviso indicando que el
> servicio de correo no está configurado. Los mensajes se registran en consola en ese caso.

---

## ✏️ Cómo actualizar el contenido

Todo el contenido está en **`data/`** y tipado en **`types/index.ts`**. No necesitas tocar los componentes:

| Archivo | Qué edita |
|---|---|
| `data/profile.ts` | Nombre, cargo, bio, foto, CV, highlights |
| `data/experience.ts` | Experiencia / logros |
| `data/projects.ts` | Proyectos (añade un objeto para una nueva tarjeta) |
| `data/skills.ts` | Habilidades por categoría |
| `data/technologies.ts` | Logos del stack |
| `data/education.ts` | Educación |
| `data/certifications.ts` | Certificaciones (la sección aparece sola si hay alguna) |
| `data/languages.ts` | Idiomas y nivel |
| `data/socials.ts` | Redes sociales |
| `data/navigation.ts` | Enlaces de la navbar |

Busca los comentarios `// TODO:` para ver qué datos conviene completar.

### Reemplazar assets
- **Foto:** sustituye `public/foto_perfil.jpeg` (o cambia la ruta en `data/profile.ts`).
- **CV:** sustituye `public/DanielCapoteCV.pdf`.
- **Imágenes de proyectos:** reemplaza los SVG de `public/projects/` por capturas reales.

---

## ☁️ Despliegue en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. Entra en [vercel.com/new](https://vercel.com/new) e importa el repo.
3. Framework: **Next.js** (autodetectado). No hace falta configurar el build.
4. En **Settings → Environment Variables**, añade:
   - `NEXT_PUBLIC_SITE_URL` = `https://tu-dominio.vercel.app`
   - `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`
5. **Deploy**. ✅

O desde la CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # producción
```

---

## ✅ Checklist de calidad

- [x] TypeScript estricto sin errores (`npm run typecheck`)
- [x] ESLint limpio (`npm run lint`)
- [x] Responsive (mobile → desktop)
- [x] Accesibilidad (semántica, foco, aria, contraste)
- [x] SEO (metadata, OG, JSON-LD, sitemap, robots)
- [x] Rendimiento (fuentes optimizadas, imágenes `next/image`, animaciones GPU)

---

## 📄 Licencia

MIT © Daniel Capote Vázquez
