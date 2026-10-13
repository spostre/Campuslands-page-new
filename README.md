# Campuslands – Nueva web

Rediseño del sitio web de Campuslands. Construido con **React 19**, **Vite 6** y **React Router 7** (JavaScript), sin framework de CSS. Bilingüe (español / inglés).

## Ejecutar

Requisitos: Node.js 20 o superior.

```bash
npm install      # instala dependencias (una vez)
npm run dev      # desarrollo en http://localhost:5173
npm run build    # versión final optimizada en dist/
npm run preview  # sirve la versión final para revisarla
```

## Páginas

| Ruta | Página | Estado |
|---|---|---|
| `/` | Inicio | Hecha |
| `/se-un-camper` | Sé un camper | Hecha |
| `/creditos` | Créditos y licencias de terceros | Hecha |
| `/nosotros`, `/servicios/*` | Nosotros, Servicios | "En construcción" |
| cualquier otra | 404 | Hecha |

## Estructura

```
├── index.html            Página base
├── public/
│   ├── favicon.png
│   └── licenses/         Textos de licencia de fuentes y librerías (enlazados desde /creditos)
└── src/
    ├── main.jsx          Arranque (carga estilos globales y monta la app)
    ├── App.jsx           Proveedor de idioma + enrutador
    ├── routes/           Rutas (qué página va en cada URL)
    ├── pages/            Una carpeta por página (Home tiene sus secciones en sections/)
    ├── components/
    │   ├── layout/       Encabezado, pie, logo y estructura común
    │   └── ui/           Piezas reutilizables (botones, mapa, mascota, estrellas…)
    ├── styles/           Tokens de diseño (variables.css) y estilos globales
    ├── i18n/             Textos en español (es.js) e inglés (en.js)
    ├── constants/        URLs externas (links.js) y rutas del menú
    ├── data/             Aliados y sedes
    ├── hooks/            Utilidades de React
    └── assets/           Imágenes, logos de aliados, capturas del mapa y tipografías
```

Alias `@` → `src/` (ej.: `import Button from '@/components/ui/Button'`).

## Cambios frecuentes

| Quiero… | Dónde |
|---|---|
| Cambiar un texto | `src/i18n/es.js` y `src/i18n/en.js` (las palabras entre `*asteriscos*` salen en cursiva destacada) |
| Cambiar a dónde lleva un botón | `src/constants/links.js` |
| Agregar o quitar un aliado | logo en `src/assets/logos/` + lista en `src/data/partners.js` |
| Cambiar una sede o sus coordenadas | `src/data/sedes.js` (y regenerar su captura de respaldo del mapa) |
| Cambiar colores, fuentes o espacios | `src/styles/variables.css` y `src/styles/global.css` |
| Agregar una página | carpeta en `src/pages/` + ruta en `src/routes/AppRoutes.jsx` |

## Recursos de terceros

- **Tipografías** (Hanken Grotesk, Newsreader, Poppins): alojadas en el proyecto, licencia SIL Open Font License 1.1.
- **Mapa de sedes**: Leaflet (BSD-2-Clause) + datos © colaboradores de OpenStreetMap (ODbL). El servicio de mapas de OpenStreetMap no tiene garantía; si falla, el sitio muestra automáticamente una captura del mismo mapa para cada sede.
- **Librerías**: React, React DOM y React Router (MIT).

Créditos y licencias completas: página `/creditos` y carpeta `public/licenses/`.

## Documentación

En `docs/` hay documentación más detallada:

- `ESTRUCTURA.md`: carpetas, archivos y cómo modificarlos.
- `POLITICAS.md`: licencias, privacidad y riesgo de fallas por sección.
- `DISENO.md`: guía de diseño interna.
