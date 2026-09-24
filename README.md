# Portafolio · Daniel Capote Vázquez

Mi portafolio personal. Aquí reúno mi experiencia, mis proyectos y mi stack, junto con un formulario para contactarme.

## Tecnologías

- Next.js 14 (App Router), React 18 y TypeScript
- Tailwind CSS
- Framer Motion para las animaciones y Lenis para el scroll suave
- Zod para validar el formulario y Resend para enviar los correos

## Cómo ejecutarlo

Necesitas Node.js 18.17 o superior.

```bash
npm install
cp .env.example .env.local   # rellena tus valores
npm run dev
```

Se abre en [http://localhost:3000](http://localhost:3000).

Otros scripts: `npm run build`, `npm run start`, `npm run lint` y `npm run typecheck`.

## Variables de entorno

| Variable | Para qué sirve |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio (SEO, sitemap y Open Graph) |
| `RESEND_API_KEY` | API key de [Resend](https://resend.com/api-keys) |
| `CONTACT_FROM_EMAIL` | Remitente de los correos |
| `CONTACT_TO_EMAIL` | Correo donde recibo los mensajes |

Sin configurar Resend, el formulario devuelve un aviso de que el servicio de correo no está disponible.

## Estructura

```
app/          páginas, ruta del formulario (api/contact), sitemap y robots
components/   secciones, layout, tema y componentes comunes
data/         el contenido del portafolio (perfil, experiencia, proyectos...)
hooks/        hooks propios
lib/          utilidades, constantes y validaciones
public/       foto, CV e imágenes de los proyectos
types/        tipos compartidos
```

Todo el contenido está en `data/`, así que para actualizar el portafolio basta con editar esos archivos.

## Despliegue

Lo tengo desplegado en Vercel, conectado a este repositorio. Cada push a `master` genera un nuevo despliegue. Las variables de entorno de arriba se configuran en **Settings → Environment Variables** del proyecto.

## Licencia

MIT © Daniel Capote Vázquez
