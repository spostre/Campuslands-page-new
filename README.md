# Campuslands — Sitio web

Sitio web institucional de **Campuslands** (fábrica de talento TI): presenta la formación de campers, la empresa y sus seis líneas de servicio. Es una aplicación de una sola página (SPA) hecha con **React 19 + Vite 6 + React Router 7**, en JavaScript y CSS propio, bilingüe (español / inglés) y sin dependencia de backend para funcionar.

---

## ⚠️ A editar

Puntos que requieren atención periódica o trabajo pendiente antes de que el sitio quede completo.

### 1. Próxima masterclass — editar periódicamente

Cada vez que cambie la masterclass de AI Academy (`/servicios/ia-academy`, el "pase de abordaje" de la portada):

| Qué | Archivo |
|---|---|
| Tema, fecha, hora, instructor, cargo y código (en español e inglés) | [`src/data/masterclass.js`](src/data/masterclass.js) — único archivo a tocar; trae las instrucciones dentro |
| Enlace del botón "Quiero asistir" (WhatsApp) | [`src/constants/links.js`](src/constants/links.js) → `aiAcademy.masterclass` |
| Rótulos fijos ("Fecha", "Horario", "Instructor"…) | `src/i18n/es.js` y `en.js` → `aiAcademy.masterclass` (casi nunca cambian) |

### 2. Facturación — necesita backend

La página `/servicios/facturacion` tiene el formulario de consulta listo, pero **no consulta facturas reales**: mientras no haya API muestra "consulta en línea no disponible" y ofrece el contacto.

| Qué | Archivo |
|---|---|
| Lógica de la consulta (qué URL llama y qué respuesta espera) | [`src/services/billing.js`](src/services/billing.js) |
| Cliente HTTP común | [`src/services/api.js`](src/services/api.js) |
| Página y formulario | [`src/pages/Billing/Billing.jsx`](src/pages/Billing/Billing.jsx) |
| Variables para activarla | `.env` → `VITE_API_URL` (servidor) y `VITE_BILLING_ENDPOINT` (ruta, p. ej. `/billing/invoices`) |

El backend debe responder a `GET {VITE_API_URL}{VITE_BILLING_ENDPOINT}?document=<número>` con una lista de `{ number, date, amount, status }`. Con eso definido, la página empieza a mostrar resultados sin más cambios.

### 3. Formulario de cotización de FullService — necesita backend

El formulario de contacto de `/servicios/fullservice` **no envía correos por sí mismo**: valida los campos y abre el programa de correo del visitante con el mensaje ya escrito (`mailto:`). Si el visitante no tiene un programa de correo configurado, no se envía nada.

| Qué | Archivo |
|---|---|
| Envío del formulario (función `submit`) | [`src/pages/FullService/sections/FsContact.jsx`](src/pages/FullService/sections/FsContact.jsx) |
| Correo de destino | [`src/constants/links.js`](src/constants/links.js) → `fullService.email` |

Para que envíe de verdad: crear un endpoint en el backend (o un servicio de formularios) y reemplazar en `submit` la línea `window.location.href = 'mailto:…'` por un `apiFetch(...)` con método `POST` que mande empresa, correo y necesidades.

---

## Tecnologías

