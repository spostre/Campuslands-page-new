# Estructura del proyecto – Campuslands (nueva web)

Guía para entender, ejecutar y modificar el proyecto. Las decisiones de diseño están en [DISENO.md](DISENO.md) y las licencias, la privacidad y los riesgos de fallas en [POLITICAS.md](POLITICAS.md).

---

## 1. En pocas palabras

- **Qué es:** el sitio web de Campuslands, rediseñado.
- **Tecnología:** [React 19](https://react.dev) + [Vite 6](https://vite.dev) + [React Router 7](https://reactrouter.com), en JavaScript. Sin framework de CSS: cada componente tiene su propio archivo `.css`.
- **Idiomas:** español e inglés (botón ES/EN en el encabezado).
- **Librerías extra:** [Leaflet](https://leafletjs.com) para el mapa de sedes. Nada más.

### Cómo ejecutarlo

```bash
npm install        # una sola vez (instala dependencias)
npm run dev        # servidor de desarrollo en http://localhost:5173
npm run build      # versión final optimizada, en la carpeta dist/
npm run preview    # sirve la versión final para revisarla
```

Requisitos: Node.js 20 o superior.

---

## 2. Mapa de carpetas

```
Campuslands-new-page/
├── index.html              Página base: título, favicon e idioma inicial
├── package.json            Dependencias y comandos (dev, build, preview)
├── vite.config.js          Configuración de Vite: alias "@" → src/ y carpetas que no vigila
├── jsconfig.json           Hace que el editor entienda el alias "@"
├── .env.example            Plantilla de variables de entorno (copiar a .env)
├── public/               (incluye videos/: videos comprimidos + pósteres)
│   ├── favicon.png         Ícono de la pestaña (el casco del logo)
│   └── licenses/           Textos de licencia de fuentes y librerías (enlazados desde /creditos)
├── docs/                   Documentación: ESTRUCTURA.md (este), POLITICAS.md y DISENO.md (interna)
└── src/                    Todo el código de la página (ver sección 3)
```

**Carpetas locales que no van al repositorio** (están en `.gitignore`): `Content MD/` — material de referencia, todo en un solo lugar: textos originales de cada página (`Whole page/` con los `.md` de cada página y `Whole page/Servicios/`, `Link/Links.md`, `Politicas/`), `vids/`, `logos/` (logos originales de Campuslands y `Empresas/`) e `ideas/` (`ai images/` imágenes generadas con IA, `web pages idea/` capturas de páginas de referencia, `png/` otras imágenes y capturas de WhatsApp) —; además `docs/DISENO.md`, `docs/POR_HACER.md`, `node_modules/` y `dist/`. La página **no depende de ellas**: usa copias procesadas dentro de `src/assets/`.

---

## 3. Dentro de `src/`

```
src/
├── main.jsx                Arranque: carga los estilos globales y monta la app
├── App.jsx                 Envuelve la app con el idioma y el enrutador
├── routes/
│   └── AppRoutes.jsx       Lista de rutas (qué página se ve en cada URL)
├── pages/                  Una carpeta por página
│   ├── Home/
│   │   ├── Home.jsx        Ordena las secciones del inicio
│   │   ├── Home.css        Estilos que afectan a varias secciones (p. ej. la cuadrícula de fondo)
│   │   └── sections/       Una sección = un .jsx + su .css
│   ├── Camper/             Página /se-un-camper, monocromo (.page-mono) (CamperHero, Programs, Stories)
│   ├── About/              Página /nosotros en bandas (AboutHero, Impact + sedesGeo.js, Purpose, Knowledge, AboutStories)
│   ├── Emplea/             Página /servicios/emplea (EmpleaHero + CodeTranslator, TechLeap, Stack, WhyUs + whyImages.js, Companies, EmpleaContact)
│   ├── FullService/        Página /servicios/fullservice (FsHero, FsPhases, FsServices, FsStack, FsClients, FsContact)
│   ├── Global/             Página /servicios/internacional (GlHero con el proceso, GlOrbit, GlModel, GlCompanies)
│   ├── AiAcademy/          Página /servicios/ia-academy (AcHero, AcPain, AcMissions, AcMethod, AcTools, AcStories)
│   ├── Staffing/           Página /servicios/staffing (StHero, StOptions, staffingSymbols.jsx; reutiliza los estilos del panel de GlModel)
│   ├── Billing/            Página /servicios/facturacion (una sola sección; consulta en src/services/billing.js)
│   ├── Legal/              Páginas /politicas-de-privacidad y /terminos-y-condiciones (lector de markdown mínimo)
│   ├── Credits/            Página /creditos: créditos y licencias de terceros
│   ├── ComingSoon/         Página "en construcción" (rutas aún sin diseñar)
│   └── NotFound/           Página 404
├── components/
│   ├── layout/             Partes comunes a todas las páginas
│   └── ui/                 Piezas reutilizables
├── styles/
│   ├── variables.css       Tokens de diseño: colores, fuentes, tamaños, espacios
│   └── global.css          Estilos base, superficies clara/negra y clases compartidas
├── i18n/
│   ├── es.js               Todos los textos en español
│   └── en.js               Los mismos textos en inglés (misma estructura)
├── content/
│   └── legal/              Texto de las políticas (copiado de Content MD/Politicas, sin el menú ni el pie de la web anterior)
├── context/
│   └── LanguageContext.jsx Idioma actual (ES/EN), recordado en el navegador
├── constants/
│   ├── links.js            Todos los destinos de botones: externos (WhatsApp, redes) e internos (servicios, políticas)
│   ├── videos.js           Videos confirmados por sección (archivo y póster en public/videos/)
│   └── navigation.js       Rutas internas del menú y del desplegable de Servicios
├── data/
│   ├── hiringCompanies.js  Empresas que contratan (Emplea): 20 logos, 9 de ellos solo aquí
│   ├── fullServiceClients.js  Clientes de FullService: 10 logos
│   ├── masterclass.js      Próxima masterclass de AI Academy (se edita a mano; instrucciones dentro)
│   ├── techLogos.js        Trazos de logos de tecnologías (Simple Icons, CC0)
│   ├── partners.js         Lista de aliados con su logo
│   └── sedes.js            Sedes del mapa: nombre, ubicación, coordenadas y captura de respaldo
├── hooks/
│   ├── useCountUp.js       Anima una cifra desde 0 (métricas del inicio)
│   ├── useNearViewport.js  Avisa cuando un elemento se acerca a la pantalla (carga tardía)
│   ├── useReveal.js        Animaciones de entrada (una vez, al llegar a la sección); estilos .reveal en global.css
│   └── useFetch.js         Utilidad para pedir datos a una API (aún sin uso)
├── services/
│   └── api.js              Cliente de API basado en VITE_API_URL (aún sin uso)
├── utils/
│   └── format.js           Formato de fechas (aún sin uso)
└── assets/
    ├── images/             Logo, mascota y captura del chat
    │   └── maps/           Capturas del mapa por sede (solo se ven si falla el servicio de mapas)
    ├── logos/              Logos de los aliados (SVG en blanco)
    └── fonts/              Tipografías alojadas en el proyecto + fonts.css (@font-face)
```

### 3.1 `components/layout/` — partes comunes

| Archivo | Función |
|---|---|
| `MainLayout.jsx` | Estructura de toda página: encabezado + contenido + pie + mascota. Vuelve arriba al cambiar de página. |
| `Header.jsx` / `.css` | Encabezado fijo y transparente: menú, desplegable de Servicios, botón Contactar, interruptor de idioma y menú móvil. |
| `Footer.jsx` / `.css` | Pie de página: logo, enlaces legales y redes. |
| `Logo.jsx` | Logo oficial (casco + palabra), enlazado al inicio. |

### 3.2 `components/ui/` — piezas reutilizables

| Archivo | Función |
|---|---|
| `Button.jsx` / `.css` | Botón-enlace en tres estilos: `primary`, `secondary`, `ghost`. Abre los enlaces externos en otra pestaña. |
| `Emph.jsx` | Convierte `'texto *palabra*'` en texto con la palabra en serif cursiva. |
| `Divider.jsx` / `.css` | Iconos decorativos entre secciones (onda, planeta, constelación). |
| `Starfield.jsx` / `.css` | Estrellas animadas de fondo para secciones negras (se pausan fuera de pantalla). |
| `ServiceIcon.jsx` | Íconos de línea con el degradado del logo (servicios y pilares). |
| `MacWindow.jsx` / `.css` | Ventana estilo macOS para mostrar capturas. |
| `SedeMap.jsx` / `.css` | Mapa de sedes (Leaflet + OpenStreetMap, teñido en azul). Se carga solo al acercarse. Si el servicio de mapas falla, cambia solo a la captura. |
| `SedeMapStatic.jsx` | Plan B del mapa: muestra la captura de la sede (sin servicios externos). |
| `Mascot.jsx` / `.css` | Mascota flotante: reacciones, sonidos, gestos y borde reflectivo. |
| `FallingStars.jsx` / `.css` | Estrellas cayendo fijas a la ventana (página Sé un camper). |
| `ScrollMoon.jsx` / `.css` | Luna de fondo que se cierra con el scroll (Rutas de Sé un camper). |
| `SocialIcon.jsx` | Íconos de línea de las redes sociales (reutilizable). |
| `VideoFrame.jsx` / `.css` | Recuadro de video 16:9 reutilizable. |
| `Placeholder.jsx` / `.css` | Espacio reservado para imágenes o videos que aún no existen. |
| `VideoPlayer.jsx` / `.css` | Video real con póster (no se descarga hasta reproducir). Plan B: si falta el archivo, muestra `VideoFrame`. |
| `Snowfall.jsx` / `.css` | Nieve ligera de fondo para secciones claras (canvas, se pausa fuera de pantalla). |
| `TechIcon.jsx` / `.css` | Íconos de tecnologías (Nosotros) a dos tonos, con animación de dibujo al abrir la tarjeta. |

### 3.3 `pages/Home/sections/` — secciones del inicio

| Archivo | Sección |
|---|---|
| `Hero` | Portada: título, botones y métricas de impacto. |
| `Pillars` | ¿Qué aprenden nuestros campers? (cuadros + barras de habilidades). |
| `Services` | Nuestros servicios (mosaico). |
| `Partners` | Aliados (cinta de logos en bucle). |
| `Orbit` | Chatbot Órbit (captura de WhatsApp). |
| `Locations` | Sedes (selector + mapa). |
| `Social` | Redes sociales y video. |

---

## 4. Cómo hacer cambios comunes

### Cambiar un texto
Editar `src/i18n/es.js` y su equivalente en `src/i18n/en.js`. Las palabras entre asteriscos (`*así*`) se muestran en cursiva destacada.

### Cambiar a dónde lleva un botón
Editar la URL en `src/constants/links.js`. Nunca escribir URLs directamente en los componentes. Los enlaces internos empiezan por "/" (el botón navega sin recargar; un ancla como `/servicios/emplea#contacto` baja hasta esa sección). Ya no quedan enlaces a la web anterior.

### Agregar o cambiar un aliado
1. Guardar su logo (SVG o PNG, idealmente en blanco) en `src/assets/logos/`.
2. Importarlo y añadirlo a la lista en `src/data/partners.js`. Sin logo (`logo: null`) se muestra el nombre.

### Cambiar una sede o sus coordenadas
Editar `src/data/sedes.js` (nombre, lugar en ES/EN, `coords: [latitud, longitud]`, `address`). Si cambian las coordenadas o se agrega una sede, **regenerar su captura de respaldo** en `src/assets/images/maps/` (procedimiento en [POLITICAS.md](POLITICAS.md#4-plan-b-del-mapa-captura-de-respaldo)).

### Cambiar colores, fuentes o espacios
Editar los tokens en `src/styles/variables.css`. Los colores por tipo de superficie (clara/negra) están en `src/styles/global.css` (`.surface-light`, `.surface-dark`). Las fuentes están en `src/assets/fonts/` y se declaran en `fonts.css` (importado al inicio de `global.css`); si se agrega una, incluir su licencia en `public/licenses/` y su crédito en /creditos.

### Agregar una página nueva
1. Crear `src/pages/<Página>/<Página>.jsx` (y sus secciones en `sections/` si las tiene).
2. Registrar la ruta en `src/routes/AppRoutes.jsx` (reemplazando `ComingSoon` si ya existía).
3. Si va en el menú, añadirla en `src/constants/navigation.js` y su texto en `i18n` (`nav`).

### Agregar una sección nueva
Seguir la receta de [DISENO.md](DISENO.md#5-receta-para-una-sección-nueva): superficie clara o negra, estrellas si es negra, icono decorativo, etiqueta + título con `Emph`, textos en `i18n`, CSS propio con tokens.

### Quitar la mascota
Borrar `<Mascot />` en `src/components/layout/MainLayout.jsx`.

---

## 5. Convenciones

- **Alias `@`** = `src/` (ej.: `import Button from '@/components/ui/Button'`).
- **Un componente = un `.jsx` + su `.css`** con el mismo nombre, en la misma carpeta.
- **Clases CSS** con estilo BEM simple: `bloque`, `bloque__parte`, `bloque--variante`.
- **Solo tokens** de color/espacio (`var(--accent)`, `var(--section-space)`…), nunca colores sueltos.
- **Orden de estilos:** `global.css` se importa primero en `main.jsx`, así cada componente puede ajustar las reglas generales.
- **Comentarios** en español, explicando el porqué cuando no es obvio.
- **Accesibilidad:** textos alternativos en imágenes con contenido, `aria-hidden` en lo decorativo, foco visible, y respeto a "reducir movimiento".

---

## 6. Dependencias externas

| Recurso | Dónde | Nota |
|---|---|---|
| Tiles de OpenStreetMap | `src/components/ui/SedeMap.jsx` | Único servicio externo en tiempo real. **Sin garantía**; si falla, se muestran las capturas de `src/assets/images/maps/`. Requiere atribución. |

Todo lo demás (tipografías, imágenes, logos, íconos, librerías) está dentro del proyecto. Detalle de licencias y riesgos en [POLITICAS.md](POLITICAS.md).
