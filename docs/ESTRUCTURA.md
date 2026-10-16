# Estructura del proyecto — Campuslands (sitio web)

Guía técnica para entender, mantener y extender el código. Pensada para quien recibe el proyecto: qué tecnologías usa, dónde está cada cosa, cómo funcionan los sistemas internos y cómo hacer los cambios habituales.

Documentos relacionados: [README](../README.md) (resumen y puesta en marcha) · [POLITICAS.md](POLITICAS.md) (licencias, riesgos y privacidad).

---

## Índice

1. [Visión general](#1-visión-general)
2. [Tecnologías y por qué](#2-tecnologías-y-por-qué)
3. [Cómo arranca la aplicación](#3-cómo-arranca-la-aplicación)
4. [Mapa de carpetas](#4-mapa-de-carpetas)
5. [Archivo por archivo](#5-archivo-por-archivo)
6. [Sistemas internos](#6-sistemas-internos)
7. [Cambios habituales](#7-cambios-habituales)
8. [Convenciones de código](#8-convenciones-de-código)
9. [Rendimiento, SEO y publicación](#9-rendimiento-seo-y-publicación)
10. [Código sin uso y deuda técnica](#10-código-sin-uso-y-deuda-técnica)

---

## 1. Visión general

- **Tipo:** aplicación de una sola página (SPA) que se publica como archivos estáticos. No necesita servidor propio ni base de datos.
- **Tamaño:** 11 páginas + 404, ~45 secciones, ~25 componentes reutilizables.
- **Contenido:** todos los textos viven en dos diccionarios (`src/i18n/es.js` y `en.js`). Los componentes no tienen texto escrito a mano.
- **Diseño:** CSS propio por componente, con variables de diseño (colores, tipografías, espacios) centralizadas. Cada página tiene su propio lenguaje visual dentro de una base común (encabezado, pie, tipografías, paleta azul/negro/blanco).
- **Movimiento:** animaciones de entrada al hacer scroll, fondos de estrellas en canvas, cifras que cuentan, y escenas por página (estrella que choca en FullService, Tierra girando en Global, diagonal de luz en Staffing, etc.).

---

## 2. Tecnologías y por qué

| Tecnología | Versión | Papel | Motivo de la elección |
|---|---|---|---|
| **React** | 19.3 | Interfaz por componentes | Estándar del mercado, fácil de mantener y de encontrar desarrolladores |
| **React Router** | 7.18 | Rutas (`BrowserRouter`, `Routes`, `Link`, `NavLink`) | Navegación sin recargar y URLs limpias (`/servicios/emplea`) |
| **Vite** | 6.4 | Desarrollo y compilación | Arranque instantáneo, recarga en caliente, empaquetado con división de código |
| **Leaflet** | 1.9 | Mapa de sedes | Ligero (~40 KB), libre (BSD-2) y sin claves de API |
| **CSS puro + variables** | — | Estilos | Control total del diseño, sin peso extra de frameworks; cada componente trae su `.css` |
| **Canvas 2D** | — | Estrellas, nieve | Miles de partículas sin crear nodos en el DOM |
| **IntersectionObserver** | — | Entradas al hacer scroll, carga tardía | Nativo del navegador, sin escuchar el evento scroll |
| **Web Audio API** | — | (Antes: sonidos de la mascota) | Ya no se usa: la mascota se eliminó |

Lo que **no** se usa, a propósito: TypeScript, Tailwind, librerías de componentes (MUI, Chakra…), librerías de animación (Framer Motion, GSAP), librerías de i18n, Redux. Mantiene el proyecto pequeño y sin dependencias que actualizar.

---

## 3. Cómo arranca la aplicación

```
index.html
  └─ script inline: aplica el idioma guardado (localStorage) a <html lang> antes de pintar
  └─ src/main.jsx
       ├─ importa src/styles/global.css      (fuentes, variables, estilos base)
       ├─ importa src/utils/device.js        (marca <html class="is-low-power"> si el equipo es modesto)
       └─ monta <App />
            └─ src/App.jsx
                 ├─ <LanguageProvider>        (idioma actual + diccionario de textos)
                 └─ <BrowserRouter>
                      └─ src/routes/AppRoutes.jsx
                           └─ <MainLayout>    (encabezado + página + pie; scroll, títulos, anclas)
                                └─ página de la ruta (Inicio directo; el resto con React.lazy)
```

Cada página (`src/pages/<Página>/<Página>.jsx`) solo ordena sus secciones; cada sección (`sections/*.jsx`) lee sus textos con `useLanguage()` y sus enlaces de `LINKS`.

---

## 4. Mapa de carpetas

```
Campuslands-new-page/
├── index.html              Página base: título, meta descripción, favicon, idioma inicial
├── package.json            Dependencias y comandos (dev, build, preview)
├── package-lock.json       Versiones exactas instaladas
├── vite.config.js          Alias "@" → src/; carpetas que el servidor de desarrollo no vigila
├── jsconfig.json           Hace que el editor entienda el alias "@"
├── .env.example            Variables de entorno de ejemplo (API y facturación)
├── .gitignore              Qué no se sube: node_modules, dist, .env, Content MD/, docs internos
├── public/                 Se copia tal cual a dist/
│   ├── favicon.png
│   ├── robots.txt          Permite indexar todo el sitio
│   ├── _headers            Reglas de caché (Netlify / Cloudflare Pages)
│   ├── _redirects          Toda ruta sirve index.html (SPA)
│   ├── licenses/           Textos de licencia de fuentes y librerías (enlazados desde /creditos)
│   └── videos/             24 archivos: videos .mp4 + portadas .webp (~120 MB)
├── docs/
│   ├── ESTRUCTURA.md       Este documento
│   ├── POLITICAS.md        Licencias, riesgos, privacidad
│   ├── DISENO.md           Guía de diseño (local, no se sube)
│   └── POR_HACER.md        Pendientes (local, no se sube)
└── src/                    Código de la aplicación (sección 5)
```

**Carpeta local `Content MD/`** (no se sube, está en `.gitignore`): material de referencia entregado por Campuslands.

| Subcarpeta | Contenido |
|---|---|
| `Whole page/` | Textos originales de cada página (`home.md`, `About us.md`, `Sé un camper.md`, `Servicios/*.md`) |
| `Link/Links.md` | Todos los enlaces de la web original |
| `Politicas/` | Textos legales originales |
| `vids/` | Videos originales sin procesar |
| `logos/` | Logos originales de Campuslands y `Empresas/` |
| `ideas/` | `ai images/` (imágenes generadas con IA), `web pages idea/` (referencias de diseño), `png/` (otras imágenes) |

El sitio **no depende** de `Content MD/`: usa copias procesadas en `src/assets/` y `public/videos/`.

---

## 5. Archivo por archivo

### 5.1 Raíz de `src/`

| Archivo | Función |
|---|---|
| `main.jsx` | Punto de entrada: estilos globales, detección de bajo consumo y montaje de React |
| `App.jsx` | Envuelve la app con el proveedor de idioma y el enrutador |

### 5.2 `routes/`

| Archivo | Función |
|---|---|
| `AppRoutes.jsx` | Tabla de rutas. El Inicio se importa directo; las demás páginas con `React.lazy` (se descargan al visitarlas). `Suspense` muestra un fondo oscuro mientras llega la página. |

### 5.3 `components/layout/` — común a todas las páginas

| Archivo | Función |
|---|---|
| `MainLayout.jsx` | Estructura: encabezado + página + pie. Además: **título de la pestaña** por página; **vuelve arriba al instante** al cambiar de página (antes de que la página nueva active sus animaciones); `scrollRestoration = 'manual'`; **anclas** (`#contacto`): baja a la sección, reintentando hasta que la página diferida exista, y quita el `#` de la URL; intercepta enlaces a una sección de la misma página para que bajen cada vez que se tocan. |
| `Header.jsx` / `.css` | Encabezado fijo: logo, menú, desplegable de Servicios, botón Contactar, interruptor ES/EN y menú móvil |
| `Footer.jsx` / `.css` | Pie: logo, frase, enlaces legales, créditos y redes, con estrellas de fondo |
| `Logo.jsx` | Casco (imagen) + palabra "campuslands" (máscara CSS que toma el color del texto) |

### 5.4 `components/ui/` — piezas reutilizables

| Archivo | Función | Dónde se usa |
|---|---|---|
| `Button.jsx` / `.css` | Botón-enlace en tres estilos (`primary`, `secondary`, `ghost`). Internos con `Link` (sin recargar), externos en pestaña nueva | Todo el sitio |
| `Emph.jsx` | Convierte `'texto *palabra*'` en texto con la palabra en serif cursiva | Todos los títulos |
| `Starfield.jsx` / `.css` | Estrellas en canvas a ~30 fps (20 en bajo consumo), pausadas fuera de pantalla o con la pestaña oculta | Secciones negras de casi todas las páginas |
| `FallingStars.jsx` / `.css` | Estrellas que caen, fijas a la ventana | Sé un camper |
| `Snowfall.jsx` / `.css` | Nieve ligera en canvas para fondos claros | Nosotros (tecnologías) |
| `ScrollMoon.jsx` / `.css` | Luna desenfocada que se cierra según el scroll | Sé un camper (rutas) |
| `MacWindow.jsx` / `.css` | Ventana estilo macOS para mostrar capturas o código | Órbit (Inicio, Global), bloque de código (Sé un camper) |
| `VideoPlayer.jsx` / `.css` | Video con portada; no se descarga hasta pulsar reproducir. Si falta el archivo, muestra `VideoFrame` | Inicio (redes), Sé un camper (historias) |
| `VideoFrame.jsx` / `.css` | Recuadro reservado para un video (plan B de `VideoPlayer`) | Interno |
| `SedeMap.jsx` / `.css` | Mapa Leaflet teñido de azul; se carga al acercarse; si OpenStreetMap falla, cambia solo a la captura | Inicio (sedes) |
| `SedeMapStatic.jsx` | Plan B del mapa: captura de la sede seleccionada | Interno |
| `ServiceIcon.jsx` | Íconos de línea con el degradado del logo | Inicio (servicios), FullService (servicios) |
| `TechIcon.jsx` / `.css` | Íconos de tecnologías a dos tonos con animación de trazado | Nosotros (tecnologías) |
| `SocialIcon.jsx` | Íconos de redes sociales | Inicio, Nosotros, Emplea |
| `Divider.jsx` / `.css` | Íconos decorativos entre secciones | Inicio |
| `Placeholder.jsx` / `.css` | Espacio reservado para imágenes faltantes | **Sin uso** (sección 10) |

### 5.5 `pages/` — páginas y sus secciones

Cada sección es un `.jsx` + su `.css` en `sections/`. El archivo de la página solo las ordena.

| Página (ruta) | Secciones, en orden |
|---|---|
| **Home** (`/`) | `Hero` (portada + métricas con conteo) · `Pillars` (qué aprenden) · `Services` (5 servicios) · `Partners` (cinta de 12 aliados, sin interacción) · `Orbit` (chatbot) · `Locations` (selector de sedes + mapa) · `Social` (redes + video) |
| **Camper** (`/se-un-camper`) | `CamperHero` · `CamperCode` + `CodeTranslator` (programa en Python que se traduce a palabras al verse en pantalla) · `Programs` (4 rutas, con `ScrollMoon`) · `Stories` (3 videos). Estilo monocromo (`.page-mono`) con `FallingStars` |
| **About** (`/nosotros`) | `AboutHero` (video vertical del CEO) · `Impact` (cifras + mapa satelital de sedes; coordenadas en `sedesGeo.js`) · `Purpose` (misión y visión) · `Knowledge` (20 tecnologías con `TechIcon`) · `AboutStories` (8 videos de campers con ventana de reproducción) |
| **Emplea** (`/servicios/emplea`) | `EmpleaHero` (con el logo) · `TechLeap` (6 etapas + 2 testimonios) · `Stack` (9 tecnologías, rotación automática) · `WhyUs` (4 modelos que cambian con flechas; 2 fotos de fondo que rotan solas, rutas en `whyImages.js`) · `Companies` (20 empresas en cinta) · `EmpleaContact` |
| **FullService** (`/servicios/fullservice`) | `FsHero` (estrella que choca → hexágono) · `FsPhases` (4 fases sobre el borde negro/blanco) · `FsServices` (ficha técnica) · `FsStack` (3 tarjetas blancas) · `FsClients` (10 clientes en rodillos) · `FsContact` (Luna + formulario que abre el correo) |
| **Global** (`/servicios/internacional`) | `GlHero` (pantalla partida, Tierra girando, proceso en 3 pasos) · `GlOrbit` · `GlModel` (panel de Staffing Global) · `GlCompanies` (20 empresas en rodillos horizontales) |
| **AiAcademy** (`/servicios/ia-academy`) | `AcHero` (pase de la próxima masterclass) · `AcPain` · `AcMissions` (5 planes en escalera) · `AcMethod` · `AcTools` (4 módulos + 14 herramientas desplegables con logo) · `AcStories` (4 testimonios + cierre) |
| **Staffing** (`/servicios/staffing`) | `StHero` (diagonal, logo que se ubica, vista previa de opciones) · `StOptions` (3 paneles; reutiliza `Global/sections/GlModel.css`). Símbolos en `staffingSymbols.jsx` |
| **Billing** (`/servicios/facturacion`) | Una sola sección: logo + formulario de consulta (`src/services/billing.js`) |
| **Legal** (`/politicas-de-privacidad`, `/terminos-y-condiciones`) | Lector de markdown propio (títulos, listas, negritas, enlaces) sobre `src/content/legal/*.md`, con índice navegable. Solo en español |
| **Credits** (`/creditos`) | Créditos y licencias, desde `i18n` (`credits`) |
| **NotFound** (`*`) | Página 404 |
| **ComingSoon** | "En construcción". **Sin uso** desde que todas las páginas existen |

### 5.6 Datos y configuración

| Archivo | Contenido |
|---|---|
| `i18n/es.js`, `i18n/en.js` | **Todos los textos**, con la misma estructura en ambos idiomas. Comentarios `[PROVISIONAL]` marcan textos escritos por el equipo (no del contenido original) |
| `context/LanguageContext.jsx` | Idioma actual, función para cambiarlo y diccionario activo (`useLanguage()` → `{ lang, setLang, t }`). Guarda el idioma en `localStorage` |
| `constants/links.js` | **Todos los destinos de botones**: WhatsApp, redes, rutas internas, anclas. Ningún componente escribe URLs a mano |
| `constants/navigation.js` | Menú principal y orden del desplegable de Servicios |
| `constants/videos.js` | Videos por sección (archivo, portada, vertical/horizontal) en `public/videos/` |
| `data/partners.js` | 12 aliados del Inicio |
| `data/hiringCompanies.js` | 20 empresas que contratan (Emplea y Global) |
| `data/fullServiceClients.js` | 10 clientes de FullService |
| `data/sedes.js` | 5 sedes del mapa: nombre, lugar, coordenadas, dirección y captura de respaldo |
| `data/techLogos.js` | Trazos SVG de logos de tecnologías (Simple Icons) |
| `data/aiToolLogos.js` | Trazos SVG de 9 herramientas de IA (Simple Icons) |
| `data/masterclass.js` | **Próxima masterclass** (tema, fecha, horario, instructor) en ES y EN; se edita a mano, instrucciones dentro |
| `content/legal/` | Texto de las políticas en markdown |
| `services/api.js` | Cliente HTTP mínimo con `VITE_API_URL` |
| `services/billing.js` | `lookupInvoices(documento)` → `{ status: 'found' | 'empty' | 'unavailable' }`. Sin API configurada responde `unavailable` |
| `hooks/useReveal.js` | Animaciones de entrada (sección 6.3) |
| `hooks/useCountUp.js` | Anima una cifra de 0 al valor final |
| `hooks/useNearViewport.js` | `[ref, visible]`: true cuando el elemento se acerca a la pantalla (carga tardía del mapa, cintas) |
| `utils/device.js` | Detección de equipos modestos (sección 6.4) |
| `styles/variables.css` | Tokens: colores, tipografías, tamaños, espacios, radios, curvas de animación |
| `styles/global.css` | Base, superficies (`.surface-light`, `.surface-dark`, `.page-mono`), clases compartidas (`.section`, `.container`, `.eyebrow`, `.reveal`…), reglas de bajo consumo |
| `assets/fonts/` | Tipografías `.woff2` por subconjunto de idioma + `fonts.css` con `@font-face` y `font-display: swap` |
| `assets/images/` | Logo en WebP (incluida versión de 7 KB para el encabezado), captura del chat, imágenes por página (`emplea/`, `fullservice/`, `global/`) y capturas del mapa (`maps/`) |
| `assets/logos/` | Logos de empresas en SVG blanco |

---

## 6. Sistemas internos

### 6.1 Idiomas

- `useLanguage()` devuelve `t` (diccionario activo). Ej.: `const { hero } = useLanguage().t.staffing`.
- Al cambiar de idioma no se recarga la página: React vuelve a dibujar solo los textos.
- **Regla importante:** en listas traducidas, la `key` de React es la **posición** (`key={i}`), no el texto. Si se usara el texto, al cambiar de idioma React crearía elementos nuevos y repetiría sus animaciones.
- Los documentos legales solo existen en español; en inglés se muestra un aviso.

### 6.2 Rutas, scroll y anclas

- Enlaces internos: `Button` con `href="/..."` o `Link`/`NavLink` (sin recargar).
- Anclas a secciones: `links.js` define, por ejemplo, `partnersContact: '/servicios/emplea#contacto'`. La sección destino tiene ese `id`.
- `MainLayout` se encarga de que: (1) al cambiar de página se vuelva arriba **antes** de que la página nueva cree sus animaciones; (2) las anclas funcionen aunque la página se esté descargando; (3) tocar varias veces un enlace a la misma sección siempre baje; (4) recargar empiece arriba.

### 6.3 Animaciones de entrada (`useReveal`)

- `const ref = useReveal()` y en el JSX `ref={ref}` + una clase: `reveal` (el elemento aparece), `reveal-stagger` (sus hijos aparecen en cascada según `--i`), o una clase propia que reaccione a `.is-revealed`.
- Un solo `IntersectionObserver` para toda la página; la clase `is-revealed` se agrega **una vez** y nunca se quita.
- Con "reducir movimiento" del sistema, todo se muestra sin animar.
- Las portadas animan al cargar con `@keyframes` en su CSS (no dependen del scroll).

### 6.4 Modo de bajo consumo

- `src/utils/device.js` activa `<html class="is-low-power">` si el equipo tiene **≤ 4 núcleos**, **≤ 4 GB de memoria** o **ahorro de datos** activado.
- Efecto: `Starfield` y `FallingStars` dibujan la mitad de partículas a 20 fps, y se apagan los movimientos continuos (Tierra, Luna, luces que se desplazan). Las reglas están al final de `global.css`.
- La exportación `isLowPower` se puede usar en cualquier componente nuevo que tenga animación costosa.

### 6.5 Mapa de sedes con respaldo

- `SedeMap` carga Leaflet de forma diferida y usa las teselas de OpenStreetMap.
- Si no carga ninguna tesela en 10 s, hay 6 errores seguidos, o falla la librería, cambia a `SedeMapStatic` (captura en `assets/images/maps/<sede>.jpg`). Detalle en [POLITICAS.md](POLITICAS.md).

### 6.6 Videos

- Definidos en `constants/videos.js`; archivos en `public/videos/` (no pasan por el empaquetador).
- `VideoPlayer` usa `preload="none"`: nada se descarga hasta reproducir.
- Nosotros: tarjeta vertical con portada → ventana con el video en su formato real (vertical u horizontal), cierre con Esc / fuera / botón, y bloqueo del scroll de fondo.

### 6.7 Formularios y servicios

| Formulario | Comportamiento actual | Para conectarlo |
|---|---|---|
| Cotización (FullService) | Valida y abre el correo del visitante con el mensaje listo (`mailto:` a `LINKS.fullService.email`) | Reemplazar `submit` en `FsContact.jsx` por una llamada a un servicio de formularios o API |
| Facturación | Valida el documento y llama a `lookupInvoices` | Definir `VITE_BILLING_ENDPOINT`; la API debe responder una lista `{ number, date, amount, status }` |

### 6.8 Contenido editable a mano

- **Masterclass:** `src/data/masterclass.js` (bloque marcado en `AcHero.jsx` como `PRÓXIMA MASTERCLASS … FIN`).
- **Empresas:** `src/data/*.js`.
- **Textos:** `src/i18n/`.

---

## 7. Cambios habituales

### Cambiar un texto
Editar `src/i18n/es.js` y la misma clave en `en.js`. `*palabra*` se ve en cursiva destacada.

### Cambiar a dónde lleva un botón
Editar `src/constants/links.js`. Internos empiezan por `/`; un ancla se escribe `/ruta#id`.

### Agregar o quitar una empresa
1. Logo SVG (idealmente blanco) en `src/assets/logos/`.
2. Importarlo y añadirlo (o quitarlo) en `partners.js`, `hiringCompanies.js` o `fullServiceClients.js`.

### Actualizar la masterclass
Editar `src/data/masterclass.js` (ES y EN). El enlace del botón está en `links.js → aiAcademy.masterclass`.

### Cambiar o agregar un video
Archivo `.mp4` y portada `.webp` en `public/videos/`; registrar en `src/constants/videos.js`.

### Cambiar una sede
Editar `src/data/sedes.js`. Si cambian las coordenadas, regenerar su captura de respaldo (procedimiento en POLITICAS.md, sección 4).

### Cambiar colores, fuentes o espacios
Tokens en `src/styles/variables.css`; superficies en `global.css`. Una fuente nueva: archivos en `assets/fonts/`, `@font-face` en `fonts.css`, licencia en `public/licenses/` y crédito en `/creditos`.

### Agregar una página
1. `src/pages/<Página>/<Página>.jsx` y sus secciones en `sections/`.
2. Ruta en `src/routes/AppRoutes.jsx` con `lazy(() => import(...))` y `page(<Página />)`.
3. Si va en el menú: `constants/navigation.js` + textos en `i18n` (`nav`) + título en `MainLayout.jsx`.

### Agregar una sección
`.jsx` + `.css` en `sections/`, textos en `i18n`, superficie clara u oscura (`surface-light` / `surface-dark`), entrada con `useReveal`, `key={i}` en listas traducidas, y respeto a `prefers-reduced-motion`. Guía visual en `docs/DISENO.md`.

---

## 8. Convenciones de código

- **Alias `@`** = `src/` (`import Button from '@/components/ui/Button'`).
- **Un componente = un `.jsx` + su `.css`** con el mismo nombre.
- **Clases CSS tipo BEM:** `bloque`, `bloque__parte`, `bloque--variante`, con prefijo por página (`fs-` FullService, `gl-` Global, `ac-` AI Academy, `st-` Staffing…).
- **Tokens, no colores sueltos**, salvo detalles de una escena concreta.
- **Animar solo `transform` y `opacity`** (no provocan relayout); canvas pausados fuera de pantalla.
- **Accesibilidad:** `alt` en imágenes con contenido, `aria-hidden` en lo decorativo, roles ARIA en pestañas y desplegables, foco visible, `prefers-reduced-motion`.
- **Comentarios en español**, al inicio de cada sección explicando qué hace y por qué.
- **Nada de URLs ni textos sueltos en componentes:** van en `links.js` e `i18n`.

---

## 9. Rendimiento, SEO y publicación

| Tema | Implementación |
|---|---|
| División de código | `React.lazy` por página; Leaflet en su propio paquete |
| Imágenes | WebP, `srcset` con 2–3 tamaños, `loading="lazy"`, versión móvil de la Tierra (Global) |
| Videos | `preload="none"`, fuera del empaquetado |
| Tipografías | Alojadas, por subconjunto de idioma, `font-display: swap` |
| Animación | Solo `transform`/`opacity`; observadores en vez de scroll; modo de bajo consumo |
| Caché | `public/_headers` (1 año para `/assets/*` con huella; 1 semana para videos; `index.html` siempre revalidado) |
| Rutas en el servidor | `public/_redirects` → `index.html` para cualquier ruta |
| SEO | Meta descripción, `robots.txt`, título por página, `lang` en `<html>` |
| Medición | Lighthouse móvil: rendimiento 92–96, accesibilidad 96–100, buenas prácticas 100, SEO 100 |

**Paquete inicial:** ~376 KB de JS (124 KB comprimido) y ~49 KB de CSS; cada página agrega entre 5 y 20 KB comprimidos al visitarla.

**Publicar:** `npm run build` → subir `dist/` a un hosting estático. Si el hosting no lee `_headers` y `_redirects` (Vercel, Apache, Nginx), configurar el equivalente.

---

## 10. Código sin uso y deuda técnica

| Elemento | Estado | Recomendación |
|---|---|---|
| `pages/ComingSoon/` | Sin uso (todas las páginas existen) | Borrar, o conservar para páginas futuras |
| `components/ui/Placeholder.*` | Sin uso | Borrar si no se prevé |
| `hooks/useFetch.js`, `services/api.js` | Base para una API futura (`api.js` lo usa `billing.js`) | Conservar |
| `utils/format.js` | Sin uso | Borrar si no se prevé |
| Textos en `i18n` sin uso (`partners.prev/next`, `comingSoon`, `about.stories.watch`) | Restos de versiones anteriores | Limpiar en una revisión de textos |
| Pruebas automáticas | No hay | Agregar Vitest + Testing Library para componentes clave y Playwright para recorridos |
| Videos (~120 MB) en `public/` | Funcionan, pero pesan en el repositorio | Git LFS o CDN / YouTube / Vimeo |
| Textos legales | Solo en español; la política de privacidad original está incompleta | Ver POLITICAS.md |