| Capa | Tecnología | Versión | Para qué |
|---|---|---|---|
| Interfaz | [React](https://react.dev) + React DOM | 19.3 | Componentes de toda la página |
| Rutas | [React Router](https://reactrouter.com) (`react-router-dom`) | 7.18 | Navegación entre páginas sin recargar, anclas a secciones |
| Compilación | [Vite](https://vite.dev) + `@vitejs/plugin-react` | 6.4 / 4.7 | Servidor de desarrollo y empaquetado optimizado |
| Mapa | [Leaflet](https://leafletjs.com) + teselas de OpenStreetMap | 1.9 | Mapa interactivo de sedes (con respaldo automático si el servicio falla) |
| Estilos | CSS propio por componente + variables CSS | — | Sin Tailwind ni librerías de UI; tokens en `src/styles/variables.css` |
| Animación | CSS (transform/opacity), Canvas 2D, IntersectionObserver | — | Estrellas, entradas al hacer scroll, cifras animadas; sin librerías de animación |
| Tipografías | Hanken Grotesk, Newsreader, Poppins (alojadas, OFL) | — | Sin llamadas a Google Fonts |
| Idiomas | Diccionarios propios (`src/i18n/es.js`, `en.js`) + React Context | — | Sin librería de i18n |

Solo hay **4 dependencias de ejecución** (React, React DOM, React Router y Leaflet) y 2 de desarrollo (Vite y su plugin de React). No hay TypeScript, ni backend, ni base de datos.

---

## Puesta en marcha

Requisitos: **Node.js 20 o superior** (probado con Node 24).

```bash
npm install      # instala dependencias (una vez)
npm run dev      # desarrollo con recarga en caliente → http://localhost:5173
npm run build    # versión de producción optimizada → carpeta dist/
npm run preview  # sirve dist/ para revisarla antes de publicar
```

Variables de entorno opcionales (copiar `.env.example` a `.env`):

| Variable | Uso | Si está vacía |
|---|---|---|
| `VITE_API_URL` | URL base de una API futura | No se usa todavía |
| `VITE_BILLING_ENDPOINT` | Ruta de la API de consulta de facturas | Facturación muestra "consulta en línea no disponible" y ofrece el contacto |

---

## Páginas

| Ruta | Página | Notas |
|---|---|---|
| `/` | Inicio | Métricas, áreas de formación, servicios, aliados, chatbot Órbit, mapa de sedes, redes |
| `/se-un-camper` | Sé un camper | Rutas de formación, programa en Python que se traduce a palabras, historias de éxito |
| `/nosotros` | Nosotros | Video del CEO, sedes e impacto, misión y visión, tecnologías, 8 videos de campers |
| `/servicios/emplea` | Campuslands Emplea | Tech Leap, tecnologías, modelos de contratación, empresas, contacto comercial |
| `/servicios/fullservice` | FullService | Fases, servicios, tech stack, clientes, formulario de cotización |
| `/servicios/internacional` | Campuslands Global | Proceso de contratación, Órbit, modelo de servicio, empresas |
| `/servicios/ia-academy` | Campuslands AI Academy | Próxima masterclass, misiones (planes), método, herramientas de IA, testimonios |
| `/servicios/staffing` | Staffing tecnológico | Tres opciones de staffing con niveles |
| `/servicios/facturacion` | Facturación | Formulario de consulta (lista para conectar a una API) |
| `/politicas-de-privacidad`, `/terminos-y-condiciones` | Documentos legales | Texto íntegro con índice navegable |
| `/creditos` | Créditos y licencias | Atribuciones de todo recurso de terceros |
| cualquier otra | 404 | |

---

## Características destacadas

- **Bilingüe ES/EN** con cambio instantáneo; el idioma elegido se recuerda en el navegador.
- **Diseño responsive** probado de 320 a 1920 px de ancho, sin desbordes horizontales.
- **Animaciones con criterio de rendimiento:** solo `transform` y `opacity`; canvas que se pausan fuera de pantalla; respeto a "reducir movimiento" del sistema; **modo de bajo consumo automático** en equipos modestos.
- **Carga por página** (`React.lazy`): cada página descarga solo su código y estilos.
- **Imágenes optimizadas** (WebP, varias resoluciones con `srcset`) y videos que no se descargan hasta que se reproducen.
- **Accesibilidad:** textos alternativos, foco visible, roles ARIA, contraste revisado. Lighthouse 96–100.
- **Resiliencia:** el mapa cambia solo a una captura si OpenStreetMap no responde; los videos muestran un recuadro si faltan.
- **Sin cookies, sin analítica, sin rastreo.**
- **Contenido editable sin tocar componentes:** textos en `src/i18n/`, enlaces en `src/constants/links.js`, listas de empresas en `src/data/`, masterclass en `src/data/masterclass.js`.

### Resultados de Lighthouse (móvil simulado, octubre 2026)

| Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|
| 92–96 | 96–100 | 100 | 100 |

### Navegadores probados

Chrome 155, Edge 155, Brave 155, Opera 137 y Opera GX 137 (motor Chromium), en 13 rutas y 7 anchos de pantalla, sin errores. Compatibilidad con Safari y Firefox revisada en el código (prefijos y respaldos incluidos), pendiente de prueba en dispositivo real.

---

## Estructura resumida

```
├── index.html          Página base (título, meta descripción, idioma inicial)
├── vite.config.js      Alias "@" → src/
├── public/             Se publica tal cual: videos, licencias, robots.txt, _headers, _redirects
├── docs/               Documentación (ver abajo)
└── src/
    ├── main.jsx        Arranque
    ├── App.jsx         Idioma + enrutador
    ├── routes/         Qué página va en cada URL (carga diferida)
    ├── pages/          Una carpeta por página, con sus secciones en sections/
    ├── components/     layout/ (encabezado, pie) y ui/ (piezas reutilizables)
    ├── i18n/           Todos los textos (es.js, en.js)
    ├── constants/      Enlaces, rutas del menú y videos
    ├── data/           Empresas, sedes, logos de tecnologías, masterclass
    ├── hooks/          Animaciones de entrada, conteo de cifras, carga tardía
    ├── services/       Cliente de API y consulta de facturas
    ├── utils/          Detección de equipos modestos
    ├── content/legal/  Texto de las políticas (markdown)
    ├── styles/         Variables de diseño y estilos globales
    └── assets/         Imágenes, logos y tipografías
```

La explicación archivo por archivo está en [docs/ESTRUCTURA.md](docs/ESTRUCTURA.md).

---

## Cambios frecuentes

| Quiero… | Dónde |
|---|---|
| Cambiar un texto | `src/i18n/es.js` y `src/i18n/en.js` (`*palabra*` = cursiva destacada) |
| Cambiar a dónde lleva un botón | `src/constants/links.js` |
| Actualizar la próxima masterclass | `src/data/masterclass.js` (instrucciones dentro) |
| Agregar o quitar una empresa | Logo en `src/assets/logos/` + lista en `src/data/partners.js`, `hiringCompanies.js` o `fullServiceClients.js` |
| Cambiar un video | Archivo en `public/videos/` + `src/constants/videos.js` |
| Cambiar colores, fuentes o espacios | `src/styles/variables.css` |
| Conectar la consulta de facturas | `VITE_BILLING_ENDPOINT` + `src/services/billing.js` |

---

## Publicación

1. `npm run build` → sube la carpeta `dist/` a cualquier hosting de sitios estáticos (Netlify, Cloudflare Pages, Vercel, S3 + CloudFront, Apache/Nginx).
2. **Rutas:** como es una SPA, el servidor debe devolver `index.html` para cualquier ruta. `public/_redirects` ya lo hace en Netlify y Cloudflare Pages; en otro hosting hay que configurarlo.
3. **Caché:** `public/_headers` define 1 año para los archivos con huella (`/assets/*`), 1 semana para videos y revalidación para `index.html`. Igual que arriba: aplicar el equivalente si el hosting no lee ese archivo.
4. **Videos:** `public/videos/` pesa ~120 MB (24 archivos). Funciona en un hosting estático, pero para un repositorio Git conviene Git LFS o alojarlos en un CDN / YouTube / Vimeo y cambiar las rutas en `src/constants/videos.js`.

---

## Licencias y créditos

El código del sitio es de Campuslands. Los recursos de terceros (tipografías OFL, Leaflet BSD-2, React y React Router MIT, datos de OpenStreetMap ODbL, imágenes de NASA de dominio público, logos de Simple Icons CC0) están acreditados en la página `/creditos` y sus licencias en `public/licenses/`. Detalle de obligaciones, riesgos y autorizaciones pendientes en [docs/POLITICAS.md](docs/POLITICAS.md).

---

## Documentación

| Archivo | Contenido |
|---|---|
| [docs/ESTRUCTURA.md](docs/ESTRUCTURA.md) | Arquitectura, archivo por archivo, cómo funciona cada sistema y cómo modificarlo |
| [docs/POLITICAS.md](docs/POLITICAS.md) | Licencias, marcas, privacidad, riesgos por sección, planes B y lista previa a publicar |
| `docs/DISENO.md` | Guía de diseño interna (no se sube al repositorio) |
| `docs/POR_HACER.md` | Pendientes internos (no se sube al repositorio) |
